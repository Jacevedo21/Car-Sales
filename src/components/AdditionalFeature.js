import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
import { addFeature } from '../actions/actionIndex'

const AdditionalFeature = props => {
  // const features = useSelector(state => state.additionalFeature)
  // const dispatch = useDispatch()

  const addAFeature = e => {
    e.preventDefault()
    props.addFeature(props.feature)
  }
  
  return (
    <>
          <li>
            <button
              className="button"
              id={props.feature.id}
              onClick={addAFeature}
            >Add</button>
            {props.feature.name} (+{props.feature.price})
          </li>
    </>
  );
};



export default connect(null, {addFeature})(AdditionalFeature)