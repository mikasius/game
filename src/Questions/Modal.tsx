import Styles from './index.module.scss';
import { FaCcMastercard, FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';
import React, { useState } from 'react';
import { Question } from '../store';
import { QuestionItem } from './Items';
import { Answer } from './Items/Answer';

const modalConfiguration: Partial<Modal.Props> = {
  style: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',

      transform: 'translate(-50%, -50%)',
      borderColor: '#1d2124',

      borderRadius: 10,

      width: '80%',
      height: '70%',

      background: '#1d2124',
    },
    overlay: { backgroundColor: 'rgba(0,0,0,0.8)' },
  },
};

type Props = {
  isVisible: boolean;
  onClose: () => void;
  question: Question;
};

export const QuestModal = (props: Props) => {
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  const showAnswer = () => setIsAnswerShown(true);

  const handleClose = () => {
    setIsAnswerShown(false);
    props.onClose();
  };

  return (
    <Modal {...modalConfiguration} isOpen={props.isVisible}>
      <div className={Styles.modal}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className={Styles.close} onClick={showAnswer}>
            <FaCcMastercard size={32} color={'#ffffff'} />
          </button>
          <button className={Styles.close} onClick={handleClose}>
            <FaTimes size={32} color={'#ffffff'} />
          </button>
        </div>

        <div className={Styles.question}>
          {isAnswerShown ? <Answer {...props} /> : <QuestionItem {...props} />}
        </div>
      </div>
    </Modal>
  );
};
