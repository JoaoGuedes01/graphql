const data = [
    { id: '1', name: 'jonas pistolas', username: 'jonasboi', email: 'jonaspistolas@email.com', password: '123', age: 21 },
    { id: '2', name: 'Rui Gay', username: 'ruigay', email: 'ruigay@email.com', password: '321', age: 21 },
    { id: '3', name: 'Alberto Rosas', username: 'pretagorda', email: 'pretagorda@email.com', password: 'aaaaaa', age: 25 },
    { id: '4', name: 'Dudas Gayzao', username: 'dudasboi', email: 'dudasboi@email.com', password: 'sougaysim111', age: 21 },
];

const resolvers = {
    Query: {
        getAllUsers() {
            return data;
        }
    },
    Mutation: {
        createUser(parent, args) {
            const newUser = args;
            data.push(newUser);
            const response = {
                code: 200,
                message: 'User created successfully'
            }
            return response
        }
    }
};

module.exports = { resolvers }