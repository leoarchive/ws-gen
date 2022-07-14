import { renderAssets } from "./app/assets/index.js";
import { renderPages } from "./app/pages/index.js";
import { indexPage } from "./app/pages/index/index.js";
import { postsPage } from "./app/pages/posts/index.js";
import { projectPage } from "./app/pages/projects/index.js";
import { renderPosts } from "./app/posts/index.js";
import { renderTemplate } from "./app/template/index.js";
import { writeFile } from "./utils/filesystem.js";

const wsgen = () => {
  let page;
  if (page = process.argv.filter(e => e.substring(0, 7) === "--page=").join("")) {
    page = page.substring(7, page.length)
    switch (page) {
      case "index":
        indexPage();
        break;
      case "projects":
        projectPage();
        break;
      case "posts":
        postsPage();
        break;
    }
    return;
  }

  if (process.argv.includes("--all")) {
    renderPosts();
    renderPages();
    renderTemplate();
    renderAssets();
    return;
  }

  if (process.argv.includes("posts")) {
    renderPosts();
  }

  if (process.argv.includes("pages")) {
    renderPages();
  }

  if (process.argv.includes("template")) {
    renderTemplate();
  }

  if (process.argv.includes("assets")) {
    renderAssets();
  }

  writeFile("./README", `page generated ${new Date().toLocaleDateString("pt-BR")} using https://github.com/leozamboni/ws-gen`)
}
wsgen();