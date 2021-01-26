import dotenv from 'dotenv';
import app from './server/app';

dotenv.config();
const port = process.env.PORT || '8080';

app.listen(port,()=>{
    console.log(`Server on: http://localhost: ${port}`);
});
