* Implementar TYPESCRIPT no projeto;
  OK - Verificar se os arquivos do Models também vira `.ts`
  OK - Verificar se Migrations vai vir como `.ts`
  OK - Implementar tratamento de erro correto e retorno de mensagem como "Campo Phone obrigatório";
  OK - Fazer com que ao atualizar dados o "validate: false" dos services não deixe atualizar para dados "vazio"
  OK - Ajustar erro que trava terminal ao tentar fazer requisição com token vencido/invalido
  - Ajustar tipagem correta, ex: em "const { roles, permissions } = req.body;" deve mostrar que são strings e não any


  - Refatorar nomes e lógica de Resetar senha/Conferir Token
  - Remover autenticação de endpoints que devem ser públicas
  - Limitar requisições das autenticações
  - Evitar 2 cadastros com mesmo número de telefone/celular
  
