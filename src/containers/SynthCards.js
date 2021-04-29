import React, { Component } from 'react'
import { connect } from 'react-redux'
import SynthCard from '../components/SynthCard'
import SearchBar from '../components/SearchBar'

class SynthCards extends Component {
    
    renderPage = () => {
        return (
            <>
                <SearchBar />
                <div>
                    {this.props.synths.map(synth => <SynthCard key={synth.id} {...synth} />)}
                </div>
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

const mapStateToProps = state => ({
    synths: state.synths.synths,
    requesting: state.synths.requesting
})

export default connect(mapStateToProps)(SynthCards)