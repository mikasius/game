import React, { useEffect, useState } from 'react';
import { Cell } from './Cell';
import Styles from './index.module.scss';
import { Row } from './Row';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { getCategories, getQuestionsByCategory, Question } from '../store';

Modal.setAppElement('#root');
const categories = getCategories();

export const Questions = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    category: 'MCC',
    price: '100',
    type: 'text',
    question: '',
    answer: '',
  });

  useEffect(() => {}, []);

  const openQuestion = (question: Question) => {
    setIsModalOpened(true);
    setCurrentQuestion(question);
  };

  return (
    <main className={Styles.questions}>
      {categories.map((category) => (
        <Row key={category}>
          <Cell key={category} title={category} style={{ minWidth: '210px' }} />
          {getQuestionsByCategory(category).map((question) => (
            <Cell
              key={`Cinema-${question.price}`}
              question={question}
              onPress={openQuestion}
            />
          ))}
        </Row>
      ))}

      <Modal
        isOpen={isModalOpened}
        style={{
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
            height: '80%',

            background: '#1d2124',
          },
          overlay: { backgroundColor: 'rgba(0,0,0,0.8)' },
        }}
      >
        <div className={Styles.modal}>
          <button
            className={Styles.close}
            onClick={() => setIsModalOpened(false)}
          >
            <FaTimes size={32} color={'#ffffff'} />
          </button>
          <div className={Styles.question}>
            <p>{currentQuestion.question}</p>
          </div>
        </div>
      </Modal>
    </main>
  );
};
