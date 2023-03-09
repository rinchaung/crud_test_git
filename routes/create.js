const express = require('express');
const router = express.Router();

const createController = require('../controllers/createController');

router.get('/', createController.showPost);
router.post('/create_post', createController.createPost); // Create posts
router.get('/list_post', createController.listPost); // Show posts
router.get('/edit_post/:id', createController.editPost); // Edit posts
router.post('/update_post/:id', createController.updatePost); // Update posts
router.post('/delete_post/:id', createController.deletePost); // Delete posts

module.exports = router;