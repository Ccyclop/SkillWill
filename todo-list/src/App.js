import NotDoneList from './notDoneList';
import DoneList from './doneList';
import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notDone: [],
      done: [],
    }
  }

  tempValue = ''

  handleChange = (event) => {
    this.tempValue = event.target.value
  }

  handleBtnClick = () => {
    const temp = [...this.state.notDone]
    if (this.tempValue.length !== 0){
      temp.push({
        name: this.tempValue
      })
      this.tempValue = ''
      this.setState({notDone: temp})
    }
  }

  handleComplete = (index) => {
    const doneTmp = [...this.state.done]
    const notDoneTmp = [...this.state.notDone]
    doneTmp.push(this.state.notDone[index])
    notDoneTmp.splice(index,1)
    this.setState({
      notDone: notDoneTmp,
      done: doneTmp
    })
    
  }

  handleRemove = (index) => {
    const tmp = [...this.state.done]
    tmp.splice(index, 1)
    this.setState({
      done: tmp
    })
  }

  render(){
    return (
      <div className='main'>
        <NotDoneList data={this.state.notDone} onComplete = {this.handleComplete} />
        <DoneList data = {this.state.done} onRemove = {this.handleRemove} />
        <div className='input-area'>
          <input type='text' className='inp' onChange={this.handleChange}></input>
          <button className='submit' onClick={this.handleBtnClick}> Add </button>
        </div>
      </div>
    )
  }
}

export default App;
