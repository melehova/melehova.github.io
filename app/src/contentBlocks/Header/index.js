import React from "react";
import './index.css'
import Logo from "../Logo";

export default class Header extends React.Component {
    constructor({ props }) {
        super()
        this.state = {
            ...props
        }
    }

    componentDidMount() {
        let input = document.getElementById("search-input");
        input.addEventListener("focus", function () {
            this.parentElement.style.borderColor = "#C29696";
        });

        input.addEventListener("blur", function () {
            this.parentElement.style.borderColor = "";
        });


    }

    render() {
        return (
            <header>
                <div className="header">
                    {this.state.headerInfo.map(item => {
                        return (<div className="hd__icon" key={item.id}><div style={{ 'backgroundImage': `url(${item.iconName})` }}></div>{item.value}</div>)
                    })}
                </div>
                <nav>
                    <div className="left-nav-bar">
                        {this.state.leftBar.map(link => {
                            return (<a className="nav-link" key={link.id} href={link.href}>{link.name}</a>)
                        })}
                    </div>
                    <Logo />
                    <div className="right-nav-bar">
                        <div className='nav-btn' style={{ 'color': "#424242" }}>
                            <input className="nav-search-input"
                                type='text'
                                id="search-input"
                                placeholder={this.state.rightBar.search.placeholder}></input>
                            <label htmlFor='search-input' className="nav-icon" style={{ 'backgroundImage': `url(${this.state.rightBar.search.iconName})` }}></label>
                        </div>
                        <div className="nav-btn" tabindex="0">
                            <div className="nav-icon" style={{ 'backgroundImage': `url(${this.state.rightBar.signin.iconName})` }}></div>
                            {this.state.rightBar.signin.label}
                        </div>
                        <div tabindex="0" className={`nav-btn ${this.state.rightBar.favourites.amount > 0 ? 'with-amount' : ''}`} data-amount={this.state.rightBar.favourites.amount}>
                            <div className="nav-icon" style={{ 'backgroundImage': `url(${this.state.rightBar.favourites.iconName})` }}></div>
                            {this.state.rightBar.favourites.label}
                        </div>
                        <div tabindex="0" className={`nav-btn ${this.state.rightBar.bag.amount > 0 ? 'with-amount' : ''}`} data-amount={this.state.rightBar.bag.amount}>
                            <div className="nav-icon" style={{ 'backgroundImage': `url(${this.state.rightBar.bag.iconName})` }}></div>
                            {this.state.rightBar.bag.label}
                        </div>
                    </div>
                </nav>

            </header>
        )
    }
}