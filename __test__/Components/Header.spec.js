import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from '../../src/Components/Header';

const defaultProps = {};

const shallowComponent = (props = defaultProps) =>
  shallow(<div>{ Header(props) }</div>);

describe('Test Components -> Header', () => {
  it('should transfer all properties correct', () => {
    const headers = ['Name', 'Age', 'Address'];
    const wrapper = shallowComponent({ headers });
    expect(wrapper.find('th').at(0).text()).to.equal('Name');
    expect(wrapper.find('th').at(1).text()).to.equal('Age');
    expect(wrapper.find('th').at(2).text()).to.equal('Address');
  });

  it('should throw null if dose\'t provide headers', () => {
    const wrapper = shallowComponent();
    expect(wrapper.find('thead').length).is.equal(0);
  });
});
