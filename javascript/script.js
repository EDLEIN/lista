let listaTarefas = JSON.parse(localStorage.getItem('tarefas')) ||[];

function renderizarTarefas(){
    const ul = document.getElementById('lista-tarefas');
    ul.innerHTML = '';

    listaTarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.className = tarefa.concluida ? 'concluida' : '';

        const texto = document.createElement('span');
        texto.textContent = tarefa.texto;
        texto.onclick = () => toggleConcluida(index);
        li.appendChild(texto);

        const btn = document.createElement('button');
        btn.textContent = 'Excluir';
        btn.onclick = () => excluirTarefa(index);
        li.appendChild(btn);

        ul.appendChild(li);
    });

    localStorage.setItem('tarefas', JSON.stringify(istaTarefas));
}

function adicionarTarefa(){
    const input = document.getElementById('nova-tarefa');
    const texto = input.value.trim();

    if(texto !== ''){
        listaTarefas.push({texto, concluida: false});
        input.value = '';
        renderizarTarefas();
    }
}

function excluirTarefa(index){
    listaTarefas.splice(index, 1);
    renderizarTarefas();
}


function toggleConcluida(index){
    listaTarefas[index].concluida = !listaTarefas[index].concluida;
    renderizarTarefas();
}

renderizarTarefas();


