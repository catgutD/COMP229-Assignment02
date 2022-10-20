//contact.route.server.js Cathy Da 301177731 Oct 19
import { Router } from "express";
import { DisplayContactEditPage, DisplayContactsList, ProcessContactsDelete, ProcessContactsEditPage } from "../controllers/contacts-list.controller.server.js";

const router = Router();

router.get('/contacts-list', DisplayContactsList);
router.get('/contacts-edit/:id', DisplayContactEditPage);
router.post('/contact-edit/:id', ProcessContactsEditPage);
router.get('/contacts-delete/:id', ProcessContactsDelete)

export default router;