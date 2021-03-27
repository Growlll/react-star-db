import React from 'react';
import styled from 'styled-components';

const InfoStyle = styled.div`
  margin: 0 auto;
  display: flex;

  & > .col-md-12 {
    padding: 0;
  }
`

const Row = ({left, right}) => {
  return (
    <InfoStyle className='row mb2'>
      <div className='col-lg-6'>
        {left}
      </div>

      <div className='col-lg-6'>
        {right}
      </div>
    </InfoStyle>
  )
}

export default Row;