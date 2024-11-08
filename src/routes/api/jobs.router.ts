import { Router } from "express";
import { createJob, findAllJobs, findOneJob, updateJob, /*updateJob, deleteOneJob, favoriteJob, unfavoriteJob */ } from "../../controllers/jobController";
import { verifyJWT, verifyJWTOptional, } from "../../middlewares";
const router = Router();

router.post('/jobs', verifyJWT, createJob);

router.get('/jobs', verifyJWTOptional, findAllJobs);

router.get('/jobs/:slug', verifyJWTOptional, findOneJob);

//router.get('/jobsByCategory/:slug', getJobsByCategory);

router.put('/jobs/:slug', verifyJWT, updateJob);

//router.delete('/jobs/:slug', verifyJWT, deleteOneJob);

//router.post('/:slug/favorite', verifyJWT, favoriteJob);

//router.delete('/:slug/unfavorite', verifyJWT, unfavoriteJob);
export default router;
