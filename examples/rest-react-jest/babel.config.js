module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          // Specify an explicit version of Node for it
          // to compile async/await statements.
          node: 8,
        },
      },
    ],
    '@babel/preset-react',
  ],
}
