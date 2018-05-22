class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry : '',
    }
  }
  handleTextChange (event) {
    this.setState({ entry: event.target.value });
  }
  render () {
    return (
        <div>
          <input id="textArea" type="text" value={this.state.entry} onChange={(event) => this.handleTextChange(event)} />
          <button id="searchButton" onClick={() => this.props.onClick(this.state.entry)} >{'Go!'}</button>
        </div>
  	)
  }
};


//<form type="text" placeholder={'Search...'}></form>