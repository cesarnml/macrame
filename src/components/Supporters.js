import React from "react";
import styled from "styled-components";

const Contributers = styled.div`
  border-top: 1px solid lightgray;
  margin-top: 30px;
  margin-left:30px;
  margin-bottom: 20px;
  @media (max-width: ${props => props.theme.responsive.medium}) {
    margin-right: 80px;
    }
`
const ContributerList = styled.ul`
  margin-bottom: 40px;
`;

const Border = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
`;

const SubMenu = styled.p`
  margin-top: 3px;
  font-size: 1.0rem;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.fourth};
`;

const Author = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 1.0rem;
`;

const SocialMedia = styled.div`
  display: flex;

  i {
    margin-right: 40px;
    font-size: 40px;
    :hover{
      
    }
  }
  i:first-child {
    margin-left: 50px;
  }
  
`;



const Supporters = () => {
  return (
    <Contributers>
      <SubMenu>partners</SubMenu>
      <ContributerList>
        <li>Echo 100 Plus</li>
        <Author>An Austrian charity helping refugees</Author>
        <li>Zine</li>
        <Author>A publication by and for refugees</Author>
    
      </ContributerList>
      <Border />
      <SubMenu>Follow</SubMenu>
      <SocialMedia>
        <i className="fab fa-github-square" />
        <i className="fab fa-facebook-square" />
        <i className="fab fa-twitter-square" />
      </SocialMedia>
    </Contributers>
  );
};

export default Supporters;
