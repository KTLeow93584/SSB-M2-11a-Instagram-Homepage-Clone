
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

import { GetProfileContext } from '../contexts/ProfileContext.jsx';
import { createPost } from '../features/posts/postSlice.js';

export default function NewPostModal({ show, handleClose }) {
    const profileContext = GetProfileContext();
    const profile = profileContext.userProfile;
    const postCategories = profileContext.postCategories.map((category) => category.substring(0, 1).toUpperCase() + category.substring(1).toLowerCase());

    const dispatch = useDispatch();

    const [categoryKey, setCategoryKey] = useState(postCategories[0]);
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [invalidUrl, setInvalidUrl] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (imageUrl) {
            dispatch(createPost({
                category: categoryKey.toLowerCase(),
                post: {
                    image: imageUrl,
                    description
                }
            }));

            setImageUrl('');
            setDescription('');
            handleClose();
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
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header>
                <Modal.Title>Create new post</Modal.Title>
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
                                value={description} placeholder="Write a caption..."
                                onChange={(event) => setDescription(event.target.value)}
                                className="my-3" as="textarea" rows={3} />

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

                            <Button type="submit" style={{ width: "100%" }}>
                                Share
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Form>
        </Modal >
    );
}