import React from 'react'
import styled from 'styled-components'

const Header = styled('div')`
  background-color: darkseagreen;
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
`

const HeaderText = styled('p')`
  color: #fff;
`

export const Sample = () => {
  // eslint-disable-next-line no-undef
  console.log(HOST_PREFIX)
  // eslint-enable-next-line no-undef
  return (
    <>
      <Header>
        <HeaderText>ヘッダー</HeaderText>
      </Header>
      <div>sampleだよ</div>
    </>
  )
}
