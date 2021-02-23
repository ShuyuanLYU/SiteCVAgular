var express = require('express')
var router = express.Router()
var db = require('./database')
var Comment = require('./Model/Comment')
var timeDiff = require('./js/timeDiff')
var count = 0

router.get('/api/messages', async(req, res) => {
    console.log("api/messages" + (count++));

    try {
        const messages = await Comment.find({}).lean().exec(function(err, messages) {
            messages.forEach(c => {
                c.timeDiff = timeDiff.calculTime(new Date(), c.creatTime)
            });
            res.send(messages)
        })
    } catch (err) {
        res.status(400).send(err)
    }
})
router.post('/api/newMessage', function(req, res) {
        new Comment(req.body).save()
            .then(function(data) {
                res.send('ok')
            }, function(err) {
                console.log(err)
                res.status(500).send(err)
            })
    })
    /* router.get('/api/messages/edit', function(req, res) {
        Comment.findById(req.query._id).lean().exec(function(err, comment) {
            if (err)
                return res.status(500).send('Server error')
            res.send(comment)
        })
    })
    router.post('/api/messages/edit', function(req, res) {

        Comment.findOneAndUpdate({ _id: req.body._id }, {
                title: req.body.title,
                message: req.body.message,
                editTime: new Date
            },
            function(err, ret) {
                if (err) {
                    return res.status(500).send('Server error')
                }
                res.send('ok')
            })
    })
    router.get('/api/messages/delete', function(req, res) {
        Comment.findByIdAndDelete(req.query._id)
            .then(function(ret) {
                res.send('ok')
            }, function(err) {
                return res.status(500).send('Server error')
            })
    }) */

module.exports = router