import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://tezos-easya.vercel.app/api'
    : 'http://localhost:3000/api'

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})
