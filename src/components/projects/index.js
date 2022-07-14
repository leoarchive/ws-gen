export const projectsConfig = [
  {
    title: "JavaScript HolyC Interpreter",
    link: "https://leozamboni.github.io/holyc-interpreter",
    img: "./assets/jsholyc.png"
  },
  {
    title: "LibreScript Programming Language",
    link: "https://leozamboni.github.io/librescript",
    img: "https://librescript.org/libre-girl.png"
  },
];

export const projects = (items=projectsConfig.length) => {
  return "<ul class=\"projects\">" + projectsConfig.slice(0, items).map(e => `
<li>
<a href="${e.link}">
<img src="${e.img}" alt="">
<p>
${e.title}
</p>
</a>
</li>`).join('') + "</ul>";
}

export const projectsStyle = `
.projects {
list-style: none;
}

.projects li {
display: inline-block;
text-align: center;
}

.projects li:hover {
background-color: lightgreen;
}

.projects img {
height: 200px;
width: 200px;
}
`