import styled from 'styled-components';
import colors from 'resources/colors';

export interface PropsMenu {
  openMenu?: boolean;
  backgroundDark?: boolean;
  isActive?: boolean;
  idiomaSelecionado?: boolean;
}

export const ContainerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 89px;
  padding-right: 55px;
`;

export const ContainerContent = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  position: static;
  background-color: 'transparent';
  transform: 'none';
  top: 'auto';
  right: 'auto';
  width: 'auto';
  height: auto;
  padding-top: 'auto';
  transition: 'none';
`;

export const Item = styled.li<PropsMenu>`
  display: flex;
  justify-content: center;
  padding: 8px;
  margin: 5px 21px;
  color: ${colors.white};
`;

export const ItemNav = styled(Item)`
  width: 100%;
  white-space: nowrap;
  cursor: ${props => (props.isActive ? 'default' : 'pointer')};
  :hover {
    background-color: 'none';
  }
`;
