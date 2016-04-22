var prismic = require('express-prismic');
var app = require('./config');
var PORT = app.get('port');
var blog = require('./blog');
var helpers = require('./helpers');

app.locals.helpers = helpers;

function handleError(err, req, res) {
  if (err.status == 404) {
    res.status(404).send("404 not found");
  } else {
    res.status(500).send("Error 500: " + err.message);
  }
}

//routes
app.route('/').get(blog.bloghome);
app.route('/blog/:uid').get(blog.post);

//redirect or not found
app.route('/blog').get(function(req, res) { res.redirect('/'); });
app.route('*').get(function(req, res) { res.render('notFound'); });

//specific for prismic preview
app.route('/preview').get(prismic.preview);

app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});
