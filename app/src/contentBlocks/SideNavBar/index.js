import React from "react";
import './index.css'
import Checkbox from "../Checkbox";

export default class SideNavBar extends React.Component {
    constructor({props}) {
        super()
        this.state = {
            props: [...props]
        }

    }

    render() {
        console.log(this.state)
        return (
            <div className="ad__nav-side-bar col-2">
                {this.state.props.map(group => {
                    return (<div className="ad__filter-group">
                        <div className="ad__filter-title">{group.title}</div>
                        {group.options.map(option => {
                            return(<Checkbox props={option} />)
                        })}
                    </div>)
                })}

            </div>
        )
    }
}