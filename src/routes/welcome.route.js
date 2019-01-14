import {Router} from 'express';

const router = Router();

router.get('/welcome', async (req, res) => {
    res.send({"message": "welcome"})
});

export default router;