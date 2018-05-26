import algoliasearch from 'algoliasearch'

const client = algoliasearch('C7J24N1MLA', 'a018857510a666cb9b206bb11d26f411')

export const addSearchObjects = (indexName, data) => {
  const index = client.initIndex(indexName)

  index.addObjects(data, err => {
    if (err) {
      console.error(err)
    }
  })
}
