const router = require('express').Router();
const { User, Post, } = require('../models');
const withAuth = require('../utils/auth');



// get the login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

// render newpost page
router.get('/newpost', withAuth, (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    res.render('newpost');
});

// get all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['user_name'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));
        // console.log(posts);

        res.render('homepage', {
            posts: posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        // console.log(err);
        res.status(500).json(err);
    }
});

// get a post by id
router.get('/api/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['user_name'],
                },
            ],
        });
        console.log(postData);
        const post = postData.get({ plain: true });
        console.log(post);
        res.render('post', {
            post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all posts by a user
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
                
                
        });
         const post = (postData).map((post) => post.get({ plain: true }));
        const user = await User.findOne({
            where: {
                id: req.session.user_id
            }
        })
        console.log(req.session.user_id);
        res.render('dashboard', {
            post,
            logged_in: req.session.logged_in,
            user
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;