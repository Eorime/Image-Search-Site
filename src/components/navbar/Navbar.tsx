import { routes } from "../../constants/routes";
import { NavbarHistory, NavbarHome, NavbarWrapper, StyledLink } from "./styles";

function Navbar() {
  return (
    <NavbarWrapper>
      <StyledLink to={routes.home}>
        <NavbarHome>Home</NavbarHome>
      </StyledLink>
      <StyledLink to={routes.history}>
        <NavbarHistory>History</NavbarHistory>
      </StyledLink>
    </NavbarWrapper>
  );
}

export default Navbar;
