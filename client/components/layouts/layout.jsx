Layout = React.createClass({
	render(){
		return (
			<div className="wrapper">
				<div className="col s12">
					<Navbar/>
					{this.props.sidebar}
					{this.props.content}
				</div>
			</div>
		)
	}
});