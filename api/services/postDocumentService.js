var ObjectID = require('mongoose').Types.ObjectId
var { postDocument } = require('../models/postDocument')

module.exports = {
    getDocument: async () => {
        return postDocument.find((err, docs) => {
            if (!err) {
                return docs
            }
            else {
                console.log('Error al leer los registros: ' + JSON.stringify(err, undefined, 2))
                return []
            }
        })
    },
    getDocumentById: async (id) => {
        return postDocument.findById(id, (err, docs) => {
            if (!err) {
                return docs
            }
            else {
                console.log('Error al leer los registros: ' + JSON.stringify(err, undefined, 2))
                return []
            }
        }
        )
    },
    deleteDocument: async (id) => {
        postDocument.findByIdAndRemove(id, (err, docs) => {
            if (!err) {
                return docs
            } else {
                console.log('Error al eliminer el registro: ' + JSON.stringify(err, undefined, 2))
                return []
            }
        })
    }
}
