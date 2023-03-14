import express from 'express';
import {signup, signin} from '../../controllers/admin/auth.js'
const adminRoutes = express.Router();


adminRoutes.post('/admin/signup', signup);
adminRoutes.post('/admin/signin', signin);

export default adminRoutes;