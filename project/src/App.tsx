import React from 'react';
import ChatContainer from './components/ChatContainer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black text-gray-200">
      <div className="container mx-auto px-4 flex-1 flex flex-col py-4">
        <ChatContainer />
      </div>
    </div>
  );
}

export default App;