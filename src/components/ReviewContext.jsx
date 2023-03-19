import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducerjs/comment"

const intialstate = {
    isLoading: true,
    isError: false,
    customer: [],
    api_url: "https://admin.tomedes.com/api/v1/get-reviews?page=1"
}

const Review = createContext();

const ReviewContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialstate)

    const getComments = async () => {
        dispatch({ type: "LOADING" })

        try {
            let response = await axios.get(state.api_url).then((pram) => pram.data)
            let data = response.data;
            let url = response.links.next;
            dispatch({ type: "DATA_LOADED", payload: { data, url } })
        }
        catch (err) {
            alert("Something Went Wrong PLease Reload this Page")
            dispatch({ type: "ERROR" })

        }
    }

    useEffect(() => {
        getComments(); // eslint-disable-next-line 
    }, [])

    return (
        <Review.Provider value={{ ...state, getComments }}>
            {children}
        </Review.Provider>
    )
}

const useReviewContext = () => {
    return useContext(Review);
}

export { ReviewContext, useReviewContext }