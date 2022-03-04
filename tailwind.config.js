module.exports = {
  content: ['./app/**/*.{ts,tsx}', './node_modules/react-bricks-ui/**/*.js'],
  darkMode: 'class',
  mode: 'jit',
  
  theme: {
    extend: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'gray': '#e8e9e1',
      'light-brown': '#a8938c',
      'brown': '#462c37',
      'red': '#ae1e2c',
      'orange': '#ca383b',
    },
  },
  },
  variants: {},
  plugins: [],
}
