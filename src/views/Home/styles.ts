import COLORS from "helpers/colors";
import styled, { css } from "styled-components";
import EngineeringIcon from '@mui/icons-material/Engineering';

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${COLORS.grayAlto};
  text-align: center;
  font-weight: bold ;
  font-size: 24px;
  width: 100%;
  margin: 20px 10px;

  & > p {
    margin: 10px 0;
  }
;`

const Theme = {
  fonts: {
    body: `IBM Plex Sans, sans-serif`,
    heading: `IBM Plex Sans, sans-serif`,
  }
}

export const Navbar = styled.nav`
  background: ${COLORS.danube};
  font-family: ${Theme.fonts.heading};
  padding: 1px 20px;
  color: ${COLORS.violetPigment};
  display: flex;
  align-items: center;
  justify-content: space-between;
  a { color: ${COLORS.black}; 
    text-decoration: none;
   }
 `;

export const Brand = styled.a`
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  margin-left: 1rem;
  padding-right: 1rem;
`;

export const Text = styled.p`
  font-size: 18px;
  padding-right: 50px;
  text-overflow: ellipsis;
  font-style: italic;
  color: ${COLORS.black};
  cursor: pointer;
`;

export const ProvidersContainer = styled.div`
    display: grid;
    margin: 1% 10%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 10px;
    max-width: 1024px;
`;

export const Provider = styled.div`
    width: calc(100vw/4 - 20px);
    padding: 25px;
    border-radius: 10px;
    border: 1px solid ${COLORS.grayAlto};
    cursor: pointer;
`;

export const ProviderText = styled.p`
    font-size: 18px;
    margin: 0 0 2px;
    text-overflow: ellipsis;
    font-family: 'OpenSans';
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    ${({ isBold }: { isBold?: boolean }) =>
    isBold &&
    css`
        font-weight: bold;
        font-size: 20px;
        white-space: nowrap;
    `};
`;

export const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    height: 100%;
    width: 100%;
`;

export const ProviderIcon = styled(EngineeringIcon)`
    width: 150px !important;
    height: 150px !important;
`;

export const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    width:100%;
    padding: 10px 0 5px 0;
    text-overflow: ellipsis;
    & > p {
        margin: 0 5px 0 5px;
    }
`;

export const StarDiv = styled.div`
  color: ${COLORS.gold};
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
export const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%
`;
