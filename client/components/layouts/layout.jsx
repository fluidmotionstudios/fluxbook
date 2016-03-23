Layout = React.createClass({
	render(){
		return (
			<div>
				<header>
					<Navbar/>
				</header>
				<main>
					<div className="row">
						<div className="col s10 m8 l9 push-s3 push-m4 push-l3">
							{this.props.content}
						</div>
					</div>
				</main>
			</div>
		)
	}
});
