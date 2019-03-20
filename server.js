const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/fitmyrun")
mongoose.Promise = global.Promise;