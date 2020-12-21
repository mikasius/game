import React from 'react';
import Styles from './index.module.scss';

enum Categories {
  Games,
  MCC,
  Sport,
  Cinema,
}
type Question = {
  price: string;
  question: string;
  answer: string;
};
type QuestionsType = {
  [category: string]: Question[];
};

const questions: QuestionsType = {
  [Categories.Games]: [
    { price: '100', question: '1?', answer: '1!' },
    { price: '200', question: '2?', answer: '2!' },
    { price: '300', question: '3?', answer: '3!' },
    { price: '400', question: '4?', answer: '4!' },
    { price: '500', question: '5?', answer: '5!' },
  ],
  [Categories.MCC]: [
    { price: '100', question: '1?', answer: '1!' },
    { price: '200', question: '2?', answer: '2!' },
    { price: '300', question: '3?', answer: '3!' },
    { price: '400', question: '4?', answer: '4!' },
    { price: '500', question: '5?', answer: '5!' },
  ],
  [Categories.Sport]: [
    { price: '100', question: '1?', answer: '1!' },
    { price: '200', question: '2?', answer: '2!' },
    { price: '300', question: '3?', answer: '3!' },
    { price: '400', question: '4?', answer: '4!' },
    { price: '500', question: '5?', answer: '5!' },
  ],
  [Categories.Cinema]: [
    { price: '100', question: '1?', answer: '1!' },
    { price: '200', question: '2?', answer: '2!' },
    { price: '300', question: '3?', answer: '3!' },
    { price: '400', question: '4?', answer: '4!' },
    { price: '500', question: '5?', answer: '5!' },
  ],
};

export const Questions = () => {
  const questionsMapped = Object.values(questions);

  return (
    <main className={Styles.questions}>
      {questionsMapped.map((category, index) => (
        <div
          style={{
            border: 1,
            borderColor: 'tomato',
            borderStyle: 'solid',
            marginTop: 16,
            marginBottom: 16,
          }}
        >
          <b
            style={{
              display: 'inline-block',
              minWidth: 70,
              paddingRight: 16,
              textAlign: 'right',
            }}
          >
            {Categories[index]}
          </b>
          {category.map((question) => (
            <div style={{ display: 'inline-block' }}>
              <div style={{ padding: 16 }}>{question.price}</div>
              <div style={{ display: 'none' }}>{question.question}</div>
              <div style={{ display: 'none' }}>{question.answer}</div>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
};
