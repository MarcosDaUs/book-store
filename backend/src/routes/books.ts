import { Router } from 'express';
import { getAllBooks, getBookById } from '../controllers/books';

const router: Router = Router();

router.get('/', getAllBooks);

router.get('/:id', getBookById);

export default router;
