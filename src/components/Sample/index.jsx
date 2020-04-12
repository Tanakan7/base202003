import React from 'react'
import styled from 'styled-components'
// import { NewsList } from './NewsList'
import forkPng from '../../img/fork.png'
import forkSvg from '../../img/fork.svg'
import forkSubDirSvg from '../../img/subDirSample/subsub/images.png'
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
  console.log(HOST_PREFIX)
  return (
    <>
      <Header>
        <HeaderImg src={forkSubDirSvg} alt="forkSVG" />
        <HeaderText>ヘッダー</HeaderText>
        <HeaderImg src={forkPng} alt="forkPNG" />
        <HeaderImg src={forkSvg} alt="forkSVG" />
      </Header>
      <MapSample />
      {/* <NewsList /> */}
    </>
  )
}
