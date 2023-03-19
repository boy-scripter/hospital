import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar"


const Footer = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Wrapper>
                <div className="cont">
                    <div className="social-links">
                        <div className="link"><a href="#"><i className="fa-brands fa-twitter"></i></a></div>
                        <div className="link"><a href="#"><i className="fa-brands fa-facebook"></i></a></div>
                        <div className="link"><a href="#"><i className="fa-brands fa-google"></i></a></div>
                    </div>
                    <div className="copyright">
                        <p>&copy; Copyright, 2023 </p>
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    )
}
const Wrapper = styled.section`
margin: 10px 0;
padding-inline: 30px;
background: #ECF4FF;
;

.social-links {
  display: flex;
  align-items: center;
}

.social-links .link {
  padding: 2rem 10px;
}

.social-links .link a {
  color: #000;
}

.social-links .link a:hover {
  color: #00f;
}

.copyright {
  padding: 0 0 2rem;
  font-size: 10px;
}
`

export default Footer