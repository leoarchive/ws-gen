import * as config from '../../../../wsgen.json' assert {type: "json"};
import * as fs from 'fs'
import * as util from 'util'
import { lambdacircle, lambdacirclestyle } from "../../../components/lambda-circle/index.js"
import { footer, footerStyle } from "../../../components/footer/index.js"
import { readFile } from "../../../utils/filesystem.js";
import { projects, projectsConfig, projectsStyle } from '../../../components/projects/index.js';

const readdir = util.promisify(fs.readdir)
const postsLength = async () => {
  const filenames = await readdir(dirname);
  return filenames.length;
}

export const listPosts = async () => {
  const dirname = config.default.posts.path;
  const filenames = await readdir(dirname);

  let files = filenames.map(e => {
    const title = readFile(dirname + e);
    return {
      path: dirname + e.substring(0, e.length - 2) + "html",
      title: title.split('\n')[0].substring(2),
      date: e.substring(0, 8)
    }
  })

  files = files.sort((a, b) => {
    const dateA = new Date(a.date), dateB = new Date(b.date)
    return dateA - dateB
  }).reverse();

  return files.map(e => `
<li>
<p>
<a href="${e.path}">
${e.title}
</a>
<span>
${new Date(e.date).toLocaleDateString("pt-BR")}
</span>
</p>
</li>`);
}

export const head = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${config.default.title}</title>
<link rel="stylesheet" href="template/styles/global.css">
<link rel="stylesheet" href="template/styles/${config.default.index.template}">
<style>
${lambdacirclestyle}
${footerStyle}
${projectsStyle}
</style>
</head>
`

export const body = `
<body>
<header>
${lambdacircle}
<h1 class="title">Leonardo</h1>
<br>
<p>Programming enthusiast.</p>
<br>
<hr>
</header>
<main>
<div class="box">
<h2>Recent Projects <span class="all-stuff"><a href="./projects.html">all projects (${projectsConfig.length})</a></span></h2>
<!-- list of recent projects -->
${projects(5)}
</div>
<div class="box">
<h2>Last Posts <span class="all-stuff"><a href="./posts.html">all posts (${await postsLength()})</a></span></h2>
<!-- list of last posts -->
<ul>
${await listPosts().slice(0,5).join('')}
</ul> 

</div>
${footer}
</main>
</body>
</html>
`