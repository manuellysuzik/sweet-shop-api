// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from '@ioc:Adonis/Lucid/Database'

export default class CartsController {
  public async addProducts({ request, response }) {
    const products = request.body()

    const formatProductsArray = products.map(({ product: { price, id }, unit }) => {
      return {
        user_id: 1,
        product_id: id,
        unit: unit,
        total: unit * price,
      }
    })

    await Database.table('carts').multiInsert(formatProductsArray)
    return response.send({
      message: 'products added successfully',
      products: formatProductsArray,
    })
  }
}
