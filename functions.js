module.exports = allUsers

function allUsers(data) {
    let resolute = ''
    for (let x of data) {
        resolute += x.id + " " + x.email + " " + x.password + "\n";
    }
    return resolute
}    
