import { useState } from 'react';
import styled from 'styled-components';

const Back = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid;
  display: flex;
  flex-direction: column;
`;
const MainImg = styled.img`
  width: 100%;
  padding: 25px;
  transition: opacity 100ms ease-in-out;
  &:hover {
    transform: translateX(100px);
  }
`;
const SideImg = styled.div`
  border: 1px solid;
  height: 10%;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: space-around;
  > img {
    border: 1px solid;
    width: 10%;
  }
`;
// React Transition Group  라이브러리 사용해보기 출처 https://velog.io/@ljw4536/react-transition-group-%EC%9C%BC%EB%A1%9C-%ED%99%94%EB%A9%B4%EC%9D%84-%EB%B6%80%EB%93%9C%EB%9F%BD%EA%B2%8C-%EC%A0%84%ED%99%98%EC%8B%9C%ED%82%A4%EA%B8%B0
//넘어오는 이미지 갯수 정해져있나? 정해져 있으면 맞게 ui 작성, 안정해져있으면 옆으로 넘겨 볼수있는 형식으로 구현하기

/*
1. 애니메이션 구현
2. 라이브러 다운후 구현하기
*/
export const ImgBox = ({ dumyImg }: { dumyImg: string[] }) => {
  const [selectImg, setSelectImg] = useState(dumyImg[0]);
  return (
    <Back>
      <MainImg src={selectImg} />
      <SideImg>
        <button>옆</button>
        {dumyImg.map((el) => (
          <img key={el} src={el} onClick={() => setSelectImg(el)} />
        ))}
        <button>옆</button>
      </SideImg>
    </Back>
  );
};
