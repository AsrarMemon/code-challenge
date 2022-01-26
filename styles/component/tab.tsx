import styled from "styled-components";

const Tab: any = styled.button`
  width: 50%;
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active } : any) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
export default Tab;
