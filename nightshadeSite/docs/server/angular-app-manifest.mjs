
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/nightshadeCounselingStaticSite/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/nightshadeCounselingStaticSite"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 610, hash: '96b29a0bc07f473723ae040aad7fb46eb540c1bc77ce7c14aa351f33a6edcfff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 983, hash: '5a850443ef8959d8e1c03e91ecf3762849bfea8c1271af63d6055b0fb25523de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3431, hash: '4967d78f2b8763032d5c2a56dbe053201a7abb12797ccc08ff1469c4d2c92141', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TAZMSP2Z.css': {size: 15, hash: 'sJ5RzYgp5+o', text: () => import('./assets-chunks/styles-TAZMSP2Z_css.mjs').then(m => m.default)}
  },
};
