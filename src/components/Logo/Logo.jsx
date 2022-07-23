import sprite from "../../images/sprite.svg";
import { Link } from "react-router-dom";
import { StyledLogo } from "./Logo.styled";

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <svg>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
        <p>Dashboard</p>
      </Link>
    </StyledLogo>
  );
};

export default Logo;
