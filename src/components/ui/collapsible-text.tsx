
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface CollapsibleTextProps {
  text: string;
  maxLines?: number;
}

export const CollapsibleText = ({ text, maxLines = 3 }: CollapsibleTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <p
        className={`${
          !isExpanded ? 'line-clamp-3' : ''
        } text-gray-700 whitespace-pre-line`}
      >
        {text}
      </p>
      {text.split('\n').length > maxLines && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-sm text-primary hover:text-accent transition-colors mt-2"
        >
          {isExpanded ? (
            <>
              Show Less <Minus className="w-4 h-4" />
            </>
          ) : (
            <>
              Show More <Plus className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
};
