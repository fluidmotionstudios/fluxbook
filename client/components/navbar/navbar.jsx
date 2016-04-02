Navbar = React.createClass({
	componentDidMount(){
		$(".dropdown-button").dropdown();
		$(".button-collapse").sideNav();
	},
	links: [
		{_id:1,href:'/profile',icon:'fa fa-user fa-2x',text:'Profile'},
		{_id:2,href:'/dashboard',icon:'fa fa-rss fa-2x',text:'News Feed'},
		{_id:3,href:'/messages',icon:'fa fa-comment fa-2x',text:'Messages'},
		{_id:4,href:'/friends',icon:'fa fa-users fa-2x',text:'Friends'}
	],
	render(){
		var rows = this.links.map(function(link){
			return (
				<li key={link._id}>
					<a className="waves-effect waves-light" href={link.href}><i className={link.icon}></i> {link.text}</a>
				</li>
			)

		});
		return (
			<div className="navbar-fixed">
				<nav>
					<div className="nav-wrapper indigo darken-3">
						<a href="/" className="brand-logo left">FLUX<span className="light">Book</span></a>
						<ul className="feed-link">
							<li><a href="/dashboard" className=""><i className="fa fa-feed"> Home</i></a></li>
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
							{rows}
						</ul>
					</div>
				</nav>
			</div>
		)
	}
});
