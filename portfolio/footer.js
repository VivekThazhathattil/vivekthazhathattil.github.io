$(document).ready(function() {
    const path = (window.location.pathname);
    const pathExploded = path.split('/');
    var directoryName = pathExploded[pathExploded.length - 2];
    if(directoryName == "experience" || directoryName == "blog" || directoryName == "about" || directoryName == "contact" || directoryName == "portfolio"){
        if(pathExploded[pathExploded.length - 3] == "portfolio")
            directoryName = "";
        else
            directoryName = "../"
    }
    else
        directoryName = "";

    let appFooter = `
		<div class="foot">
			<div class="links">
				<div class="container">
					<a href="${directoryName}index.html" class="icon-link">
						<p><i class="icon icon-flickr">&#xe804;</i></p>
						<p><span>HOME</span></p>
					</a>
					<a href="${directoryName}experience/index.html" class="icon-link">
						<p><i class="icon icon-flickr">&#xe809;</i></p>
						<p><span>EXPERIENCE</span></p>
					</a>
					<a href="${directoryName}portfolio/index.html" class="icon-link">
						<p><i class="icon icon-flickr">&#xe806;</i></p>
						<p><span>PORTFOLIO</span></p>
					</a>
					<a href="${directoryName}blog/index.html" class="icon-link">
						<p><i class="icon icon-flickr">&#xe807;</i></p>
						<p><span>BLOG</span></p>
					</a>
					<a href="${directoryName}contact/index.html" class="icon-link">
						<p><i class="icon icon-flickr">&#xe803;</i></p>
						<p><span>CONTACT</span></p>
					</a>
					<a href="${directoryName}about/index.html" class="icon-link">
						<p><i class="icon icon-flickr">&#xe808;</i></p>
						<p><span>ABOUT</span></p>
					</a>
				</div>
			</div>
		</div>
    `;
    document.getElementById("app-footer").innerHTML = appFooter;
});

