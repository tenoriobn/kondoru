* Implementar TYPESCRIPT no projeto;
  OK - Verificar se os arquivos do Models também vira `.ts`
  OK - Verificar se Migrations vai vir como `.ts`
  OK - Implementar tratamento de erro correto e retorno de mensagem como "Campo Phone obrigatório";
  OK - Fazer com que ao atualizar dados o "validate: false" dos services não deixe atualizar para dados "vazio"
  - Ajustar tipagem correta, ex: em "const { roles, permissions } = req.body;" deve mostrar que são strings e não any
  - Ajustar erro que trava terminal ao tentar fazer requisição com token vencido/invalido

OK - Adicionar eslint
OK - Organizar as pastas dentro de API
OK - Centralizar lógica do `Error` do `Catch`
OK - Refatorar arquitetura do errors/appErrors e nome dos arquivos appError.ts e errorHandler
OK - Ao editar não pode atualizar para um email novo que já é utilizado em outra conta
OK - Classes devem ter a primeira letra Maiúscula!!!!
OK - Ajustar lógica de funcionamento das Roles e permissions (Possibilidade de criar `roles`, as `permissions` serem atribuidas as `roles` e as `roles` serem atribuidas aos `users`)
  
