import { extendTheme } from '@chakra-ui/react';

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
      white: '#FFFFFF'        // Clean canvas
    }
  },
  styles: {
    global: {
      body: {
        bgGradient: 'linear(to right, #A8D5BA, #A9D1E8)',
        color: 'brand.gray'
      }
    }
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
            bg: 'brand.lavender'
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
