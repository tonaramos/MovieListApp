class MovieList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movieArray: []
    };
  }
  searchHandler (str) {
    console.log('this props',this.props)
    let filterQueryMatch = this.state.movieArray.filter( movie => movie.title.includes(str) );
    if (filterQueryMatch.length === 0) {
      filterQueryMatch = [{title: 'no movie by that name found...'}];
    }
    this.setState({movieArray:filterQueryMatch});
  }
  addHandler (str) {
     let newTitle = {title:str};
     this.state.movieArray.push(newTitle);
     this.setState(this.state);
     
  }
  render() {
    const listMovies = this.state.movieArray.map((entry, i) =>  <MovieListApp movieEntry={entry} key={i} /> )
    console.log(this.state.movieArray);
      return (
        <div>
          <div>
            <div id="title">{"Movie List App!"}</div>
          </div>
          <div>
            <AddTitle id="AddTitle" onClick={(title) => this.addHandler(title)}/>
            <SearchBar id="searchBar" onClick={(query) => this.searchHandler(query)}  />  
          </div>
          <div id="movieListBoard">
            <div>{listMovies}</div>
          </div>  
        </div>
      )
  }
}

        