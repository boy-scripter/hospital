
const comment = (state, action) => {
    switch (action.type) {

        case "LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "DATA_LOADED":
            return {
                ...state,
                isLoading: false,
                api_url: action.payload.url,
                customer: [...action.payload.data]
            }

        case "ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
            default:
                return state
    }
}

export default comment