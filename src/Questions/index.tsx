import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Cell } from './Cell';
import Styles from './index.module.scss';
import { Row } from './Row';
import Modal from 'react-modal';

enum Categories {
  Games = 'Games',
  MCC = 'MCC',
  Sport = 'Sport',
  Cinema = 'Cinema',
}
export type Question = {
  id: string;
  price: string;
  question: string;
  answer: string;
};
type Quiz = {
  [category: string]: Question[];
};

const quiz: Quiz = {
  [Categories.Games]: [
    { id: uuid(), price: '100', question: '1?', answer: '1!' },
    { id: uuid(), price: '200', question: '2?', answer: '2!' },
    { id: uuid(), price: '300', question: '3?', answer: '3!' },
    { id: uuid(), price: '400', question: '4?', answer: '4!' },
    { id: uuid(), price: '500', question: '5?', answer: '5!' },
  ],
  [Categories.MCC]: [
    { id: uuid(), price: '100', question: '1?', answer: '1!' },
    { id: uuid(), price: '200', question: '2?', answer: '2!' },
    { id: uuid(), price: '300', question: '3?', answer: '3!' },
    { id: uuid(), price: '400', question: '4?', answer: '4!' },
    { id: uuid(), price: '500', question: '5?', answer: '5!' },
  ],
  [Categories.Sport]: [
    { id: uuid(), price: '100', question: '1?', answer: '1!' },
    { id: uuid(), price: '200', question: '2?', answer: '2!' },
    { id: uuid(), price: '300', question: '3?', answer: '3!' },
    { id: uuid(), price: '400', question: '4?', answer: '4!' },
    { id: uuid(), price: '500', question: '5?', answer: '5!' },
  ],
  [Categories.Cinema]: [
    { id: uuid(), price: '100', question: '1?', answer: '1!' },
    { id: uuid(), price: '200', question: '2?', answer: '2!' },
    { id: uuid(), price: '300', question: '3?', answer: '3!' },
    { id: uuid(), price: '400', question: '4?', answer: '4!' },
    { id: uuid(), price: '500', question: '5?', answer: '5!' },
  ],
};

Modal.setAppElement('#root');

export const Questions = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {}, []);

  const openQuestion = (id: string) => {
    const keys = Object.keys(quiz).map((value, index) => value);
    console.log(keys);
    console.log(id);
  };

  return (
    <main className={Styles.questions}>
      {Object.values(quiz).map((questions, index) => (
        <Row key={index}>
          {questions.map((question, index) => (
            <Cell key={index} question={question} onPress={openQuestion} />
          ))}
        </Row>
      ))}

      <Modal isOpen={false} style={{ content: { background: 'tomato' } }}>
        <p>Some modal stuff</p>
      </Modal>
    </main>
  );
};
