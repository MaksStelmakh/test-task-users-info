import styled from "styled-components";

export const TableContainer = styled.div`
  width: 1097px;
  height: 870px;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  margin: 38px auto 30px auto;
  overflow: hidden;
  background-color: #fff;
`;

export const NameTable = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 48px 32px;

  p {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #252733;
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
    color: #4b506d;

    svg {
      margin-right: 9px;
      width: 14px;
      height: 12px;
    }
  }
`;

export const TitleTable = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1.5px solid #dfe0eb;
  padding-bottom: 12px;
  margin-left: 10px;

  p {
    font-family: "Mulish";
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    color: #9fa2b4;

    &:nth-of-type(1) {
      width: 415px;
    }
    &:nth-of-type(2) {
      width: 208px;
      margin-left: 20px;
    }
    &:nth-of-type(3) {
      width: 140px;
      margin-left: 18px;
    }

    &:nth-of-type(4) {
      width: 104px;
      margin-right: 40px;
    }
  }
`;
