import { Router } from 'express';
import * as TajobController from './tajob.controller';

// import { authenticate } from 'middleware/authentication';

const router = Router();

router.get('/query', TajobController.getTAJobsWithFilters);
router.get('/:id', TajobController.getTAJobById);
router.get('/', TajobController.getAllTAJobs);

export default router;