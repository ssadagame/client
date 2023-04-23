import styled from 'styled-components';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import IntroductionText from '../components/IntroductionText';

const Back = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TestDiv = styled.div`
  height: 100px;
`;

const Home = () => {
  return (
    <Back>
      <Header />
      <div>
        <IntroductionText />
        <SearchBox />
      </div>

      <TestDiv>인기 게임 보러가기!</TestDiv>
    </Back>
  );
};

export default Home;
