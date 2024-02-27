import { useState } from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';

import UpdatePostModal from './UpdatePostModal.jsx';
import DeletePostModal from './DeletePostModal.jsx';
import ViewPostModal from './ViewPostModal.jsx';

import './ImageGrid.css';

export default function ImageGrid() {
    const posts = useSelector((state) => state.posts);

    const [showUpdate, setShowUpdate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showPost, setShowPost] = useState(false);

    const [currentPost, setCurrentPost] = useState(null);

    const handleClose = (state) => {
        setCurrentPost(null);

        switch (state) {
            case "update":
                setShowUpdate(false);
                break;
            case "delete":
                setShowDelete(false);
                break;
            case "view":
                setShowPost(false);
                break;
        }
    }

    const handleShow = (post, state) => {
        setCurrentPost(post);

        // Debug
        //console.log("[On Modal Visible] State.", state);

        switch (state) {
            case "update":
                setShowUpdate(true);
                break;
            case "delete":
                setShowDelete(true);
                break;
            case "view":
                setShowPost(true);
                break;
        }
    }

    const renderImages = (category) => {
        // Debug
        //console.log("[Image Grid] Category: " + category);
        //console.log("[Image Grid] Posts: ", posts);

        const categorizedPosts = [...posts[category]];

        return categorizedPosts.map((item, index) => (
            <Col className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                <Image src={item.image} fluid type="button"
                    style={{ width: "100%", height: "auto" }}
                    onClick={() => handleShow(item, "view")} />
                <div className="d-flex justify-content-evenly mt-2">
                    <Button onClick={() => handleShow(item, "update")}
                        variant="outline-primary">
                        <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button onClick={() => handleShow(item, "delete")}
                        variant="outline-danger">
                        <i className="bi bi-trash"></i>
                    </Button>
                </div>
            </Col>
        ));
    };

    const [categoryKey, setCategoryKey] = useState("home");

    return (
        <>
            <Tab.Container id="category-tabs" className="mb-3"
                defaultActiveKey={categoryKey} onSelect={(newCategoryKey) => setCategoryKey(newCategoryKey)}
                transition={false}>
                <Container fluid>
                    <Nav className="flex justify-content-center mx-auto">
                        <Nav.Item className={`${categoryKey === "home" ? "category-item-selected" : "category-item"}`}>
                            <Nav.Link className={`${categoryKey === "home" ? "category-link-selected" : "category-link"}`} eventKey="home">
                                <i className="bi bi-grid-3x3"></i> <span>Home</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`${categoryKey === "reels" ? "category-item-selected" : "category-item"}`}>
                            <Nav.Link className={`${categoryKey === "reels" ? "category-link-selected" : "category-link"}`} eventKey="reels">
                                <i className="bi bi-collection-play-fill"></i> <span>Reels</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`${categoryKey === "tagged" ? "category-item-selected" : "category-item"}`}>
                            <Nav.Link className={`${categoryKey === "tagged" ? "category-link-selected" : "category-link"}`} eventKey="tagged">
                                <i className="bi bi-file-person"></i> <span>Tagged</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>

                <Row className="w-100 mt-3">
                    {renderImages(categoryKey)}
                </Row>
            </Tab.Container>
            <hr />
            {
                currentPost && <UpdatePostModal
                    show={showUpdate}
                    handleClose={handleClose}
                    postCategory={categoryKey}
                    postId={currentPost.id} />
            }
            {
                currentPost && <DeletePostModal
                    show={showDelete}
                    handleClose={handleClose}
                    postCategory={categoryKey}
                    postId={currentPost.id} />
            }
            {
                currentPost && <ViewPostModal
                    show={showPost}
                    handleClose={handleClose}
                    postCategory={categoryKey}
                    postId={currentPost.id} />
            }
        </>
    );
}