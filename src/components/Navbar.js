import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Bootstrap CSS는 더 이상 필요하지 않습니다.
// import "bootstrap/dist/css/bootstrap.min.css";

// styled-components를 사용하여 스타일을 적용한 Navbar 컴포넌트
const StyledNavbar = styled.ul`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  list-style: none;

  border-bottom: 1px solid #a1a1a1;
  padding-bottom: 20px;
`;

const StyledNavItem = styled.li`
  margin: 0 23px;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: white;
  background: black;
  padding: 10px 25px;
  border-radius: 100px;
`;

const TitleList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`;
const AppTitle = styled.span`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 49px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const AppContent = styled.span`
  color: rgba(85, 85, 85, 0.7);
  margin-top: 30px;
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
function Navbar() {
  return (
    <>
      <StyledNavbar>
        <StyledNavItem>
          <NavbarLink to="/Login">Login</NavbarLink>
        </StyledNavItem>
      </StyledNavbar>
      <TitleList>
        <AppTitle>앱 이름</AppTitle>
        <AppContent>앱의 내용과 구체적인 서비스 스토리</AppContent>
      </TitleList>
    </>
  );
}

export default Navbar;
