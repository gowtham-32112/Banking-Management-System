import React, { Component,setState } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
         
      }
    }
    increment()
    {
        this.setState((prevState)=>({count: prevState.count+1}))
    }
    decrement()
    {
      this.setState((prevState)=>({count: prevState.count-1}))
    }
    incrementFive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    decrementFive()
    {
        this.decrement()
        this.decrement()
        this.decrement()
        this.decrement()
        this.decrement()
    }
  render() {
    return (
      <div>
        <center>
            <h1>Count: {this.state.count}</h1>
            <button onClick={()=>this.incrementFive()}>Increment</button>
            <button onClick={()=>this.decrementFive()}>Decrement</button>
        </center>
      </div>
    )
  }
}

export default Counter
