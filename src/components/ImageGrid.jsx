import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';

import { GetProfileContext } from '../contexts/ProfileContext';

import './ImageGrid.css';

export default function ImageGrid() {
    const posts = GetProfileContext().posts;

    const renderImages = (category) => {
        // Debug
        //console.log("[Image Grid] Category: " + category);
        //console.log("[Image Grid] Posts: ", posts);

        const categoryImagesetItems = [...posts[category]];

        return categoryImagesetItems.map((item, index) => (
            <Col className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                <Image src={item.image} fluid />
            </Col>
        ));
    };

    const [key, setKey] = useState("home");

    return (
        <>
            <Tab.Container id="category-tabs" className="mb-3"
                defaultActiveKey={key} onSelect={(newKey) => setKey(newKey)}
                transition={false}>
                <Container fluid>
                    <Nav className="flex justify-content-center mx-auto">
                        <Nav.Item className={`${key === "home" ? "category-item-selected" : "category-item"}`}>
                            <Nav.Link className={`${key === "home" ? "category-link-selected" : "category-link"}`} eventKey="home">
                                <i className="bi bi-grid-3x3"></i> <span>Home</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`${key === "reels" ? "category-item-selected" : "category-item"}`}>
                            <Nav.Link className={`${key === "reels" ? "category-link-selected" : "category-link"}`} eventKey="reels">
                                <i className="bi bi-collection-play-fill"></i> <span>Reels</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`${key === "tagged" ? "category-item-selected" : "category-item"}`}>
                            <Nav.Link className={`${key === "tagged" ? "category-link-selected" : "category-link"}`} eventKey="tagged">
                                <i className="bi bi-file-person"></i> <span>Tagged</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>

                <Row className="w-100 mt-3">
                    {renderImages(key)}
                </Row>
            </Tab.Container>
            <hr />
        </>
    );
}