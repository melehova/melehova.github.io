import React, { Component } from "react";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import currencyFormat from "./currencyFomat";

export default class Ad extends Component {
    constructor({ props }) {
        super()
        this.state = {
            ...props,
            collapsedColors: props.colors.slice(0, 4),
        }
        this.expandColors = this.expandColors.bind(this)
        this.togglePrefered = this.togglePrefered.bind(this)

    }
    componentDidMount() {
        let circles = document.getElementsByClassName('ad__color-circle')
        for (let circle of circles)
            circle.style.backgroundColor = '#' + circle.dataset.color
    }

    componentDidUpdate() {
        this.componentDidMount()
    }

    expandColors() {
        this.setState({ collapsedColors: this.state.colors })
    }

    togglePrefered() {
        this.setState({ prefered: !this.state.prefered })
        /* POST data to back */
    }

    render() {
        return (
            <div className="ad">
                <div className="ad__btn-bar">
                    <div
                        className={this.state.prefered ? 'ad__btn-favourite active' : 'ad__btn-favourite'}
                        title={this.state.prefered ? "Прибрати з обраних" : "Додати в обрані"}
                        onClick={this.togglePrefered}></div>
                    <div className="ad__btn-more" title="Більше"></div>
                </div>
                <img className='ad__img' src={this.state.image} alt={this.state.title}></img>
                <div className="ad__info">
                    <div className="ad__title">{this.state.title}</div>
                    <div className="ad__color-bar">
                        {this.state.collapsedColors.map(color => {
                            return (<span className='ad__color-circle' key={color.id} data-color={color.hex} title={color.name}></span>)
                        })}
                        {(this.state.collapsedColors.length !== this.state.colors.length) &&
                            <span className="ad__color-expand" onClick={this.expandColors} title='Усі кольори'>+{this.state.colors.length - this.state.collapsedColors.length}</span>
                        }
                    </div>

                    <div className="ad__price">
                        {this.state.oldPrice &&
                            <span className="ad__old-price">{currencyFormat(this.state.oldPrice.value, 'UAH', 'symbol')}</span>
                        }
                        <span className={this.state.oldPrice ? "new" : ""}>{currencyFormat(this.state.price.value, 'UAH', 'symbol')}</span></div>
                </div>
                <div className="ad__btn-buy">До кошика</div>
            </div>
        );
    }
}