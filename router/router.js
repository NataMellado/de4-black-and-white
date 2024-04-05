import Express from "express";
import path from "path";
import Jimp from "jimp";
import { v4 as uuidv4 } from "uuid";

const router = Express.Router();
const __dirname = process.cwd();

router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

router.get("/cargar", async (req, res) => {
    const { img } = req.query;

    try {
        const imageName = `img${uuidv4().slice(0, 6)}.jpg`;
        const { img } = req.query;
        const image = await Jimp.read(img);

        await image
            .resize(350, Jimp.AUTO) 
            .grayscale() 
            .writeAsync(`public/img/${imageName}`);

        res.sendFile(path.resolve(__dirname, 'public', 'img', imageName));


    } catch (error) {
        console.error("Error al procesar la imagen:", error);
        res.status(500).send("Error al procesar la imagen");
    }
});

export default router;


