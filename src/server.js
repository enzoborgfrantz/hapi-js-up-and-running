import hapi, { Server } from 'hapi';
import { users } from './models/user.model';
import { connectToDatabase } from './database';
import { createUser, getUser, getUsers } from './controllers/user.controller';

const startServer = () => {
  connectToDatabase();

  const server = new Server();

  server.connection({
    host: 'localhost',
    port: 8010
  });

  // create
  server.route({
    method: 'GET',
    path: '/users/new',
    handler: createUser,
  })

  // read
  server.route({
    method: 'GET',
    path: '/users/{username}',
    handler: getUser,
  });

  // update

  // delete

  // list
  server.route({
    method: 'GET',
    path: '/users',
    handler: getUsers,
  });

  server.start(() => console.log(`server running at ${server.info.uri}`));
}

export { startServer };
