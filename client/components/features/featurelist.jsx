Featurelist = React.createClass({
	features:[
		{icon:"fa fa-image fa-2x",bigtext:"See photos and updates",littletext:"from friends in News Feed"},
		{icon:"fa fa-share fa-2x",bigtext:"Share what\'s new",littletext:"in your life on your Timeline"},
		{icon:"fa fa-search fa-2x",bigtext:"Find more",littletext:"of what you\'re looking for with FLUXBook Search"}
	],
	render(){
		var rows = this.features.map(function(feature){
			return (
				<li key={feature.icon}>
					<h3 className="btn-flat disabled">


					</h3>
					<span>
						<i className={feature.icon}></i>
					</span>&nbsp;&nbsp;
						<span>
							<strong>{feature.bigtext}</strong>&nbsp;&nbsp;
							<small>{feature.littletext}</small>
						</span>
				</li>
			)
		});
		return (
			<div>
				<h4 className="hide-on-med-and-down col s11">
					Connect with friends and the world around you on FLUXBook.
				</h4>
				<ul className="hide-on-med-and-down">
					{rows}
				</ul>
			</div>
		)
	}
});