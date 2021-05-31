export default (thoughts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...thoughts, action.payload]
        default: return thoughts
    }
}