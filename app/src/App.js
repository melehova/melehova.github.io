import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdsBlock from './contentBlocks/AdsBlock';
import Header from './contentBlocks/Header';
import React from 'react';




class App extends React.Component {
  constructor() {
    super()
    this.state = {
      headerProps: {
        headerInfo: [
          {
            id: 0,
            value: '+38 (044) 44 44 444',
            iconName: '/assets/icons/phone.svg'
          },
          {
            id: 1,
            value: 'площа Перемоги, 3, Київ, Украина, 01135',
            iconName: '/assets/icons/map-pin.svg'
          },
          {
            id: 2,
            value: 'Щоденно з 10:00 до 19:00',
            iconName: '/assets/icons/clock.svg'
          }
        ],
        leftBar: [
          {
            id: 0,
            name: 'Каталог',
            href: '/'
          },
          {
            id: 1,
            name: 'Оплата і доставка',
            href: '/'
          },
          {
            id: 2,
            name: 'Бонусна програма',
            href: '/'
          },
          {
            id: 3,
            name: 'Про компанію',
            href: '/'
          },
          {
            id: 4,
            name: 'Контакти',
            href: '/'
          },
        ],
        rightBar: {
          search: {
            placeholder: 'Пошук товарів',
            iconName: '/assets/icons/search.svg',
            href: '/',
          },
          signin: {
            label: 'Увійти',
            href: '/',
            iconName: 'assets/icons/account.svg',
          },
          favourites: {
            label: 'Обране',
            iconName: 'assets/icons/heart-filled.svg',
            href: '/',
            amount: 1,
          },
          bag: {
            label: 'Кошик',
            href: '/',
            iconName: 'assets/icons/basket-filled.svg',
            amount: 0,
          },
        }
      },
      filters: [
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
      ],
      ads: [
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
    }

  }
  incFavs() {
    this.setState(prevState => {
      let headerProps = { ...prevState.headerProps };
      headerProps.rightBar.favourites.amount += 0.5;
      return { headerProps }
    })
  }

  decFavs() {
    this.setState(prevState => {
      let headerProps = { ...prevState.headerProps };
      headerProps.rightBar.favourites.amount -= 0.5;
      return { headerProps }
    })
  }

  incBag() {
    this.setState(prevState => {
      let headerProps = { ...prevState.headerProps };
      headerProps.rightBar.bag.amount += 0.5;
      return { headerProps }
    })
  }

  render() {
    return (
      <div className="App">
        <Header props={this.state.headerProps} />
        <AdsBlock
          ads={this.state.ads}
          filters={this.state.filters}
          favourites={this.state.headerProps.rightBar.favourites.amount}
          bag={this.state.headerProps.rightBar.bag.amount}
          incFavs={this.incFavs.bind(this)}
          decFavs={this.decFavs.bind(this)}
          incBag={this.incBag.bind(this)} />
      </div>
    );
  }
}

export default App;
