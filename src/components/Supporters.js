import React from "react";
import styled from "styled-components";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';


const Contributers = styled.div`
  border-top: 1px solid ${props => props.theme.colors.secondary};
  margin-top: 30px;
  margin-left:30px;
  margin-bottom: 20px;
  @media (max-width: ${props => props.theme.responsive.medium}) {
    margin-right: 80px;
    }
`
const ContributerList = styled.ul`
  margin-bottom: 40px;

    a {
      color: ${props => props.theme.colors.primary}
    }
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

  svg {
    margin-right: 40px;
    font-size: 40px;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: all .2s;
    :hover{
      color: ${props => props.theme.colors.secondary};
    }
  }
  svg:first-child {
    margin-left: 50px;
  }
  
`;

const Supporters = () => {
  return (
    <Contributers>
      <SubMenu>partners</SubMenu>
      <ContributerList>
        <a href="https://echo100plus.com/en" rel="noopener noreferrer" target="_blank"><li>Echo 100 Plus</li></a>
        <Author>An Austrian charity helping refugees</Author>
        <a href="https://issuu.com/echo100plus/docs/web_2" rel="noopener noreferrer" target="_blank">Zine</a>
        <Author>A publication by and for refugees</Author>
    
      </ContributerList>
      <Border />
      <SubMenu>Follow</SubMenu>
      <SocialMedia>
        <a ><FaFacebookSquare/></a>
        <a href="https://github.com/cesarnml/macrame" rel="noopener noreferrer" target="_blank"><FaGithubSquare/></a>
        <a href="https://twitter.com/PabloShampoo" rel="noopener noreferrer" target="_blank"><FaTwitterSquare /></a>
      </SocialMedia>
    </Contributers>
  );
};

export default Supporters;
