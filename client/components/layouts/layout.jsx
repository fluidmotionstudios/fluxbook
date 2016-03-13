Layout = React.createClass({
	render(){
		return (
			<div>
				<header>
					<Navbar/>
				</header>
				<div className="col s12">
					{this.props.sidebar}
					{this.props.content}
				</div>
			</div>
		)
	}
});
