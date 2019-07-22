import React from "react";
import logo from '../../logo.svg';
import styled from 'styled-components';
import CountDownTimer from '../CountDownTimerScreen';
import { CenterContainer } from '../../components/Container';

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

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (

      <MainContainer>
        {/* <CountDownTimer /> */}
        <CenterContainer>
          <CountDownTimer />
        </CenterContainer>
      </MainContainer>
      // <LeftSideBar />

      // <RightSideBar />
      // <Footer />
    );
  }
}