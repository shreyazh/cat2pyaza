import React from 'react';
import { Cat } from 'lucide-react';

const ChatHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-6 border-b border-gray-800">
      <div className="flex items-center gap-2">
        <Cat className="w-8 h-8 text-gray-100" />
        <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300">
          Cat2Pyaza
        </h1>
      </div>
      <p className="text-xs text-gray-400 mt-1 font-light">
        Created By Shreyash Srivastva
      </p>
    </div>
  );
};

export default ChatHeader;