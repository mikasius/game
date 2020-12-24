import _ from 'lodash';

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
    category: 'MCC',
    price: '200',
    type: 'text',
    question:
      'Как называется наука, для которой разрабатывается основная часть нашего кода?',
    answer: 'Сомнология',
  },
];

export const getQuestionsByCategory = (category: string): Question[] => {
  return quiz.filter((question) => question.category === category);
};

export const getCategories = (): string[] => {
  const categories = [...quiz].map((question) => question.category);
  return _.uniq(categories);
};
