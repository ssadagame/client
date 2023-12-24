import styled, { css } from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { useState } from 'react';

interface StylePropsType {
  isFocus: boolean;
}

const Back = styled.main`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.div<StylePropsType>`
  width: 50%;
  height: 50px;
  border: 1px solid #8e9499;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${(props) =>
    props.isFocus
      ? css`
           {
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(0, 0, 0, 0);
          }
        `
      : css`
           {
            border: 1px solid #8e9499;
          }
        `}
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(0, 0, 0, 0);
  }
`;
const Text = styled.input`
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  border: 0px;
  height: 80%;
  width: 88%;
  color: white;
  font-size: 18px;
`;

const SearchBox = () => {
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = (state: boolean) => {
    setIsFocus(state);
  };
  return (
    <Back>
      <SearchBar isFocus={isFocus}>
        <GoSearch color="#8E9499" />
        <Text
          type="text"
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
        />
      </SearchBar>
    </Back>
  );
};
export default SearchBox;
