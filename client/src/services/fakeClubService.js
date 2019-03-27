const clubs = [
    {
        _id: "5b21ca3eeb7f6fbccd4718181",
        title: "Travel"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181",
        title: "News"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471820",
        title: "Entertainment"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471818",
        title: "Movies"
    }
];


export function getAllClubs() {
    return clubs;
}

export function findClub(id) {
    return clubs.find(p => p._id === id);
}

export function getRandomClub(maxNumber = clubs.length) {
   return (Math.floor(Math.random() * maxNumber) + 1);

}

