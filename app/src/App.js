import Ad from './contentBlocks/Ad';
import './App.css';

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
    ID: 0,
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
        name: 'Ерроутаун '
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
  }
]


function App() {
  return (
    <div className="App">
      {Ads.map(ad => {
        return <Ad props={ad} />
      })}
    </div>
  );
}

export default App;
