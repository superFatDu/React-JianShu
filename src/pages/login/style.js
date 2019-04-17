import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LoginLogo = styled.div`
  width: 100px;
  height: 56px;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${logoPic});
  background-size: contain;
`;

export const LoginForm = styled.div`
  width: 400px;
  height: 220px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding-top: 40px;
`;

export const Input = styled.input`
  display: block;
  width: 220px;
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid #e7e7e7;
  margin: 0 auto 15px auto;
  border-radius: 5px;
  color: #777;
  outline: none;
  &::placeholder {
    color: #ccc;
  }
`;

export const Button = styled.div`
  width: 220px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background: #3194d0;
  border-radius: 15px;
  margin: 20px auto 0 auto;
  color: #fff;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    background: rgba(49, 148, 208, 0.9);
  }
`;