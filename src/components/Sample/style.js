import styled from 'styled-components'

export const Wrap = styled('li')`
  height: 80px;
  display: flex;
  &:not(first-child) {
    border-top: solid 1px #e0e0e0;
  }
`

export const ImgWrap = styled('div')`
  & > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`

export const TextWrap = styled('div')`
  padding: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const Link = styled('a')`
  color: #333;
  font-size: 12px;
`

export const Author = styled('p')`
  color: gray;
  font-size: 8px;
  text-align: right;
`
