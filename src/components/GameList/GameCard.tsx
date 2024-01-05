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
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 160px;
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
