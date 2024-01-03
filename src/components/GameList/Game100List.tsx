import styled from 'styled-components';
import GameCard from './GameCard';
const Back = styled.section`
  display: grid;
  width: 75%;
  border: 1px solid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: 1fr 1fr; */
  /* align-content: space-between;
  justify-items: center; */
  /* justify-content: space-between; */
`;
const Game100List = () => {
  return (
    <Back>
      {/* 인기게임 100 게임 리스트 표시 */}
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </Back>
  );
};

export default Game100List;
