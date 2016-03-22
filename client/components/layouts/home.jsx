Homelayout = React.createClass({
	render(){
		return (
			<div>
				<header>
					<Header/>
				</header>
				<main className="">
					<div className="row">
						<div className="col s5">
							<Featurelist/>
						</div>
						<div className="col s6 offset-s1">
							<Signupform/>
						</div>
					</div>
				</main>
				<div id="toast-container"></div>
			</div>
		)
	}
});