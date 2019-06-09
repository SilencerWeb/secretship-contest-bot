import Telegraf from 'telegraf';
import { BOT_TOKEN } from './constants';


export const bot = new Telegraf(BOT_TOKEN);
