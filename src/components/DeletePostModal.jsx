import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

import { GetProfileContext } from '../contexts/ProfileContext.jsx';
import { deletePost } from '../features/posts/postSlice.js';

export default function DeletePostModal({ show, handleClose, postCategory, postId }) {
    const profileContext = GetProfileContext();
    const profile = profileContext.userProfile;
    const dispatch = useDispatch();

    const post = useSelector((state) => {
        // Debug
        //console.log("[On Delete Post] State.", state);

        return state.posts[postCategory].find((post) => post.id === postId);
    });

    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (post) {
            setImageUrl(post.image);
            setDescription(post.description);
        }
    }, [post]);

    const handleDelete = () => {
        dispatch(deletePost({
            category: postCategory,
            post: {
                id: postId
            }
        }));

        if (handleClose)
            handleClose("delete");
    }

    const placeholderImg = 'https://sig1.co/img-placeholder-1';

    return (
        <Modal className="d-flex flex-column align-items-center justify-content-center"
            show={show} onHide={() => handleClose("delete")} size="lg">
            <Modal.Header>
                <Modal.Title>Confirm post deletion?</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-evenly">
                <Row>
                    <Col className="col-sm-7" style={{ margin: "0px" }}>
                        <Image
                            src={imageUrl ? imageUrl : placeholderImg}
                            alt="uploaded content"
                            style={{ width: "100%" }} />
                    </Col>
                    <Col className="col-sm-5">
                        <Image
                            src={profile.image}
                            alt="uploader"
                            style={{ width: "32px" }}
                            roundedCircle />
                        <span className="ms-3">{profile.name}</span>
                        <Form.Control
                            value={imageUrl}
                            className="my-3"
                            disabled />

                        <Form.Control
                            value={description}
                            className="my-3"
                            as="textarea"
                            rows={3}
                            disabled />

                        <Form.Group className="d-flex align-items-center justify-content-center">
                            <Form.Label className="me-3">Category:</Form.Label>
                            <Form.Control
                                value={postCategory.substring(0, 1).toUpperCase() + postCategory.substring(1)}
                                className="my-3"
                                disabled />
                        </Form.Group>
                    </Col>
                </Row>
            </Modal.Body>

            <hr />

            <Modal.Body className="d-flex justify-content-evenly">
                <Button onClick={handleDelete} style={{ width: "25%" }}>
                    Yes
                </Button>
                <Button onClick={() => handleClose("delete")} style={{ width: "25%" }}>
                    No
                </Button>
            </Modal.Body>
        </Modal >
    );
}