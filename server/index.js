import 'dotenv/config';
import path from 'path';
import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import serve from 'koa-static';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './../swagger_output.json';

import './db';
import router from './router';

const app = new Koa();

app.listen(3000);
app
    .use(bodyparser())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(serve(path.resolve('./client')));
