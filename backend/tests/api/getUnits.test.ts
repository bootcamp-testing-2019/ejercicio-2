import {get} from '../requests'
import initializeApp from '../../app'

let app

beforeAll( async (done) => {
    app = await initializeApp()

    done()
})

afterAll( async (done) => {
    await app.closeConnection()

    done()
})

test('gets all the units', async (done) => {
    const response = await get(app, '/apiv1/units')

    expect(response.body).toEqual({
        units: [
            { id: 1, name: 'unidades' },
            { id: 2, name: 'docena'},
            { id: 3, name: 'gr'},
            { id: 4, name: 'kg' }
        ]
    })

    done()
})