import styled from 'styled-components';
import TypeList from '../TypeList';

const Back = styled.div`
  /* border: 1px solid rgba(255, 255, 255, 0.7); */
  width: 300px;
  height: 210px;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 25px;
  transition: all 1s;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
`;

const Img = styled.img`
  width: 100%;
  /* height: 160px; */
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

const ImgBoxDetail = styled.div`
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  height: 100%;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > div {
    &.name {
      font-size: 17px;
      font-family: 'Monomaniac One', sans-serif;
    }
    &.final_price {
    }
  }
  &:hover {
    height: 300px;
    border: 1px solid;
    background-color: red;
  }
`;

const GameCard = ({ gameList }: TypeList.TypeProps) => {
  return (
    <Back>
      <Img src={gameList.screenshop} alt="test" />
      <ImgBoxDetail>
        <div className="name">{gameList.name}</div>
        <div className="final_price">{gameList.final_price}원</div>
      </ImgBoxDetail>
    </Back>
  );
};

export default GameCard;
