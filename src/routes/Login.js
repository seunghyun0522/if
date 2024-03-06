import styled from "styled-components";
import loginImg from "../assets/login.png";
const ImgDiv = styled.div`
  background-image: url(${loginImg});

  width: 659px;
  height: 837px;
  background-repeat: no-repeat;
`;

const LoginDiv = styled.div`
  float: right;
  width: 50%;
  height: 80%;
`;
const BodyWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Login() {
  return (
    <BodyWrapper>
      <ImgDiv />
      <LoginDiv />
    </BodyWrapper>
  );
}

export default Login;
