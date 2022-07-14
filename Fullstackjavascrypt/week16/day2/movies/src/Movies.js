

import {connect} from 'react-redux';
import {movieDetails} from './redux/actions';

const Movies = (props) => {
  return(
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
      <div>
        <h1> Movies</h1>
        {
          props.movies.map((item, i) =>{
            return (
              <div key={i}>
                <h3>{item.title}</h3>
                <button
                  onClick={() => {
                    props.getDetails(item);
                  }}
                >
                  Show Details
                </button>
              </div>
            )
          })
        }
      </div>
      <div>
          <h2>Movie details</h2>
          <p>Title: {props.movie.title}</p>
          <p> Release Date: {props.movie.releaseDate}</p>
          <p>Rating: {props.movie.rating}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    movies: state.movies,
    movie: state.movieSelected
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getDetails: (movie) => dispatch(movieDetails(movie))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Movies);
