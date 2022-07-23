import styled from "styled-components";

export const StatusUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;

  div {
    border: 1px solid #dfe0eb;
    border-radius: 8px;
    width: 252px;
    height: 114px;
    padding-top: 24px;
    cursor: pointer;
    background-color: #fff;

    &:hover {
      border: 1px solid #3751ff;
      p {
        color: #3751ff;

        &:nth-of-type(2) {
          color: #3751ff;
        }
      }
    }

    p {
      margin: 0;
      font-family: "Mulish";
      font-style: normal;
      font-weight: 700;
      font-size: 19px;
      line-height: 24px;
      text-align: center;
      letter-spacing: 0.4px;
      color: #9fa2b4;

      &:nth-of-type(2) {
        margin-top: 12px;
        font-size: 40px;
        line-height: 50px;
        letter-spacing: 1px;
        color: #252733;
      }
    }
  }
`;
