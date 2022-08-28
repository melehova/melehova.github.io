import React from "react";
import './index.css'
import Checkbox from "../Checkbox";

export default class SideNavBar extends React.Component {
    constructor({ props }) {
        super()
        this.state = {
            props: [...props],
            disabled: 'disabled',
            found: 0
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="ad__nav-side-bar col-2">
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
                <div className="ad__filter-found">Знайдено {this.state.found} товарів</div>
            </div>
        )
    }
}