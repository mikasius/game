import React, { useEffect, useState } from 'react';
import { Cell } from './Cell';
import Styles from './index.module.scss';
import { Row } from './Row';
import Modal from 'react-modal';
import {
  getCategories,
  getQuestionsByCategory,
  Question,
  quiz,
} from '../store';
import { QuestModal } from './Modal';

Modal.setAppElement('#root');
const categories = getCategories(quiz);

export const Questions = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [questions, updateQuestions] = useState<Question[]>(quiz);
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    category: 'Про MCC Tomsk',
    price: '100',
    type: 'text',
    question: '',
    answer: '',
    isViewed: false,
  });

  useEffect(() => {}, []);

  const openModalWithQuestion = (question: Question) => {
    setCurrentQuestion(question);
    setIsModalOpened(true);
  };

  const closeModal = () => {
    updateQuestions((prevState) => {
      prevState.filter((question) => {
        if (
          question.price === currentQuestion.price &&
          question.category === currentQuestion.category
        ) {
          return (question.isViewed = true);
        } else {
          return question.isViewed;
        }
      });

      return [...prevState];
    });
    setIsModalOpened(false);
  };

  return (
    <main className={Styles.questions}>
      {categories.map((category) => (
        <Row key={category}>
          <Cell key={category} title={category} style={{ minWidth: '210px' }} />
          {getQuestionsByCategory(questions, category).map((question) => (
            <Cell
              key={`${category}-${question.price}`}
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
