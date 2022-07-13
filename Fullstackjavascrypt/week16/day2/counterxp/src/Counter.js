

import {connect} from 'react-redux';
import {INCREASE_COUNT, DECREASE_COUNT} from './redux/actions';


const Counter = (props) => {
  return(
    <div>
      
        <h1> Counter</h1>
        <p>{props.counter}</p>
        <div>
            <button onClick={props.add}>+</button>
            <button onClick={props.reduce}>-</button>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      add: () => dispatch(INCREASE_COUNT()),
      reduce: () => dispatch(DECREASE_COUNT())
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
