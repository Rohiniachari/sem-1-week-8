// WebSocketComponent.js
import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('wss://echo.websocket.org'); // Example WebSocket URL

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    socket.onopen = () => {
      socket.send('Hello WebSocket!');
    };

    // Cleanup WebSocket connection
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Messages:</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketComponent;
