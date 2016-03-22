Sidebar = React.createClass({
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
          <a href={link.href}><i className={link.icon}></i> {link.text}</a>
        </li>
        )

    });
    return(
      <div className="sidebar-menu col s2 m9">
        <ul>
          <li className="hide-on-med-and-up"><a href="#!"><i className="fa fa-list-alt"></i></a></li>
          <li className="hide-on-med-and-up"><a href="#!">Second Sidebar Link</a></li>
        </ul>

        <ul className="hide-on-small-only">
          {rows}
        </ul>
      </div>
    )
  }
});