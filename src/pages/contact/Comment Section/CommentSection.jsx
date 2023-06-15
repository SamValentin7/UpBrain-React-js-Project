import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const auth = "Bearer b004889acd3ef39f3911f1949f7c2db9e2940b36d807ae50976d005a914ca2325044959365e0f9f37c9e185685cf04b4aaedb99c532bb0a305a93b0d118df2011664113e5994b96aa76c5d2899873d6a8d84273acf29198e7414df4a43fe0c3ce105562f96fca6425835bf593bf1900c787434e43bf873f2827f80d805cc6a91";
 

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        axios.defaults.headers.common['Authorization'] = auth;
        try {
            const response = await axios.get('http://localhost:1337/api/user-comments');
            setComments(response.data.data);
            console.log(response);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const addComment = async comment => {
        axios.defaults.headers.common['Authorization'] = auth;

        try {
            const response = await axios.post('http://localhost:1337/api/user-comments', {
                data: comment
            });
            setComments([...comments, response.data.data]);
            console.log(response);
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const editComment = async (id, updatedComment) => {
        axios.defaults.headers.common['Authorization'] = auth;

        try {
            await axios.put(`http://localhost:1337/api/user-comments/${id}`, {
                data: updatedComment
            });
            const updatedComments = comments.map(comment =>
                comment.id === id ? { ...comment, ...updatedComment } : comment
            );
            
            setComments(updatedComments);
        } catch (error) {
            console.error('Error editing comment:', error);
        }
    };

    const deleteComment = async id => {
        axios.defaults.headers.common['Authorization'] = auth;

        try {
            await axios.delete(`http://localhost:1337/api/user-comments/${id}`);
            setComments(comments.filter(comment => comment.id !== id));
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    return (
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm onSubmit={addComment} />
            <CommentList
                comments={comments}
                onEdit={editComment}
                onDelete={deleteComment} />
        </div>
    );
};

export default CommentSection;
