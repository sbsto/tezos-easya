import type { NextApiRequest, NextApiResponse } from 'next'

interface RequestData extends NextApiRequest {
  body: {
    value: string
  }
}

type ResponseData = {
  message: string
}

export default function contribute(
  req: RequestData,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === 'POST') {
    console.log(req.body.value)
    return res.status(201).json({ message: req.body.value })
  }
  return res.status(404).json({ message: `Cannot ${req.method} /contribue` })
}
