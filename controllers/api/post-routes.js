const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Post, User, Comment } = require("../../models");

// create new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json(error);
  }
});

// get a post by id
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User, Comment }],
    });
    const post = postData.get({ plain: true });
    res.render("post", post);
  } catch (error) {
    res.status(400).json(error);
  }
});

// update a post
router.put("/:id", async (req, res) => {
    try {
        const postData = await Post.update(
            { ...req.body }, 
            {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        
        res.status(200).json(postData);
    } catch(error) {
        res.status(400).json(error);
    }
});

// delete a post
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
