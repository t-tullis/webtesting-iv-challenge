const request = require('supertest')
const server = require('./server.js')

describe('Server.js up and running', () => {
    describe('GET /users', () => {
        it('Should respond with 200 OK Status', () => {
            return request(server)
            .get('/users')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })
        it('should return users as json', () => {
            return request(server)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(200);
        })
    })
    describe('POST /users', () => {
        it('Should respond with 201 Create Status', () => {
            return request(server)
            .post('/users')
            .send({name: 'Terrell'})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
        })
    })
    describe('Delete /users/:id', () => {
        it('Should respond with 204 No content Status', () => {
            return request(server)
            .delete('/users/3')
            .set('Accept', 'application/json')
            .expect(204)
        })
    })
})