import React from 'react'
import styled from 'styled-components'
// import { NewsList } from './NewsList'
import { MapSample } from './MapSample'

const Header = styled('div')`
  background-color: darkseagreen;
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
`

const HeaderImg = styled('img')`
  height: 24px;
  width: 24px;
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
        <HeaderImg src={`${STATIC_PATH}img/fork.svg`} />
        <HeaderText>ヘッダー</HeaderText>
        <HeaderImg src={`${STATIC_PATH}img/fork.png`} alt="fork png" />
        <HeaderImg src={`${STATIC_PATH}img/subDirSample/subsub/images.png`} alt="fork png" />
      </Header>
      <MapSample />
      {/* <NewsList /> */}
    </>
  )
}
