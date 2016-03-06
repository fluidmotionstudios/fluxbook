Header = React.createClass({
	componentDidMount(){
		$(".button-collapse").sideNav();
	},
	render(){
		return (
			<nav>
				<div className="nav-wrapper indigo darken-3">
					<a href="#!" className="brand-logo">FLUX<span className="light">Book</span></a>
					<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>

						<form className="right hide-on-med-and-down" role="form" id="signin">
							<div className="row">
							<div className="input-field col s4 offset-4">
								<i className="prefix fa fa-user"></i>
								<input type="text" ref="email" id="email" className="validate" placeholder="Email"/>

							</div>
							<div className="input-field col s4 offset-4">
								<i className="prefix fa fa-lock"></i>
								<input type="password" ref="password" id="password" className="validate" placeholder="Password"/>
							</div>
								<div className="col 4 offset-2">
									<button className="btn waves-effect waves-light indigo darken-3" type="submit">
										Log In
									</button>
								</div>

							</div>
						</form>

					<ul className="side-nav" id="mobile-demo">
						<li><a href="sass.html">Sass</a></li>
						<li><a href="badges.html">Components</a></li>
						<li><a href="collapsible.html">Javascript</a></li>
						<li><a href="mobile.html">Mobile</a></li>
					</ul>
				</div>
			</nav>
		)
	}
});