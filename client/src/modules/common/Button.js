import styled from 'styled-components';

const Button = styled.button`
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    border: none;
    padding: 12px 24px;
    border-radius: 10px;
    width: 100%;

    &:focus {
        outline: none;
    }
`;

export default Button;