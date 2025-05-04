import React from 'react';
import { Message } from '../types';
import { Cat, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(message.timestamp);

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-lg animate-fadeIn ${
        message.sender === 'bot'
          ? 'bg-gray-800/50 border border-gray-700'
          : 'bg-gray-900/70'
      }`}
    >
      <div className="shrink-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
        {message.sender === 'bot' ? (
          <Cat size={18} className="text-gray-300" />
        ) : (
          <User size={18} className="text-gray-300" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-sm font-medium text-gray-300">
            {message.sender === 'bot' ? 'CatGPT' : 'You'}
          </h3>
          <span className="text-xs text-gray-500">{formattedTime}</span>
        </div>
        <p className="text-gray-200 font-mono">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;