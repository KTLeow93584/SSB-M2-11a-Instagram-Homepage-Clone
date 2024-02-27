export const PROFILE_DATA = {
    image: "https://picsum.photos/id/64/200/200",
    name: "joinsigma",
    location: "Selangor, Malaysia",
    posts_no: 465,
    followers: 1723,
    following: 9,
    subheader: "Sigma School | Tech Education & Services",
    account_type: "Education",
    description: `
        🤵 Upskill yourself, learn to code.
        💻 Develop full stack web & mobile apps.
        🛠️ Build real world projects.
        💯 Free if you don't land a tech job.
    `,
    link: "linktr.ee/joinsigma",
    posts: {
        home: [
            {
                id: 1,
                image: "https://picsum.photos/id/35/500/500",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus tellus, euismod non iaculis quis, porttitor at augue. Suspendisse potenti. Pellentesque quis nisl felis. Morbi sit amet purus diam.",
                date: new Date().toISOString(),
                likeCount: 15,
                liked: false,
                commentCount: 0,
                comments: []
            },
            {
                id: 2,
                image: "https://picsum.photos/id/237/500/500",
                description: "Duis vitae ullamcorper justo, ut mattis lorem. Nullam sed leo risus. Vivamus faucibus erat placerat magna elementum volutpat.",
                date: new Date().toISOString(),
                likeCount: 25,
                liked: true,
                commentCount: 0,
                comments: []
            },
            {
                id: 3,
                image: "https://picsum.photos/id/55/500/500",
                description: "Morbi gravida tellus nec justo varius convallis. Praesent vitae tincidunt nibh, et porttitor nisi. Mauris congue consectetur dolor et dictum. Etiam faucibus vulputate diam, a mollis orci.",
                date: new Date().toISOString(),
                likeCount: 35,
                liked: false,
                commentCount: 2,
                comments: [
                    {
                        commentId: 0,
                        user: "Robot A.I",
                        message: "Hello World",
                        image: "https://picsum.photos/id/65/128/128"
                    },
                    {
                        commentId: 1,
                        user: "Robot A.I",
                        message: "Goodbye World",
                        image: "https://picsum.photos/id/65/128/128"
                    }
                ]
            },
            {
                id: 4,
                image: "https://picsum.photos/id/25/500/500",
                description: "Sed vel leo facilisis, imperdiet lectus et, tempor nunc. Donec leo nulla, fringilla non lacus ut, mollis rutrum leo.",
                date: new Date().toISOString(),
                likeCount: 45,
                liked: true,
                commentCount: 0,
                comments: []
            },
            {
                id: 5,
                image:"https://picsum.photos/id/15/500/500" ,
                description: "Proin eget viverra leo, non cursus sem. Donec semper ligula a accumsan ornare. Nunc at ex a ante sodales vehicula.",
                date: new Date().toISOString(),
                likeCount: 55,
                liked: false,
                commentCount: 0
            },
        ],
        reels: [
            {
                id: 6,
                image: "https://picsum.photos/id/22/500/500",
                description: "Donec fringilla ante sit amet nisi suscipit, a ornare tellus varius. In et neque sed mauris semper sollicitudin.",
                date: new Date().toISOString(),
                likeCount: 15,
                liked: false,
                commentCount: 0,
                comments: []
            },
            {
                id: 7,
                image: "https://picsum.photos/id/23/500/500",
                description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec semper ultricies lectus ac feugiat.",
                date: new Date().toISOString(),
                likeCount: 25,
                liked: true,
                commentCount: 0,
                comments: []
            },
            {
                id: 8,
                image: "https://picsum.photos/id/24/500/500",
                description: "Donec mattis nibh id ligula lacinia, id euismod ante faucibus. In feugiat sem et mollis suscipit. Quisque mollis felis suscipit fermentum aliquam. Aenean convallis congue orci vel tristique.",
                date: new Date().toISOString(),
                likeCount: 35,
                liked: false,
                commentCount: 0,
                comments: []
            },
            {
                id: 9,
                image: "https://picsum.photos/id/27/500/500",
                description: "Nulla non lorem lacus. Etiam ultrices diam quis tempus aliquam. Pellentesque ultricies, ipsum vel ultrices tempor, ex mauris fringilla tellus, eget egestas dui augue eget leo.",
                date: new Date().toISOString(),
                likeCount: 45,
                liked: true,
                commentCount: 0,
                comments: []
            },
            {
                id: 10,
                image:"https://picsum.photos/id/28/500/500" ,
                description: "Vestibulum urna velit, blandit non eros sed, vehicula auctor ante. Quisque scelerisque elit sed nulla dignissim, ut sollicitudin dolor dignissim.",
                date: new Date().toISOString(),
                likeCount: 55,
                liked: false,
                commentCount: 1,
                comments: [
                    {
                        commentId: 0,
                        user: "Pika Pichu",
                        message: "How was your day? Pika Pi.",
                        image: "https://picsum.photos/id/365/128/128"
                    }
                ]
            },
        ],
        tagged: [
            {
                id: 11,
                image: "https://picsum.photos/id/15/500/500",
                description: "Aliquam placerat nulla vitae metus convallis scelerisque. Quisque nisl eros, mattis eget eros in, bibendum placerat velit. Suspendisse at cursus orci, viverra sodales justo. Cras neque tortor, auctor eu mi et, sodales fermentum eros.",
                date: new Date().toISOString(),
                likeCount: 15,
                liked: false,
                commentCount: 1,
                comments: [
                    {
                        commentId: 0,
                        user: "Mabeatskipidabadee",
                        message: "Skibidi bi dap!",
                        image: "https://picsum.photos/id/222/128/128"
                    }
                ]
            },
            {
                id: 12,
                image: "https://picsum.photos/id/16/500/500",
                description: "Praesent dictum nunc non turpis iaculis, sed maximus orci tincidunt. Nam rhoncus facilisis neque, id laoreet dui pulvinar quis. In libero magna, fermentum sed libero ut, placerat sodales felis.",
                date: new Date().toISOString(),
                likeCount: 25,
                liked: true,
                commentCount: 0,
                comments: []
            },
            {
                id: 13,
                image: "https://picsum.photos/id/17/500/500",
                description: "Sed quis rhoncus eros. Quisque ultricies ex ultrices, sodales libero eget, elementum ex. Nulla vel condimentum neque. Quisque euismod massa risus, id egestas est laoreet ac.",
                date: new Date().toISOString(),
                likeCount: 35,
                liked: false,
                commentCount: 0,
                comments: []
            },
            {
                id: 14,
                image: "https://picsum.photos/id/18/500/500",
                description: "Maecenas mollis, neque ut eleifend efficitur, leo orci bibendum neque, a facilisis enim ligula vitae metus.",
                date: new Date().toISOString(),
                likeCount: 45,
                liked: true,
                commentCount: 0,
                comments: []
            },
            {
                id: 15,
                image:"https://picsum.photos/id/19/500/500" ,
                description: "Cras risus turpis, ullamcorper vitae tincidunt sit amet, sodales a justo. In cursus justo a velit tempus, vitae hendrerit velit volutpat. Nam ac aliquet risus, vel placerat lectus. Nam feugiat vel tellus non tincidunt. Integer tristique tempus sapien non interdum.",
                date: new Date().toISOString(),
                likeCount: 55,
                liked: false,
                commentCount: 0,
                comments: []
            },
        ]
    }
};