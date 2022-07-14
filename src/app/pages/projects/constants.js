import { footer, footerStyle } from "../../../components/footer/index.js"
import { projects } from "../../../components/projects/index.js"

export const head = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<link rel="stylesheet" href="template/styles/global.css">
<link rel="stylesheet" href="template/styles/all-projects.css">
<style>${footerStyle}</style>
</head>
`

export const body = `
<body>
<header>
<h1>All Projects</h1>
</header>
<main>
${projects()}
</main>
${footer}
</body>
</html>
` 