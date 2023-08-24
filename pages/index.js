import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export default function Home() {
  const [message, setMessage] = useState('');
  const [receivedMessages, setReceivedMessages] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', message);
    setMessage('');
  };

  useEffect(() => {
    socket.on('message', (message) => {
      setReceivedMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        <div>
          {receivedMessages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
        <form onSubmit={handleMessageSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}