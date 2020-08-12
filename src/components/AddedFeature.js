import React from 'react';
import { deleteFeature } from '../actions/actionIndex'
import { connect } from 'react-redux'

const AddedFeature = props => {
  console.log(props, 'props in added feature')
  // const features = useSelector(state => state.car.features)
  // console.log(features, 'this is added feature NO S')
  // const dispatch = useDispatch()

  const removeAFeature = e => {
    e.preventDefault()
    props.deleteFeature(props.feature)
  }

  return (
    <>
        <li>
          <button className='button'
          onClick={removeAFeature}
          >X</button>
          {props.feature.name}
        </li>
    </>
  );
};

export default connect(null, {deleteFeature})(AddedFeature)