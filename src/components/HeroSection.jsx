import React from "react";
import styled from "styled-components";

const HeroSection = () => {
    return (
        <Wrapper>
            <div className="title flex align-center">
                <div className="content">
                    <h4 className="l1">Welcome to MediCare+ Clinic</h4>
                    <h2 className="l2">Best Specialists</h2>
                    <p className="l3">Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, repudiandae. sit amet consectetur adipisicing elit. Sed ex atque quod animi delectus at!</p>
                    <div className="flex btns">
                        <div className="btn blue">Make an Appointment</div>
                        <div className="btn blue">Departments</div>
                    </div>
                </div>
            </div>
            <div className="image">
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    padding: 20px 40px;
    color: #002348;
    gap: 15px;

    .image{
        border-radius: 20px;
        background-color: #002348;
        flex-basis: 30%;
    }

    .l2{
        margin: 8px 0;
    }

    .l3{
        line-height: 24px;
    }

    .title{
        flex-basis: 49%;
    }

    .title,.image{
        flex-grow: 1;
        flex-shrink :0;
        height: 350px;
    }

    .btns{
        margin-top: 10px;
        gap: 25px;
    }
`

export default HeroSection