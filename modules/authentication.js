// Check if password meets requirement of 8 characters
function IsPasswordValid(password){
    return password.length >= 8
}

// Check if input missing or not a string
function IsInputEmptyOrString(string){
    return string === "" || string === null || string === undefined || typeof string !== "string";
}

// Checks is id is smaller than 9 (there are only 8 avatars to choose from)
function IsAvatarIdValid(avatarId){
    return avatarId < 9
}

module.exports = {
    IsPasswordValid,
    IsInputEmptyOrString,
    IsAvatarIdValid
}

