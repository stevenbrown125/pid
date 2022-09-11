import { NextApiRequest, NextApiResponse } from 'next'
import IProduct from '../../types/IProduct'

const products: IProduct[] = []

export default (req: NextApiRequest, res: NextApiResponse) => {
  let query = req.query.q === undefined ? '' : req.query.q
  let query2 = ''
  if (Array.isArray(query)) {
    query2 = query.join(' ')
  } else {
    query2 = query
  }

  const results = req.query.q
    ? products.filter((product) => product.title.toLowerCase().includes(query2))
    : []

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}
