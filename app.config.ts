export default defineAppConfig({
  title: 'MzURL',
  email: 'administer@mengze.vip',
  github: 'https://github.com/ccbikai/',
  twitter: 'https://mzurl.xyz/kakmge',
  telegram: 'https://t.me/YShenZe',
  mastodon: 'https://mzurl.xyz/',
  blog: 'https://mzurl.xyz/kf5gq9',
  description: '简单/快速/安全的链接缩短器，可进行分析，100% 在 Cloudflare 上运行。',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
