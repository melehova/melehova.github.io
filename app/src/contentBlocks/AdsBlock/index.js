import React, { Component } from "react";
import './index.css'
import Ad from "../Ad";
import SideNavBar from "../SideNavBar";

export default class AdsBlock extends Component {
    constructor(props) {
        super()
        this.state = {
            unsorted: props.ads,
            list: props.ads,
            sorting: null,
            filters: props.filters,
            favourites: props.favourites,
            bag: props.bag,
        }
        this.sortAsc = this.sortAsc.bind(this)
        this.sortDesc = this.sortDesc.bind(this)

    }

    sortAsc() {
        this.setState({
            sorting: this.state.sorting === 'ASC' ? null : 'ASC', // toggle filter
            list: this.state.sorting !== 'ASC' ? [...this.state.list].sort((a, b) => a.price.value > b.price.value ? 1 : -1) : this.state.unsorted, // toggle sorting
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
            sorting: this.state.sorting === 'DESC' ? null : 'DESC', // toggle filter
            list: this.state.sorting !== 'DESC' ? [...this.state.list].sort((a, b) => a.price.value < b.price.value ? 1 : -1) : this.state.unsorted, // toggle sorting
        })
    }

    render() {
        return (
            <div className="container d-flex">
                <SideNavBar props={this.state.filters} />

                <div className="col-10">
                    <div className="d-flex gap-3 justify-content-end my-3">
                        <div className='ad__sort-btn asc' value={this.state.sorting === 'ASC'} onClick={this.sortAsc} title={this.state.sorting === 'ASC' ? 'Не сортувати' : 'Сортувати за зростанням ціни'}>Ціна</div>
                        <div className='ad__sort-btn desc' value={this.state.sorting === 'DESC'} onClick={this.sortDesc} title={this.state.sorting === 'DESC' ? 'Не сортувати' : 'Сортувати за спаданням ціни'}>Ціна</div>
                    </div>
                    <div className="ad-blocck">
                        {this.state.list.map(ad => {
                            return <Ad props={ad} key={ad.ID} 
                            incFavs={this.props.incFavs} 
                            decFavs={this.props.decFavs}
                            incBag={this.props.incBag} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
