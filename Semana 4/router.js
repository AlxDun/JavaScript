const routes = {
    "#/": getAboutPage(),
    "#/about": getAboutPage(),
    "#/contact": getContactPage()
}

function handleRoute(){
    const hash = window.location.hash || "#/";
    const content = routes[hash] ? routes[hash](): "<h1>Page not found<h1>"
    document.getElementById("app").innerHTML=content;
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute)

function getHomePage(){
    return "<h1>el pepe<h1><p>mamaguevazo<p>"
}

function getAboutPage(){
    return "<h1>El aguacate es un afruta<h1><p>potaxio<p>"
}

function getContactPage(){
    return "<h1>Eso tilin<h1><p>wow tilin<p>"
}