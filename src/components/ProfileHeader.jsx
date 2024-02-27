import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { GetProfileContext } from '../contexts/ProfileContext.jsx';
import SectionButtons from '../components/SectionButtons.jsx';

export default function ProfileHeader({ minWidthLimit }) {
    const userProfile = GetProfileContext().userProfile;

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Debug
    //console.log("[Profile Header] Width: " + windowWidth + ", Height: " + windowHeight);

    return (windowWidth <= minWidthLimit) ?
        <ProfileNarrowRender userProfile={userProfile} windowWidth={windowWidth} minWidthLimit={minWidthLimit} /> :
        <ProfileWideRender userProfile={userProfile} />;
}

function ProfileNarrowRender({ userProfile, windowWidth, minWidthLimit }) {
    return (
        <>
            <Row className="w-100 mb-3 mt-5">
                <Col className={`${windowWidth <= (minWidthLimit / 3) ? "col-12" : "col-3"} d-flex align-items-center justify-content-center`}>
                    <Image
                        src={userProfile.image}
                        style={{ width: "100%", height: "auto" }}
                        roundedCircle
                    />
                </Col>
                <Col className={`${windowWidth <= (minWidthLimit / 3) ? "col-12" : "col-9"}`}>
                    <Row className="w-100 mb-3 d-flex justify-content-center justify-content-sm-start">
                        <span style={{ width: "fit-content", fontSize: "20px" }}>
                            {userProfile.name}
                        </span>
                    </Row>
                    <Row className="w-100 d-flex justify-content-center justify-content-sm-start">
                        <Col className="col-6 mb-1" style={{ width: "fit-content" }}>
                            <Button className="pe-2">Follow Back</Button>
                        </Col>
                        <Col className="col-6 mb-1" style={{ width: "fit-content" }}>
                            <Button variant="light" className="pe-2">Message</Button>
                        </Col>
                        <Col className="col-6 mb-1" style={{ width: "fit-content" }}>
                            <Button variant="light" className="pe-2">
                                <i className="bi bi-person-plus"></i>
                            </Button>
                        </Col>
                        <Col className="col-6 mb-1" style={{ width: "fit-content" }}>
                            <Button variant="light">
                                <i className="bi bi-three-dots"></i>
                            </Button>
                        </Col>
                    </Row>
                </Col >
            </Row>
            <Row className="w-100 mb-5">
                <Col className="col-12">
                    <p style={{ margin: 0, whiteSpace: "pre-line" }}>{userProfile.description}</p>
                </Col>
            </Row>
            <hr className="my-0" />
            <Row className="w-100 py-3">
                <Col className="col-4 text-center">
                    <span>
                        <strong>{userProfile.posts_no}</strong> posts
                    </span>
                </Col>
                <Col className="col-4 text-center">
                    <span>
                        <strong>{userProfile.followers}</strong> followers
                    </span>
                </Col>
                <Col className="col-4 text-center">
                    <span>
                        <strong>{userProfile.following}</strong> following
                    </span>
                </Col>
            </Row>
            <hr className="mt-0 mb-3" />
            <SectionButtons />
            <hr className="mt-0 mb-3" />
        </>
    );
}

function ProfileWideRender({ userProfile }) {
    return (
        <>
            <Row className="p-5">
                <Col className="col-3 d-flex align-items-center justify-content-center">
                    <Image
                        src={userProfile.image}
                        style={{ height: "150px" }}
                        roundedCircle
                    />
                </Col>
                <Col className={"col-9"}>
                    <span className="me-4" style={{ fontSize: "20px" }}>
                        {userProfile.name}
                    </span>
                    <Button className="me-2">Follow Back</Button>
                    <Button variant="light me-2">Message</Button>
                    <Button variant="light me-2">
                        <i className="bi bi-person-plus"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-three-dots"></i>
                    </Button>

                    <br />
                    <br />

                    <span className="me-4">
                        <strong>{userProfile.posts_no}</strong> posts
                    </span>

                    <span className="me-4">
                        <strong>{userProfile.followers}</strong> followers
                    </span>

                    <span className="me-4">
                        <strong>{userProfile.following}</strong> following
                    </span>

                    <br />
                    <br />

                    <p style={{ margin: 0, fontWeight: "bold" }}>{userProfile.subheader}</p>
                    <p style={{ margin: 0, color: "grey" }}>{userProfile.accountType}</p>
                    <p style={{ margin: 0, whiteSpace: "pre-line" }}>{userProfile.description}</p>
                    <a href={"https://" + userProfile.link} target="_blank" rel="noopener noreferrer">{userProfile.link}</a>
                </Col>
            </Row>
            <SectionButtons />
            <hr />
        </>
    );
}