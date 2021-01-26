import app from './server/app';

const port = process.env.PORT || '8080';

app.listen(port,()=>{
    console.log(`Server on: http://localhost: ${port}`);
});
