import express from "express"
import multer from "multer"
import MyRestaurantController from "../controllers/MyRestaurantController.js";
import { jwtCheck, jwtParse } from "../middlewares/auth.js";
import { validateMyRestaurantRequest } from "../middlewares/validation.js";


const router = express.Router()

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});

router.post("/", upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, MyRestaurantController.createMyRestaurant)

export default router;