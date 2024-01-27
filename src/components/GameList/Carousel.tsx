import styled, { keyframes } from 'styled-components';
import Game5List from './Game5List';
import { useRecoilValue } from 'recoil';
import { dumySelector } from '../../recoil/store';
import { useNavigate } from 'react-router-dom';

const CarouselBack = styled.section`
  width: 75%;
  /* height: 290px; */
  /* border: 1px solid; */
  //background-color: white;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-gap: 10px;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 25px;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 85%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
/*
  display: grid;
  grid-template-columns: 1fr 2.5fr;
*/
const ImgBoxDetail = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  justify-content: right;
  column-gap: 12px;
  > div {
    &.icon {
      border-radius: 10px;
      width: 60px;
      height: 30px;
      text-align: center;
      line-height: 32px;
      background-color: RGB(0, 116, 228);
      font-size: 20px;
    }
    &.cost {
      text-decoration: line-through;
      font-size: 1.2vw;
      color: rgba(255, 255, 255, 0.4);
    }
    &.discount {
    }
  }
`;

const Carousel = () => {
  const navigate = useNavigate();
  const viewGame = useRecoilValue(dumySelector);
  return (
    <CarouselBack>
      <ImgBox onClick={() => navigate(`/gamePage/${viewGame.id}`)}>
        <Img src={viewGame.screenshop} alt="test" />
        <ImgBoxDetail>
          <div className="name">{viewGame.name}</div>
          <Price>
            <div className="icon">{viewGame.discount}</div>
            <div className="cost">{viewGame.original_price}원</div>
            <div className="discount">{viewGame.final_price}원</div>
          </Price>
        </ImgBoxDetail>
      </ImgBox>
      <Game5List />
    </CarouselBack>
  );
};

export default Carousel;
