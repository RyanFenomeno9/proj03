
    let Nome;
    let Idade;
    let Possuicadastro;
    let Possuiautorizacao;
    let Estaacompanhado;

    Nome = prompt("Digite seu nome: ");
    Idade = Number(prompt(("Digite sua idade: ")));
    Possuicadastro = prompt("Possui cadastro? (sim/nao): ");
    Possuiautorizacao = prompt("Possui autorização especial? (sim/nao): ");
    Estaacompanhado = prompt("Está acompanhado? (sim/nao): ");

    if (Possuicadastro == "nao") 
    {
        console.log("Acesso negado: usuário não cadastrado.");
    }
    else {
        if (Possuicadastro == "sim" && Idade >= 18) 
        {
            console.log("Acesso liberado");
        }

        else 
        {
            if (idade < 18 || Possuiautorizacao == "nao") 
            {
                if (Estaacompanhado == "sim") 
                {
                    console.log("Permitir entrada com restrição/responsável.");
                }

                else if (Estaacompanhado == "nao") 
                {
                    console.log("Acesso negado: menor desacompanhado.");
                }
            }
        }
    }