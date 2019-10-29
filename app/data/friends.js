let friendsArray = [
    {
        name: "Marge",
        photo: "https://list.lisimg.com/image/6042775/300full.jpg",
        scores: [3, 4, 5, 5, 3, 4, 2, 3, 4, 5]
    },
    {
        name: "Lucy Liu",
        photo: "data:image/jpeg;base64,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",
        scores: [2, 2, 4, 5, 4, 5, 5, 4, 1, 3]
    },
    {
        name: "Lana Condor",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyEbgP42m5u5I9U1VRLUFw84NZIgzH79uwsPlc1BliAVs10z0xXQ",
        scores: [5, 5, 4, 5, 4, 2, 5, 4, 2, 4]
    },
    {
        name: "Chloe Kim",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVVn_CKHA8zrWmw7x4W12Y28h4GfBS5n7VC-UuO2LcAalUb3g4Q",
        scores: [1, 1, 2, 3, 4, 3, 2, 2, 2, 2]
    }
];

module.exports = friendsArray;