import _ from 'lodash';

import catImage from '../assets/images/cat.jpg';
import music from '../assets/audio/music.mp3';

export type Categories = 'Games' | 'MCC' | 'Sport' | 'Cinema';
export type Price = '100' | '200' | '300' | '400' | '500';
export type Type = 'audio' | 'image' | 'text';

export type Question = {
  category: Categories;
  type: Type;
  price: Price;
  question: string;
  description?: string;
  answer: string;
};

export const quiz: Question[] = [
  {
    category: 'Cinema',
    type: 'text',
    price: '100',
    question: '1?',
    answer: '1!',
  },
  {
    category: 'Cinema',
    type: 'text',
    price: '200',
    question: '2?',
    answer: '2!',
  },
  {
    category: 'Cinema',
    type: 'text',
    price: '300',
    question: '3?',
    answer: '3!',
  },
  {
    category: 'Games',
    type: 'text',
    price: '400',
    question: '400?',
    answer: '400!',
  },
  {
    category: 'MCC',
    type: 'audio',
    price: '300',
    question: music,
    description: 'Let`s rock!',
    answer: '200!',
  },
  {
    category: 'Sport',
    type: 'image',
    price: '200',
    question: catImage,
    description: 'Sho ce take?',
    answer: '22!',
  },
];

export const getQuestionsByCategory = (category: string): Question[] => {
  return quiz.filter((question) => question.category === category);
};

export const getCategories = (): string[] => {
  const categories = [...quiz].map((question) => question.category);
  return _.uniq(categories);
};
