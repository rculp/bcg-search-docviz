import { shallow, mount } from 'enzyme';

import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const props = {
    changeHandler: jest.fn(),
    submitHandler: jest.fn()
  };
  it('renders and matches our snapshot', () => {
    const component = shallow(
      <SearchBar {...props} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should fetch results when submit button is clicked', () => {
    const component = mount(
      <SearchBar {...props} searchValue="testSearchValue" />
    );
    component.find(Button).simulate('click');
    expect(props.submitHandler).toHaveBeenCalled();
  });

  it('should switch to the loading icon when loading results', () => {
    props.isLoading = true;
    const component = mount(
      <SearchBar {...props} />
    );
    expect(component.find('.loadIcons')).to.have.length(1);
  });

  it('should change search value when input value changes', () => {
    const mockEvent = {
      target: {
        value: 'test'
      }
    };
    const component = shallow(
      <SearchBar {...props} />
    );
    component.find(Input).simulate('change', mockEvent);
    expect(props.changeHandler).toHaveBeenCalledWith('test');
  });
});
