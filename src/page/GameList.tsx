import styled from 'styled-components';
import Header from '../components/Header';
import Carousel from '../components/GameList/Carousel';
import Game100List from '../components/GameList/Game100List';

const Back = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 7px;
`;
const Subheading = styled.div`
  width: 75%;
  color: rgba(255, 255, 255, 0.8);
`;

const GamesIntroBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GameList = () => {
  return (
    <Back>
      <Header />
      <Subheading>인기게임 Top 5</Subheading>
      {/* <GamesIntroBox> */}
      {/* 1. 게임 Carousel
            2. 인기게임 100 */}
      <Carousel />
      <Subheading>인기게임 Top 100</Subheading>
      <Game100List />
      {/* </GamesIntroBox> */}
      {/* 최근본 게임 컴포넌트 */}
    </Back>
  );
};

export default GameList;
