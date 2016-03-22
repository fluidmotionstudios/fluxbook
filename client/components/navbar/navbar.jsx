Navbar = React.createClass({
	componentDidMount(){
		$(".dropdown-button").dropdown();
		$(".button-collapse").sideNav();
	},
	render(){
		return (
			<div className="navbar-fixed">
				<nav>
					<div className="nav-wrapper indigo darken-3">
						<a href="/" className="brand-logo left">FLUX<span className="light">Book</span></a>
						<ul className="feed-link">
							<li><a href="/dashboard" className=""><i className="fa fa-feed">Home</i></a></li>
						</ul>
						<a href="#" data-activates="mobile-demo" className="right button-collapse"><i className="mdi-navigation-more-vert"></i></a>
						<ul id="dropdown1" className="dropdown-content">
							<li><a href="#!">Michael Williams</a></li>
							<li className="divider"></li>
							<li><a href="#!">Edit Profile</a></li>
							<li className="divider"></li>
							<li><a href="#!">Logout</a></li>
						</ul>
						<ul className="right hide-on-med-and-down">
							<li>
								<form>
									<div className="input-field">
										<input id="search" type="search"/>
										<label htmlFor="search"><i className="mdi-action-search"></i></label><i className="mdi-navigation-close close"></i>
									</div>
								</form>
							</li>
							<li>
								<a className="dropdown-button" href="#!" data-activates="dropdown1"><i className="fa fa-user"> Michael Williams</i><i className="material-icons 	right">arrow_drop_down</i></a>
							</li>
						</ul>

						<ul className="side-nav fixed" id="mobile-demo">
							<li><a href="sass.html">Sass</a></li>
							<li><a href="badges.html">Components</a></li>
							<li><a href="collapsible.html">Javascript</a></li>
							<li><a href="mobile.html">Mobile</a></li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
});
