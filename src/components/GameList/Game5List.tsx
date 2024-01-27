import styled, { keyframes } from 'styled-components';
import { dumyGame5ListSelector, numberAtom } from '../../recoil/store';
import { useRecoilValue, useRecoilState } from 'recoil';
import { memo, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
const selectKeyframes = keyframes`
  from{
    width: 0%;
  }
  to{
    background-color: white;
    width: 100%;
  }
  
`;
const SelectBox = styled.div`
  animation: ${selectKeyframes} 6s linear infinite;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  border-radius: 12px;
  z-index: -1;
`;
//!! styled component props tpye 지정 방법 두가지
/**
1. interface 지정
interface GamesPropsType {
  isSelect: boolean;
}
2. 전달하는 변수자체를 type 지정
**/
const Games = styled.div<{ isSelect: boolean }>`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-gap: 3px;
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 12px;

  ${(props) =>
    props.isSelect && 'background-color: rgba(255, 255, 255, 0.03);'};
`;
const Background = styled.section`
  display: grid;
`;
const Screenshot = styled.img`
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;
const GameName = styled.div`
  padding: 4px;
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
  const navigate = useNavigate();
  const dumyData = useRecoilValue(dumyGame5ListSelector);
  const [numSelect, setNumSelect] = useRecoilState(numberAtom);
  // 구현하고싶은것 5게임 목록중 하나만 애니메이션 효과주고 그 애니메이션 효과 끝나면 다음 게임항목 애니메이션 적용
  // 1. 목록을 지정해주는 상태(번호,숫자) 만들기
  // 2. 상태 숫자 게임목록만 애니메이션 진행
  // 3. 애니메이션 끝나면 상태 변경(다음 게임 목록으로)
  const handleGameClick = (idx: number, id: number) => {
    if (numSelect === idx) {
      navigate(`/gamePage/${id}`);
    } else {
      setNumSelect(idx);
    }
  };
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
          onClick={() => handleGameClick(idx, el.id)}
          isSelect={numSelect === idx}
        >
          {numSelect === idx && <SelectBox />}
          <Screenshot src={el.screenshop} />
          <GameName>{el.name}</GameName>
        </Games>
      ))}
    </Background>
  );
};

export default Game5List;
