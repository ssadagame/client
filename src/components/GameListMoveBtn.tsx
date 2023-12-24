import styled, { keyframes } from 'styled-components';
import { ImArrowDown2 } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

const KeyframesTest = keyframes`
  0%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(0px);
  }
`;

const Box = styled.div`
  height: 70px;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 150px;
  font-family: 'Gamja Flower', cursive;
  font-size: 20px;
  svg {
    margin-top: 5px;
    animation: ${KeyframesTest} 1.5s infinite;
  }
  &:hover {
    cursor: pointer;
  }
`;

const GameListMoveIcon = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/GameList');
  };
  return (
    <Box
      onClick={() => {
        handleClick();
      }}
    >
      인기 게임 보러가기
      <ImArrowDown2 size={30} />
    </Box>
  );
};

export default GameListMoveIcon;
