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
    check('text','Text Required').not().isEmpty()
]],
async  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    try{
    const user = await User.findById(req.user.id).select('-password');

    const newFeedPOST = new Feed({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: user.id
    });

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

    } catch (err)
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

    } catch (err)
    {
        console.error(err.message);


        if (err.kind === 'ObjectId'){
            return res.status(404).json({msg: 'Post not found'});
        }


        res.status(500).send('Server Error');
    }
});




// @route       DELETE api/feed/:id
// @description delete post from user based on their ID
// @access      Private         //why? because you cant see the posts page unless you have an account

router.delete('/:id', auth,async (req,res) => {


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



    } catch (err)
    {
        if (err.kind === 'ObjectId'){
            return res.status(404).json({msg: 'Post not found'});
        }
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});




// @route       PUT api/feed/votes/:id
// @description vote on a post
// @access      Private        

router.put('/vote/:id', auth, async (req,res) =>{                   //this forces only answers or answers to have votes allowed
    try{

            const feedpost = await Feed.findById(req.params.id);

            // Check if the post has been voted on by this user
           

            if(feedpost.vote.filter(vote => vote.user.toString() === req.user.id).length > 0){          //if greater than 0, then theyve used their vote

                    return res.status(400).json({msg: 'You have exceeded your limit of votes for this post'});
            }
            feedpost.vote.unshift({user: req.user.id});

            await feedpost.save();              //saves this value back into the database linked to the post id

            res.json(feedpost.vote);


    }
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});






//the following will remove the upvote and downvote and save that value back into the array








// @route       PUT api/feed/undownvote/:id
// @description unvote on a post
// @access      Private                             //if this doesnt work then remove one and change Feed.js in modules to just "votes:"

router.put('/unvote/:id', auth, async (req,res) =>{             //this forces only answers  to have votes allowed
    try{

            const feedpost = await Feed.findById(req.params.id);

            // Check if the post has been voted on by this user
           

            if(feedpost.vote.filter(vote => vote.user.toString() === req.user.id).length ===0){          //if greater than 0, then theyve used their downvote

                    return res.status(400).json({msg: 'You have not used your downvote yet for this post'});
                                }
            
               const removeIndex = feedpost.vote.map(vote => vote.user.toString()).indexOf(req.user.id);

               feedpost.vote.splice(removeIndex, 1);

            await feedpost.save();              //saves this value back into the database linked to the post id

            res.json(feedpost.vote);


    }
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});





//HERE WE WILL ALLOW ANSWERS TO SPECIFIC POSTS







// @route       POST api/feed/answer/:id
// @description Answer on post
// @access      Private        

router.post('/answer/:id',[auth,[
    check('text','Text Required').not().isEmpty()
]],
async  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }


    try{
const user = await User.findById(req.user.id).select('-password');
const feedcom = await Feed.findById(req.params.id);



    const newAnswer =  {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: user.id
    }


    feedcom.answer.unshift(newAnswer);
 
    await feedcom.save();

    res.json(feedcom.answer);

    }
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    

});







// @route       DELETE api/feed/answer/:id/:answer_ID             //need to find which answer to delete
// @description Delete Answer on post
// @access      Private        

router.delete('/answer/:id/:answer_id', auth, async (req, res) => {



    try{

        const feedcom = await Feed.findById(req.params.id);  

        //get answer from post (pull out answer)

        const ans = feedcom.answer.find(ans => ans.id === req.params.answer_id);


            // Make sure answer exists

        if(!ans){
            return res.status(404).json({msg: 'Answer does not exist'});
        }

        //make sure that the user who made the answer is the one deleting it


        if(ans.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'User not authorized to delete answer'});
        }

        //get index to remove answer
        const removeIndex = feedcom.answer.map(ans => ans.user.toString()).indexOf(req.user.id);

        feedcom.answer.splice(removeIndex, 1);

     await feedcom.save();              //saves this value back into the database linked to the post id

     res.json(feedcom.answer);


    }catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }


}
    

);











+function maxChar(element)
{
    var max_chars = 280;

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
        return res.status(401).json({msg: 'Text has surpassed limit of characters'});

    }
}


//the person who originally posted their question will be able to vote on their favorite answer

 

// @route       PUT api/feed/bestanswer/user/:id/:answer_id'           //vote on the best response to YOUR post
// @description vote on best response
// @access      Private        

