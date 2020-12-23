import React, { useEffect, useState } from 'react';
import { Cell } from './Cell';
import Styles from './index.module.scss';
import { Row } from './Row';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import {
  Categories,
  getCategories,
  getQuestionsByCategory,
  quiz,
} from '../store';

Modal.setAppElement('#root');

export const Questions = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  useEffect(() => {}, []);

  const openQuestion = (id: string) => {
    setIsModalOpened(true);
  };

  getCategories();

  return (
    <main className={Styles.questions}>
      {/*{ => (*/}
      {/*  <Row key={index}>*/}
      {/*    <Cell*/}
      {/*      key={index}*/}
      {/*      onPress={() => {}}*/}
      {/*      question={{ id: '', price: '', answer: '', question: '' }}*/}
      {/*    >*/}
      {/*      <p>Stuff Stuff</p>*/}
      {/*    </Cell>*/}
      {/*    {questions.map((question, index) => (*/}
      {/*      <Cell key={index} question={question} onPress={openQuestion} />*/}
      {/*    ))}*/}
      {/*  </Row>*/}
      {/*))}*/}

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
        <button
          style={{ background: 'transparent', border: 'none' }}
          onClick={() => setIsModalOpened(false)}
        >
          <FaTimes size={32} color={'#ffffff'} />
        </button>
        <p>Some modal stuff</p>
      </Modal>
    </main>
  );
};
