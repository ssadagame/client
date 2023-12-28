import styled, { keyframes } from 'styled-components';
import { dumyGame5List, numberAtom } from '../../recoil/store';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
const testKeyframes = keyframes`
  from{
    background-color: black;
    width: 0%;
  }
  to{
    background-color: white;
    width: 100%;
  }
  
`;
// const TestBox = styled.div`
//   animation: ${testKeyframes} 3s linear infinite;
//   /* position: relative; */
//   z-index: 900px;
// `;
const Games = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  cursor: pointer;
`;
const Background = styled.section`
  /* background-color: white; */
  display: grid;
  padding: 2px;
`;
const Screenshot = styled.img`
  padding: 2px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const GameName = styled.div`
  padding: 2px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//인기 게임 5개 목록 만들기
//순수 함수란?
//단방향 React만 사용시 props drilling 문제 발생, 랜더링도 관련된 페이지 다되서 불필요
//그래서 전역 상태관리 라이브러리 사용
const Game5List = () => {
  const dumyData = useRecoilValue(dumyGame5List);
  const numSelector = useSetRecoilState(numberAtom);
  return (
    <Background>
      {dumyData.map((el) => (
        <Games key={el.id} onClick={() => numSelector(el.id)}>
          {/* <TestBox /> */}
          <Screenshot src={el.screenshop} />
          <GameName>{el.name}</GameName>
        </Games>
      ))}
    </Background>
  );
};

export default Game5List;
