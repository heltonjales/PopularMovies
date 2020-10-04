export const initialState = {
    name:'',
    avatar: '',
};

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setName':
            return { ...state, name: action.payload.name};
        break;
        default:
            return state;
    }

}