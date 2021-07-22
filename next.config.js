module.exports = {
  basePath:'',
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'v1';
  },
  // images: {
  //   domains: ['doqvf81n9htmm.cloudfront.net'],
  // },
  images: {
   loader: "imgix",
   path: "",
 },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/' },
      '/news/': { page: '/news', query: { title: 'News' } },
      '/authors/': { page: '/authors' },
    };
  },
};

