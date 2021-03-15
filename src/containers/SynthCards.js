import React from 'react'
import { connect } from 'react-redux'
import SynthCard from '../components/SynthCard'

const SynthCards = props => {
    console.log(props.synths)
    return (
    <div className="cards">
        {props.synths.map(synth => <SynthCard key={synth.id} {...synth} />)}
    </div>
    )
}

const mapStateToProps = state => ({
    synths: state.synths.synths
})

export default connect(mapStateToProps)(SynthCards)