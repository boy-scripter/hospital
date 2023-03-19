import React from "react";
import styled from "styled-components";

const Newsletter = () => {
    return (
        <Wrapper>
            <div className="news">
                <div className="container">
                    <h1 className="news-heading">Subscribe To Newsletter</h1>
                    <p className="des how-de">We have a wide experience in experience design and strategy,</p>

                    <form action="">
                        <input type="email" maxLength="50" required placeholder="Enter your email address" />
                        <button className="bt">Subscribe</button>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

background: #007FF4;
border-radius: 20px;
color: white;
margin:0 20px;
padding: 10px 0;
margin-bottom: 30px;

.news{
  padding: 4.8px 0 9.6px 0;
  text-align: center;
}
.news-heading{
  font-size: 35px;
  line-height: 1.4;

}
.news p{
  font-size: 18px;
  margin-bottom: 16px;
  margin-top: 12px;
  line-height: 1.8;
  
}

input[type="email"]{
  display: inline-block;
  width: 60%;
  padding: 18px 36px;
  margin: 8px 0;
  border: 1px solid #ccc;
  box-sizing: border-box;
  height: 50px;
  margin-top: 18px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.06); 

}
input,
input::-webkit-input-placeholder {
    font-size: 16px;
    line-height: 3;
}
input[type="email"]:is(:active,:hover){
outline: none;
}

.bt {
  margin-left: -160px;
    font-size: 16px;
    display: inline-block;
    font-weight: 600;
  padding: 10px 32px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background-color: #007FF4;
  color: #fff;
}

`
export default Newsletter