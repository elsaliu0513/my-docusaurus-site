module.exports = {
    title: 'ExampleDoc', // 网站标题
    tagline: 'A simple documentation website',
    url: 'https://your-site.com', // 你的站点 URL
    baseUrl: '/', // 基础路径
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'favicon.ico', // 可以替换成你的图标
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            path: 'docs', // 文档路径
            routeBasePath: '/', // 文档直接在根路径
            sidebarPath: require.resolve('./sidebars.js'),
          },
        },
      ],
    ],
  };
  