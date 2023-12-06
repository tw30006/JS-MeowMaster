// const jsonServer = require('json-server')
// const auth = require('json-server-auth')

// const app = jsonServer.create('')
// const router = jsonServer.router('db.json')

// // /!\ Bind the router db to the app
// app.db = router.db

// // You must apply the auth middleware before the router
// app.use(auth)
// app.use(router)
// app.listen(3000)

// const dataServer = jsonServer.create('');
// const authServer = jsonServer.create('');

// const dataRouter = jsonServer.router('db.json'); // 修改為你的數據文件路徑
// const authRouter = jsonServer.router('db.json'); // 修改為你的數據文件路徑

// dataServer.db = dataRouter.db;
// authServer.db = authRouter.db;

// // 設定 json-server-auth 中間件
// authServer.use(auth);

// const dataPort = 3000; // 修改為你想使用的數據伺服器端口
// const authPort = 4000; // 修改為你想使用的身份驗證伺服器端口

// dataServer.use(dataRouter);
// dataServer.listen(dataPort, () => {
//   console.log(`JSON Server (data) is running on port ${dataPort}`);
// });

// authServer.use(authRouter);
// authServer.listen(authPort, () => {
//   console.log(`JSON Server (auth) is running on port ${authPort}`);
// });

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()

// /!\ Bind the router db to the app
app.db = router.db

// You must apply the auth middleware before the router
app.use(auth)
app.use(router)
app.listen(4000)