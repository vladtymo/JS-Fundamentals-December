const os = require('os');

function showMessage(login) {
    console.log(`Hello, dear ${login || os.userInfo().username}`);
}
function inner() {
    console.log(`Inner func!`);
}

let user = {
    id: 10,
    email: "bla@ukr.net"
};

module.exports = {
    showMessage,
    user
}