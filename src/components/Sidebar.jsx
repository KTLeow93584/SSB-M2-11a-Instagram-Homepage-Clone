import Col from 'react-bootstrap/Col';

import { SidebarButtonBI, SidebarButtonFA, SidebarButtonImage } from './SidebarButton.jsx';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { GetProfileContext } from '../contexts/ProfileContext';

export default function Sidebar() {
    const profileImage = GetProfileContext().image;

    return (
        <>
            {/* Top Row */}
            <Col className="col-12 mb-4 mt-2 ms-3">
                {/* Instagram Icon (Instagram Clone Home Page) */}
                <SidebarButtonBI header="Instagram" biIcon={"instagram"} isTransparent={true} isHeader={true} />
            </Col>

            {/* Middle Row */}
            <Col className="col-12 d-flex flex-column align-items-start ms-3">
                {/* House Icon (Home Page) */}
                <SidebarButtonBI header="Home" biIcon={"house"} />
                {/* Maginifying Glass Icon (Search) */}
                <SidebarButtonFA header="Search" faIcon={faMagnifyingGlass} />
                {/* Stopwatch (Timer) */}
                <SidebarButtonBI header="Explore" biIcon={"stopwatch"} />
                {/* Film Icon (Reels) */}
                <SidebarButtonBI header="Reels" biIcon={"film"} />
                {/* Dialogue Icon (Messages) */}
                <SidebarButtonBI header="Messages" biIcon={"chat"} />
                {/* Heart Icon (Notifications) */}
                <SidebarButtonBI header="Notifications" biIcon={"heart"} />
                {/* Boxed Plus Icon (Create) */}
                <SidebarButtonBI header="Create" biIcon={"plus-square"} />
                {/* People Icon (Profile) */}
                <SidebarButtonImage header="Profile" src={profileImage} />
            </Col>

            {/* Bottom Row */}
            <Col className="col-12 mt-auto ms-3">
                {/* List/Three Lines Icon (More Options) */}
                <SidebarButtonBI header="More" biIcon={"list"} />
            </Col>
        </>
    );
}