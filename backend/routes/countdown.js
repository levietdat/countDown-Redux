import  express  from "express";
import { createDateCountDown, deleteDateCountDown, getDateCountDown, updateDateCountDown } from "../controllers/countdown.js";

const router = express.Router();

router.get('/',getDateCountDown)

router.post('/',createDateCountDown)

router.put('/:id',updateDateCountDown)
router.delete('/:id',deleteDateCountDown)
export default router