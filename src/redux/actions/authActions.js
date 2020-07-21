export function setUser(user){
    return{
        type: 'SET_USER_NAME',
        payload: user
    }
}

export function increment(){
    return{
        type: 'INCREMENT',
    }
}

export function decrement(){
    return{
        type: 'DECREMENT'
    }
}