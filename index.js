import { send } from 'micro-core'
import sleep from 'then-sleep'

export default async function (req, res) {
  console.log('waiting half a second')
  await sleep(500)
  console.log('sending response')
  send(res, 200, 'Good to go!\n')
}
