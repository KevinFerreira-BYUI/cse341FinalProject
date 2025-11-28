
const playerAddedMsg = (name) => {
    const message = `${name} has been added.`
    return message;
};

const playerUpdateMsg = (name) => {
    const message = `${name} has been updated.`
    return message;
};

const playerDelMsg = (name) => {
    const message = `${name} has been deleted.`
    return message;
}

module.exports = {
    playerAddedMsg,
    playerUpdateMsg,
    playerDelMsg
}