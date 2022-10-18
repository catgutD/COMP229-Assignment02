//index.route.server.js Cathy Da 301177731 Sept 26
import { Router } from "express";
import { displayAboutPage, displayHomePage, displayProjectsPage, displayServicesPage } from "../controllers/index.controller.server.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);


export default router;