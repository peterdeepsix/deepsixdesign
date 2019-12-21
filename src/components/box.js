import styled from "styled-components"

export const Box = styled.div.attrs(props => ({
    style: {
        left: `${props.left}px`,
        top: `${props.top}px`,
        width: `${props.width}px`,
        height: `${props.height}px`,
    },
}))`
    border: 2px solid ${({ color }) => color || "red"};
    position: absolute;
    border-radius: 4px;
  
    &::before,
    &::after {
      display: block;
      position: absolute;
      top: 0;
      color: white;
      background: ${({ color }) => color || "red"};
      padding: 3px 6px;
      font-size: 12px;
      font-family: monospace;
    }
  
    &::before {
      content: "${({ label }) => label}";
      left: 0;
      border-radius: 0 0 4px;
    }
  
    &::after {
      content: "${({ score }) => Math.round(score * 100)}%";
      right: 0;
      border-radius: 0 0 0 4px;
    }
  `
