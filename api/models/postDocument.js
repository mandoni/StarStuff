//postDocument

const mongoose = require('mongoose')

var postDocument = mongoose.model('postDocument',
{
    title : {type:String},
    encabezado : {type:String},
    seccion : {type:String},
    documento : {type:String},
    urlImg : {type:String},
    urlFuente : {type:String},
}/*,'postDocument'*/)

module.exports = { postDocument }
