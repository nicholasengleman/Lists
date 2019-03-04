const posts = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Top 10 Fun Things To Do in Atlanta",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Travel" },
        publishDate: "2019-03-03T20:30:28.809Z",
        likes: 4,
        youtubeLink: "2OrsVRfFY-w"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Guess what President Trump Did Today",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Politics" },
        publishDate: "2019-03-03T19:04:28.809Z",
        likes: 10,
        youtubeLink: "V3dxovykJVA"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Flordia Man Boxes Gator on Bet",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Crazy News" },
        publishDate: "2019-03-02T19:04:28.809Z",
        likes: 15,
        youtubeLink: "NW2r29vTg7E"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "What to do in Italy",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Travel" },
        publishDate: "2019-01-03T19:04:28.809Z",
        likes: 15,
        youtubeLink: "fzhTEuP6PcE"

    },
];

export function getPosts() {
    return posts;
}

export function findPost(id) {
    return posts.find(p => p._id ===id);
}