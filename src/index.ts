import express from 'express';
import bodyParser from 'body-parser';
import { PORT } from './config';
import submissionRoutes from './routes/submissionRoutes';

const app = express();

app.use(bodyParser.json());
app.use('/api', submissionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

