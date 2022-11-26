import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function helloWorld(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method === 'GET') {
    return res.status(200).json({ message: 'Hello world!' })
  }
  return res.status(404).json({ message: 'Route not found.' })
}
