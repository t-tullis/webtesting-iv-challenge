const request = require('supertest')
const server = require('./server.js')

describe('Server.js up and running', () => {
    describe('GET /', () => {
        it('Should respond with 200 OK Status', () => {
            return request(server)
            .get('/')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })
        it('should return { Challenge: "Server up and running" }', () => {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({Challenge: 'Server up and running'})
            })
        })
    })
})