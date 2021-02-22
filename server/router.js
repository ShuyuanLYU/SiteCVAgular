var express = require('express')
var router = express.Router()
var db = require('./database')
var Comment = require('./Model/Comment')
var timeDiff = require('./js/timeDiff')
var count = 0

router.get('/', (req, res) => {
    res.send('App Works !!!!');
});
router.get('/api/messages', async(req, res) => {
    console.log("api/messages" + (count++));

    try {
        const comments = await Comment.find({}).lean().exec(function(err, comments) {
            comments.forEach(c => {
                c.timeDiff = timeDiff.calculTime(new Date(), c.creatTime)
            });
            res.send(comments)
        })
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router