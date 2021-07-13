import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
  font-size: 18px;
  display: flex;
  justify-self: flex-end;
  margin-left: auto;
  position: relative;

  color: #333;

  > svg {
    transform: translateY(3.5px);
    margin-right: 10px;
  }

  span {
    margin-left: 5px;
  }
`;

export const StyledSpan = styled.span`
  padding-left: 10px;
  font-size: 20px;
`;

export const Header = styled.div`
  position: fixed;
  margin-bottom: 70px;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Items = styled.div`
  border-radius: 100%;
  padding: 4px 8px;
  background-color: red;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  z-index: 2;
  right: 3px;
  top: -3px;
`;
