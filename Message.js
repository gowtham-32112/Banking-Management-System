import React, { Component } from 'react'

class Message extends Component {
   constructor(props)
   {
    super()

    this.state={message: 'Welcome to visitor'}
   }
   changeMessage()
   {
    this.setState({message: 'Thank you for subscribing'})
   }
    render() {
    return (
      <div>
        <center>
            <h1>
                {this.state.message}
                
            </h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </center>
      </div>
    )
  }
}

export default Message
