

export const movieDetails = (movie) => {
    // 3. return to the reducer an object
    return{
      type:'CHOOSE',
      payload: movie
    };
};