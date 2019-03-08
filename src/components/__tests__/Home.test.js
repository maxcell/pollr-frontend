// import React from 'react';
// import { shallow } from 'enzyme';
// import App from '../App';


// // a shallow rendering test to try it out
// it('renders without crashing', () => {
//   shallow(<App />);
// });

// import "../setupTests";

import React from 'react'
import { shallow } from 'enzyme'
import { Link} from 'react-router-dom'
import Home from '../Home'


it('renders App', () => {
  const wrapper = shallow(<Home/>)
  expect(wrapper.contains("Welcome to Pollr")).toBe(true)
})