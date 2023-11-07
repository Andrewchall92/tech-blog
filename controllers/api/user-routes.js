const router = require('express').Router();
const { User } = require('../../models');


// creates a new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            // session variables
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (error) {
        res.status(400).json(error);
    }
});


// logs in a user
router.post('/login', async (req, res) => {
    try {
        // find the user
        const userData = await User.findOne({ where: { email: req.body.email } });

        // if the user is not found
        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // if the user is found, check the password
        const validPassword = await userData.checkPassword(req.body.password);

        // if the password is not valid
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // if the password is valid, save the session variables
        req.session.save(() => {
            // session variables
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (error) {
        res.status(400).json(error);
    }
});


// logs out a user
router.post('/logout', (req, res) => {
    // if the user is logged in
    if (req.session.logged_in) {
        // destroy the session variables
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        // if the user is not logged in
        res.status(404).end();
    }
});


module.exports = router;