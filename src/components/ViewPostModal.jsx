import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

import { GetProfileContext } from '../contexts/ProfileContext.jsx';
import { createPostComment, likePost } from '../features/posts/postSlice.js';

export default function ViewPostModal({ show, handleClose, postCategory, postId }) {
    const profileContext = GetProfileContext();
    const profile = profileContext.userProfile;
    const dispatch = useDispatch();

    const [newComment, setNewComment] = useState("");
    const [isLiked, setLiked] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");

    const post = useSelector((state) => {
        // Debug
        //console.log("[On Delete Post] State.", state);

        return state.posts[postCategory].find((post) => post.id === postId);
    });

    useEffect(() => {
        if (post) {
            setImageUrl(post.image);
            setDescription(post.description);
            setLiked(post.liked);
        }
    }, [post]);

    const handleSubmitNewComment = (event) => {
        event.preventDefault();

        if (newComment === null || newComment === undefined || newComment.trim().length <= 0)
            return;

        // Debug
        //console.log("[On Submit New Comment] Comment: " + newComment);

        dispatch(createPostComment({
            category: postCategory,
            post: {
                id: postId,
                comment: {
                    commentId: new Date().toISOString(),
                    user: profile.name,
                    message: newComment,
                    image: profile.image
                }
            }
        }));

        setNewComment("");
    };

    const handleModifyNewComment = (comment) => {
        setNewComment(comment);
    };

    const handleLike = () => {
        const currentLikeState = isLiked;
        setLiked((previousLiked) => !previousLiked);
        dispatch(likePost({
            category: postCategory,
            post: {
                id: postId,
                liked: !currentLikeState
            }
        }))
    }

    return (
        <Modal className="d-flex align-items-center justify-content-center p-0"
            show={show}
            onHide={() => handleClose("view")}
            fullscreen={true}>
            <Modal.Header closeButton>
                <Modal.Title>Category: {postCategory.substring(0, 1).toUpperCase() + postCategory.substring(1)}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="m-0 p-0" style={{ backgroundColor: "black", overflow: "hidden" }}>
                <Row>
                    {/* Post Icon */}
                    <Col className="col-8 d-flex align-items-center justify-content-center">
                        {/*<Image src={post.image} style={{ height: "auto", width: "100%" }} />*/}
                    </Col>
                    {/* Post Details */}
                    <Col className="col-4 pt-3 bg-light d-flex flex-column align-items-start justify-content-start" style={{ height: "100vh" }}>
                        <div className="d-flex w-100">
                            <Image src={profile.image} style={{ maxWidth: "64px", maxHeight: "64px", minWidth: "64px", minHeight: "64px" }} roundedCircle />
                            <div className="ms-3">
                                <span>{profile.name}</span> • <a href="#" className="fw-bold text-decoration-none">Follow</a>
                                <p>{profile.location}</p>
                            </div>
                        </div>

                        <hr style={{ border: "black 1px solid", width: "98%" }} />

                        {/* Comments */}
                        <div className="bg-info py-3" style={{ width: "98%", height: "60%", overflowY: "scroll" }}>
                            <div
                                className="d-flex mx-2 mb-3">
                                <Image src={profile.image}
                                    style={{ maxWidth: "32x", maxHeight: "32px", minWidth: "32px", minHeight: "32px" }}
                                    roundedCircle
                                    className="me-2" />
                                <p>
                                    <span className="me-2" style={{ fontSize: "0.9em", fontWeight: "bold" }}>{profile.name}</span>
                                    <span style={{ fontSize: "0.8em" }}>{post.description}</span>
                                </p>
                            </div>
                            {
                                post.comments.map((comment, index) => {
                                    return (
                                        <div
                                            key={`post-${post.id}-comment-${index}`}
                                            className="d-flex mx-2 mb-3">
                                            <Image src={comment.image}
                                                style={{ maxWidth: "32x", maxHeight: "32px", minWidth: "32px", minHeight: "32px" }}
                                                roundedCircle
                                                className="me-2" />
                                            <p>
                                                <span className="me-2" style={{ fontSize: "0.9em", fontWeight: "bold" }}>{comment.user}</span>
                                                <span style={{ fontSize: "0.8em" }}>{comment.message}</span>
                                            </p>
                                        </div>
                                    );
                                })
                            }
                        </div>

                        <hr style={{ border: "black 1px solid", width: "98%" }} />

                        {/* New Comment + Like Section */}
                        <div className="bg-info" style={{ width: "98%", height: "15%" }}>
                            <div className="d-flex">
                                <Button variant="link" className="me-1"
                                    onClick={handleLike}>
                                    {
                                        isLiked ? (<i className="fs-5 fw-bold bi bi-hand-thumbs-up-fill" style={{ color: "black" }}></i>) :
                                            (<i className="fs-5 fw-bold bi bi-hand-thumbs-up" style={{ color: "black" }}></i>)
                                    }
                                </Button>
                                <Button variant="link" className="me-1">
                                    <i className="fs-5 fw-bold bi bi-chat-right" style={{ color: "black" }}></i>
                                </Button>
                                <Button variant="link">
                                    <i className="fs-5 fw-bold bi bi-send-arrow-up" style={{ color: "black" }}></i>
                                </Button>
                            </div>
                            <Form
                                onSubmit={handleSubmitNewComment}>
                                <div className="d-flex align-items-center rounded"
                                    style={{ backgroundColor: "white", border: "1px gray solid" }}>
                                    <Form.Control
                                        value={newComment}
                                        as="textarea"
                                        rows={3}
                                        onChange={(event) => handleModifyNewComment(event.target.value)}
                                        placeholder="Write your comment here"
                                        className="me-1"
                                        style={{ resize: "none", border: "none" }} />

                                    <Button type="submit" style={{ color: "black", background: "none", border: "none", height: "100%" }}>
                                        Post
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal >
    );
}