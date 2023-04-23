import styled from 'styled-components';

const Text = styled.h2`
  color: white;
  font-size: 20px;
  text-align: center;
`;

const IntroductionText = () => {
  return (
    <Text>
      어서오세요👋 <br /> 모든 게임을 최저가로 구입 해보세요! <br /> 원하는
      게임을 검색해주세요
    </Text>
  );
};

export default IntroductionText;
