import React, { useEffect, useState } from 'react';
import { Cell } from './Cell';
import Styles from './index.module.scss';
import { Row } from './Row';
import Modal from 'react-modal';
import { getCategories, getQuestionsByCategory, Question } from '../store';
import { QuestModal } from './Modal';

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

  const openModalWithQuestion = (question: Question) => {
    setIsModalOpened(true);
    setCurrentQuestion(question);
  };

  const closeModal = () => setIsModalOpened(false);

  return (
    <main className={Styles.questions}>
      {categories.map((category) => (
        <Row key={category}>
          <Cell key={category} title={category} style={{ minWidth: '210px' }} />
          {getQuestionsByCategory(category).map((question) => (
            <Cell
              key={`Cinema-${question.price}`}
              question={question}
              onPress={openModalWithQuestion}
            />
          ))}
        </Row>
      ))}

      <QuestModal
        isVisible={isModalOpened}
        onClose={closeModal}
        question={currentQuestion}
      />
    </main>
  );
};
