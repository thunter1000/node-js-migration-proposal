# Example project for managing MongoDB Index's.

Using the [Migrate](https://github.com/tj/node-migrate) library to demo how to manage index's.

1. `docker-compose up -d` -- Starts a mongo database through docker.
2. Open compass and connect to `mongodb://mongo:mongo@localhost:33157`.
3. Run `npm run up` to apply all the changes.
4. Run `npm run down -- 1592762974021-example-collection-remove-test-doc.js` to revert the last change.