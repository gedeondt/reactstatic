import React from 'react'
import { Link } from 'react-static'
import { Hits, InstantSearch, SearchBox } from 'react-instantsearch/dom'

const Post = props => {
  const { id, title } = props.hit
  return (
    <div>
      <Link to={`/blog/post/${id}`} title={title}>
        {title}
      </Link>
    </div>
  )
}

export default () => (
  <InstantSearch appId="C7J24N1MLA" apiKey="1e0ce16c9396fc7a8d3e9ad5faf083bc" indexName="posts">
    <SearchBox />
    <Hits hitComponent={Post} />
  </InstantSearch>
)
