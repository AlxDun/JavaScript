const socket = new WebSocket("http://127.0.0.1:5500/")

const state = {
    users: [],
    currentPage: "Home",
    isLoading: false
}

function updateState(newState){
    Object.assign(state. newState);
    renderContent();
}

function renderContent(){
    const appDiv = document.getElementById("app");
    if (state.isLoading){
        appDiv.innerHTML="<div>Loading...<div>";
        return;
    }
    appDiv.innerHTML=routes[window.location.hash || "#/"]();
}

function setupEventListeners(){
    document.getElementById("app").addEventListener("click", function(event){
        if (event.target.matches(".button-submit")){
            handleSubmit(event)
        }
        if (event.target.matches(".toggle-menu")){
            toggleMenu(event);
        }
    });
}

function handleSubmit(event){
    event.preventDefault();
    updateState({isLoading: true});
}

function toggleMenu(event){
    document.querySelector(".menu").classList.toggle("active");
}