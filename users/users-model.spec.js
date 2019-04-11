const db = require('../data/dbConfig.js');
const Users= require('./users-model')
const request = require('supertest')

describe('Users model', () => {
        // Clean up before each test of the model
        beforeEach(async () => {
            await db('users').truncate()
        });

        describe('create()', () => {
            it('should create the provided users', async () => {     
                await Users.create({ name: 'Brian' });
                await Users.create({ name: 'Stewie' });
    
                const users = await db('users');
                expect(users).toHaveLength(2)
        })
        it('should create the provided user', async () => {     
            let user = await Users.create({ name: 'Lois' });
            expect(user.name).toBe('Lois')

            user = await Users.create({ name: 'Chris' })
            expect(user.name).toBe('Chris')
        })
    })
    describe('remove()', () => {
        it('should remove the provided user id', async () => {   
            //creating users to remove for test
            await Users.create({ name: 'Lois' });
            await Users.create({ name: 'Chris' });
            await Users.create({ name: 'Big Fat Pauly' })
            //removing a user by id
            await Users.remove('1');
            //Getting users
            const users = await db('users');
            expect(204)
            expect(users).toHaveLength(2)
        })
        it('check if the content with that id is removed', async () => {   
            await Users.create({ name: 'Lois' });
            await Users.create({ name: 'Chris' });
            await Users.create({ name: 'Big Fat Pauly' })
            //removing a user by id
            await Users.remove('2');
            //Getting users
            const users = await db('users');

            let deletedUser = await Users.findById(2)
            let existingUser = await Users.findById(1)
            expect(deletedUser).toBe(undefined)
            expect(existingUser.name).toEqual('Lois')
        })
    })
})
