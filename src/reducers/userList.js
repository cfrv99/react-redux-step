const addUserListReducer = (state = [],action)=>{
    switch (action.type) {
        case "ADDUSERLIST":
            return [action.payload,...state];
    
        default:
            return state;
    }
}

export default addUserListReducer