import styled from 'styled-components';
import { game5dumy } from './Dumy/Game5dumy';
const Games = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  cursor: pointer;
`;
const Background = styled.section`
  background-color: white;
  display: grid;
`;
const Screenshot = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GameName = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//인기 게임 5개 목록 만들기
const Game5List = () => {
  const arr = [
    { screen: '사진', name: '게임1' },
    { screen: '사진', name: '게임2' },
    { screen: '사진', name: '게임3' },
    { screen: '사진', name: '게임4' },
    { screen: '사진', name: '게임5' },
  ];
  return (
    <Background>
      {arr.map((el, id) => (
        <Games key={id}>
          <Screenshot>{el.screen}</Screenshot>
          <GameName>{el.name}</GameName>
        </Games>
      ))}
    </Background>
  );
};

export default Game5List;