router.put('/answer/supervote/:id/:answer_id', auth, async (req,res) =>{                   
    try{
            const user = await User.findById(req.user.id).select('-password');
            const feedpost = await Feed.findById(req.params.id);
            const ans = await feedpost.answer.find(ans => ans.id === req.params.answer_id);          //ans is now equal to the answer_id
            // Check if the post has been voted on by this user
           
            if(feedpost.user.toString() !== user.id)
            {
                return res.status(400).json({msg: 'You are not the original author of the post and your request to supervote is denied'});
            }
            if(feedpost.user.toString() === user.id){
            

            if(ans.supervote.filter(supervote => supervote.user.toString() === user.id).length > 0){          //if greater than 0, then theyve used their best answer vote

                    return res.status(400).json({msg: 'You have exceeded your limit of best answer votes for this post'});
            }
            ans.supervote.unshift({user: user.id});

            await feedpost.save();              //saves this value back into the database linked to the post id

            res.json(feedpost.supervote);


    }
    
}
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});






//the following will remove the supervote or superdownnvote and save that value back into the array








// @route       PUT api/feed/unsupervote/User/:id
// @description Unsupervote a answer on your post
// @access      Private                             //if this doesnt work then remove one and change Feed.js in modules to just "votes:"

router.put('/answer/unsupervote/:id/:answer_id', auth, async (req,res) =>{             //this forces only answers or answers to have votes allowed
    try{
        
            const feedpost = await Feed.findById(req.params.id);
            const user = await User.findById(req.user.id).select('-password');
            // Check if the post has been voted on by this user
            const ans = await feedpost.answer.find(ans => ans.id === req.params.answer_id);          //ans is now equal to the answer_id
            if(ans.user.toString() !== user.id)
            {
                return res.status(400).json({msg: 'You are not the original author of the post and your request is denied'});
            }

            if(ans.user.toString() === user.id){


            if(ans.supervote.filter(supervote => supervote.user.toString() === user.id).length ===0){          //if greater than 0, then theyve used their downvote

                    return res.status(400).json({msg: 'You have not used your downvote yet for this post'});
                                }
            
               const removeIndex = ans.supervote.map(supervote => supervote.user.toString()).indexOf(user.id);

               ans.supervote.splice(removeIndex, 1);

            await feedpost.save();              //saves this value back into the database linked to the post id

            res.json(feedpost.supervote);


    }
}
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});









////////////////////
//comment on a post
////////////////////
// @route       POST api/feed/comment/:id
// @description comment  on a post
// @access      Private        

router.post('/comment/:id',[auth,[
    check('text','Text Required').not().isEmpty()
]],
async  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }


    try{
const user = await User.findById(req.user.id).select('-password');
const feedcom = await Feed.findById(req.params.id);



    const newcomment =  {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: user.id
    }


    feedcom.comment.unshift(newcomment);
 
    await feedcom.save();

    res.json(feedcom.comment);

    }
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    

});







// @route       DELETE api/feed/comment/:id/:comment_ID             //need to find which answer to delete
// @description delete comment to  post
// @access      Private        

router.delete('/comment/:id/:comment_id', auth, async (req, res) => {



    try{

        const comcomment = await Feed.findById(req.params.id);  

        //get answer from post (pull out answer)

        const comment = comcomment.comment.find(comment => comment.id === req.params.comment_id);


            // Make sure answer exists

        if(!comment){
            return res.status(404).json({msg: 'comment does not exist'});
        }

        //make sure that the user who made the answer is the one deleting it


        if(comment.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'User not authorized to delete comment'});
        }

        //get index to remove answer
        const removeIndex = comcomment.comment.map(comment => comment.user.toString()).indexOf(req.user.id);

        comcomment.comment.splice(removeIndex, 1);

     await comcomment.save();              //saves this value back into the database linked to the post id

     res.json(comcomment.comment);


    }catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }


}
    

);
















////////////////////
//comment on an answer
////////////////////
// @route       POST api/feed/answer/commentANSW/:id
// @description comment  on an answer
// @access      Private                 //need post_id to be able to get answer_id

