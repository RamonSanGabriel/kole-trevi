import css from './VideoModal.module.css';
import { useState } from 'react';

const VideoModal = ({ onClose, isOpen, toggleModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    toggleModal();
  };

  return (
    <div className={css.modalWrapper}>
      <button
        style={{ width: '20px', height: '20px' }}
        onClick={handleModalToggle}
      >
        {isModalOpen ? 'Close' : 'Open'}
      </button>
      <button
        className={css.modalClose}
        onClick={() => {
          onClose();
          setIsModalOpen(false);
        }}
      >
        X
      </button>
    </div>
  );
};
