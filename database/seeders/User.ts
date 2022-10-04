import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    return User.createMany([
      {
        id:1,
        email: 'email_teste@gmail.com',
        username: 'Maria Guimaraes',
        password: 'teste123'
      },
      {
        id:2,
        email: 'emailteste@gmail.com',
        username: 'Gustavo Medeiros',
        password: 'teste456'
      },

    ])
  }
}
