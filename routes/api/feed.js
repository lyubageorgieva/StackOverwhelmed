const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const request = require('superagent');
const auth = require('../../middleware/auth');


const Feed = require('../../modules/Feed');
const User = require('../../modules/User');
const Profile = require('../../modules/Profile');

// @route       GET api/feed
// @description Test route
// @access      Private             //this section is for posts to be added to the feed by a user
router.post('/',[auth,[
    check('text','Test Required').not().isEmpty()
]],
async  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }


    try{
const user = await User.findById(req.user.id).select('-password');

    const newFeedPOST = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: request.user.id
    }

    const feedP = await newFeedPOST.save();

    res.json(feedP);

    }
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    

});




// @route       GET api/feed
// @description get all posts
// @access      Private         //why? because you cant see the posts page unless you have an account

router.get('/', auth,async (req,res) => {


    try{

                const feedposts = await Feed.find().sort({
                    date: -1                //most recent first
                });
                res.json(feedposts);

    } catch (error)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});





// @route       GET api/feed/:id
// @description get feed posts by ID
// @access      Private         //why? because you cant see the posts page unless you have an account

router.get('/:id', auth,async (req,res) => {


    try{

                const feedpost = await Feed.findById(req.params.id);

                if (!feedpost){
                    return res.status(404).json({msg: 'Post not found'});
                }


                res.json(feedpost);

    } catch (error)
    {
        console.error(err.message);


        if (error.kind === 'ObjectId'){
            return res.status(404).json({msg: 'Post not found'});
        }


        res.status(500).send('Server Error');
    }
});




// @route       DELETE api/feed/:id
// @description delete post from user based on their ID
// @access      Private         //why? because you cant see the posts page unless you have an account

router.get('/:id', auth,async (req,res) => {


    try{

                const feedpost = await Feed.findById(req.params.id);
                
                if (!feedpost){
                    return res.status(404).json({msg: 'Post not found'});
                }
                        //check user

                        if(feedpost.user.toString() !== req.user.id){

                            return res.status(401).json({msg: 'User not authorized'});
                        }
                            await feedpost.remove();

                        res.json({msg: 'Feed Post removed'});



    } catch (error)
    {
        if (error.kind === 'ObjectId'){
            return res.status(404).json({msg: 'Post not found'});
        }
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




// @route       PUT api/feed/votes/:id
// @description upvote on a post
// @access      Private        

router.put('/votes/:id', auth, async (req,res) =>{
    try{

            const feedpost = await Feed.findById(req.params.id);

            // Check if the post has been voted on by this user
           

            if(feedposts.votes.filter(vote => vote.user.toString() === req.user.id).lenght>0){          //if greater than 0, then theyve used their vote

                    return res.status(400).json({msg: 'You have exceeded your limit of votes for this post'});
                                }
            feedpost.votes.unshift({user: req.user.id});

            await feedpost.save();              //saves this value back into the database linked to the post id

            res.json(feedpost.votes);


    }
    catch (error){
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});






//the following will remove the upvote and downvote and save that value back into the array








// @route       PUT api/feed/undownvote/:id
// @description undownvote on a post
// @access      Private                             //if this doesnt work then remove one and change Feed.js in modules to just "votes:"

router.put('/unvote/:id', auth, async (req,res) =>{
    try{

            const feedpost = await Feed.findById(req.params.id);

            // Check if the post has been voted on by this user
           

            if(feedpost.votes.filter(vote => vote.user.toString() === req.user.id).lenght===0){          //if greater than 0, then theyve used their downvote

                    return res.status(400).json({msg: 'You have not used your downvote yet for this post'});
                                }
            
               const removeIndex = feedpost.votes.map(vote => vote.user.toString()).indexOf(req.user.id);

               feedpost.votes.splice(removeIndex, 1);

            await feedpost.save();              //saves this value back into the database linked to the post id

            res.json(feedpost.votes);


    }
    catch (error){
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});





















// export route
module.exports = router;