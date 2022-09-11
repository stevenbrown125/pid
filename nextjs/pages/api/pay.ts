
import {Client, Environment} from 'square'
import { randomUUID} from 'crypto'
import { NextApiRequest, NextApiResponse } from 'next'


const { paymentsApi } = new Client({
  accessToken: process.env.SQ_ACCESS_TOKEN,
  environment: Environment.Sandbox
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


  if(req.method === 'POST') {
    try {
    const { result: {payment }} = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        amount: BigInt(1000),
        currency: 'USD',        
      }
    })
    console.log(payment)
    const result = JSON.stringify(payment, (key, value) => {
      return typeof value === "bigint" ? parseInt(value.toLocaleString()) : value;
    }, 4);
    console.log(result);
    res.json({
      result
    });
  } catch (error:any) {
    res.json(error.result);
  }
  } else {
    res.status(500).send('Error 500')
  }

 // res.status(200).json({ name: 'John Doe' })
}
