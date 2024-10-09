// //TODO
// import 'core-js'  // peut etre important (https://babeljs.io/docs/babel-preset-env#corejs)

import express from 'express'
const app = express()
const port = 5000


const Get = (props) => {
  props.app.get(props.resource, props.do)
  return null
}

const Routes = (props) => {
}

const App = (props) => {
  props.app.listen(props.port, props.do)
}

// TODO passer props aux enfants
<App 
  app={app}
  port={port}
  do = {() => console.log(`Example app listening on port ${port}`)}
>
  <Routes>
    <Get app={app} resource='/' do={(req, res) => {
      res.send('Hello World!')
    }}/>
  </Routes>
</App>
