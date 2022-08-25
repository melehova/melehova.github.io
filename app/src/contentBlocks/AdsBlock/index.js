import React, { Component } from "react";
import './index.css'
import Ad from "../Ad";

export default class AdsBlock extends Component {
    constructor(props) {
        super()
        this.state = {
            unsorted: props.props,
            list: props.props,
            filter: null
        }
        this.sortAsc = this.sortAsc.bind(this)
        this.sortDesc = this.sortDesc.bind(this)

    }

    sortAsc() {
        this.setState({
            filter: this.state.filter === 'ASC' ? null : 'ASC', // toggle filter
            list: this.state.filter !== 'ASC' ? [...this.state.list].sort((a, b) => a.price.value > b.price.value ? 1 : -1) : this.state.unsorted, // toggle sorting
        })
    }

    /* setState changing states in a scope, so when we reading this.state.filter when changing list, old value is still there,
    so even if we 'activate' some filter, we still equaling old state.filter 
    
    returning 1 or -1 from sort():
        Because of what the ECMA Standard covers about sort arrays (in a very simplified way):

        If in the comparison receives 1 A descend one position.
        If receives -1 maintain the position and define the superior ranking toward the B.
        If receives 0 does nothing.

        so the safest way is to return 1 and -1 manually
    */

    sortDesc() {
        this.setState({
            filter: this.state.filter === 'DESC' ? null : 'DESC', // toggle filter
            list: this.state.filter !== 'DESC' ? [...this.state.list].sort((a, b) => a.price.value < b.price.value ? 1 : -1) : this.state.unsorted, // toggle sorting
        })
    }

    render() {
        return (
            <>
                <div className="container d-flex gap-3 justify-content-end">
                    <div className='ad__sort-btn asc' value={this.state.filter === 'ASC'} onClick={this.sortAsc}>Ціна</div>
                    <div className='ad__sort-btn desc' value={this.state.filter === 'DESC'} onClick={this.sortDesc}>Ціна</div>
                </div>
                <div className="ad-blocck">
                    {this.state.list.map(ad => {
                        return <Ad props={ad} key={ad.ID} />
                    })}
                </div>
            </>
        )
    }
}
