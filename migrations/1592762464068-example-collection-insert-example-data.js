import { getDB } from "../mongo"

const exampleData = [
  {
    _id: "test",
    name: "Testing document"
  },
  {
    _id: "foo",
    name: "Foo"
  },
  {
    _id: "bar",
    name: "Bar"
  }
]


export const up = async () => {
  const db = await getDB()
  const collection = db.collection('example-collection')
  
  await collection.insertMany(exampleData)

}

export const down = async () => {
  const db = await getDB()
  const collection = db.collection('example-collection')
  
  await collection.deleteMany({ _id: { $in : exampleData.map(d => d._id) }})
}
