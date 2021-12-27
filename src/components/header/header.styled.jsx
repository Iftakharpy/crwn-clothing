import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  // stick to top
  background: white;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const LogoContainer = styled(NavLink)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Option = styled((props) => (
  <NavLink
    {...props}
    style={({ isActive }) => (isActive ? { backgroundColor: "pink" } : {})}
  />
))`
  padding: 10px 15px;

  &:hover {
    cursor: pointer;
    background: pink;
  }
`;
