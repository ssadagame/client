import styled from 'styled-components';

const Text = styled.h2`
  color: rgba(255, 255, 255, 0.8);
  font-size: 25px;
  text-align: center;
  font-family: 'Gamja Flower', cursive;
`;
/*
font-family: 'IBM Plex Sans KR', sans-serif;
font-family: 'Nanum Pen Script', cursive;
font-family: 'Noto Sans KR', sans-serif;
*/

const IntroductionText = () => {
  return (
    <Text>
      어서오세요👋 <br /> 모든 게임을 최저가로 구입 해보세요! <br /> 원하는
      게임을 검색해주세요
    </Text>
  );
};

export default IntroductionText;
