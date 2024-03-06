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
  margin-top: 20px;
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

function Navbar() {
  return (
    <>
      <StyledNavbar>
        <StyledNavItem>
          <NavbarLink to="/Login">Login</NavbarLink>
        </StyledNavItem>
      </StyledNavbar>
    </>
  );
}

export default Navbar;
