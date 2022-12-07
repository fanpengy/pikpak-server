let express = require('express')
let https = require('https')
let fs = require('fs')
let app = express()
let cors = require('cors')
let dotenv = require("dotenv").config()
let accountService = require('./service/accountService')
var options = {
    key: fs.readFileSync('./certificate/privatekey.pem'),
    cert: fs.readFileSync('./certificate/certificate.pem'),
    ca: fs.readFileSync('./certificate/certrequest.csr')
}

app.use(express.urlencoded({extended: false}))
app.use(cors())              //配置跨域，必须在路由之前
app.use(accountService)


const httpsServer = https.createServer(options, app)

// app.listen(3600, () => {
//     console.log('服务器启动成功')
// })

httpsServer.listen(3600, () => {
    console.log('服务器启动成功');
})