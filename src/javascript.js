let contador = 0;

function jogada(id) {
    var elemento = document.getElementById(id);
    
    // Verifica se o conteúdo do botão é "1" (removendo espaços extras)
    if (elemento.textContent.trim() === "") {
        if (contador % 2 === 0) {
            elemento.textContent = "X";  // Jogador 1 (X)
        } else {
            elemento.textContent = "O";  // Jogador 2 (O)
        }
        if (verificarVencedor()) {
            alert("Temos um vencedor!");
            resetar()
        }
        contador += 1;  // Incrementa o contador
    }

    // Atualiza a vez do próximo jogador
    let vez_jogador = (contador % 2) + 1;  // Jogador 1 ou Jogador 2
    var jogador = document.getElementById("jogador_vez");
    jogador.textContent = "Vez: Jogador " + vez_jogador;

    // Verifica se já temos pelo menos 5 jogadas (número mínimo para vitória)
    if (contador > 5) {
        verificarVencedor();
        if(contador > 8) {
            alert("empate")
            return resetar()
        }
        
    }
}

function resetar() {
    var res1 = document.getElementById(1);
    res1.textContent = "";

    var res1 = document.getElementById(2);
    res1.textContent = "";
    var res1 = document.getElementById(3);
    res1.textContent = "";
    var res1 = document.getElementById('quatro');
    res1.textContent = "";
    var res1 = document.getElementById('cinco');
    res1.textContent = "";
    var res1 = document.getElementById('seis');
    res1.textContent = "";
    var res1 = document.getElementById('sete');
    res1.textContent = "";
    var res1 = document.getElementById('oito');
    res1.textContent = "";
    var res1 = document.getElementById('nove');
    res1.textContent = "";
    contador = 0;
    jogador.textContent = "Vez: Jogador 1"
}





function verificarVencedor() {
    // Verifica as linhas
    if (
        (checkCels(1, 2, 3)) || (checkCels('quatro', 'cinco', 'seis')) || (checkCels('sete', 'oito', 'nove')) || 
        (checkCels(1,'quatro','sete')) || (checkCels(2,'cinco','oito')) || (checkCels(3,'seis','nove')) ||
        (checkCels(1,'cinco','nove')) || (checkCels ('sete','cinco',3))
        
    ) {
        return true
    }
    
    // Verifique também colunas e diagonais da mesma maneira (você pode adicionar mais verificações)
}

// Função auxiliar para verificar se três células têm o mesmo conteúdo
function checkCels(c1, c2, c3) {
    const cel1 = document.getElementById(c1).textContent;
    const cel2 = document.getElementById(c2).textContent;
    const cel3 = document.getElementById(c3).textContent;

    // Verifica se as três células são iguais e diferentes de "1" (inicial)
    return (cel1 === cel2 && cel2 === cel3 && cel1 !== "" && cel2 !== "" && cel3 !== "");
}
