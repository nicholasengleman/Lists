const posts = [{
    _id: "1",
    title: "My Craziest Travel Story!",
    publishDate: "2019-03-03T20:30:28.809Z",
    likes: 4,
    youtubeLink: "ctzu7grNhuo",
    username: "bernadette",
    club: "Travel",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "2",
    title: "WHERE to TRAVEL in 2019: 15 PLACES TO GO!!",
    publishDate: "2019-03-03T19:04:28.809Z",
    likes: 10,
    youtubeLink: "MtnQCfmH6To",
    username: "bernadette",
    club: "Travel",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "3",
    title: "200 Days - A Trip Around the World Travel Film",
    publishDate: "2019-03-02T19:04:28.809Z",
    likes: 15,
    youtubeLink: "RcmrbNRK-jY",
    username: "bernadette",
    club: "Travel",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "4",
    title: "31 INSANELY AFFORDABLE Budget Travel Destinations to VISIT NOW",
    publishDate: "2019-01-03T19:04:28.809Z",
    likes: 15,
    youtubeLink: "sRyslbdtT90",
    username: "bernadette",
    club: "Travel",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "5",
    title: "Jussie Smollett indicted by grand jury on 16 felony counts",
    publishDate: "2019-03-03T20:30:28.809Z",
    likes: 4,
    youtubeLink: "pObjLOyxQP4",
    username: "bernadette",
    club: "news",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "6",
    title: "Oil spill disaster near world heritage site 'irreversible' ",
    publishDate: "2019-03-03T19:04:28.809Z",
    likes: 10,
    youtubeLink: "fRY3Yi9ij0w",
    username: "bernadette",
    club: "news",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "7",
    title: "Here's why Finland’s entire government just resigned",
    publishDate: "2019-03-02T19:04:28.809Z",
    likes: 15,
    youtubeLink: "2n3QnBw2z4A",
    username: "bernadette",
    club: "news",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "8",
    title: "Rep. Omar under fire again after criticizing Obama",
    publishDate: "2019-01-03T19:04:28.809Z",
    likes: 15,
    youtubeLink: "yoIZK6rFCHU",
    username: "bernadette",
    club: "news",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "9",
    title: "Marvel Studios' Captain Marvel - Trailer 2",
    publishDate: "2019-03-03T20:30:28.809Z",
    likes: 4,
    youtubeLink: "0LHxvxdRnYc",
    username: "bernadette",
    club: "movies",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "10",
    title: "Nikki Bella's Mom Tries to Get Her to Find Balance",
    club: "movies",
    publishDate: "2019-03-03T19:04:28.809Z",
    likes: 10,
    youtubeLink: "K9aNGbwwNdo",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "12",
    title: "ITZY \"달라달라(DALLA DALLA)\" M/V",
    club: "movies",
    publishDate: "2019-03-02T19:04:28.809Z",
    likes: 15,
    youtubeLink: "pNfTK39k55U",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Reddit Cringe Compilation",
    club: "news",
    publishDate: "2019-01-03T19:04:28.809Z",
    likes: 15,
    youtubeLink: "H8ZVBrSFsU4",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "9",
    title: "Marvel Studios' Captain Marvel - Trailer 2",
    club: {_id: "5b21ca3eeb7f6fbccd471818", name: "Travel"},
    publishDate: "2019-03-03T20:30:28.809Z",
    likes: 4,
    youtubeLink: "0LHxvxdRnYc",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "10",
    title: "Nikki Bella's Mom Tries to Get Her to Find Balance",
    genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Politics"},
    publishDate: "2019-03-03T19:04:28.809Z",
    likes: 10,
    youtubeLink: "K9aNGbwwNdo",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "12",
    title: "ITZY \"달라달라(DALLA DALLA)\" M/V",
    genre: {_id: "5b21ca3eeb7f6fbccd471820", name: "Crazy News"},
    publishDate: "2019-03-02T19:04:28.809Z",
    likes: 15,
    youtubeLink: "pNfTK39k55U",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Reddit Cringe Compilation",
    genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Travel"},
    publishDate: "2019-01-03T19:04:28.809Z",
    likes: 15,
    youtubeLink: "H8ZVBrSFsU4",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Sins and Seduction 2019",
    publishDate: "2019-03-03T20:30:28.809Z",
    likes: 4,
    youtubeLink: "7s6edpaGhRg",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Best Movies of 2018",
    publishDate: "2019-03-03T19:04:28.809Z",
    likes: 10,
    youtubeLink: "sAIbH3C9gOg",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Wonderful, epic, and heroic movie soundtracks",
    publishDate: "2019-03-02T19:04:28.809Z",
    likes: 15,
    youtubeLink: "G5nORbjhUao&t",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Climax",
    publishDate: "2019-01-03T19:04:28.809Z",
    likes: 15,
    youtubeLink: "Hi69nL_VrTE",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Sins and Seduction 2019",
    publishDate: "2019-03-03T20:30:28.809Z",
    likes: 4,
    youtubeLink: "7s6edpaGhRg",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Best Movies of 2018",
    publishDate: "2019-03-03T19:04:28.809Z",
    likes: 10,
    youtubeLink: "sAIbH3C9gOg",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Wonderful, epic, and heroic movie soundtracks",
    publishDate: "2019-03-02T19:04:28.809Z",
    likes: 15,
    youtubeLink: "G5nORbjhUao&t",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}, {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Climax",
    publishDate: "2019-01-03T19:04:28.809Z",
    likes: 15,
    youtubeLink: "Hi69nL_VrTE",
    username: "bernadette",
    subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
}];

let mostRecentPosts = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Sins and Seduction 2019",
        publishDate: "2019-03-03T20:30:28.809Z",
        likes: 4,
        youtubeLink: "7s6edpaGhRg",
        username: "bernadette",
        subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
    }, {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Best Movies of 2018",
        publishDate: "2019-03-03T19:04:28.809Z",
        likes: 10,
        youtubeLink: "sAIbH3C9gOg",
        username: "bernadette",
        subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
    }, {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Wonderful, epic, and heroic movie soundtracks",
        publishDate: "2019-03-02T19:04:28.809Z",
        likes: 15,
        youtubeLink: "G5nORbjhUao&t",
        username: "bernadette",
        subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
    }, {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Climax",
        publishDate: "2019-01-03T19:04:28.809Z",
        likes: 15,
        youtubeLink: "Hi69nL_VrTE",
        username: "bernadette",
        subtitle: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
    }
];

export function getMostRecentPosts() {
    return mostRecentPosts;
}




export function getAllPosts() {
    return posts;
}

