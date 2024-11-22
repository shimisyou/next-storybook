# ベースイメージ
FROM node:20-alpine

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# 依存関係インストール用にpackage.jsonをコピー
COPY package*.json ./

# 依存モジュールをインストール
RUN npm install

# プロジェクトファイル全体をコピー
COPY . .

# ポート3000を公開
EXPOSE 3000

# 開発サーバーを起動
CMD ["npm", "run", "dev"]
