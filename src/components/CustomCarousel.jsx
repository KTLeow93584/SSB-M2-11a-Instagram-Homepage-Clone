import { useState } from 'react';
import './CustomCarousel.css';

import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

export default function CustomCarousel({ items, maxCarouselItemPerRow }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const maxIndex = Math.ceil(items.length / maxCarouselItemPerRow);

    const updateIndex = (newIndex) => {
        if (newIndex < 0)
            newIndex = maxIndex - 1;
        else if (newIndex >= maxIndex)
            newIndex = 0;

        setActiveIndex(newIndex);
    }

    // Debug
    //console.log("[Custom Carousel On Render] Active Index: " + activeIndex);

    const renderCarouselItems = () => {
        const carouselItemElements = [];
        for (let i = 0; i < items.length; i += maxCarouselItemPerRow) {

            const carouselSectionItems = [];
            for (let j = i; j < Math.min(items.length, i + maxCarouselItemPerRow); ++j)
                carouselSectionItems.push(items[j]);

            const itemIndex = i / maxCarouselItemPerRow;

            carouselItemElements.push(
                <CarouselItem key={`custom-carousel-item-${itemIndex}`}
                    items={carouselSectionItems}
                    itemIndex={itemIndex} />
            );
        }

        return carouselItemElements;
    }

    const renderIndicatorButtons = () => {
        const buttons = [];
        for (let index = 0; index < maxIndex; ++index) {
            buttons.push(
                <button key={`custom-carousel-indicator-button-${index}`}
                    className={`custom-carousel-indicator-button ${activeIndex === index ? "custom-carousel-indicator-button-active" : ""}`}
                    onClick={() => updateIndex(index)}>
                </button>
            );
        }
        return buttons;
    }

    return (
        <Col className="col-12 custom-carousel">
            {/* -------------------------------------- */}
            {/* Carousel Content Group */}
            <div className="custom-carousel-items-group" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                {renderCarouselItems()}
            </div>
            {/* -------------------------------------- */}
            {/* Buttons Group */}
            <div className="custom-carousel-buttons-group">
                <button
                    className="custom-carousel-previous-button"
                    onClick={() => updateIndex(activeIndex - 1)}>
                </button>

                <div className="custom-carousel-indicator-buttons-group">
                    {renderIndicatorButtons()}
                </div>

                <button
                    className="custom-carousel-next-button"
                    onClick={() => updateIndex(activeIndex + 1)}>
                </button>
            </div>
            {/* -------------------------------------- */}
        </Col>
    );
}

function CarouselItem({ items, itemIndex }) {
    return (
        <div className="custom-carousel-item">
            {
                items.map((item, index) =>
                    <CarouselItemElement
                        key={`custom-carousel-item-${itemIndex}-element-${index}`}
                        item={item}
                        elementWidth={(100 / items.length)}
                        index={index} />
                )
            }
        </div>
    );
}

function CarouselItemElement({ item, elementWidth, index }) {
    const showDebug = false;

    return (
        <div className="custom-carousel-item-element"
            style={{ width: `${elementWidth}%`, backgroundColor: `${showDebug ? (index % 2 === 0 ? "green" : "teal") : "transparent"}` }}
        >
            <button className="custom-carousel-item-element-button">
                <div className="custom-carousel-item-element-img-div">
                    <Image className="custom-carousel-item-element-img" src={item.icon} />
                </div>
                <div className="custom-carousel-item-element-caption">{item.caption}</div>
            </button>
        </div>
    );
}