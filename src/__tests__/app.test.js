import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import {findTestByAttr} from '../Util/test/index'

const setup = (props) => {
  const component = shallow(<App {...props}/>);
  return component;
}

describe('App component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  })
  it('renders without crashing', () => {
    // console.log(component.debug())
    const wrapper = findTestByAttr(component, 'app');
    expect(wrapper.length).toBe(1)
  })
  
})