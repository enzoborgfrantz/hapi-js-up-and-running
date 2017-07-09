import { User } from '../models/user.model';

// create
const createUser = (request, reply) => {
  const newUser = User({ username: 'james', password: '666' });
  newUser.save((error, newUser ) => {
    if(error) {
      console.log(error);
    }
    reply(`Saved: ${newUser}`);
  })
}

// read
const getUser = (request, reply) => {
  User.find({'username' : request.params.username },(error, docs) => {
    if(error) {
      console.log('error bruh: ');
    }
    reply(docs.length ? docs : `User ${request.params.username} not found`);
  })
}

// update

// delete

// list
const getUsers = (request, reply) => {
  User.find((error, docs) => {
    if(error) {
      console.log('error m8:', docs);
    }
    reply(docs);
  });
}

export { createUser, getUser, getUsers };
