FROM node:18-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

# Playwright 브라우저 및 OS 라이브러리 설치
RUN apt-get update && apt-get install -y \
    wget \
    ca-certificates \
    fonts-liberation \
    libnss3 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libasound2 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libgbm1 \
    libxfixes3 \
    libxi6 \
    libxtst6 \
    libxrender1 \
    libfontconfig1 \
    libxcb1 \
    libx11-6 \
    libdbus-glib-1-2 \
    libdrm2 \
    libcups2 \
    && rm -rf /var/lib/apt/lists/*

RUN npx playwright install --with-deps

COPY . .

CMD ["node", "index.js"]

EXPOSE 10000
