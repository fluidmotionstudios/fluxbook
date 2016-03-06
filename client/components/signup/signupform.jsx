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
	handleSubmit(event){
		event.preventDefault();
		return false;
		this.setState({message:'',messageClass:'hidden'});
		var that = this;
		var first_name = ReactDOM.findDOMNode(this.refs.first_name).value.trim();
		var last_name = ReactDOM.findDOMNode(this.refs.last_name).value.trim();
		var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
		var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
		var user = {email:email,password:password,profile:{fullname:(first_name + last_name).toLowerCase(),firsname:first_name,lastname:last_name,avatar:'http://placehold.it/150x150',friends:[]}};
		Accounts.createUser(user,function(event){
			FlowRouter.go('/dashboard');
			if(error){
				that.displayError(e.reason);
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
							<label for="first_name">First Name</label>
						</div>
						<div className="input-field col s6">
							<input name="last_name" type="text" ref="last_name" className="validate"/>
							<label for="last_name">Last Name</label>
						</div>

					<div className="input-field col s12">
						<input name="email" type="email" ref="email" className="validate"/>
						<label for="email">Email</label>
					</div>
					<div className="input-field col s12">
						<input name="password" type="password" ref="password" className="validate"/>
						<label for="password">Password</label>
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