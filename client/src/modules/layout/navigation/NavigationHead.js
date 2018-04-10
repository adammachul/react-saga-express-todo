import styled from 'styled-components';

const NavigationHead = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    line-height: 50px;

    &:after {
        content: '';
        width: 80%;
        height: 2px;
        background: ${props => props.theme.borderColor};
    }
`;

export default NavigationHead;