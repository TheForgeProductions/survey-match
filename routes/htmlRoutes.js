const router = require('express').Router();
path = require('path');
router.route('/survey')
    .get((req, res) => {
        // res.sendFile(__dirname, '../pages/survey.html')
        res.sendFile(path.join(__dirname, '../pages', 'survey.html'));
        // res.sendFile(path.join(__dirname, '../pages', 'survey.js'))
    });

router.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '../pages', 'home.html'))
    });

module.exports = router;
