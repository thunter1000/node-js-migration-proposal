import { getDB } from "../mongo"


export const up = async () => {
  const db = await getDB()
  const collection = db.collection('example-collection')

  collection.deleteOne({ _id: 'test' })
}

export const down = async () => {
  const db = await getDB()
  const collection = db.collection('example-collection')

  collection.insertOne({
    _id: 'test',
    name: 'Testing document'
  })
}
