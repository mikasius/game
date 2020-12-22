import React  from 'react';
import { v4 as uuid } from 'uuid';
import { Cell } from './Cell';
import Styles from './index.module.scss';
import { Row } from './Row';

enum Categories {
  Games = 'Games',
  MCC = 'MCC',
  Sport = 'Sport',
  Cinema = 'Cinema',
}
type Question = {
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

export const Questions = () => {
  const openQuestion = (id: string) => {
    console.log(id);
  };

  return (
    <main className={Styles.questions}>
      {Object.values(quiz).map((questions, index) => (
        <Row key={index}>
          {questions.map((question, index) => (
            <Cell key={index}/>
          ))}
        </Row>
      ))}
      {/*{questionsMappedKey.map((category) => (*/}
      {/*  <div*/}
      {/*    style={{*/}
      {/*      border: 1,*/}
      {/*      borderColor: 'tomato',*/}
      {/*      borderStyle: 'solid',*/}
      {/*      marginTop: 16,*/}
      {/*      marginBottom: 16,*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <b*/}
      {/*      style={{*/}
      {/*        display: 'inline-block',*/}
      {/*        minWidth: 70,*/}
      {/*        paddingRight: 16,*/}
      {/*        textAlign: 'right',*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      {category}*/}
      {/*    </b>*/}
      {/*    {Object.values(questions).map((question) => (*/}
      {/*      <div style={{ display: 'inline-block' }}>*/}
      {/*        <div style={{ padding: 16 }}>*/}
      {/*          <button onClick={() => openQuestion(3)} style={{}}>*/}
      {/*            {question}*/}
      {/*          </button>*/}
      {/*        </div>*/}
      {/*        <div style={{ display: 'none' }} datatype={'3'}>*/}
      {/*          {question.question}*/}
      {/*        </div>*/}
      {/*        <div style={{ display: 'none' }}>{question.answer}</div>*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*))}*/}
    </main>
  );
};
