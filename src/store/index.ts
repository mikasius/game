export type Categories = 'Games' | 'MCC' | 'Sport' | 'Cinema';
export type Price = '100' | '200' | '300' | '400' | '500';
export type Type = 'audio' | 'image' | 'text';

export type Question = {
  category: Categories;
  type: Type;
  price: Price;
  question: string;
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
    question: '200?',
    answer: '200!',
  },
  {
    category: 'Sport',
    type: 'image',
    price: '200',
    question: '22?',
    answer: '22!',
  },
];

export const getQuestionsByCategory = (category: Categories): Question[] => {
  return quiz.filter((question) => question.category === category);
};

export const getCategories = () => {};
