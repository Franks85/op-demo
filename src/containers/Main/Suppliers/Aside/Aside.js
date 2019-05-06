import React, { Component } from 'react'
import styled from 'styled-components'
import {searchBar} from '../../../../components/Main/Suppliers/aside/searchBar'
import CategoryList from '../../../../components/Main/Suppliers/aside/category'

const SearchBox = styled.div`
`;

class Aside extends Component {
render () {
  return (
    <div>
      <SearchBox>
      {searchBar}
      </SearchBox>
      <CategoryList />
    </div>
   )
  }
 }

export default Aside