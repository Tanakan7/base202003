import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Wrap, ImgWrap, TextWrap, Link, Author } from './style'

const apiKey = '649caef10367497da6a59d88ef149b76'
const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=${apiKey}`

export const NewsList = () => {
  const [articles, setArticles] = useState([])

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL)
      setArticles(response.data.articles)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <ul>
      {articles.map((item, idx) => (
        <Wrap key={`title${idx}`}>
          <ImgWrap>
            <img src={item.urlToImage} alt={item.title} />
          </ImgWrap>
          <TextWrap>
            <Link href={item.url}>{item.title}</Link>
            <Author>{item.author}</Author>
          </TextWrap>
        </Wrap>
      ))}
    </ul>
  )
}
