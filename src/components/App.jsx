import React from 'react';
import MessageList from './MessageList.jsx';

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
    return <MessageList />;
  }
}

export default App;
