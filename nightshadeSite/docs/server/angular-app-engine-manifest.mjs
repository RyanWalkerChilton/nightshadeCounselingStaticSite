
export default {
  basePath: '/nightshadeCounselingStaticSite',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
