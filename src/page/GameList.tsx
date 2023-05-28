import styled from 'styled-components';
import Header from '../components/Header';
import Carousel from '../components/GameList/Carousel';

const Back = styled.div`
  height: 100vh;
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
      <GamesIntroBox>
        {/* 1. 게임 Carousel
            2. 인기게임 100 */}
        <Carousel />
        <div>{/* 게임 리스트 쭈루루루 */}</div>
      </GamesIntroBox>
      {/* 최근본 게임 컴포넌트 */}
    </Back>
  );
};

export default GameList;
