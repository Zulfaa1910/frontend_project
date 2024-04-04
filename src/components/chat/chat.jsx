// CustomerChat.js

import React, { useState, useRef } from 'react';
import './chat.css';
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const CustomerChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const messagesRef = useRef(null);

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, type: 'user' }]);
      setNewMessage('');

      // Simulate a response from a customer support agent after a delay
      setTimeout(() => {
        setMessages([...messages, { text: 'Hiiii, Toko Sedang Offline Mohon Menunggu !!!', type: 'agent' }]);
      }, 1000);
    }
  };

  // Scroll to the bottom of the messages container when messages change
  const scrollToBottom = () => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  };

  // Scroll to bottom on initial render and whenever messages change
  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
    <Header/>
    <div className="customer-chat">
      <div className="chat-header">
        <img
          src="path-to-your-profile-image"
          alt="Profile"
          className="profile-image"
        />
        <span className="profile-name">jason willie</span>
      </div>
      <div ref={messagesRef} className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="button-chat" onClick={sendMessage}>Send</button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CustomerChat;
