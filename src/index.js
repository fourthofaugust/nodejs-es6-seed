/**
 * nodejs-es6-seed
 * @author Phani Mahesh
 */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import welcomeRoute from './routes/welcome.route';
import {version, name} from '../package.json';

const start = () => {

    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use('/v1', welcomeRoute);

    var port = process.env.PORT || 8080;
    app.listen(port, () =>
        console.log(`${name} v${version} is running on port ${port} in ${process.env.NODE_ENV}!`)
    );
};
start();