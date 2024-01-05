import styled from 'styled-components';
import GameCard from './GameCard';
import { useRecoilValue } from 'recoil';
import { dumyGame5List } from '../../recoil/store';
const Back = styled.section`
  display: grid;
  width: 75%;
  /* border: 1px solid rgba(255, 255, 255, 0.8); */
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  row-gap: 20px;
  column-gap: 10px;
`;
const Game100List = () => {
  const viewGames = useRecoilValue(dumyGame5List);
  return (
    <Back>
      {/* 인기게임 100 게임 리스트 표시 */}
      {viewGames.map((el) => {
        return <GameCard key={el.id} gameList={el} />;
      })}

      {/* <GameCard />
      <GameCard />
      <GameCard />
      <GameCard /> */}
    </Back>
  );
};

export default Game100List;
