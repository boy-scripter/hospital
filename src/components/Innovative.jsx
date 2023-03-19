import React from "react";
import styled from "styled-components";

const Innovative = () => {
    return (
        <Wrapper>
            <div className="title flex align-center">
                <div className="content">
                    <h2 className="l2">Clinic With Innovative</h2>
                    <p className="l3">Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, repudiandae. sit amet consectetur adipisicing elit. Sed ex atque quod animi delectus at!</p>
                    <div className="flex btns">
                        <div className="btn blue">Learn more</div>
                    </div>
                </div>
            </div>
            <div className="image">
                <div className="card"><img src="./static/images/van.png" alt="" className="images" /> <p className="name">24 hour Service</p></div>
                <div className="card"><img src="./static/images/woman.png" alt="" className="images" /><p className="name">Qualified Doctors</p></div>
                <div className="card"><img src="./static/images/man.png" alt="" className="images" /><p className="name">Emergency Care</p></div>
            </div>
        </Wrapper>
    )


}

const Wrapper = styled.section`
   display: flex;
    padding: 30px 40px;
    color: #002348;
    gap: 15px;

    .image{
        border-radius: 20px;
        flex-basis: 47%;

        .card{
            height: 125px;
            width: 190px;
            background-color: whitesmoke;
            border-radius:10px;
            margin-top:10px;

            img{
                object-position:0px -100px;
                width: 100%;
                height: 100%;
                overflow: visible;
                object-fit: cover;
            }

           
        }

        .card:first-child img{
            object-position:0px -70px;
        }
        .card:nth-child(2){
            margin-left:210px
        }

      
    }

    .l2{
        margin: 8px 0;
    }

    .l3{
        line-height: 24px;
    }

    .title{
        flex-basis: 44%;
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

export default Innovative