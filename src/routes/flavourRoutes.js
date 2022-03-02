import { Router } from 'express';
import flavourController from '../controllers/FlavourController';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.get('/', flavourController.index);
router.get('/:id', flavourController.show);
router.post('/', loginRequired, flavourController.create);
router.put('/:id', loginRequired, flavourController.update);
router.delete('/:id', loginRequired, flavourController.delete);

export default router;
