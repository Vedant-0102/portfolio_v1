
import React from 'react';
import { X, Minus, Square } from 'lucide-react';

interface WindowHeaderProps {
  title: string;
  icon: React.ReactNode;
  isMaximizable?: boolean;
  isClosable?: boolean;
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
}

export const WindowHeader: React.FC<WindowHeaderProps> = ({
  title,
  icon,
  isMaximizable = true,
  isClosable = true,
  onMinimize,
  onMaximize,
  onClose
}) => {
  return (
    <div className="window-header h-10 flex items-center justify-between px-4 border-b border-white/20">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-sm font-medium">{title}</h2>
      </div>
      <div className="flex items-center">
        <button
          className="p-1.5 rounded-full hover:bg-gray-200/50 transition-colors"
          onClick={(e) => { e.stopPropagation(); onMinimize(); }}
          aria-label="Minimize"
        >
          <Minus size={14} />
        </button>
        {isMaximizable && (
          <button
            className="p-1.5 rounded-full hover:bg-gray-200/50 transition-colors"
            onClick={(e) => { 
              e.stopPropagation(); 
              onMaximize(); 
            }}
            aria-label="Maximize"
          >
            <Square size={12} />
          </button>
        )}
        {isClosable && (
          <button
            className="p-1.5 rounded-full hover:bg-red-500/80 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            aria-label="Close"
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
};
