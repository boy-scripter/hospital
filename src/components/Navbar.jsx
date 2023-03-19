import React from "react";
import styled from "styled-components";
import logo from "./logo.png"

const Navbar = () => {
    return (
        <Wrapper>
            <div className="logo flex align-center">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-menu flex justify-between">
                <li className="nav-items">Home</li>
                <li className="nav-items">About</li>
                <li className="nav-items">Services</li>
                <li className="nav-items">News</li>
                <li className="nav-items">Contact</li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 30px;
    font-size: 17.5px;
   
    .logo{
        padding-top: 3px;
    }

    .nav-menu{
         list-style: none;
    

        .nav-items{
            color: #002348;
            padding:6px 16px;
            cursor: pointer;
            font-weight: 500;

                &:hover{
                    border-radius: 30px;
                    color: white;
                    background-color: blue;
                }
        } 

    }
`

export default Navbar