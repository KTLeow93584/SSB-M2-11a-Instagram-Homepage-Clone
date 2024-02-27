
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import './SidebarButton.css';

export function SidebarButtonBI({ header, biIcon, isHeader = false, isTransparent = false, onClickCallback = null }) {
    return (
        <Button
            className={`d-flex align-items-center w-100 text-sm-center text-md-start ${isTransparent ? "side-dashboard-button-full-transparent" : "side-dashboard-button"}`}
            style={{ marginBottom: `${isHeader ? "0" : "7"}px` }}
            onClick={() => {
                if (onClickCallback)
                    onClickCallback();
            }}>
            <i className={`bi bi-${biIcon}`} style={{ fontSize: "24px" }}></i>
            <div className="d-sm-none d-md-flex ms-3">
                <span className="side-dashboard-text">{header}</span>
            </div>
        </Button>
    );
}

export function SidebarButtonFA({ header, faIcon, isHeader = false, isTransparent = false, onClickCallback = null }) {
    return (
        <Button
            className={`d-flex align-items-center w-100 text-sm-center text-md-start ${isTransparent ? "side-dashboard-button-full-transparent" : "side-dashboard-button"}`}
            style={{ marginBottom: `${isHeader ? "0" : "7"}px` }}
            onClick={() => {
                if (onClickCallback)
                    onClickCallback();
            }}>
            <FontAwesomeIcon icon={faIcon} style={{ fontSize: "24px" }} />
            <div className="d-sm-none d-md-flex ms-3">
                <span className="side-dashboard-text">{header}</span>
            </div>
        </Button>
    );
}

export function SidebarButtonImage({ header, src, isHeader = false, isTransparent = false, onClickCallback = null }) {
    return (
        <Button
            className={`d-flex align-items-center w-100 text-sm-center text-md-start ${isTransparent ? "side-dashboard-button-full-transparent" : "side-dashboard-button"}`}
            style={{ marginBottom: `${isHeader ? "0" : "7"}px` }}
            onClick={() => {
                if (onClickCallback)
                    onClickCallback();
            }}>
            <Image src={src} roundedCircle style={{ height: "35px" }}></Image>
            <div className="d-sm-none d-md-flex ms-3">
                <span className="side-dashboard-text">{header}</span>
            </div>
        </Button>
    );
}