import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cart from '../../app/Models/Cart';

export default class extends BaseSeeder {
  public async run () {
    return Cart.createMany([
      {
        id:1,
        product_id: 1,
        user_id: 2,
        unit: 2,
        total:110.00
      },
      {
        id:2,
        product_id: 2,
        user_id: 1,
        unit: 4,
        total: 120.00
      },

    ])
  }
}
