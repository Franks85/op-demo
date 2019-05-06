import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navigation/navbar'
import HeaderTop from '../../components/HeaderTop/headerTop'
import {navLinkLeft, navLinkRight} from '../../components/navigation/navLinkConfig'
import logoRight from '../../Util/img/aset_logo.gif'

const Wrapper = styled.div`
`
class Header extends Component {
render () {
  return (
    <Wrapper>
      <HeaderTop logoRight={logoRight}/>
      <Navbar linkLeft={navLinkLeft} linkRight={navLinkRight}/>
    </Wrapper>
   )
  }
 }

export default Header