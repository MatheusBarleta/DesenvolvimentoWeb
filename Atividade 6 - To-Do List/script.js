// Capturando os elementos do DOM
const inputTarefa = document.getElementById('input-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const listaTarefas = document.getElementById('lista-tarefas');

// Função para adicionar nova tarefa
btnAdicionar.addEventListener('click', function() {
    const texto = inputTarefa.value.trim();

    // Verifica se o input não está vazio
    if (texto === '') {
        return; 
    }

    // 1. Criar um novo elemento <li>
    const li = document.createElement('li');

    // 2. Criar o span com o checkbox (Adicional Opcional)
    const span = document.createElement('span');
    span.className = 'checkbox-container';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    span.appendChild(checkbox);

    // 3. Criar um elemento para o texto da tarefa
    const spanTexto = document.createElement('span');
    spanTexto.className = 'texto-tarefa';
    spanTexto.textContent = texto;

    // Montar o <li> com o checkbox e o texto
    li.appendChild(span);
    li.appendChild(spanTexto);

    // 4. Adicionar o novo <li> à <ul>
    listaTarefas.appendChild(li);

    // 5. Limpar o campo de input
    inputTarefa.value = '';
    inputTarefa.focus();
});

// Delegação de Eventos na <ul> para lidar com exclusão e marcação de concluído
listaTarefas.addEventListener('click', function(event) {
    const elementoClicado = event.target;
    const liPai = elementoClicado.closest('li');

    // Se o clique for no checkbox, apenas altera a classe visual (não exclui)
    if (elementoClicado.type === 'checkbox') {
        if (elementoClicado.checked) {
            liPai.classList.add('concluida');
        } else {
            liPai.classList.remove('concluida');
        }
        return; // Interrompe a execução para não cair na lógica de remover
    }

    // Se o clique foi em qualquer outra parte do <li> (ou nos spans de dentro dele), remove do DOM
    if (liPai) {
        liPai.remove();
    }
});