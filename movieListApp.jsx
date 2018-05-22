class MovieListApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    
    };
  }
  render () {
 
    return (
      <div>
	    <div></div>
	    <div id="listEntry">{this.props.movieEntry.title }</div>
	  </div>
   	);
  }
}

/*
SELECT user.id FROM users  LEFT JOIN my_table2 t2 
 ON t1.my_id = t2.field2 WHERE t1.my_id IN (1,2,3) AND t2.field2 IS NULL

*/