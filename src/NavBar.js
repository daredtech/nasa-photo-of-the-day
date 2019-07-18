import React from "react";
import Logo from "./Logo";
import { Segment } from 'semantic-ui-react'
import styled from "styled-components";
import "./App.css";

const Title = styled.h3`
font-size: 3rem;
color: #0b3d91;
padding-bottom: 1%;
`

const NavBar = () => (
  <Segment >
    <Logo width='200px'/>
    <Title> Astronomy Picture of the Day </Title>
  </Segment>

);
export default NavBar;


