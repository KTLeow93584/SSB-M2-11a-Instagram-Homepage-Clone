import CustomCarousel from './CustomCarousel.jsx';

import './SectionButtons.css';

const sectionList = [
    {
        title: "Meet-ups",
        src: "https://picsum.photos/id/101/64/64"
    },
    {
        title: "Reviews",
        src: "https://picsum.photos/id/201/64/64"
    },
    {
        title: "Shoutouts",
        src: "https://picsum.photos/id/301/64/64"
    },
    {
        title: "Hiring",
        src: "https://picsum.photos/id/401/64/64"
    },
    {
        title: "Events",
        src: "https://picsum.photos/id/501/64/64"
    },
    {
        title: "FAQs",
        src: "https://picsum.photos/id/21/64/64"
    },
    {
        title: "Mentors",
        src: "https://picsum.photos/id/24/64/64"
    },
    {
        title: "Contact Us",
        src: "https://picsum.photos/id/33/64/64"
    },
    {
        title: "Other Services 1",
        src: "https://picsum.photos/id/36/64/64"
    },
    {
        title: "Other Services 2",
        src: "https://picsum.photos/id/53/64/64"
    },
    {
        title: "Other Services 3",
        src: "https://picsum.photos/id/24/64/64"
    },
    {
        title: "Other Services 4",
        src: "https://picsum.photos/id/28/64/64"
    },
];

export default function SectionButtons() {
    return (
        <div>
            <CustomCarousel
                items={sectionList.map(
                    (item) => {
                        return {
                            caption: item.title,
                            icon: item.src
                        }
                    })
                }
                maxCarouselItemPerRow={4} />
        </div>
    );
}