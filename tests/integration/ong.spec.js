const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    beforeAll(async ()=>{
        await connection.destroy();
    });

    it('should be able to crea a new ONG.', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', '')
            .send({
                name: "Polifio2",
                email: "contato@polifio.com.br",
                whatsapp: "11995980358",
                city: "Rio do Sul",
                uf: "SC"
            });
        console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})