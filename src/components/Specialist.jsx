import React from "react";
import styled from "styled-components";


const Specialist = () => {
    return (
        <Wrapper>
            <div className="contents">
                <h2 className="l1">We have The Best Specialist</h2>
                <p className="l2">Lorem ipsum dolor sit amet consectetur adipisicing nam repellat saepe enim ipsum corrupti illo laudantium harum corporis temporibus voluptates facilis aperiam!</p>
            </div>
            <div className="cards flex justify-between align-center">
            <div className="card">
                    <div className="image"></div>
                    <p className="name">
                        <span className="dr">Dr. Awaatif Al</span>
                        <span className="type"> Neurological</span>
                    </p>
                </div>
                <div className="card">
                    <div className="image"></div>
                    <p className="name">
                        <span className="dr">Dr. Awaatif Al</span>
                        <span className="type"> Neurological</span>
                    </p>
                </div>
                <div className="card">
                    <div className="image"></div>
                    <p className="name">
                        <span className="dr">Dr. Awaatif Al</span>
                        <span className="type"> Neurological</span>
                    </p>
                </div>
                <div className="card">
                    <div className="image"></div>
                    <p className="name">
                        <span className="dr">Dr. Awaatif Al</span>
                        <span className="type"> Neurological</span>
                    </p>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
margin-top:20px;
padding: 70px 40px 40px;
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
        gap: 20px;
        padding-inline: 20px;
        
        .card{
            background-color: white;
            box-shadow: 0px 10px 50px 25px rgba(0, 59, 121, 0.0725798);
            border-radius: 20px;
            width: 274px;
            overflow: hidden;
            padding-bottom: 14px;

             .image{
                width: 100%;
                background-color: #002348;
                height: 270px;
            }
            .dr{
                font-weight: 600;
                font-size: 20px;
                
            }
            .type{
                line-height: 30px;
            }

        }
    }

    .learn-more ,.name{
        margin-top:20px;
    }
   

`

export default Specialist