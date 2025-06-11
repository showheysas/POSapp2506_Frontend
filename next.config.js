/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // 環境変数を明示的に公開する設定を追加
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

module.exports = nextConfig;