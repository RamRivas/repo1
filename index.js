"use strict";

const bcrypt = require('bcrypt');

console.log(bcrypt.hashSync('Santa', 10));