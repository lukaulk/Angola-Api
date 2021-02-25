import express from 'express';
import {rateBnaController} from '../useCases/rateBnaUseCases'
import {rateLuiborController} from "../useCases/rateLuiborUseCases"
import {rateInflationController} from "../useCases/rateInflationUseCases"

const router = express.Router();


router.get('/banks/rate/interest/bna', async (req, res) => {
  return rateBnaController.handle(req, res);
})

router.get('/banks/rate/interest/luibor', async (req, res) => {
  return rateLuiborController.handle(req, res);
})

router.get('/banks/rate/inflation', async (req, res) => {
  return rateInflationController.handle(req, res);
})

export default router