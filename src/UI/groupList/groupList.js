import React from "react";
import styled from "styled-components";
import propTypes from 'prop-types'

const List = styled.ul`
  list-style: none;
`;

const Icon = styled.i`
  path {
    fill: #3671c9;
  }
`;

const Text = styled.span`
  margin-left: 0.5rem;
`;

const groupList = ({data}) => {
  
  const el = data.map(i => (
    <li key={i.id} className='p-1'>
      <Icon className="fas fa-check" />
      <Text>{i.text}</Text>
    </li>
  ));
  return <List>{el}</List>;
};

checkboxes.defaultProps = {
  data: [
    {
      id: 1,
      text: 'item1'
    }
  ]
};

checkboxes.propTypes = {
  data: data.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      text: propTypes.string
    })
  ).isRequired
};

export default groupList;
