module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'reactWithState',
      externals: {
        react: 'React'
      }
    }
  }
}
