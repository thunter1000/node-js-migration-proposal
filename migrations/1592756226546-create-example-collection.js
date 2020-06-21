import { getDB } from "../mongo"


export const up = async () => {
  const db = await getDB()
  
  await db.createCollection("example-collection")
}

export const down = async () => {
  const db = await getDB()

  if(await db.listCollections({ name: 'example-collection' }).hasNext())
    await db.dropCollection("example-collection")
}
