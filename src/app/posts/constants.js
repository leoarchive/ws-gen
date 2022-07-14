import * as config from '../../../wsgen.json' assert {type: "json"};
import { footer as footerTemplate, footerStyle } from "../../components/footer/index.js"

export const outdir = config.default.outputdir + "posts/"

export const head = `
<!DOCTYPE html>
<html lang=\"en\">
<head>
<meta charset=\"UTF-8\">
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
<title>Document</title>
<style>
${footerStyle}
</style>
<link rel="stylesheet" href="../template/styles/global.css">
<link rel="stylesheet" href="../template/styles/${config.default.posts.template}">
</head>
`

export const body = (content) => "<html><body>" + content + footer + "</body></html>";

export const footer = footerTemplate;