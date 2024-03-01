import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const NavbarWrapper = styled.div`
  font-family: helvetica;
  margin-left: 40px;
`;

export const NavbarHome = styled.h3`
  font-weight: bold;
  margin-top: -20px;
  color: rgba(38, 74, 60, 100);
`;

export const NavbarHistory = styled.h3`
  font-weight: bold;
  margin-top: -10px;
  color: rgba(38, 74, 60, 100);
`;
