import { Router } from 'express';
import { getAllBooks, getBookById } from '../controllers/books';

const router: Router = Router();

router.get('/', getAllBooks);

router.get('/:bookId', getBookById);

export default router;
