//contacts-list.route.server.js Cathy Da 301177731 Oct 19

import { Router } from "express";
import { DisplayContactEditPage, DisplayContactsList, ProcessContactsDelete, ProcessContactsEditPage } from "../controllers/contacts-list.controller.server.js";
import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/contacts-list', AuthGuard, DisplayContactsList);
router.get('/contacts-edit/:id', AuthGuard, DisplayContactEditPage);
router.post('/contacts-edit/:id', AuthGuard, ProcessContactsEditPage);
router.get('/contacts-delete/:id', AuthGuard, ProcessContactsDelete)

export default router;