// src/FloatingEmojis.jsx
import React, { useEffect } from 'react';
import './FloatingEmojis.css';

const emojis = ['🐶', '🤖', '🦮', '🐾', '👨🏻‍🦽‍➡️'];

const FloatingEmojis = () => {
  useEffect(() => {
    const addEmoji = () => {
      const emoji = document.createElement('div');
      emoji.className = 'emoji';
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.animationDuration = Math.random() * 2 + 3 + 's';
      document.body.appendChild(emoji);

      setTimeout(() => {
        emoji.remove();
      }, 5000);
    };

    const interval = setInterval(addEmoji, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default FloatingEmojis;
