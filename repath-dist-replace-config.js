module.exports = {
  files: "dist/index.html",
  from: [
    /"((inline|polyfills|main|styles|favicon)\.)/g,
  ],
  to:[
    "\"angular/$1",
  ]
};