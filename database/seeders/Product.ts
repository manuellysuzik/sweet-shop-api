import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class extends BaseSeeder {
  public async run() {
    return Product.createMany([
      {
        name: 'Chocolate Paradise',
        description: 'Delicioso cupcake feito de chocolate belga',
        price: 30.15,
        rate: 0,
        image_url:
          'https://media.gettyimages.com/photos/chocolate-cupcake-with-cream-tasty-cupcakes-with-ganache-muffin-picture-id1289886018?k=20&m=1289886018&s=612x612&w=0&h=GcayEn0f_ljpPdINX3Z7hvEVCUOmIsg35o7mjBPM_I4=',
      },
      {
        name: 'Sweet Sky',
        description: 'Feito de baunilha com chocolate branco',
        price: 28.99,
        rate: 3,
        image_url:
          'https://media.gettyimages.com/photos/chocolate-buttercream-cupcakes-with-walnuts-and-a-chocolate-drizzle-picture-id1187414661?k=20&m=1187414661&s=612x612&w=0&h=lW38eh3RIx08vm2W-IUNaEw-86vZKyz187yT9jr44fw=',
      },
      {
        name: 'Mamma',
        description: 'Cupcake com morango e chocolate meio amargo',
        price: 33.0,
        rate: 0,
        image_url:
          'https://media.gettyimages.com/photos/red-velvet-cupcakes-picture-id142328566?k=20&m=142328566&s=612x612&w=0&h=-bqpy8ccCIh5PQwJVKODofOkDTvwCfYUMISAFhQ6uCA=',
      },
    ])
  }
}
