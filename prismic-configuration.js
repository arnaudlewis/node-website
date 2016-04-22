exports.Configuration = {

  apiEndpoint: 'https://node-website.prismic.io/api',

  accessToken: 'MC5WeG50UmlnQUFBTXU0SkpK.77-977-9IQET77-9T--_ve-_ve-_ve-_ve-_ve-_vV4d77-9P--_vUvvv71QeA1yHu-_vRDvv71677-977-9Dw',

  // OAuth
  clientId: 'VxntRigAAGUy4JJI',
  clientSecret: '62b6411b7ccfca914d7f3f2bc8ce4d14',

  linkResolver: function(doc, ctx) {
    if (doc.type == 'blog') {
      return '/blog';
    }
    if (doc.type == 'post') {
      return '/blog/' + encodeURIComponent(doc.uid);
    }

    return '/';
  },
  onPrismicError: function(err, req, res) {
    res.status(500)
      .send("Error 500: " + err.message);
  }
};
