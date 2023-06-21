import React from 'react';
import Comment from './Comment';
import './comments.css'

const CommentList = ({ 
    comments, 
    onEdit, 
    onDelete,
}) => {
    return (
        <div className="comments-container">
            {comments.map(comment => (
                <Comment
                    key={comment.id}
                    comment={comment}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default CommentList;
