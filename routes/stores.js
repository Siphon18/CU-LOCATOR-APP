const express= require('express');
const { getStores, addStores } = require('../controllers/stores');

const router = express.Router();

router
  .route('/')
  .get(getStores)
  .post(addStores);

module.exports = router;