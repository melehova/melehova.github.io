import React from "react";
import './index.css'
import Checkbox from "../Checkbox";

export default class SideNavBar extends React.Component {
    constructor({ props }) {
        super()
        this.state = {
            props: [...props],
            disabled: 'disabled',
            found: 0,
            path: [
                {
                    id: 0,
                    href: '/',
                    anchor: 'Головна',
                },
                {
                    id: 1,
                    href: '/',
                    anchor: 'Каталог',
                },
                {
                    id: 2,
                    href: '/',
                    anchor: 'Макраме',
                },
            ]
        }
    }

    render() {
        return (
            <div className="ad__nav-side-bar col-2">
                <div className="ad__nav-breadcrumbs">
                {this.state.path.map(route => {
                    return (<div><a key={route.id} href={route.href}>{route.anchor}</a></div>)
                })}
                </div>
                {this.state.props.map(group => {
                    return (<div className="ad__filter-group" key={group.id}>
                        <div className="ad__filter-title">{group.title}</div>
                        {group.options.map(option => {
                            return (<Checkbox props={option} key={option.id} disabled={this.state.disabled}/>)
                        })}
                    </div>)
                })}
                <button className="ad__filter-btn show" disabled={this.state.disabled}>Показати</button>
                <button className="ad__filter-btn clear" disabled={this.state.disabled}>Очистити</button>
                <span className="ad__filter-found">Знайдено {this.state.found} товарів</span>
            </div>
        )
    }
}