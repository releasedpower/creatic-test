const express = require('express');
const router = express.Router();
const userEntityController = require('../controllers/userEntityController');

router.get('/', userEntityController.getAllUserEntities);
router.get('/:id', userEntityController.getUserEntityById);
router.post('/', userEntityController.createUserEntity);
router.put('/:id', userEntityController.updateUserEntity);
router.delete('/:id', userEntityController.deleteUserEntity);

module.exports = router;
