import _ from 'lodash';

import mccPortalImage from '../assets/images/mcc-portal.png';

export type Categories = 'Games' | 'Про MCC Tomsk' | 'Sport' | 'Cinema';
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
    category: 'Про MCC Tomsk',
    price: '100',
    type: 'text',
    question: 'Назовите городской телефонный номер нашей компании',
    answer: '900-701',
  },
  {
    category: 'Про MCC Tomsk',
    price: '200',
    type: 'text',
    question:
      'Как называется наука, для которой разрабатывается основная часть нашего кода?',
    answer: 'Сомнология',
  },
  {
    category: 'Про MCC Tomsk',
    price: '300',
    type: 'text',
    question: 'Какого числа состоялся наш первый митап?',
    answer: '29 ноября 2018',
  },
  {
    category: 'Про MCC Tomsk',
    price: '400',
    type: 'text',
    question:
      'Почему в качестве основного элемента стиля в МСС используется лабиринт?',
    answer:
      'Потому что наши программисты ищут максимально короткий путь решения задачи и потому что компания может найти выход из любой ситуации',
  },
  {
    category: 'Про MCC Tomsk',
    price: '500',
    type: 'image',
    question: mccPortalImage,
    description: 'Как называется этот раздел в Sharepoint MCC?',
    answer: 'Наши правила',
  },
];

export const getQuestionsByCategory = (category: string): Question[] => {
  return quiz.filter((question) => question.category === category);
};

export const getCategories = (): string[] => {
  const categories = [...quiz].map((question) => question.category);
  return _.uniq(categories);
};
