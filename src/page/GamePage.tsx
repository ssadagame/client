import styled from 'styled-components';
import Header from '../components/Header';
import { gamesDumy } from '../components/GameList/dumy/GameDumy';
import { useParams } from 'react-router-dom';
import { Title } from '../components/GamePage/Title';
import { ImgBox } from '../components/GamePage/ImgBox';
import { PriceList } from '../components/GamePage/PriceList';
const Back = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Box = styled.section`
  background-color: hsla(0, 0%, 0%, 0.3);
  width: 65%;
  height: 75%;
  border: 1px solid;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid;
  color: white;
  width: 80%;
  height: 70%;
`;

// 게임 정보 요청
// 게임 가격 요청 -> 두가지 요청 다를게, 가격요청이 시간이 걸려 정보 요청 후 먼저 랜더링해서 보여ㅜ기
const GamePage = () => {
  const gameId = useParams().id;
  const dumy = gamesDumy.filter((el) => el.id === Number(gameId));
  console.log(dumy);
  return (
    <>
      <Header />
      <Back>
        <Box>
          <Title dumyTitle={dumy[0].title} dumyGenre={dumy[0].genre} />
          <Main>
            <ImgBox dumyImg={dumy[0].screenshops} />
            <PriceList />
            가격정보 더미 보내기
          </Main>
        </Box>
      </Back>
    </>
  );
};

export default GamePage;
