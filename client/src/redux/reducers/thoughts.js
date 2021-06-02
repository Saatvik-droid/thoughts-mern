export default (thoughts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...thoughts, action.payload]
        case 'UPDATE':
            return thoughts.map((thought) => (thought._id === action.payload_id ? action.payload : thought))
        default: return thoughts
    }
}