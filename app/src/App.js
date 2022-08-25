import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdsBlock from './contentBlocks/AdsBlock';

const Filters = [
  {
    id: 0,
    title: 'Тип виробів',
    options: [
      {
        id: 0,
        title: 'Шпагат, шнури, мотузки'
      },
      {
        id: 1,
        title: 'Кільця, намистини'
      },
      {
        id: 2,
        title: 'Джут'
      },
    ]
  },
  {
    id: 1,
    title: 'Склад',
    options: [
      {
        id: 3,
        title: 'Бавовна'
      },
      {
        id: 4,
        title: 'Синтетика'
      },
      {
        id: 5,
        title: 'Із сердечником'
      },
    ]
  },
  {
    id: 2,
    title: 'Діаметр',
    options: [
      {
        id: 6,
        title: '3 мм'
      },
      {
        id: 7,
        title: '4 мм'
      },
      {
        id: 8,
        title: '4,5 мм'
      },
      {
        id: 9,
        title: '5 мм'
      },
    ]
  },
  {
    id: 3,
    title: 'Виробник',
    options: [
      {
        id: 10,
        title: 'Mactametr'
      },
      {
        id: 11,
        title: 'Arachna'
      },
      {
        id: 12,
        title: 'Norway'
      },
    ]
  },
]

const Ads = [
  {
    ID: 0,
    title: 'Шпагат Macrametr 4 мм, 100 ниток',
    prefered: true,
    image: './assets/image.png',
    colors: [
      {
        id: 0,
        hex: '696837',
        name: 'Жовтий метал'
      },
      {
        id: 1,
        hex: '81292F',
        name: 'Умбра спалена'
      },
      {
        id: 2,
        hex: 'D8C1AA',
        name: 'Акароа'
      },
      {
        id: 3,
        hex: 'EED53A',
        name: 'Золота Мрія'
      },
      {
        id: 4,
        hex: '0395AF',
        name: 'Бонді Блю'
      },
      {
        id: 5,
        hex: 'F09482',
        name: 'Абрикос'
      },
      {
        id: 6,
        hex: '5484ac',
        name: 'Веджвуд'
      },
      {
        id: 7,
        hex: 'dfdfdf',
        name: 'Альт'
      },
      {
        id: 8,
        hex: '5d5d5d',
        name: 'Скорпіон'
      }
    ],
    oldPrice: {
      value: 50,
      currencyCode: 'UAH'
    },
    price: {
      value: 40,
      currencyCode: 'UAH'
    }
  },
  {
    ID: 1,
    title: 'Шпагат джутовий Сібшнур 500 м',
    prefered: false,
    image: './assets/image1.png',
    colors: [
      {
        id: 0,
        hex: 'B69882',
        name: 'Мангуст'
      },
      {
        id: 1,
        hex: 'CFBBAC',
        name: 'Ваніль'
      },
      {
        id: 2,
        hex: '9D856B',
        name: 'Ерроутаун'
      },
    ],
    oldPrice: {
      value: 350,
      currencyCode: 'UAH'
    },
    price: {
      value: 300,
      currencyCode: 'UAH'
    }
  },
  {
    ID: 2,
    title: 'Пряжа Norway 100гр - 105м YarnArt',
    prefered: false,
    image: './assets/image6.png',
    colors: [
      {
        id: 0,
        hex: '0B8243',
        name: 'Салем'
      },
      {
        id: 1,
        hex: '1422B7',
        name: 'Перський блакитний'
      },
      {
        id: 2,
        hex: '44AFDF',
        name: 'Піктон блакитний '
      },
      {
        id: 3,
        hex: 'E7D361',
        name: 'Конфетті'
      },
      {
        id: 4,
        hex: 'EF6A47',
        name: 'Спалена Сієнна'
      },
      {
        id: 5,
        hex: 'F768E2',
        name: 'Рожевий фламінго'
      },
      {
        id: 6,
        hex: 'FC6B78',
        name: 'Рожевий'
      },
    ],
    oldPrice: null,
    price: {
      value: 57,
      currencyCode: 'UAH'
    }
  },
  {
    ID: 3,
    title: 'Пряжа Norway 50гр - 160м YarnArt Jeans',
    prefered: false,
    image: './assets/image7.png',
    colors: [
      {
        id: 0,
        hex: '1A3A8C',
        name: 'Ультрамарин'
      },
      {
        id: 1,
        hex: '9378AE',
        name: 'Лаванда'
      },
      {
        id: 2,
        hex: 'C48528',
        name: 'Гірчиця'
      },
      {
        id: 3,
        hex: 'B0A081',
        name: 'Темно-біжевий'
      },
      {
        id: 4,
        hex: 'D7BDBC',
        name: 'Світло-рожевий'
      },
      {
        id: 5,
        hex: 'ACD1CC',
        name: 'Світла бірюза'
      },
      {
        id: 6,
        hex: 'E4CDCD',
        name: 'Ніжно-рожевий'
      },
      {
        id: 7,
        hex: 'D1A89D',
        name: 'Пудровий'
      },
      {
        id: 8,
        hex: 'BA4968',
        name: 'Темно-рожевий'
      },
      {
        id: 9,
        hex: 'ACD1CC',
        name: 'Світла бірюза'
      },
      {
        id: 10,
        hex: 'E4CDCD',
        name: 'Ніжно-рожевий'
      },
      {
        id: 11,
        hex: 'D1A89D',
        name: 'Пудровий'
      },
      {
        id: 12,
        hex: 'BA4968',
        name: 'Темно-рожевий'
      },
    ],
    oldPrice: null,
    price: {
      value: 80,
      currencyCode: 'UAH'
    }
  },
  {
    ID: 4,
    title: 'Пряжа Norway 50гр - 160м YarnArt Jeans',
    prefered: false,
    image: './assets/image4.png',
    colors: [
      {
        id: 0,
        hex: '1A3A8C',
        name: 'Ультрамарин'
      },
      {
        id: 1,
        hex: '9378AE',
        name: 'Лаванда'
      },
      {
        id: 2,
        hex: 'C48528',
        name: 'Гірчиця'
      },
      {
        id: 3,
        hex: 'B0A081',
        name: 'Темно-біжевий'
      },
      {
        id: 4,
        hex: 'D7BDBC',
        name: 'Світло-рожевий'
      },
      {
        id: 5,
        hex: 'ACD1CC',
        name: 'Світла бірюза'
      },
      {
        id: 6,
        hex: 'E4CDCD',
        name: 'Ніжно-рожевий'
      },
      {
        id: 7,
        hex: 'D1A89D',
        name: 'Пудровий'
      },
      {
        id: 8,
        hex: 'BA4968',
        name: 'Темно-рожевий'
      },
      {
        id: 9,
        hex: 'ACD1CC',
        name: 'Світла бірюза'
      },
      {
        id: 10,
        hex: 'E4CDCD',
        name: 'Ніжно-рожевий'
      },
      {
        id: 11,
        hex: 'D1A89D',
        name: 'Пудровий'
      },
      {
        id: 12,
        hex: 'BA4968',
        name: 'Темно-рожевий'
      },
    ],
    oldPrice: {
      value: 95
    },
    price: {
      value: 72,
      currencyCode: 'UAH'
    }
  },

]


function App() {

  

  return (
    <div className="App">
      <AdsBlock ads={Ads} filters={Filters} />
    </div>
  );
}

export default App;
