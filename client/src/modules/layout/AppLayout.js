import styled from 'styled-components';

const BaseContainerStyle = styled.div`
  background: ${props => props.theme.foreground}; 
  border-radius: 5px;
  border: 0 solid ${props => props.theme.borderColor};
  padding: 10px;
  color: ${props => props.theme.textColor};
`;

const BaseNavigationStyle = styled.div`
  background: ${props => props.theme.foreground};
  border-color: ${props => props.theme.borderColor};
  border-style: solid;
  border-width: 0;
  padding: 10px;
  color: ${props => props.theme.textColor};
`;

export const Container = styled.div`
  display: grid;

  grid-template-areas:
    "header header header"
    "nav content side"
    "footer footer footer";
  
  grid-template-columns: auto minmax(960px, auto) auto;
  grid-template-rows: 50px 1fr 50px;
  grid-gap: 10px;

  height: 100vh;
  background: ${props => props.theme.background};
`;

export const Header = BaseNavigationStyle.extend`
  grid-area: header;
  border-bottom-width: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = BaseContainerStyle.extend`
  grid-area: nav;
  margin-left: 0.5rem;
`;

export const Main = BaseContainerStyle.extend`
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Sidebar = BaseContainerStyle.extend`
  grid-area: side;
  margin-right: 0.5rem;
`;

export const Footer = BaseNavigationStyle.extend`
  grid-area: footer;
  border-top-width: 0;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;