router.post('/answer/commentANSW/:id/:answer_id',[auth,[            //we want to take the id of the answer and of the post in order to comment on them 
    check('text','Text Required').not().isEmpty()
]],
async  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }


    try{
const user = await User.findById(req.user.id).select('-password');
const feedcom = await Feed.findById(req.params.id);             //feedcom is now equal to the id of the post we are looking at 
const ans = await feedcom.answer.find(ans => ans.id === req.params.answer_id);          //ans is now equal to the answer_id



// Make sure answer exists

if(!ans){
return res.status(404).json({msg: 'Answer does not exist'});
}


const newcomment =  {
    text: req.body.text,
    name: user.name,
    avatar: user.avatar,
    user: user.id
}

ans.commentANSW.unshift(newcomment);
//feedcom.commentANSW.unshift(newcomment);            //adds newcomment to begining of commentANSW array 

await feedcom.save();

res.json(feedcom.commentANSW);

}
catch (err){
    console.error(err.message);
    res.status(500).send('Server Error');
}


});







// @route       DELETE api/feed/answer/comment/:id/:answer_id/:comment_id             
// @description delete comment to an answer
// @access      Private        

router.delete('/answer/commentANSW/:id/:answer_id/:commentANSW_id', auth, async (req, res) => {



    try{
        const user = await User.findById(req.user.id).select('-password');
        
        const comcomment = await Feed.findById(req.params.id);              //has post_id
        const ans = await comcomment.answer.find(ans => ans.id === req.params.answer_id);          //ans is now equal to the answer_id
        //get answer from post (pull out answer)

        const com = ans.commentANSW.find(com => com.id === req.params.commentANSW_id);       //has comment_id


            // Make sure answer exists

        if(!com){
            return res.status(404).json({msg: 'comment does not exist'});
        }

        //make sure that the user who made the comment is the one deleting it


        if(com.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'User not authorized to delete comment'});
        }

        //get index to remove comment on answer
        const removeIndex = ans.commentANSW.map(com => com.user.toString()).indexOf(req.user.id);

        ans.commentANSW.splice(removeIndex, 1);

     await comcomment.save();              //saves this value back into the database linked to the post id

     res.json(comcomment.com);


    }catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');
    }


}
    

);




//////////////////
// Vote on comments to Answers
//////////////////


// @route       PUT api/feed/answer/commentANSW/comANSWvote/:id/:answer_id/:comment_id'
// @description vote on a comment to an answer
// @access      Private        

router.put('/answer/commentANSW/comANSWvote/:id/:answer_id/:commentANSW_id', auth, async (req,res) =>{                   
    try{
            const user = await User.findById(req.user.id).select('-password');
            const feedpost = await Feed.findById(req.params.id);
            const ans = await feedpost.answer.find(ans => ans.id === req.params.answer_id);          //ans is now equal to the answer_id
            const com = ans.commentANSW.find(com => com.id === req.params.commentANSW_id);       //has comment_id
            // Check if the comment has been voted on by this user
           

            if(com.comANSWvote.filter(comANSWvote => comANSWvote.user.toString() === user.id).length > 0){          //if greater than 0, then theyve used their vote

                    return res.status(400).json({msg: 'You have exceeded your limit of votes for this comment'});
            }
            com.comANSWvote.unshift({user: user.id});

            await feedpost.save();              //saves this value back into the database linked to the post id

            res.json(feedpost.comANSWvote);


    }
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});






//the following will remove the upvote and downvote and save that value back into the array








// @route       PUT api/feed/answer/commentANSW/comANSWvote/:id/:answer_id/:comment_id'
// @description unvote on a comment to an answer
// @access      Private                             /

router.put('/answer/commentANSW/uncomANSWvote/:id/:answer_id/:commentANSW_id', auth, async (req,res) =>{             //this forces only answers  to have votes allowed
    try{
        const user = await User.findById(req.user.id).select('-password');
        const feedpost = await Feed.findById(req.params.id);
        const ans = await feedpost.answer.find(ans => ans.id === req.params.answer_id);          //ans is now equal to the answer_id
        const com = ans.commentANSW.find(com => com.id === req.params.commentANSW_id);       //has comment_id
            

            // Check if the post has been voted on by this user
           

            if(com.comANSWvote.filter(comANSWvote => comANSWvote.user.toString() === req.user.id).length ===0){          //if greater than 0, then theyve used their downvote

                    return res.status(400).json({msg: 'You have not used your downvote yet for this post'});
                                }
            
               const removeIndex = com.comANSWvote.map(comANSWvote => comANSWvote.user.toString()).indexOf(req.user.id);

               com.comANSWvote.splice(removeIndex, 1);

            await feedpost.save();              //saves this value back into the database linked to the post id

            res.json(feedpost.comANSWvote);


    }
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});







