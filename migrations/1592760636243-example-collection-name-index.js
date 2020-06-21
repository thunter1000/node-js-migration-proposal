import { getDB } from "../mongo"


export const up = async (next) => {
  const db = await getDB()
  const collection = db.collection('example-collection')

  await collection.createIndex('name', {
    name: 'name_index'
  })
  
}

export const down = async (next) => {
  const db = await getDB()
  const collection = db.collection('example-collection')

  if(await collection.indexExists('name_index'))
    await collection.dropIndex('name_index')
}
