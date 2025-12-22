
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/nightshadeCounselingStaticSite',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/nightshadeCounselingStaticSite"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 609, hash: 'c3dace6f553d7deb8fd38c092a4955182655609b3dcc5ccc9ae098855db976e5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 982, hash: 'd3b62444d3c69e75497fef04bf66cc732ac318a492fceca557871cca0ded4664', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3430, hash: '6c6a24609bd86a016ca5302e3c959ff54337757544e608025ac4d53265ca4844', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TAZMSP2Z.css': {size: 15, hash: 'sJ5RzYgp5+o', text: () => import('./assets-chunks/styles-TAZMSP2Z_css.mjs').then(m => m.default)}
  },
};
