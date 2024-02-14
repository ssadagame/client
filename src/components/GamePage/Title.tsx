import styled from 'styled-components';
const Back = styled.div`
  color: white;
  border: 1px solid;
  width: 80%;
  height: 15%;
  > div {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }
`;

export const Title = ({
  dumyTitle,
  dumyGenre,
}: {
  dumyTitle: string;
  dumyGenre: string[];
}) => {
  return (
    <Back>
      {dumyTitle}
      <div>
        {dumyGenre.map((el) => (
          <div key={el}>{el}</div>
        ))}
      </div>
    </Back>
  );
};
