import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProfileHeader from './components/ProfileHeader.jsx';
import ImageGrid from './components/ImageGrid.jsx';
import Sidebar from './components/Sidebar.jsx';

import NewPostModal from './components/NewPostModal.jsx';
import { ProfileContextProvider } from './contexts/ProfileContext.jsx';

import './App.css';

function App() {
  const minWidthLimit = 940;

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <ProfileContextProvider>
      <Container fluid className="px-0">
        <Row className="w-100">
          {/* ============================ */}
          {/* Sidebar Panel */}
          <Col
            className={"d-none d-sm-flex col-sm-2 col-md-3 side-dashboard-container"}
            style={{ position: "sticky", top: 0 }}>
            <Sidebar showModalCallback={openModal} />
          </Col>
          {/* ============================ */}
          {/* Main Panel */}
          <Col className="col-sm-10 col-md-9">
            <Container fluid>
              <ProfileHeader minWidthLimit={minWidthLimit} />
              <ImageGrid />
            </Container>
          </Col>
          {/* ============================ */}
        </Row>
        <NewPostModal show={showModal} handleClose={closeModal} />
      </Container>
    </ProfileContextProvider>
  )
}

export default App;
