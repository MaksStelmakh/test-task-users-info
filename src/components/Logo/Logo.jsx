import sprite from "../../images/sprite.svg";

const Logo = () => {
  return (
    <>
      <p>
        <svg>
          <use href={`${sprite}#icon-logo`}></use>
        </svg>
        Dashboard
      </p>
    </>
  );
};

export default Logo;
