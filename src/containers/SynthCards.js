import React from 'react'
import { connect } from 'react-redux'
import SynthCard from '../components/SynthCard'
import { searchSynths } from '../redux/actionCreators'
import SearchBar from '../components/SearchBar'

const SynthCards = props => {
    return (
    <div className="cards">
    <SearchBar searchSynths={props.searchSynths} />
        {props.synths.map(synth => <SynthCard key={synth.id} {...synth} />)}
    </div>
    )
}

const mapStateToProps = state => ({
    synths: state.synths.synths
})

export default connect(mapStateToProps, { searchSynths })(SynthCards)