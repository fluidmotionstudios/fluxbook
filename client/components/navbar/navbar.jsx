Navbar = React.createClass({
	render(){
		return (
			<div className="navbar navbar-blue navbar-fixed-top">
				<div className="navbar-header">
					<button type="button" data-toggle="collapse" data-target="navbar" className="navbar-toggle">
						<span className="sr-only"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a href="/dashboard" className="navbar-brand logo">
						<i className="fa fa-facebook"></i>
					</a>
				</div>
				<nav className="collapse navbar-collapse">
					<form role="form" className="navbar-form navbar-left">
						<div className="form-group form-group-sm bs-example">
							<input ref="searchText" id="typeahead" type="text" className="form-control tt-query"/>

						</div>
							<button type="submit" className="btn btn-default">
								<i className="fa fa-search"></i>
							</button>
					</form>
					<ul className="nav navbar-nav">
						<li>
							<a href="/dashboard"><i className="fa fa-home"></i><span className="feed-link">News Feed</span></a>
						</li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<li className="dropdown">
							<a data-toggle="dropdown" href="#" className="dropdown-toggle">
								<i className="fa fa-user"><span className="user-link">Michael Williams</span></i>
							</a>
							<ul className="dropdown-menu">
								<li><a href="/profile">Edit Profile</a></li>
								<li><a href="/signout">Logout</a></li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
});