import db from '../db/index'
import { pre, post } from '../utils/httpUtils'

//Mark as get
export default function handler(request, response) {
    if(pre(request, response)) {
        var sql = 'update account set used = true, time = now() where id = '
        console.log('data',request.method)
        request.on('data',data => {
            var params = JSON.parse(data.toString())
            console.log(params)
            if(params.id) {
                db.query(sql + params.id, (err, data) => {
                    if(err) {
                        return response.send('错误：' + err.message)
                    }
                    post(request, response, 200, data)
                })
            }
        })
    }
  }