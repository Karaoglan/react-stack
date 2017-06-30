import React from 'react';

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    messages: [
      'Hite there, how are you?',
      'fine and you?'
    ]
   };
  }

  render() {
    var messageNodes = this.state.messages.map((message) => {
      return <div key={message.toString()}>{message}</div>;
    });

    return <div>{messageNodes}</div>;
  }
}

export default App;
