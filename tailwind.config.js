module.exports = {
  content: [
    './**/*.html', // Ou os caminhos corretos para seus arquivos
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        playst: '#01062b', // Nome personalizado para a sua cor
      },
    },
  },
  plugins: [],
}
