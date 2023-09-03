import express from 'express';
const router = express.Router();
import { 
    authUser, 
    registerUser,
    logOutUser,
    getUserprofile,
    updateUserprofile, 
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/auth', authUser);
router.post('/', registerUser);
router.post('/logout', logOutUser);
router.route('/profile').get(protect,getUserprofile).put(protect,updateUserprofile);

export default router;