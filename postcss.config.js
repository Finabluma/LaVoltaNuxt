module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {
        preset: 'default', // minifica el CSS en producción
      },
    },
  }