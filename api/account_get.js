import db from '../db/index'
let dateFormat = require('dateformat')
import { pre, post } from '../utils/httpUtils'

//Mark as get
export default function handler(request, response) {
    if(pre(request, response)) {
        var sql = 'select id, email, password from account where used = false or time < "today" limit 1'
        var time = dateFormat(new Date(), 'yyyy-mm-dd')
        db.query(sql.replace('today', time), (err, data) => {
            if(err) {
                return response.send('错误：' + err.message)
            }
            post(request, response, 200, data)
        })
    }
  }