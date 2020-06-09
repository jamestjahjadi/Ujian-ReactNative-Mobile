const INITIAL_STATE = {
    username: '',
    imagedata: [],
    image:''
};

export const authreducers = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'LOGIN':
            return{...state,username:action.payload}
        case 'GET_IMAGE_DATA':
            return{...state,imagedata:action.payload}
        case 'IMAGE':
            return{...state,image:action.payload}
        default:
            return state;
    }
}