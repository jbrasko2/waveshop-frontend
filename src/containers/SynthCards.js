import React, { Component } from 'react'
import { connect } from 'react-redux'
import SynthCard from '../components/SynthCard'
import SearchBar from '../components/SearchBar'
import styled from 'styled-components/macro'

class SynthCards extends Component {
    
    renderPage = () => {
        return (
            <>
                <SearchBar />
                <Wrapper>
                    {this.props.synths.map(synth => <SynthCard key={synth.id} {...synth} />)}
                </Wrapper>
            </>
        )
    }

    renderSpinner = () => <div className="loader"></div>
    
    render() {
        return (
            this.props.requesting ? this.renderSpinner() : this.renderPage()
        )
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const mapStateToProps = state => ({
    synths: state.synths.synths,
    requesting: state.synths.requesting
})

export default connect(mapStateToProps)(SynthCards)