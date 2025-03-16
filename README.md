# 📌 RTDS-SHOP - E-commerce com React

## 📖 Sobre o Projeto
O **RTDS-SHOP** é um e-commerce desenvolvido com **React, TypeScript e TailwindCSS** que consome a API **DummyJSON** para exibir, adicionar, editar e excluir produtos. O projeto foi desenvolvido como parte de um desafio profissional.

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para maior segurança no código
- **Tailwind CSS** - Framework para estilização 
- **Axios** - Cliente HTTP para chamadas de API
- **React Hooks** - Para gerenciamento de estado
- **React Router** - Para navegação entre páginas
- **Intersection Observer** - Para implementação do Infinite Scroll

## 🏗️ Arquitetura
O **RTDS-SHOP** segue a arquitetura baseada em **componentes e camadas**, garantindo modularidade e escalabilidade caso haja a necessidade de expansão futuramente. Os principais princípios adotados são:

- **Separation of Concerns (SoC)**: Código organizado por responsabilidade, evitando monólitos.
- **Componentização**: Divisão de UI em componentes reutilizáveis para facilitar manutenção e reuso.
- **Context API**: Utilizado para gerenciar estados globais, como o carrinho de compras.
- **Hooks Personalizados**: Implementação de `useProducts` e `useProductById` para abstração de chamadas à API.
- **Padrão Service Layer**: Separação entre lógica de requisições HTTP e componentes, centralizada em `services/api.ts`.

## 📂 Estrutura do Projeto
```
RTDS-SHOP/
├── src/
│   ├── components/        # Componentes reutilizáveis
│   ├── contexts/          # Contextos globais
│   ├── hooks/             # Hooks personalizados
│   ├── pages/             # Páginas do e-commerce
│   ├── services/          # Requisições para a API
│   ├── types/             # Definição de tipos TypeScript
│   ├── App.tsx            # Componente raiz do projeto
│   ├── main.tsx           # Arquivo de entrada
│   ├── index.css          # Estilos globais
├── public/                # Arquivos estáticos
├── package.json           # Dependências do projeto
├── tailwind.config.js     # Configuração do Tailwind CSS
├── vite.config.ts         # Configuração do Vite
└── README.md              # Documentação do projeto
```

##  📡 Configuração do Ambiente
### 1️⃣ Requisitos
Antes de iniciar, você precisa ter instalado:
- [Node.js](https://nodejs.org/) (versão 16+)
- Gerenciador de pacotes **npm** ou **yarn**

### 2️⃣ Clonar o Repositório
```sh
git clone https://github.com/seu-usuario/rtds-shop.git
cd rtds-shop
```

### 3️⃣ Instalar Dependências
```sh
npm install
# ou
yarn install
```

### 4️⃣ Rodar o Projeto
```sh
npm run dev
# ou
yarn dev
```

**OBS** -> Não esquecer de configurar o ambiente para utilizar o tailwind da forma corrreta. Leita a documentação e siga os passos informados, isso dará certo. [Documentação](https://tailwindcss.com/docs/installation/using-vite)

A aplicação estará disponível em **[Deploy](Deploy)**.

## 🛠️ Funcionalidades Implementadas
✅ **Consumo de APIs (GET, POST, PUT, DELETE)**
- **GET**: Busca e exibição de produtos
- **POST**: Adição de novos produtos
- **PUT**: Atualização de produtos
- **DELETE**: Remoção de produtos

✅ **Gerenciamento de Estado**
- Uso de **React Hooks** (`useState`, `useEffect`)
- Context API para gerenciamento do carrinho de compras

✅ **Infinite Scroll**
- Implementado na página de produtos (`ProductsPage.tsx`) usando `IntersectionObserver`

✅ **Estilização Responsiva**
- Interface moderna e responsiva com **TailwindCSS**

✅ **Componentização**
- Uso de componentes reutilizáveis como `ProductCard.tsx`, `ProductGrid.tsx`, `Navbar.tsx`

✅ **Mensagens de Erro e Validação**
- Feedbacks ao usuário sobre carregamento e erros na API

## 📜 Melhorias Futuras
- Adicionar autenticação de usuário
- Implementar um sistema de checkout
- Melhorar a usabilidade e experiência do usuário
- Deploy da Aplicação

## 📩 Contato
Caso tenha dúvidas, sugestões ou queira contribuir, entre em contato:
📧 Email: [rtds@cin.ufpe.br](mailto:rtds@cin.ufpe.br)
🔗 GitHub: [r0b14](https://github.com/r0b14)