let db = require('../db/index')
let dateFormat = require('dateformat');

exports.get = (req, res) => {
    let today = new Date().setHours(0,0,0,0)
    var sql = 'select id, email, password from account where used = false or time < "today" limit 1'
    var time = dateFormat(today, 'yyyy-mm-dd HH:MM:ss')
    db.query(sql.replace('today',time), (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.all = (req, res) => {
    var sql = 'select id, email, password from account'
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.used = (req, res) => {
    var sql = 'update account set used = true, time = now() where id = '
    req.on('data',data => {
        var params = JSON.parse(data.toString())
        if(params.id) {
            db.query(sql + params.id, (err, data) => {
                if(err) {
                    return res.send('错误：' + err.message)
                }
                res.send(data)
            })
        }
    })
}

