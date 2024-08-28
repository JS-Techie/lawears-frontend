// theme.js
import { DefaultTheme } from 'react-native-paper';
import { configureFonts } from 'react-native-paper';
import tailwindConfig from '../tailwind.config';
// console.log("THE DEFAULT THEME IIS ::: ", DefaultTheme)

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'tailwindConfig.theme.extend.fontFamily.c[0]',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'tailwindConfig.theme.extend.fontFamily.cmedium[0]',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'tailwindConfig.theme.extend.fontFamily.clight[0]',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'tailwindConfig.theme.extend.fontFamily.cthin[0]',
      fontWeight: 'normal',
    },
  },
};


const customPaperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: tailwindConfig.theme.extend.colors.primary.DEFAULT || '#000',
    secondary: tailwindConfig.theme.extend.colors.secondary.DEFAULT || '#000',
    outline: tailwindConfig.theme.extend.colors.primary.DEFAULT || '#000',
    backdrop: tailwindConfig.theme.extend.colors.secondary.DEFAULT || '#000',
    background: tailwindConfig.theme.extend.colors.Neutral['10'] || '#000',
    inversePrimary: tailwindConfig.theme.extend.colors.secondary.DEFAULT || '#000',
    primaryContainer: tailwindConfig.theme.extend.colors.secondary.DEFAULT || '#000',
    secondaryContainer: tailwindConfig.theme.extend.colors.secondary.DEFAULT || '#000',
    surfaceVariant: tailwindConfig.theme.extend.colors.Neutral['10'] || '#000',
    onSurfaceVariant: tailwindConfig.theme.extend.colors.Neutral['11'] || '#000',
    

// error: "#FFF",
// errorContainer: "#FFF",
// inverseOnSurface: "#FFF",
// inverseSurface: "#FFF",
// onBackground: "#FFF",
// onError: "#FFF",
// onErrorContainer: "#FFF",
// onPrimary: "#FFF",
// onPrimaryContainer: "#FFF",
// onSecondary: "#FFF",
// onSecondaryContainer: "#FFF",
// onSurface: "#FFF",
// onSurfaceDisabled: "#FFF",
// onTertiary: "#FFF",
// onTertiaryContainer: "#FFF",
// outlineVariant: "#FFF",
// scrim: "#FFF",
// shadow: "#FFF",
// surface: "#FFF",
// surfaceDisabled: "#FFF",
// tertiary: "#FFF",
// tertiaryContainer: "#FFF",
  },
  roundness : 10,
  fonts: configureFonts(fontConfig)
};

export default customPaperTheme;