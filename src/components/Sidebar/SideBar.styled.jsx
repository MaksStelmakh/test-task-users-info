import styled from "styled-components";

export const NavPages = styled.div`
  a {
    display: flex;
    width: 100%;
    font-family: "Mulish";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #a4a6b3;
    text-decoration: none;
    padding: 18px 0 18px 0;

    .selected {
      background: #9fa2b4;
      color: red;
      opacity: 0.08;
      border-left: 2px solid #dde2ff;

      svg {
        fill: #dde2ff;
      }
    }

    svg {
      width: 16px;
      height: 15px;
      margin: 3px 24px 0 29px;
      fill: #9fa2b4;
    }
  }
`;
