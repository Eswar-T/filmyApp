

const DataReducer = (state={currentState:[]},action) => {
    switch(action.ype){
        case 'GET_DATA_REQUEST' : return {
            loading : false
        }
        case 'GET_DATA_SUCCESS' : return { 
            currentState: action.payload,
            loading:true
        }
        case 'GET_DATA_FAILURE' : return {
            loading : false
        }
        default : return state ;
    }
}

export default DataReducer;