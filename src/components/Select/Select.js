import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
    <StyledSelect value={value} onChange={onChange}>
      {children}
      
    </StyledSelect>
    <Icon id='chevron-down' style={{'position':'absolute', 'top':50+'%', 'transform': 'translateY(-50%)', 'right': 16+'px', 'pointer-events': 'none'}}/>
    </SelectWrapper>
  );
};


const SelectWrapper = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  padding: 16px;
  border-radius: 8px;
  width: fit-content;


  &:focus-visible{
  border: 2px solid blue;
  }
  

`

const StyledSelect = styled.select`
appearance: none;
position: relative;
font-size: 1rem;
color: ${COLORS.gray700};
border: none;
background-color: transparent;
width: fit-content;
padding-right: 32px;


&:hover {
color: ${COLORS.black}}


}


`







export default Select;


/* this is how I solved it. Josh did a different way where he put a presentational layer over top. */

