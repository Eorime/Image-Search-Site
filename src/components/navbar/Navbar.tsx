import { routes } from "../../constants/routes";
import { NavbarHistory, NavbarHome, NavbarWrapper, StyledLink } from "./styles";

function Navbar() {
  return (
    <NavbarWrapper>
      <StyledLink to={routes.home}>
        <NavbarHome>მთავარი</NavbarHome>
      </StyledLink>
      <StyledLink to={routes.history}>
        <NavbarHistory>ისტორია</NavbarHistory>
      </StyledLink>
    </NavbarWrapper>
  );
}

export default Navbar;
