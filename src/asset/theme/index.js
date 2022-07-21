import {extendTheme} from 'native-base';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  colors: {
    primary: {
      500: '#51C273',
      700: '#31B057',
    },
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Regular',
      },
      200: {
        normal: 'Roboto-Regular',
      },
      300: {
        normal: 'Roboto-Regular',
      },
      400: {
        normal: 'Roboto-Regular',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Roboto-Bold',
      },
    },

    NeoSansTR: {
      100: {
        normal: 'NeoSansTR',
      },
      200: {
        normal: 'NeoSansTR',
      },
      300: {
        normal: 'NeoSansTR',
      },
      400: {
        normal: 'NeoSansTR',
      },
      500: {
        normal: 'NeoSansMediumTR',
      },
      600: {
        normal: 'NeoSansBoldTR',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    body: 'Roboto',
    mono: 'Roboto',
    descText: 'Roboto',
    heading: 'NeoSansTR',
    titleText: 'NeoSansTR',
  },

  //Comp default style config
  components: {
    //Button
    Button: {
      baseStyle: {},
      defaultProps: {
        _text: {
          fontFamily: 'titleText',
        },
      },
    },
    //Badge
    Badge: {
      baseStyle: {},
      defaultProps: {
        _text: {
          fontFamily: 'titleText',
        },
      },
    },
    //Text
    Text: {
      baseStyle: {},
      defaultProps: {},
      variants: {
        desc: {
          fontFamily: 'body',
          color: '#52575C',
          fontSize: vs(12),
        },
        title: {
          fontFamily: 'titleText',
          color: '#25282B',
          fontSize: vs(14),
        },
        mainTitle: {
          fontFamily: 'titleText',
          fontWeight: 500,
          color: '#25282B',
          fontSize: vs(15),
        },
        bigTitle: {
          fontFamily: 'titleText',
          fontWeight: 600,
          color: '#25282B',
          fontSize: vs(15),
        },
      },
    },
  },
});
