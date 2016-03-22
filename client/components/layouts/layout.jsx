Layout = React.createClass({
	render(){
		return (
			<div>
				<header>
					<Navbar/>
				</header>
				<main>
					<div className="row">
						<div className="col s2 m4 l3">
							{this.props.sidebar}
						</div>
						<div className="col s10 m8 l9">
							{this.props.content}
						</div>
					</div>
				</main>
			</div>
		)
	}
});
