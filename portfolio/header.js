$(document).ready(function() {
    const path = (window.location.pathname);
    const pathExploded = path.split('/');
    var directoryName = pathExploded[pathExploded.length - 2];
    directoryName = directoryName != "src" ? "../" : "";

    let appHeader = `
    			<div class="nav">
    				<a id="nav-home" href="${directoryName}index.html">
    					Home
    				</a>
    				<a id="nav-experience" href="${directoryName}experience/index.html">
    					Experience
    				</a>
    				<a id="nav-portfolio" href="${directoryName}portfolio/index.html">
    					Portfolio
    				</a>
    				<a id="nav-blog" href="${directoryName}blog/index.html">
    					Blog
    				</a>
    				<a id="nav-contact" href="${directoryName}contact/index.html">
    					Contact
    				</a>
    				<a id="nav-about" href="${directoryName}about/index.html">
    					About
    				</a>
    			</div>
    `;
    document.getElementById("app-header").innerHTML = appHeader;
});

