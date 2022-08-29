import React, { Component } from "react";
import './index.css'
import Ad from "../Ad";
import SideNavBar from "../SideNavBar";

export default class AdsBlock extends Component {
    constructor(props) {
        super()
        this.state = {
            list: props.ads,
            sorting: null,
            filters: props.filters,
            favourites: props.favourites,
            bag: props.bag,
            found: props.ads.length,
        }
        this.sortAsc = this.sortAsc.bind(this)
        this.sortDesc = this.sortDesc.bind(this)
        this.setFilterState = this.setFilterState.bind(this)
        this.resetFilters = this.resetFilters.bind(this)
        this.filterAds = this.filterAds.bind(this)
    }

    sortAsc() {
        this.setState({
            sorting: this.state.sorting === 'ASC' ? null : 'ASC', // toggle filter
            list: this.state.sorting !== 'ASC' ? [...this.state.list].sort((a, b) => a.price.value > b.price.value ? 1 : -1) : this.props.ads, // toggle sorting
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

    filterAds() {
        this.setState({list: this.props.ads}) // clean list
        let filtered = [] // filtered ads
        this.state.filters.forEach(group => { // go through all known filters
            let opts = group.options.filter(option => option.isChecked) // filter all checked of them
            opts.forEach(opt => { // for each checked filter option
                filtered = this.state.list.filter(ad => { // looking for ads with such features
                    let p = ad.features.filter(feature => { // looking for such feature
                        return parseInt(Object.keys(feature)[0]) === group.id && feature[parseInt(Object.keys(feature)[0])] === opt.id // feature relate its option
                    })
                    return p.length > 0 // if found such feature return this.ad
                })
                this.setState({ found: filtered.length })
                this.setState({ list: filtered }) // update list of ads on page
            })
        })
    }

    setFilterState(groupId, filterId) {
        let newValue = !this.state.filters[groupId].options[filterId].isChecked
        this.setState(prevState => {
            let filters = { ...prevState.filters };
            filters[groupId].options[filterId].isChecked = newValue;
            return filters
        })
    }

    resetFilters() {
        this.setState({ list: this.props.ads }) // clean filtering

        this.setState(prevState => {
            let filters = [...prevState.filters];
            filters.forEach(group => {
                group.options.forEach(option => {
                    option.isChecked = false;
                })
            })
            return filters
        })
    }

    sortDesc() {
        this.setState({
            sorting: this.state.sorting === 'DESC' ? null : 'DESC', // toggle filter
            list: this.state.sorting !== 'DESC' ? [...this.state.list].sort((a, b) => a.price.value < b.price.value ? 1 : -1) : this.props.ads, // toggle sorting
        })
    }

    render() {
        return (
            <div className="container d-flex">
                <SideNavBar props={this.state.filters} found={this.state.found} setFilterState={this.setFilterState} resetFilters={this.resetFilters} filterAds={this.filterAds} features={this.props.features} />

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
