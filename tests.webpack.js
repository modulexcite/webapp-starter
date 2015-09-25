var context = require.context("./public/js", true, /-test\.js$/);
context.keys().forEach(context);
