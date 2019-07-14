import * as request from 'supertest'

async function get(app, url) {
    return await request(app).get('/apiv1/units')
}

export {get}