import { footer, footerStyle } from "../../../components/footer/index.js"
import { listPosts } from "../index/constants.js"

export const head = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<link rel="stylesheet" href="template/styles/global.css">
<link rel="stylesheet" href="template/styles/all-posts.css">
<style>${footerStyle}</style>
</head>
`

export const body = `
<body>
<header>
<h1>All Posts</h1>
</header>
<main>
<ul class="posts">
${await listPosts()}
</ul>
</main>
${footer}
</body>
</html>
` 