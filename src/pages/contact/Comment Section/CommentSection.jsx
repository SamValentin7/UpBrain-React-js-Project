import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_AUTH_HEADER;
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}user-comments`);
            setComments(response.data.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const addComment = async comment => {
        axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_AUTH_HEADER;

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}user-comments`, {
                data: comment
            });
            setComments([...comments, response.data.data]);
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const editComment = async (id, updatedComment) => {
        axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_AUTH_HEADER;

        try {
            await axios.put(`${import.meta.env.VITE_API_URL}user-comments/${id}`, {
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
        axios.defaults.headers.common['Authorization'] = import.meta.env.VITE_AUTH_HEADER;

        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}user-comments/${id}`);
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
