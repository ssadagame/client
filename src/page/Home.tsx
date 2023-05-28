import styled from 'styled-components';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import IntroductionText from '../components/IntroductionText';
import GameListMoveIcon from '../components/GameListMoveBtn';
const Back = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Home = () => {
  return (
    <Back>
      <Header />
      <div>
        <IntroductionText />
        <SearchBox />
      </div>
      <GameListMoveIcon />
    </Back>
  );
};

export default Home;
