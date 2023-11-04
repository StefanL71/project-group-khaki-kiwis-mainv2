// Contains functions that interact with AWS

// Get placeholder images to display on homepae
function getAvatarList() {
    let avatarUrlList = [];
    for (let i = 1; i <= 8; i++) {
        let avatarUrl = `https://khaki-avatars.s3.ap-southeast-2.amazonaws.com/${i}.png`;

        avatarUrlList.push(avatarUrl);
    }
    return avatarUrlList;
}

// Get avatars to display on homepae
function getPlaceholderImages() {
    let placeHolderList = [];
    for (let i = 1; i <= 11; i++) {
        let placeHolderUrl = `https://article-cover-image.s3.amazonaws.com/${i}.jpg`;
        placeHolderList.push(placeHolderUrl);
    }
    return placeHolderList;
}

module.exports = {
    getAvatarList,
    getPlaceholderImages
}
