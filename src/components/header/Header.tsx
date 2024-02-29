import { Logo } from "../../assets";
import { HeaderWrapper, LogoImg } from "./styles";

function Header() {
  return (
    <HeaderWrapper>
      <LogoImg src={Logo} />
    </HeaderWrapper>
  );
}

export default Header;
