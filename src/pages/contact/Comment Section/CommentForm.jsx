import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

const CommentForm = ({ onSubmit, handleCancel, initialContent }) => {
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        setContent(initialContent);
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser);
            setUsername(user.name);
        }
    }, [initialContent]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content === '') {
            return;
        }
        if (username === '') {
            return;
        }
        onSubmit({ username, content });
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                className="comment-form-textarea"
                placeholder="Comment"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <div className="comment-form-buttons">
                {username !== '' ? (
                    <button className="comment-form-button" type="submit">
                        Submit
                    </button>
                ) : (
                    <Popup
                        trigger={<button className="comment-form-button">Submit</button>}
                        modal
                        nested
                    >
                        {(close) => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    &times;
                                </button>
                                <div className="content">
                                    <h3>Must Log In First</h3>
                                    <p>Join us and log in for an amazing experience!</p>
                                </div>
                            </div>
                        )}
                    </Popup>
                )}
            </div>
        </form>
    );
};

export default CommentForm;
