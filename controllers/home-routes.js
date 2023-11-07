const router = require('express').Router();
const { User, Post, } = require('../models');
const withAuth = require('../utils/auth');



// get the login page

// router.get('/login', async (req, res) => {
//     try {
//         if (req.session.logged_in) {
//             res.redirect('/dashboard');
//             return;
//         }
//         console.log('login page');
//         res.render('login');
//     } catch (err) { res.status(500).json(err); }
// });


router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
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
router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['user_name'],
                },
            ],
        });

        const post = postData.get({ plain: true });

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all posts by a user
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            ...user,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;