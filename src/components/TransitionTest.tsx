import { useState } from 'react';
import { Transition } from 'react-transition-group';

export const TransitionTest = () => {
  const [is, setIs] = useState(false);
  const onClickHandler = () => {
    setIs(!is);
  };
  // https://www.datoybi.com/react-transition-group/ 확인후 https://velog.io/@ljw4536/react-transition-group-%EC%9C%BC%EB%A1%9C-%ED%99%94%EB%A9%B4%EC%9D%84-%EB%B6%80%EB%93%9C%EB%9F%BD%EA%B2%8C-%EC%A0%84%ED%99%98%EC%8B%9C%ED%82%A4%EA%B8%B0
  // Transition in 속성이 true 면 보이고 false 안보이게
  // timeout 속성은 entering에서 entered로, eixiting에서 exited로 전환할 때 걸리는 시간입니다.
  return (
    <>
      <button onClick={onClickHandler}>Open Modal</button>
      <Transition in={is} timeout={300}>
        {(state) => <p>{state} : 변경</p>}
      </Transition>
    </>
  );
};
