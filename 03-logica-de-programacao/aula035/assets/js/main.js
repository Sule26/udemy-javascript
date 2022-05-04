function add() {
    const result = document.querySelector('.container')
    const div = document.createElement('div');

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ]
    for(let i = 0; i < elementos.length; i++) {
        let {tag, texto} = elementos[i];
        let createdTag = document.createElement(tag);
        let createdText = document.createTextNode(texto);
        
        createdTag.appendChild(createdText);
        div.appendChild(createdTag);
    }
    result.appendChild(div);
}

