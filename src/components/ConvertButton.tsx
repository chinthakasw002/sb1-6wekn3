import React from 'react';

interface ConvertButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const ConvertButton: React.FC<ConvertButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      className={`mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      Convert Image
    </button>
  );
};

export default ConvertButton;