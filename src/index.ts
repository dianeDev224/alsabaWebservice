// import dotenv from 'dotenv';
import express, {
    Application,
    NextFunction,
    Request,
    Response,
} from 'express';
import SSE from 'express-sse-ts';

import { ConnectToDatabase } from './InfracStructure/mongoose';
import route from './Routes/user.routes';

//For SSE
const sse = new SSE();

const app: Application = express();
const port = process.env.PORT || 8000;


app.use("/user", route);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "hello diane"
    });
});


app.get("/event", function (req: Request, res: Response, next: NextFunction) {
    sse.init(req, res, next)
})

app.get('/updates', function (req: Request, res: Response) {
    sse.send("hello");
});

app.listen(port, () => {
    ConnectToDatabase()
    console.log(`Server is Fire at http://localhost:${port}`);
});