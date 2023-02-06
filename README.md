# Rodando o projeto

# Dependências

As dependências necessárias para executar o projeto são:

- docker
- docker compose
- make

## Gerando .env

Primeiro gere o arquivo `.env`, o existe o arquivo `env.example` de exemplo, basta executar que irá funcionar localmente

```bash
$ cp .env.example .env
```

## Subindo

Só rodar o `make` ou `make up` que o projeto inteiro subirá,
o `back` estará amarrado a porta `3000` e o `front` na porta `5137` no host `localhost`,

```bash
$ make up 
```

:warning: esse comando já roda a migration e também já instala as dependencias caso não esteja instaladas ainda na primeira execução 

## Derrubando

Para parar o projeto rode:

```bash
$ make down
```

e para os logs

```bash
$ make logs
```

Caso queira limpar o projeto execute

```bash
$ make clean
```

# Bonus

O make suporta executar vários target num único comando, por exemplo:

```bash
# reseting project
$ make clean up logs
```

# Faltando

- Infelizmente ficou faltando os testes unitários e os testes de integração que levaria um ou dois dias para fazer;
- Uma refatoração no código, eu não dei uma segunda passada para melhorar a codebase, só fiz funcionar na primeira;
- Faltou internacionalização;
- Também faltou temas no styled-components então só ficou light mesmo, mas gostaria de ter colocado um dark theme;
- Eu não consegui colocar o Drag N Drop;
- O login não está estilizado porque eu fiz ele por último e esqueci