import styled from "styled-components";
import login from "../assets/login.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginSection = styled.div`
  margin-top: 50px;
  width: 1280px;
  height: 832px;
  display: flex;
  box-shadow: 8px 5px 10px 3px rgba(0, 0, 0, 0.25);
`;
const LoginImg = styled.div`
  width: 640px;
  height: 832px;
  background: url(${(props) => props.Img});

  background-repeat: no-repeat;
`;

const LoginContent = styled.div`
  width: 640px;
  height: 832px;
  padding: 100px 84px;
`;

const AppName = styled.div`
  height: 43.409px;
  flex-shrink: 0;
  color: #292929;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InputInfo = styled.input`
  width: 468px;
  height: 78px;
  border-radius: 10px;
  border: 1px solid #e6e6e6;
  padding: 0px 0 0 38px;
  background: #fff;
  margin-bottom: 12px;
`;
const SingupButton = styled.button`
  width: 468px;
  margin-top: 15px;
  height: 56px;
  border-radius: 4px;
  border: none;
  padding: 0 24px;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#ffeb60")};
  color: white;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  font-size: 16px;
`;

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, reSetPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleLogin = () => {
    // Add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlerePasswordChange = (e) => {
    reSetPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <BodyWrapper>
        <LoginSection>
          <LoginImg Img={login} />
          <LoginContent>
            <AppName>회원가입</AppName>

            <div style={{ marginTop: "14px" }}>
              <InputInfo
                placeholder="아이디를 입력해주세요."
                value={username}
                onChange={handleUsernameChange}
              />
              <InputInfo
                id="password"
                placeholder="비밀번호를 입력해주세요."
                value={password}
                onChange={handlePasswordChange}
              />
              <InputInfo
                id="repassword"
                placeholder="비밀번호를 재입력해주세요."
                value={repassword}
                onChange={handlerePasswordChange}
              />
              <InputInfo
                id="name"
                placeholder="이름을 입력해주세요."
                value={name}
                onChange={handleNameChange}
              />
              <InputInfo
                id="email"
                placeholder="이메일을 입력해주세요."
                value={email}
                onChange={handleEmailChange}
              />
              <Link to="/login">
                <SingupButton
                  onClick={handleLogin}
                  disabled={
                    !username || !password || !repassword || !name || !email
                  }
                >
                  회원가입
                </SingupButton>
              </Link>
            </div>
          </LoginContent>
        </LoginSection>
      </BodyWrapper>
    </>
  );
}

export default Signup;
