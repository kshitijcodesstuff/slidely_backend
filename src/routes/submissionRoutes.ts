import { Router } from 'express';
import * as submissionController from '../controllers/submissionController';

const router = Router();

router.get('/ping', submissionController.ping);
router.post('/submit', submissionController.submit);
router.get('/read', submissionController.read);
router.delete('/delete', submissionController.deleteSubmission);
router.put('/edit', submissionController.editSubmission);
router.get('/search', submissionController.searchByEmail);

export default router;
