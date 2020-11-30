export const initialState = {
    name:'',
    phone:'',
    mail:''
};

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setName':
            return { ...state, 
                    name: action.payload.name,
                    phone: action.payload.phone,
                    mail: action.payload.mail
                };
        break;
        default:
            return state;
    }

}