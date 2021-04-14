import React from 'react'
import { connect } from 'react-redux'
import SynthCard from '../components/SynthCard'
import SearchBar from '../components/SearchBar'

const SynthCards = props => { 
    return (
    props.synths.filter(synth => synth.id = 1) ? 
        <div className="cards">
        <SearchBar />
            {props.synths.map(synth => <SynthCard key={synth.id} {...synth} />)}
        </div>
    :
        <div className="loader"></div>
    )
}

const mapStateToProps = state => ({
    synths: state.synths.synths
})

export default connect(mapStateToProps)(SynthCards)