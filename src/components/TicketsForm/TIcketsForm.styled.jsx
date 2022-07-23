import styled from "styled-components";

export const TicketsContainer = styled.div`
  width: 534px;
  height: 336px;
  background-color: #fff;
  margin-left: 30px;
  border: 1px solid #dfe0eb;
  border-radius: 8px;

  ul {
    li {
      padding: 20px 32px;
      display: flex;
      justify-content: space-between;
      list-style: none;
      border-bottom: 1px solid #dfe0eb;

      &:last-child {
        border: none;
      }

      p {
        font-family: "Mulish";
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #252733;

        &:nth-of-type(2) {
          color: #9fa2b4;
        }
      }
    }
  }
`;

export const UpperBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 4px 32px;

  div {
    p {
      font-family: "Mulish";
      font-weight: 700;
      font-size: 19px;
      line-height: 24px;
      letter-spacing: 0.4px;
      color: #252733;

      span {
        color: #252733;
      }

      &:nth-of-type(2) {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.1px;
        color: #9fa2b4;
        margin-top: 8px;
      }
    }
  }

  button {
    cursor: pointer;
    border: none;
    background-color: inherit;
    font-family: "Mulish";
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #3751ff;
    padding: 0;
  }
`;
