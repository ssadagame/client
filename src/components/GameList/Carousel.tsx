import styled from 'styled-components';
import test_img from '../../assets/img/배틀그라운드_중.jpeg';
const Back = styled.section`
  width: 70%;
  height: 300px;
  border: 1px solid;
  //background-color: white;
  margin-top: 20px;
  display: flex;
`;
// const Box = styled.div``;
const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 25px;
  width: 68%;
`;
const Img = styled.img`
  width: 100%;
  height: 85%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
const ImgBoxDetail = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  height: 15%;
  align-items: center;
  margin-right: 15px;
  margin-left: 15px;
  font-size: 1.6vw;
  > div {
    &.name {
      font-family: 'Monomaniac One', sans-serif;
    }
  }
`;
const Price = styled.div`
  /* font-family: 'Monomaniac One', sans-serif; */
  /* font-family: 'Work Sans', sans-serif; */
  display: flex;
  align-items: center;
  > div {
    &.icon {
      border-radius: 10px;
      width: 60px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      background-color: RGB(0, 116, 228);
      font-size: 1.3vw;
      margin-right: 5px;
    }
    &.cost {
      text-decoration: line-through;
      margin-right: 5px;
      color: rgba(255, 255, 255, 0.4);
    }
    &.discount {
    }
  }
`;
const GameList = styled.div``;
const Game = styled.div``;
const Carousel = () => {
  return (
    <Back>
      <ImgBox>
        <Img src={test_img} alt="test" />
        <ImgBoxDetail>
          <div className="name">PUBG: BATTLEGROUNDS</div>
          <Price>
            <div className="icon">50%</div>
            <div className="cost">50,000원</div>
            <div className="discount">25,000원</div>
          </Price>
        </ImgBoxDetail>
      </ImgBox>

      <GameList>
        목록 박스
        <Game>게임1</Game>
        <Game>게임2</Game>
        <Game>게임3</Game>
        <Game>게임4</Game>
      </GameList>
    </Back>
  );
};

export default Carousel;
