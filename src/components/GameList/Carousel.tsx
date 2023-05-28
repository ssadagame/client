import styled from 'styled-components';
import test123 from '../../assets/img/testImg1.png';
const Back = styled.div`
  width: 70%;
  height: 250px;
  border: 1px solid;
  background-color: white;
  margin-top: 20px;
`;

const Carousel = () => {
  return (
    <Back>
      <img src={test123} alt="test" width={'100%'} height={'100%'} />
    </Back>
  );
};

export default Carousel;
