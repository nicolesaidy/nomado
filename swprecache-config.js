module.exports = {
  staticFileGlobs: [
  'index.html',
  'images/**',
  'shell.js'
  ],
  runtimeCaching: [{
    urlPattern: /jsonplaceholder\.typicode\.com/,
    handler: 'cacheFirst'
  }]
}
