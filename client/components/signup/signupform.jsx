Signupform = React.createClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		let data = {};
		data.currentUser = Meteor.user();
		return data;
	},
	getInitialState(){
		return {
			message:'',
			messageClass:''
		}
	},
	displayError(message){
		this.setState({message: message, messageClass: 'alert alert-danger registerError'});
	},
	handleSubmit(e){
		e.preventDefault();
		this.setState({message:'',messageClass:'hidden'});
		var that = this;
		var first_name = ReactDOM.findDOMNode(this.refs.first_name).value.trim();
		var last_name = ReactDOM.findDOMNode(this.refs.last_name).value.trim();
		var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
		var user = {email:email,password:password,profile:{fullname:(first_name + last_name).toLowerCase(),firsname:first_name,lastname:last_name,avatar:'http://placehold.it/150x150',friends:[]}};
		Accounts.createUser(user,function(e){
			if (e) {
      	Materialize.toast('There was an error creating your account', 5000)
      } else {
        FlowRouter.go('/dashboard');
      }
    })
	},
	render(){
		return (
			<div className="row">
				<div className="signup">
					<h1 className="">Sign Up</h1>
					<p className="light">
						It's free and it always will be! That's the FLUX way!
					</p>
				</div>
				<form onSubmit={this.handleSubmit}>

						<div className="input-field col s6">
							<input name="first_name" type="text" ref="first_name" className="validate"/>
							<label htmlFor="first_name">First Name</label>
						</div>
						<div className="input-field col s6">
							<input name="last_name" type="text" ref="last_name" className="validate"/>
							<label htmlFor="last_name">Last Name</label>
						</div>

					<div className="input-field col s12">
						<input name="email" type="email" ref="email" className="validate"/>
						<label htmlFor="email">Email</label>
					</div>
					<div className="input-field col s12">
						<input name="password" type="password" ref="password" className="validate"/>
						<label htmlFor="password">Password</label>
					</div>
					<div className="col s12">
						<button className="btn waves-effect waves-light indigo darken-3" type="submit">
							Sign Up
						</button>
						<span className={this.messageClass}>{this.state.message}</span>
					</div>
				</form>
			</div>
		)
	}
});
