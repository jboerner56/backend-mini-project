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

    static getAll() {
        return db.any(`select * from users`)
            .then((arrayOfUsers) => {
                return arrayOfUsers.map((userData) => {
                    const aUser = new User(
                        userData.id,
                        userData.username,
                        userData.password,
                        userData.first_name,
                        userData.last_name,
                        userData.phone,
                        userData.email
                        );
                        return aUser;
                    })
                })
            }
            
            static getById(id) {
                return db.one(`select * from users where id=${id}`)
                .then((userData) => {
                    const userInstance = new User (
                        userData.id,
                        userData.username,
                        userData.password,
                        userData.first_name,
                        userData.last_name,
                        userData.phone,
                        userData.email
                );
                return userInstance;
            })
            .catch(() => {
                return null;
            })
    }
}

module.exports = User;