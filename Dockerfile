# Define a imagem base
FROM node:16-alpine

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia apenas arquivos essenciais para otimizar o build
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install --only=production

# Copia o restante dos arquivos para dentro do contêiner
COPY . .

# Define a variável de ambiente para produção
ENV NODE_ENV=production

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Especifica o comando de execução da aplicação
CMD ["npm", "start"]
