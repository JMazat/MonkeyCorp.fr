// //TODO
const express = require('express')
const app = express()
const port = 5000


const Get = (props) => {
  props.app.get(props.resource, props.do)
  return null
}

const Routes = (props) => {
}

// TODO passer props aux enfants
<Routes>
  <Get app={app} resource='/' do={(req, res) => {
    res.send('Hello World!')
  }}/>
</Routes>

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
