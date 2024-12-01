import { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white p-2">
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <button onClick={() => setIsOpen(false)} className="bg-red-500 text-white p-2">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
