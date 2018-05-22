class AddTitle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      entry: ''
    }
  }
  
  textInputHandler(str) {
  	//console.log(str.target.value)
  this.setState({entry:str.target.value});
  }

  render () {

    return (
      <div>
        <input id="textArea" type="text" value={this.state.entry} onChange={(event) => this.textInputHandler(event)} />
        <button id="searchButton" onClick={() => this.props.onClick(this.state.entry)} >{'Add!'}</button>
      </div>
   	)
  }






}
