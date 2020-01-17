const redirect = (state = 'main', action) => {
    switch (action.type) {
        case 'MAIN':
            return 'main'
        case 'PROFILE':
            return 'profile'
        case 'SEARCH':
            return 'search'
        case 'INSPECT':
            return 'inspect'
        default:
            return state
    }
}
export default redirect