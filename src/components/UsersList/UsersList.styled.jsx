import styled from "styled-components";

export const UserItem = styled.li`
  padding: 24px 30px 26px 32px;
  list-style: none;
  border-bottom: 1px solid #dfe0eb;
  transition: all 250ms linear;

  &:hover {
    background: rgba(55, 81, 255, 0.04);
  }

  a {
    display: flex;
    text-decoration: none;
    justify-content: space-between;

    img {
      border-radius: 50px;
      width: 44px;
    }
  }

  button {
    cursor: pointer;
    background-color: inherit;
    border: none;
    margin-top: 10px;

    svg {
      width: 15px;
      height: 16px;
    }
  }
`;

export const Distance = styled.p`
  font-family: "Mulish";
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #ffffff;
  height: 15px;
  background-color: #f12b2c;
  padding: 5px 12px;
  border-radius: 20px;
  margin-top: 12px;
`;

export const UserPhoto = styled.div`
  display: flex;

  div {
    width: 347px;
    margin-left: 24px;

    p {
      font-family: "Mulish";
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.2px;
      color: #252733;
      margin-top: 2px;

      &:nth-of-type(2) {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.1px;
        color: #c5c7cd;
      }
    }
  }
`;

export const CompanyNames = styled.div`
  width: 208px;

  p {
    font-family: "Mulish";
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #252733;
    margin-top: 2px;

    &:nth-of-type(2) {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.1px;
      color: #c5c7cd;
    }
  }
`;

export const EmailAdress = styled.div`
  width: 140px;
  p {
    font-family: "Mulish";
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #252733;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre;

    &:nth-of-type(2) {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.1px;
      color: #c5c7cd;
    }
  }
`;
