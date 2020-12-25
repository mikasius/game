import _ from 'lodash';

import mccPortalImage from '../assets/images/mcc-portal.png';
import programmingLanguageImage from '../assets/images/programmingLanguage.png';
import bigStrangeThing from '../assets/images/someBigThing.jpg';

export type Categories =
  | 'Информатика (6+)'
  | 'Информатика (18+)'
  | 'Про MCC Tomsk'
  | 'Афоризмы в IT';
export type Price = '100' | '200' | '300' | '400' | '500';
export type Type = 'audio' | 'image' | 'text';

export type Question = {
  category: Categories;
  type: Type;
  price: Price;
  question: string;
  description?: string;
  answer: string;
  isViewed: boolean;
};

export const quiz: Question[] = [
  {
    category: 'Про MCC Tomsk',
    price: '100',
    type: 'text',
    question: 'Назовите городской телефонный номер нашей компании',
    answer: '900-701',
    isViewed: false,
  },
  {
    category: 'Про MCC Tomsk',
    price: '200',
    type: 'text',
    question:
      'Как называется наука, для которой разрабатывается основная часть нашего кода?',
    answer: 'Сомнология',
    isViewed: false,
  },
  {
    category: 'Про MCC Tomsk',
    price: '300',
    type: 'text',
    question: 'Какого числа состоялся наш первый митап?',
    answer: '29 ноября 2018',
    isViewed: false,
  },
  {
    category: 'Про MCC Tomsk',
    price: '400',
    type: 'text',
    question:
      'Почему в качестве основного элемента стиля в МСС используется лабиринт?',
    answer:
      'Потому что наши программисты ищут максимально короткий путь решения задачи и потому что компания может найти выход из любой ситуации',
    isViewed: false,
  },
  {
    category: 'Про MCC Tomsk',
    price: '500',
    type: 'image',
    question: mccPortalImage,
    description: 'Как называется этот раздел в Sharepoint MCC?',
    answer: 'Наши правила',
    isViewed: false,
  },
  {
    category: 'Информатика (6+)',
    price: '100',
    type: 'text',
    question: 'Ни окон, ни дверей, полна горница людей',
    answer: 'Чат',
    isViewed: false,
  },
  {
    category: 'Информатика (6+)',
    price: '200',
    type: 'text',
    question: 'Стоит Антошка на одной ножке',
    answer: 'Монитор',
    isViewed: false,
  },
  {
    category: 'Информатика (6+)',
    price: '300',
    type: 'text',
    question: '«Семь бед – один ...»',
    description:
      'Закончите переделанную программистами на свой лад известную русскую пословицу',
    answer: 'Reset',
    isViewed: false,
  },
  {
    category: 'Информатика (6+)',
    price: '400',
    type: 'text',
    question: 'Почему кошки очень любят лизать руки программистам?',
    answer: 'Потому что их руки пахнут мышкой',
    isViewed: false,
  },
  {
    category: 'Информатика (6+)',
    price: '500',
    type: 'text',
    question: 'Петька, жадина, не дал\nОткусить конфету!\nЯ ему за это дам...',
    description: 'Дополните стишок',
    answer: '...с вирусом дискету',
    isViewed: false,
  },
  {
    category: 'Информатика (18+)',
    price: '100',
    type: 'text',
    question: 'Кто был автором первого отечественного антивируса?',
    answer: 'Дмитрий Лозинский',
    isViewed: false,
  },
  {
    category: 'Информатика (18+)',
    price: '200',
    type: 'image',
    question: programmingLanguageImage,
    description: 'Что это за язык программирования?',
    answer:
      'Рапира — один из языков учебной системы программирования.\nВходил в состав интегрированной программной среды «Школьница»',
    isViewed: false,
  },
  {
    category: 'Информатика (18+)',
    price: '300',
    type: 'text',
    question:
      '6 ноября 1950.\nПробный пуск Малой электронно-счётной машины.\nСколько требовалось места для размещения?',
    answer: '60 кв.м.\nПримерно как стандартный школьный класс',
    isViewed: false,
  },
  {
    category: 'Информатика (18+)',
    price: '400',
    type: 'image',
    question: bigStrangeThing,
    description: 'Что изображено на фотографии?',
    answer:
      'Гидравлический интегратор Лукьянова — аналоговый компьютер, для решения дифференциальных уравнений',
    isViewed: false,
  },
  {
    category: 'Информатика (18+)',
    price: '500',
    type: 'text',
    question: 'Почему День информатики в России празднуют 4 декабря?',
    answer:
      '4 декабря 1948 года Исаак Семенович Брук и Башир Искандарович Рамеев получили авторское свидетельство на ЦЭВМ',
    isViewed: false,
  },
  {
    category: 'Афоризмы в IT',
    price: '100',
    type: 'text',
    question:
      'Дополните высказывание Стива Джобса «Сегодня ты делаешь код, завтра код делает тебе ___________»',
    answer: '«Сегодня ты делаешь код, завтра код делает тебе `деньги`»',
    isViewed: false,
  },
  {
    category: 'Афоризмы в IT',
    price: '200',
    type: 'text',
    question:
      'Дополните высказывание Билла Гейтса «Аккуратный программист — ___________ программист»',
    answer: '«Аккуратный программист — `быстрый` программист»',
    isViewed: false,
  },
  {
    category: 'Афоризмы в IT',
    price: '300',
    type: 'text',
    question:
      'Дополните высказывание Гейба Логана Ньюэлла «Чтобы понять код мидла, нужно быть мидлом. Чтобы понять код сеньора, достаточно быть ___________»',
    answer:
      '«Чтобы понять код мидла, нужно быть мидлом. Чтобы понять код сеньора, достаточно быть `джуном`»',
    isViewed: false,
  },
  {
    category: 'Афоризмы в IT',
    price: '400',
    type: 'text',
    question:
      'Дополните высказывание Брендана Эйха «Прежде, чем начать сеанс парного программирования, уберите из комнаты все ___________ ___________»',
    answer:
      '«Прежде, чем начать сеанс парного программирования, уберите из комнаты все `острые предметы`»',
    isViewed: false,
  },
  {
    category: 'Афоризмы в IT',
    price: '500',
    type: 'text',
    question:
      'Дополните известное высказывание Бьёрна Страуструпа «Есть всего два типа языков программирования: те, на которые люди всё время ругаются, и те, которые ___________ ___________ ___________»',
    answer:
      '«Есть всего два типа языков программирования: те, на которые люди всё время ругаются, и те, которые `никто не использует`»',
    isViewed: false,
  },
];

export const getQuestionsByCategory = (
  quiz: Question[],
  category: string
): Question[] => {
  return quiz.filter((question) => question.category === category);
};

export const getCategories = (quiz: Question[]): string[] => {
  const categories = [...quiz].map((question) => question.category);
  return _.uniq(categories);
};
