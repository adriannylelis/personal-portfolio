# Defina a imagem base
FROM node:16-alpine

# Cria o diretório de trabalho no contêiner
WORKDIR /app

# Copia apenas os arquivos essenciais para otimizar o build
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install --only=production

# Copia o restante dos arquivos para o contêiner
COPY . .

# Define a variável de ambiente para produção
ENV NODE_ENV=production

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Compila a aplicação React
RUN npm run build

# Define o comando para iniciar a aplicação
CMD ["npm", "start"]
