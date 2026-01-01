import React from 'react'
import { buyIceCream } from '../redux';
import { connect } from 'react-redux';

function IceContainer(props) {
  return (
    <div>
        <h2>Number of IceCreams - {props.numberOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numberOfIceCream: state.iceReducer.numberOfIceCream
  }
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
};

export default connect(mapStateToProps,mapDispatchToProps) (IceContainer)