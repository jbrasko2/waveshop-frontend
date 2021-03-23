import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        query: ""
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.searchSynths(this.state.query)
    }

    render () {
        return (
            <div className="search-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

export default SearchBar
