import express from 'express';
import Jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const router = express.Router();




// Ruta principal
router.get('/', async (req, res) => {
    res.render('home');
});




// Ruta para la página de acerca de
router.get('/about', async (req, res) => {
    res.render('about');
});




// Ruta para subir una imagen   
router.get('/upload', async (req, res) => {
    const { img } = req.query;

    try {
        const imageName = `img${uuidv4().slice(0, 6)}.jpg`;
        const image = await Jimp.read(img);

        await image
        .grayscale()
        .writeAsync(`public/img/${imageName}`);

        const originalImageUrl = img;
        const processedImageUrl = `/img/${imageName}`; 

        res.render('home', { originalImageUrl, processedImageUrl });

    } catch (error) {
        console.error("Error al procesar la imagen", error);
        const errorMessage = "URL no válida. Por favor, intenta con otra imagen.";
        res.render('home', { errorMessage });
    }
});




// Ruta para la galería de imágenes
router.get('/gallery', async (req, res) => {
    try {
        const directoryPath = './public/img';
        // readdirSync lee el contenido de un directorio de forma síncrona
        const imageFiles = fs.readdirSync(directoryPath);
        res.render('gallery', { images: imageFiles });

    } catch (error) {
        console.error("Error al procesar la galería", error);
        res.status(500).send('Error al procesar la galería');
    }
});




export default router;