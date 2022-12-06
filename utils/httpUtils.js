exports.pre = (req, res) => {
    if(req.method === 'OPTIONS') {
        this.post(req, res, 200, null)
        return false
    }
    // 校验头部信息
    return true
}

exports.post = (req, res, status, data) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*, Authorization")
    res.setHeader("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
    res.status(status).send(data)
}