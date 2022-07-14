import { indexPage } from "./index/index.js";
import { postsPage } from "./posts/index.js";
import { projectPage } from "./projects/index.js";

export const renderPages = () => { indexPage(); projectPage(); postsPage(); }