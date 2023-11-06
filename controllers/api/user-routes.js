const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', (req, res) => {
    try {
        User.findAll({})
    } catch (err) {
        res.status(500).json(err);
    }
});










module.exports = router;