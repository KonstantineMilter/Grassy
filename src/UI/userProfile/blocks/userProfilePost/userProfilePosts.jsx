import React from 'react';
import s from './css/userProfilePosts.module.css';

const UserProfilePosts = (props) => {
    console.log('UserProfilePosts');
    let newPostTextElement = React.createRef();

    let changeNewPostText = (e) =>{
        let postText = e.currentTarget.value;
        props.changeNewPostText(postText);
    }
    let addPost = () =>{
        props.createPost();
    }

    let postsMaped = props.userPosts.map( p =>
        <div className={s.post} postId={p.id}>
            <h5 className={s.postText}>{p.postText}</h5>
            <button className={s.likePostButton}>Like!</button>
            <h7 className={s.likesAmountPost}>{p.likesAmount}</h7>
        </div>
    );

    return (
        <div>
            <h3 className={s.postHeader}>All my Posts</h3>
            <textarea type="text" className={s.createPostInput} value={props.newPostText} ref={newPostTextElement} onChange={(e) => changeNewPostText(e)}> </textarea>
            <button className={s.createPostButton} onClick={addPost}>Create post!</button>
            <div className={s.postsBlock}>
                { postsMaped }
            </div>
        </div>
    )
}

export default UserProfilePosts;