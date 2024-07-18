/*
  Builds the navigation bar for the webpage that requested it

  Since the geometry of the navigation bar is already prepared, the script simply appends various pieces of the 
  nav-bar together as we continue.
*/

const PAGE_LINKS = [ `href="index.html">Home</a>`, `href="pics.html">Photo Gallery</a>` , `href="blog.html">Blog</a>`, `href="projects.html">Projects</a>`];
const BLOG_PAGE_LINKS = [ `href="../index.html">Home</a>`, `href="../pics.html">Photo Gallery</a>` , `href="../blog.html">Blog</a>`, `href="../projects.html">Projects</a>`];

const LIST_TAG = `<li class="nav-item"> <a class="nav-link`;
const LIST_END_TAG = `</li>`


const HTML_BEGIN = `
  <nav class="navbar navbar-expand-md navbar-nav-scroll navbar-dark bg-dark fixed-top">
    <button type="button" class="navbar-toggler collapsed menu-button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
`;


const HTML_END = `
      </ul>
    </div>
  </nav>
`;

let index = Number(document.querySelector('#navbar-script').getAttribute('index'));
let isBlogPost = document.querySelector('#navbar-script').getAttribute('blog-post');

let page_links = isBlogPost === null ? PAGE_LINKS : BLOG_PAGE_LINKS;
let html_str = HTML_BEGIN;

for (var i = 0; i < page_links.length; i++)
{
  html_str += LIST_TAG;

  if (i == index)
  {
    html_str += ` active`;
  }

  html_str += `" ` + page_links[i] + LIST_END_TAG;
}

html_str += HTML_END;

let navbar = document.querySelector('.navigation');
let bar = document.createElement('div');
let frag = document.createDocumentFragment();

bar.innerHTML = html_str;

while (bar.firstChild)
{
    frag.appendChild(bar.firstChild);
}

navbar.append(frag);
