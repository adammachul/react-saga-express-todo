import styled from 'styled-components';

const TextInput = styled.input`
    height: 30px;
    width: 100%;
    border-radius: 10px;
    border: none;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;

    &:focus {
        outline: none;
    }
`;

export default TextInput;