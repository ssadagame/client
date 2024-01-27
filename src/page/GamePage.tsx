import styled from 'styled-components';
import Header from '../components/Header';
const Back = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
`;
const Box = styled.section``;
const Title = styled.div``;
const Main = styled.div``;
const ImgBox = styled.div``;
const PriceList = styled.div``;
// 게임 정보 요청
// 게임 가격 요청 -> 두가지 요청 다를게, 가격요청이 시간이 걸려 정보 요청 후 먼저 랜더링해서 보여ㅜ기
const GamePage = () => {
  return (
    <>
      <Header />
      <Back>
        <Box>
          <Title>게임 이름 그리고 게임 장르</Title>
          <Main>
            <ImgBox>이미지</ImgBox>
            <PriceList>가격 리스트,표</PriceList>
          </Main>
        </Box>
      </Back>
    </>
  );
};

export default GamePage;
