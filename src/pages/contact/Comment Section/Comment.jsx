import React, { useState } from 'react';
import './comments.css'

const Comment = ({ comment, onEdit, onDelete }) => {
    const createdAt = new Date(comment.attributes.createdAt).toLocaleDateString();
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(comment.attributes.content);

    const isCurrentUserAdmin = () => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser);
            return user.email === 'samciucov.valentin@gmail.com';
        }
        return false;
    };

    const isCurrentUserComment = () => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser);
            return user.name === comment.attributes.username;
        }
        return false;
    };

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        onEdit(comment.id, { content: editedContent });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedContent(comment.attributes.content);
    };

    const handleDelete = () => {
        onDelete(comment.id);
    };

    const handleContentChange = (e) => {
        setEditedContent(e.target.value);
    };

    return (
        <div className="comment">
            <div className="comment-image-container">
                <img src="public/assets/images/user-icon.png" alt="User" />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.attributes.username}</div>
                    <div>{createdAt}</div>
                </div>
                {isEditing ? (
                    <div>
                        <textarea
                            className="comment-textarea"
                            value={editedContent}
                            onChange={handleContentChange}
                        />
                        <div className="comment-actions">
                            <div className="comment-action" onClick={handleSave}>
                                Save
                            </div>
                            <div className="comment-action" onClick={handleCancel}>
                                Cancel
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="comment-text">{comment.attributes.content}</div>
                )}
                {(isCurrentUserAdmin() || isCurrentUserComment()) && (
                    <div className="comment-actions">
                        {!isEditing && (
                            <div className="comment-action" onClick={handleEdit}>
                                Edit
                            </div>
                        )}
                        <div className="comment-action" onClick={handleDelete}>
                            Delete
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comment;
