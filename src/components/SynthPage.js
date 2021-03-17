import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedSynth } from '../redux/actionCreators'

class SynthPage extends Component {

    componentDidMount() {
        // get the id from the route (i.e. grab 1 from '/synths/1')
        //we give this.props.match.params a key of id when we define '/synths/:id' in our Route path in App.js
        const id = this.props.match.params.id
        this.props.setSelectedSynth(id)
    }

    render () {
        const { name, image, price, shortDesc, longDesc, stock, history } = this.props
        return (
            <div className="show">
                <h3>{name}</h3>
                <p>{shortDesc}</p>
                <img src={image} alt={name} />
                <p>${price}</p>
                <p>In-Stock: {stock}</p>
                <br/>
                <p>{longDesc}</p>
                <button onClick={history.goBack}>Go Back</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.synths.selectedSynth
})

export default connect(mapStateToProps, { setSelectedSynth })(SynthPage)