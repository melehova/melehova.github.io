import React, { Component } from "react";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const AD = {
    ID: 0,
    title: 'Шпагат Macrametr 4 мм, 100 ниток',
    prefered: true,
    image: './assets/image.png',
    colors: [
        {
            id: 0,
            hex: '696837'
        },
        {
            id: 1,
            hex: '81292F'
        },
        {
            id: 2,
            hex: 'D8C1AA'
        },
        {
            id: 3,
            hex: 'EED53A'
        },
        {
            id: 4,
            hex: '0395AF'
        },
        {
            id: 5,
            hex: 'F09482'
        },
        {
            id: 6,
            hex: '5484ac'
        },
        {
            id: 7,
            hex: 'dfdfdf'
        },
        {
            id: 8,
            hex: '5d5d5d'
        }
    ],
    price: 40,
}

export default class Ad extends Component {
    constructor() {
        super()
        this.state = {
            collapsedColors: AD.colors.slice(0, 4),
        }
        this.expandColors = this.expandColors.bind(this)
    }
    componentDidMount() {
        let circles = document.getElementsByClassName('ad__color-circle')
        for (let circle of circles)
            circle.style.backgroundColor = '#' + circle.dataset.color
    }

    expandColors() {
        this.setState({collapsedColors: AD.colors})
    }

    render() {
        return (
            <div className="container">
                <div className="ad">
                    <div className="ad__btn-bar">
                        <div className="ad__btn-favourite"></div>
                        <div className="ad__btn-more"></div>
                    </div>
                    <img className='ad__img' src={AD.image} alt={AD.title}></img>
                    <div className="ad__info">
                        <div className="ad__title">{AD.title}</div>
                        <div className="ad__color-bar">
                            {this.state.collapsedColors.map(color => {
                                if (color.id < this.state.collapsedColors.length - 1)
                                    return (<span className='ad__color-circle' key={color.id} data-color={color.hex}></span>)
                                else
                                    return (<span className="ad__color-expand" onClick={this.expandColors}>+{AD.colors.length - 4}</span>)
                            })}
                        </div>
                        <div className="ad__price">40</div>
                    </div>
                    <div className="ad__btn-buy">До кошика</div>
                </div>
            </div>
        );
    }
}