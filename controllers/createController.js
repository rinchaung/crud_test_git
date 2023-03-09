const Create = require('../models/create');

createPost = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    const postData = await new Create({
        name : name,
        email : email
    });

    await postData.save();
    res.redirect('/list_post');
}

showPost = async (req, res) => {
    res.render('show_post');
}

listPost = async (req, res) => {
    const users = await Create.find({});
    res.render('list_post', { users : users });
}

editPost = async (req, res) => {
    const id = req.params.id;

    const user = await Create.findById({_id : id}).exec();
    res.render('edit_post', { user : user });
}

updatePost = async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;

    await Create.findByIdAndUpdate(id, {
        name : name,
        email : email
    }, {new : true});

    res.redirect('/list_post');
}

deletePost = async (req, res) => {
    const id = req.params.id;
    await Create.findByIdAndDelete(id);
    res.redirect('/list_post');
}

module.exports = {
    createPost,
    showPost,
    listPost,
    editPost,
    updatePost,
    deletePost
}