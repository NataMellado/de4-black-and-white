import express from 'express';
import app from './app.js';
import router from './routes/routes.js';

const PORT = process.env.PORT || 3008;

// Middleware
app.use('/', router);
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
