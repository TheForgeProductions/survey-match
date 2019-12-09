const router = require('express').Router();

router.route('/survey')
    .get((req, res) => {
        res.send('../pages/survey.html')
    });

router.route('/')
    .get((req, res) => {
        res.send('../pages/home.html')
    });

module.exports = router;
