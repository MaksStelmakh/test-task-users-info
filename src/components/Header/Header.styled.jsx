import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 55px 0;

  h2 {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.3px;
    color: #252733;
    padding-left: 30px;
  }

  div {
    display: flex;
  }

  svg {
    width: 13px;
    height: 13px;
    margin: auto 0;
    gap: 26px;
    cursor: pointer;

    &:nth-of-type(2) {
      width: 14px;
      height: 16px;
      margin: auto 33px auto 26px;
    }
  }
`;

export const UsersInfo = styled.div`
  padding-right: 30px;
  p {
    font-family: "Mulish";
    font-weight: 600;
    font-size: 14px;
    line-height: 45px;
    text-align: right;
    letter-spacing: 0.2px;
    color: #252733;
    padding: 0 14px 0 32px;
    border-left: 1px solid #dfe0eb;
    margin-top: 15px;
  }

  img {
    width: 64px;
    height: 64px;
    padding: 2px;
    border-radius: 50%;
    border: 1.5px solid #dfe0eb;
  }
`;
