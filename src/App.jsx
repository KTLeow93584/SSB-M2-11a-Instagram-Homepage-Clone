import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProfileHeader from './components/ProfileHeader.jsx';
import ImageGrid from './components/ImageGrid.jsx';
import Sidebar from './components/Sidebar.jsx';

import { ProfileContextProvider } from './contexts/ProfileContext.jsx';

import './App.css';

function App() {
  const minWidthLimit = 940;

  return (
    <ProfileContextProvider>
      <Container fluid className="px-0">
        <Row className="w-100">
          {/* ============================ */}
          {/* Sidebar Panel */}
          <Col
            className={"d-none d-sm-flex col-sm-2 col-md-3 side-dashboard-container"}
            style={{ position: "sticky", top: 0 }}>
            <Sidebar />
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
      </Container>
    </ProfileContextProvider>
  )
}

export default App;
