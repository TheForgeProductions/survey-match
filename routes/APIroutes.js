const router = require('express').Router();
const friends = require('../data/friends');
const matcher = require('../matcher');

router.route('/friends') 
    .get((req, res) => {
        res.json(friends);
        console.log("api-friends")
    })
    .post((req, res) => {
        matcher(req).then((match) => {
            res.json(match);
        })
    });

module.exports = router;