function mostrarItensSelecionados() {
  const itensSelecionados = [];
  const checkboxes = document.querySelectorAll('.checkbox');

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const descricaoItem = checkbox.parentElement.querySelector('p').textContent;
      const imagemItem = checkbox.parentElement.querySelector('img').src;
      itensSelecionados.push({ descricao: descricaoItem, imagem: imagemItem });
    }
  });

  const listaItensSelecionados = document.getElementById('listaItensSelecionados');
  listaItensSelecionados.innerHTML = '';

  itensSelecionados.forEach((item) => {
    const listItem = document.createElement('li');
    const imagemItem = document.createElement('img');
    imagemItem.src = item.imagem;
    imagemItem.alt = item.descricao;
    listItem.appendChild(imagemItem);
    listItem.appendChild(document.createTextNode(item.descricao));
    listaItensSelecionados.appendChild(listItem);
  });

  document.getElementById('itensSelecionados').style.display = 'block';
}