import {Router} from 'express';

const router = Router();

router.get('/welcome', async (req, res) => {
    res.send({"message": "welcome to foa"})
});

export default router;