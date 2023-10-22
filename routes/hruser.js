const express = require('express');
const hruser = express.Router();
const db = require('../config/database');
const jwt = require('jsonwebtoken');

module.exports = hruser;