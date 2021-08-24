import React, { Component } from 'react'
import { searchSynths } from '../redux/actionCreators'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'

class SearchBar extends Component {

    state = {
        query: ""
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.searchSynths(this.state.query.toLowerCase())
    }

    render () {
        return (
            <Wrapper>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
                    <Submit type="submit" value="Search"/>
                </form>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    width: fit-content;
    text-align: center;
    margin: 0 auto;
`

const Submit = styled.input`
    color: #c01a1a;
    background: white;
    border: 3px solid #c01a1a;
    padding: 5px 32px;
    margin: 10px;
    transition-duration: 0.4s;
    font-weight: 600;

    &:hover {
        color: white;
        background: #c01a1a;
        border-color: white; 
    }

    &:active {
        background: #9b1515
    }
`

export default connect(null, { searchSynths })(SearchBar)
