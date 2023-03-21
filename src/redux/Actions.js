// export const getAllProducts = () => dispatch => {
//     dispatch({ type: 'GET_PRODUCTS_REQUEST' })
//     axios.get('api/products/getAllProducts')
//         .then((response) => dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: response.data }))
//         .catch((error) => dispatch({ type: 'GET_PRODUCTS_FAILED', payload: error }))
// }


export async function getData(dispatch,getState){

    dispatch({type:'GET_DATA_REQUEST'})
    const response = await fetch('https://swapi.dev/api/films/')
    response.then((response) => dispatch({ type: 'GET_DATA_SUCCESS', payload: response.results }))
    .catch((error) => dispatch({ type: 'GET_DATA_FAILED', payload: error }))
    

    // return  fetch('https://swapi.dev/api/films/')
    // .then(async (response,dispatch) => {
    //   const jsonData = await response.json();
    //   dispatch({
    //     type:'GET_DATA',
    //     payload: jsonData.results
    //   })
    // //   setData(jsonData.results)
    //   console.log(jsonData, "response")
    // })
    // .catch(error => console.log(error, "error"))
}
