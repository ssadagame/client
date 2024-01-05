import styled, { keyframes } from 'styled-components';
import {
  dumyGame5List,
  dumyGame5ListSelector,
  numberAtom,
} from '../../recoil/store';
import { useRecoilValue, useRecoilState } from 'recoil';
import { memo, useEffect, useMemo } from 'react';
const testKeyframes = keyframes`
  from{
    width: 0%;
  }
  to{
    background-color: white;
    width: 100%;
  }
  
`;
const TestBox = styled.div`
  animation: ${testKeyframes} 6s linear infinite;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  border-radius: 12px;
  z-index: -1;
`;
const Games = styled.div<{ test123: boolean }>`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  cursor: pointer;
  position: relative;
  border-radius: 12px;
  /* numSelect == 번호 같으면 아래 스타일 보여주기 */
  /* background-color: ${(test123) => (test123 ? 'red' : 'bole')}; */
`;
const Background = styled.section`
  /* background-color: white; */
  display: grid;
  padding: 2px;
`;
const Screenshot = styled.img`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;
const GameName = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
//인기 게임 5개 목록 만들기
//순수 함수란?
//useEffect 문제점 파악하기
//단방향 React만 사용시 props drilling 문제 발생, 랜더링도 관련된 페이지 다되서 불필요
//그래서 전역 상태관리 라이브러리 사용
const Game5List = () => {
  const dumyData = useRecoilValue(dumyGame5ListSelector);
  const [numSelect, setNumSelect] = useRecoilState(numberAtom);
  // 구현하고싶은것 5게임 목록중 하나만 애니메이션 효과주고 그 애니메이션 효과 끝나면 다음 게임항목 애니메이션 적용
  // 1. 목록을 지정해주는 상태(번호,숫자) 만들기
  // 2. 상태 숫자 게임목록만 애니메이션 진행
  // 3. 애니메이션 끝나면 상태 변경(다음 게임 목록으로)
  useEffect(() => {
    let timeOut = setTimeout(() => {
      let next = numSelect + 1 < 5 ? numSelect + 1 : 0;
      setNumSelect(next);
    }, 6000);
    return () => clearTimeout(timeOut);
  }, [numSelect]);
  return (
    <Background>
      {dumyData.map((el, idx) => (
        <Games
          key={el.id}
          onClick={() => setNumSelect(idx)}
          test123={numSelect === idx}
        >
          {numSelect === idx && <TestBox />}
          <Screenshot src={el.screenshop} />
          <GameName>{el.name}</GameName>
        </Games>
      ))}
    </Background>
  );
};

export default Game5List;
