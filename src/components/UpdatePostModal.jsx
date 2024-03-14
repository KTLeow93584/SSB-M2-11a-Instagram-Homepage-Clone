import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

import { GetProfileContext } from '../contexts/ProfileContext.jsx';
import { updatePost } from '../features/posts/postSlice.js';

export default function UpdatePostModal({ show, handleClose, postCategory, postId }) {
    const profileContext = GetProfileContext();
    const profile = profileContext.userProfile;
    const postCategories = profileContext.postCategories.map((category) => category.substring(0, 1).toUpperCase() + category.substring(1).toLowerCase());

    const dispatch = useDispatch();

    const post = useSelector((state) => {
        // Debug
        //console.log("[On Modify Post] State.", state);

        return state.posts[postCategory].find((post) => post.id === postId);
    });

    const [categoryKey, setCategoryKey] = useState(postCategory.substring(0, 1).toUpperCase() + postCategory.substring(1));
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [invalidUrl, setInvalidUrl] = useState(false);

    // Debug
    //console.log("[On Modify Post] Post Category: " + postCategories[0] + ", ID: " + postId);

    useEffect(() => {
        if (post) {
            setImageUrl(post.image);
            setDescription(post.description);
        }
    }, [post]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (imageUrl) {
            dispatch(updatePost({
                oldCategory: postCategory,
                newCategory: categoryKey.toLowerCase(),
                post: {
                    id: postId,
                    image: imageUrl,
                    description
                }
            }));

            setImageUrl('');
            setDescription('');

            if (handleClose)
                handleClose("update");
        }
        else
            setInvalidUrl(true);
    }

    const handleImageError = () => {
        setInvalidUrl(true);
    }

    const handleImageLoad = () => {
        setInvalidUrl(false);
    }

    const placeholderImg = 'https://sig1.co/img-placeholder-1';

    return (
        <Modal show={show} onHide={() => handleClose("update")} size="lg">
            <Modal.Header>
                <Modal.Title>Edit Existing Post</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Row>
                        <Col className="col-sm-7" style={{ margin: "0px" }}>
                            <Image
                                src={imageUrl ? imageUrl : placeholderImg}
                                alt="uploaded content"
                                onError={handleImageError}
                                onLoad={handleImageLoad}
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
                                onChange={(event) => setImageUrl(event.target.value)}
                                className="my-3"
                                placeholder="Add image url" />
                            {
                                invalidUrl && (
                                    <div className="text-danger">
                                        Invalid URL/Failed to load image.
                                    </div>
                                )
                            }
                            <Form.Control
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                className="my-3"
                                as="textarea"
                                rows={3}
                                placeholder="Write a caption..." />

                            <Form.Group className="d-flex align-items-center justify-content-start">
                                <Form.Label className="me-3">Category:</Form.Label>
                                <Dropdown className="mb-3"
                                    title="Select post category"
                                    key={categoryKey}
                                    onSelect={(newKey) => setCategoryKey(newKey)}>
                                    <Dropdown.Toggle variant="success" id="post-dropdown-toggle">
                                        {categoryKey}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {
                                            postCategories.map((category, index) => {
                                                return (<Dropdown.Item
                                                    key={`post-category-${index}`}
                                                    eventKey={`${category}`}
                                                    active={categoryKey === category}>
                                                    {category}
                                                </Dropdown.Item>);
                                            })
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form.Group>

                            <Button type="submit" style={{ width: "100%" }}>
                                Share
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Form>
        </Modal>
    );
}