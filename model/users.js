const db = require('./connect');

const bcrypt = require('bcryptjs');

class User {
    constructor(id, username, password, first_name, last_name, phone, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name =last_name;
        this.phone = phone;
        this.email = email;
    }
        
}

module.exports = User;