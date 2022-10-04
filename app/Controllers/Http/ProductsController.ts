import Database from '@ioc:Adonis/Lucid/Database'

export default class ProductsController {
  public async listAll() {
    return Database.from('products').select('*')
  }
}
