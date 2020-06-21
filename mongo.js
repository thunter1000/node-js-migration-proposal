import { MongoClient, Db } from 'mongodb'

const url = 'mongodb://mongo:mongo@localhost:33157'
const dbName = "test"

/**
 * @type {MongoClient}
 */
let client

/**
 * @type {Db}
 */
let db

let isInit = false

const init = async () => {
  if (isInit)
    return // Already connected
  client = new MongoClient(url, { useNewUrlParser: true })

  try {
    await client.connect()
    db = client.db(dbName)
    isInit = true
  } catch(err) {
    console.error('Failed to connect to database', err.message)
    throw(err)
  }
}

export const close = async () => {
  if (!isInit)
    return
  client.close()
  db, client = undefined
  isInit = false
}

/**
 * Get the mongo client object
 * 
 * @async
 * @function getClient
 * @returns {Promise<MongoClient>}
 */
export const getClient = async () => (await init()) || client

/**
 * Get the database
 * 
 * @async
 * @function getDB
 * @return {Promise<Db>}
 */
export const getDB = async () => (await init()) || db
