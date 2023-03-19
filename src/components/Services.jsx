import React from "react";
import styled from "styled-components";

const Services = () => {
    return (
        <Wrapper>
            <div className="contents">
                <h2 className="l1">Our Services</h2>
                <p className="l2">Lorem ipsum dolor sit amet consectetur adipisicing nam repellat saepe enim ipsum corrupti illo laudantium harum corporis temporibus voluptates facilis aperiam!</p>
            </div>
            <div className="cards flex justify-between align-center">
                <div className="card">
                    <img src="./static/images/brain.png" alt="" />
                    <p className="name">NeuroLogical</p>
                    <p className="learn-more">Learn More...</p>
                </div>
                <div className="card">
                    <img src="./static/images/medical.png" alt="" />
                    <p className="name">NeuroLogical</p>
                    <p className="learn-more">Learn More...</p>

                </div>
                <div className="card">
                    <img src="./static/images/dental.png" alt="" />
                    <p className="name">NeuroLogical</p>
                    <p className="learn-more">Learn More...</p>

                </div>
                <div className="card">
                    <img src="./static/images/dental.png" alt="" />
                    <p className="name">NeuroLogical</p>
                    <p className="learn-more">Learn More...</p>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
padding: 60px 40px;
text-align: center;
color:#002348;

    .l1{
        margin: 10px 0;
    }

    .l2{
    line-height: 24px;
    width: 800px;
    margin: auto;
    }

    .cards{
        margin-top:25px;
        gap: 10px;
        padding-inline: 20px;
        
        .card{
            background-color: white;
    box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.0725798);
            border-radius: 10px;
            padding: 20px 40px;


            &:hover{
               outline: 1px solid blue;
            }
        }
    }

    .card:hover .learn-more{
    display: block;
    visibility: visible;
    }

    .learn-more{
        cursor: pointer;
        visibility: hidden;
    }

    .learn-more ,.name{
        margin-top:20px;
    }
   
`

export default Services