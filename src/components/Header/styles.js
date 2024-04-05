import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoint"

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  padding: 16px 0;
  

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  > h1 {
    font-size: 2rem;
  }
`;

export const Menu = styled.button`
  border: none;
  background: none;
  display: none;

  >svg{
    color: ${({ theme }) => theme.COLORS.BLUE_300};
    font-size: 2.5rem;
  }

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    display: block;
  }



`