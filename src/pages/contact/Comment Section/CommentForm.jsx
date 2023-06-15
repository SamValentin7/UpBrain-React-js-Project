import React, { useState, useEffect } from 'react';

const CommentForm = ({ onSubmit, handleCancel, initialContent }) => {
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        setContent(initialContent);
    }, [initialContent]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim() === '' || content.trim() === '') {
            return;
        }
        onSubmit({ username, content });

        setUsername('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <textarea
                className="comment-form-textarea"
                placeholder="Comment"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className="comment-form-buttons">
                <button className="comment-form-button" type="submit">
                    Submit
                </button>
                
            </div>
        </form>
    );
};

export default CommentForm;
