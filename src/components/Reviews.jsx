import React from "react";
import styled from "styled-components";
import { useReviewContext } from "./ReviewContext";

const Reviews = () => {

    const { getComments, isLoading, customer } = useReviewContext();

    return (
        <Wrapper>
            <h2>What Our Customers Say</h2>
            <div className="review">
                {
                    isLoading ? <img src="./static/images/loader.gif" alt="" width="200px" height="200px" /> :
                        customer.map((currentElement, index) => {
                            return (
                                <div className="card" key={index}>
                                    <p className="comment">{currentElement.Reviews.length > 125 ? currentElement.Reviews.slice(0,124)+"..." : currentElement.Reviews.slice(0,124)}</p>
                                    <div className="detail flex">
                                        <img src="./static/images/woman.png" alt="" className="userimage" />
                                        <div className="name">
                                            <p className="dr">{currentElement.Name}</p>
                                            <p className="type">{currentElement.Company}</p>
                                        </div>
                                    </div>
                                    <div className="circle"><span>“</span></div>
                                </div>
                            )
                        })

                }
            </div>
            <div className="flex justify-center">
                <button className="btn blue" onClick={() => { getComments() }}>See Other Reviews</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
padding: 20px 30px;
color: #002348;

.review{
 margin: 20px 0;
display: flex;
gap: 20px;
flex-wrap: wrap;
justify-content: space-around;
}

.card{
    flex-basis: 46%;
    padding: 12px 40px;
    border-radius: 20px;
    position: relative;
    background-color: white;
    box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.0725798);

    .detail{
        margin: 10px 0;
        
        img{
            border-radius: 50%;
            width:40px;
            object-fit: cover;
            aspect-ratio: 1;
        }
        .name {
            padding-left: 20px;

            .dr{
                line-height: 30px;
                font-size: 18px;
                font-weight:700;
            }
        }
    }

    .circle{
        border-radius: 50%;
        background: #007FF4;
        position: absolute;
        top: -18px;
        right: -15px;
        height: 40px;
        aspect-ratio: 1;
        font-size: 50px;
        /* display: grid;
        place-content: center;
        line-height: 40px; */
        text-align: center;
        color: white;
    }
}

`

export default Reviews