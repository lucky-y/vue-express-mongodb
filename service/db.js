const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Test', { useNewUrlParser: true }, err => {
    if (err) console.log('**********【数据库连接失败】**********')
    else console.log('**********【数据库连接成功】**********')
})
const Models = {}
module.exports = Models