//////////////////
// Vote on Comments
/////////////////



router.put('/comment/Comvote/:id/:comment_id', auth, async (req,res) =>{                   
    try{
            const user = await User.findById(req.user.id).select('-password');
            const feedpost = await Feed.findById(req.params.id);
            const com = await feedpost.comment.find(com => com.id === req.params.comment_id);          //ans is now equal to the answer_id
            // Check if the post has been voted on by this user
          
            
{
            if(com.Comvote.filter(Comvote => Comvote.user.toString() === user.id).length > 0){          //if greater than 0, then theyve used their best answer vote

                    return res.status(400).json({msg: 'You have exceeded your limit of votes for this comment'});
            }
            com.Comvote.unshift({user: user.id});

            await feedpost.save();              //saves this value back into the database linked to the post id

            res.json(feedpost.Comvote);


    }
    
}
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});






//the following will remove the supervote or superdownnvote and save that value back into the array








// @route       PUT api/feed/comment/UNComvote/:id/:comment_id
// @description Unvoting a comment on your post
// @access      Private                           

router.put('/comment/UNComvote/:id/:comment_id', auth, async (req,res) =>{             //this forces only answers or answers to have votes allowed
    try{
        
            const feedpost = await Feed.findById(req.params.id);
            const user = await User.findById(req.user.id).select('-password');
            // Check if the post has been voted on by this user
            const com = await feedpost.comment.find(com => com.id === req.params.comment_id);          //ans is now equal to the answer_id
           {

            if(com.Comvote.filter(Comvote => Comvote.user.toString() === user.id).length ===0){          //if greater than 0, then theyve used their downvote

                    return res.status(400).json({msg: 'You have not used your downvote yet for this comment'});
                                }
            
               const removeIndex = com.Comvote.map(Comvote => Comvote.user.toString()).indexOf(user.id);

               com.Comvote.splice(removeIndex, 1);

            await feedpost.save();              //saves this value back into the database linked to the post id

            res.json(feedpost.Comvote);


    }
}
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


















//////////////////
// Vote on Answers
/////////////////



router.put('/answer/ANSWvote/:id/:answer_id', auth, async (req,res) =>{                   
    try{
            const user = await User.findById(req.user.id).select('-password');
            const feedpost = await Feed.findById(req.params.id);
            //const com = await feedpost.comment.find(com => com.id === req.params.comment_id);          //ans is now equal to the answer_id
            const ans = await feedpost.answer.find(ans => ans.id === req.params.answer_id);          //ans is now equal to the answer_id
            
            // Check if the post has been voted on by this user
          
            
{
            if(ans.ANSWvote.filter(ANSWvote => ANSWvote.user.toString() === user.id).length > 0){          //if greater than 0, then theyve used their best answer vote

                    return res.status(400).json({msg: 'You have exceeded your limit of votes for this comment'});
            }
            ans.ANSWvote.unshift({user: user.id});

            await feedpost.save();              //saves this value back into the database linked to the post id

            res.json(feedpost.ANSWvote);


    }
    
}
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});






//the following will remove the supervote or superdownnvote and save that value back into the array








// @route       PUT api/feed/comment/UNComvote/:id/:comment_id
// @description Unvoting an answer on your post
// @access      Private                           

router.put('/answer/UNANSWvote/:id/:answer_id', auth, async (req,res) =>{             //this forces only answers or answers to have votes allowed
    try{
        
            const feedpost = await Feed.findById(req.params.id);
            const user = await User.findById(req.user.id).select('-password');
            // Check if the post has been voted on by this user
           // const com = await feedpost.comment.find(com => com.id === req.params.comment_id);          //ans is now equal to the answer_id
           const ans = await feedpost.answer.find(ans => ans.id === req.params.answer_id);          //ans is now equal to the answer_id
           {

            if(ans.ANSWvote.filter(ANSWvote => ANSWvote.user.toString() === user.id).length ===0){          //if greater than 0, then theyve used their downvote

                    return res.status(400).json({msg: 'You have not used your downvote yet for this comment'});
                                }
            
               const removeIndex = ans.ANSWvote.map(ANSWvote => ANSWvote.user.toString()).indexOf(user.id);

               ans.ANSWvote.splice(removeIndex, 1);

            await feedpost.save();              //saves this value back into the database linked to the post id

            res.json(feedpost.ANSWvote);


    }
}
    catch (err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



























// export route
module.exports = router;