
import { navigate } from "../app.js";
import page from "../../node_modules/page/page.mjs";

export function logoutUser() {
    localStorage.clear();
    page('/catalog');
    navigate();
}