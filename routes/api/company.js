const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
const CompanyCtrl = require('../../controllers/api/company');


router.get('/getCompany', CompanyCtrl.getCompany);
// router.get('/getEmployee', CompanyCtrl.getEmployee);
router.post('/', CompanyCtrl.createCompany);
// router.post('/createEmployee', CompanyCtrl.createEmployee);



module.exports = router;