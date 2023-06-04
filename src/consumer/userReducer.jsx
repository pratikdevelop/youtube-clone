import React from 'react'

const UserReducer = (state, action) => {
    state.token = action.payload; 
    return state;
}

export default UserReducer