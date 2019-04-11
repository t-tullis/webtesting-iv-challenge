const db = require('../data/dbConfig.js');
const Users= require('./users-model')

describe('Users model', () => {
        //Clean up before each test of the model
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
            let user = await Users.create({ name: 'Luis' });
            expect(user.name).toBe('Luis')

            user = await Users.create({ name: 'Chris' })
            expect(user.name).toBe('Chris')
        })
    })
})