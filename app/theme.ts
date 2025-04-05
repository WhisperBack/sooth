import { extendTheme, type StyleFunctionProps } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      green: '#A8D5BA',       // Healing, calm backgrounds
      blue: '#A9D1E8',        // Tranquility, flow
      lavender: '#D8BFD8',    // Peace, spiritual clarity
      pink: '#FAD0C9',        // Compassion, soft CTA
      taupe: '#D8CFC4',       // Warmth, stability
      gray: '#BEBEBE',        // Minimal text, icons
      softGray: '#D3D3D3',    // Borders, highlights
      white: '#FFFFFF',       // Clean canvas

      background: '#A9D1E8',  // Shortcut for soft blue background
      accent: '#FAD0C9'       // Shortcut for soft pink accent
    }
  },
  shadows: {
    soft: '0 4px 12px rgba(0, 0, 0, 0.06)',
    deep: '0 8px 20px rgba(0, 0, 0, 0.1)'
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bgGradient:
          props.colorMode === 'light'
            ? 'linear(to right, brand.green, brand.blue)'
            : 'gray.900',
        color: props.colorMode === 'light' ? 'brand.gray' : 'gray.100'
      }
    })
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'full'
      },
      variants: {
        solid: {
          bg: 'brand.pink',
          color: 'white',
          _hover: {
            bg: '#E6B6E6' // darker lavender
          }
        },
        calm: {
          bg: 'brand.lavender',
          color: 'white',
          _hover: {
            bg: 'brand.taupe'
          }
        },
        ghost: {
          bg: 'transparent',
          color: 'brand.pink',
          _hover: {
            bg: 'brand.softGray'
          }
        }
      }
    },
    Text: {
      baseStyle: {
        color: 'brand.taupe'
      }
    },
    Link: {
      baseStyle: {
        color: 'brand.softGray',
        _hover: {
          color: 'white'
        }
      }
    },
    Heading: {
      baseStyle: {
        color: 'brand.gray'
      }
    },
    Input: {
      variants: {
        outline: {
          field: {
            bg: 'white',
            color: 'black',
            _placeholder: {
              color: 'gray.500'
            }
          }
        }
      }
    }
  }
});

export default theme;
