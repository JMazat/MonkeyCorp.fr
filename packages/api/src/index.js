// //TODO
// import 'core-js'  // peut etre important (https://babeljs.io/docs/babel-preset-env#corejs)
import {declare, set_context, set_context_deep} from './jsx/runtime'
import express from 'express'
const app = express()
const port = 5000

const Get = ({app, url, callback}) => {
  app.get(url, callback)
}

const Resource = ({app, url, children}) => {
  set_context(children, {url: url})
}

const Routes = ({}) => {}  // balise vide pour décoration

const App = ({app, port, callback, children}) => {
  app.listen(port, callback)  //TODO notion d'entrypoint : exécuter cette ligne à la fin (après declare)

  set_context_deep(children, {app: app})
}

<App 
  app={app}
  port={port}
  callback = {() => console.log(`Example app listening on port ${port}`)}
>
  <Routes>
    <Resource url='/'>
      <Get callback={(req, res) => {  //TODO meilleure API pr callbacks
        res.send('Hello World!')
      }}/>
    </Resource>
    <Resource url='/test'>
      <Get callback={(req, res) => {
        res.send('Test ok')
      }}/>
    </Resource>
  </Routes>
</App>

declare() //TODO doit être invisible
