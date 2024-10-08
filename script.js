//Selecionar por ID
function puxarElementoid() {
    const subtitulo = document.getElementById('subtitulo');
    return console.log(subtitulo);
}
puxarElementoid();

//Selecionar por classe
function puxarElementoPorClasse() {
    const titulo = document.getElementsByClassName('titulo');
    return console.log(titulo);
}
puxarElementoPorClasse();

//Selecionar por Tag
function puxarElementoPorTag() {
    const tags = document.getElementsByTagName('p');
    return console.log(tags);
}
puxarElementoPorTag();

//Função para modificar o texto
function setText() {
    const subtitulo = document.getElementById('subtitulo');
    subtitulo.textContent = "Agora Vai";
}