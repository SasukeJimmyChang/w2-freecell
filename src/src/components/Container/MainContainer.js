import styled from 'styled-components';

// const MainContainer = styled.div`
//   position: absolute;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 30;
// `;
const MainContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  height: 100vh;
  min-height: 700px;
  min-width: 300px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${props => props.theme.fontColor};
  text-align: center;
`;

export default MainContainer;