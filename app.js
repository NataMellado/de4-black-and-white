import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

const app = express();

const __dirname = path.resolve();

// Configuración de Handlebars
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'), 
    partialsDir: path.join(__dirname, 'views', 'partials'), 
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

export default app;
