
// EndPoints Messages to the user about PLAYERS
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

// EndPoints Messages to the user about PLAYERS
const teamAddedMsg = (name) => {
    const message = `${name} has been created.`
    return message;
};

const teamUpdateMsg = (name) => {
    const message = `${name} has been updated.`
    return message;
};

const teamDelMsg = (name) => {
    const message = `${name} has been deleted.`
    return message;
};


module.exports = {
    playerAddedMsg,
    playerUpdateMsg,
    playerDelMsg,
    teamAddedMsg,
    teamUpdateMsg,
    teamDelMsg
}