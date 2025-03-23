* Implementar TYPESCRIPT no projeto;
  OK - Verificar se os arquivos do Models também vira `.ts`
  OK - Verificar se Migrations vai vir como `.ts`
  - Ajustar tipagem correta, ex: em "const { roles, permissions } = req.body;" deve mostrar que são strings e não any

OK - Adicionar eslint
OK - Organizar as pastas dentro de API
OK - Centralizar lógica do `Error` do `Catch`
OK - Refatorar arquitetura do errors/appErrors e nome dos arquivos appError.ts e errorHandler

* Implementar tratamento de erro correto e retorno de mensagem como "Campo Phone obrigatório";


* Ajustar lógica de funcionamento das Roles e permissions
  -> Possibilidade de criar `roles`, as `permissions` serem atribuidas as `roles` e as `roles` serem atribuidas aos `users`