# Example Project for Managing MongoDB's Index's

Using the [Migrate](https://github.com/tj/node-migrate) library to demo how to manage index's.

1. `docker-compose up -d` -- Starts a mongo database through docker.
2. Open compass and connect to `mongodb://mongo:mongo@localhost:33157`.
3. Run `npm run up` to apply all the changes.
4. Run `npm run down -- 1592762974021-example-collection-remove-test-doc.js` to revert the last change.

## Creating a New Migration

1. `npm run create -- name-of-the-migration`.

## Listing Migrations.

1. `npm run list`.

## Reset or Remove Mongo Instance

1. `docker-compose rm -v`.
2. Delete the `.migrate` file which stores the migrations applied to the database.
3. `docker-compose up -d` - if you want to start fresh.