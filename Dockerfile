FROM node:20

WORKDIR /app

# package.json と package-lock.json をコピー
COPY ./frontend/package*.json ./

# 依存関係をインストール
RUN npm install

# プロジェクト全体をコピー
COPY ./frontend .

# ポートを公開
EXPOSE 3000

# 開発サーバーを起動
CMD ["npm", "run", "dev"]
