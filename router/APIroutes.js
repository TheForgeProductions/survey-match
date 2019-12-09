const router = require('express').Router();
const friends = require('../data/friends');
const matcher = require('../matcher');

router.route('/api/friends') 
    .get((req, res) => {
        res.json(friends);
    })
    .post((req, res) => {
        matcher(req).then((match) => {
            res.send(`Heres your match: ${match}`);
        })
    });

module.exports = router;