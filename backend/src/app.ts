import express from 'express';
import home from '../routes/home'


const app = express();

app.use('/', home)
app.listen(3001, () => { console.log('Servidor Ligado')} );
