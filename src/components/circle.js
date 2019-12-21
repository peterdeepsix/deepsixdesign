import styled from "styled-components";

export const Circle = styled.div`
  content: "";
  background: ${({ color }) => color || "red"};
  position: absolute;
  width: 8px;
  height: 8px;
  transform: translate(-4px, -4px);
  border-radius: 8px;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;