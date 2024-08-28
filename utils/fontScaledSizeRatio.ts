import { PixelRatio, useWindowDimensions, Text, SafeAreaView } from 'react-native';


const FontScaledSizeRatio = () => {
  const { width, height } = useWindowDimensions();

  const baseWidth = 360; 
  const baseHeight = 640; 
  
  const scaleWidth = width / baseWidth;
  const scaleHeight = height / baseHeight;
  const scale = Math.min(scaleWidth, scaleHeight);

  const fontScaledSizeRatio = scale / PixelRatio.getFontScale();
  
  // console.log("THE WIDTH AND HIEIGHT :::: ", width," ----- ", height)
  // console.log("THE SCALE WIDTH AND SCALE HEIGHT :::: ", scaleWidth," ------ ", scaleHeight)
  // console.log("SCALE ::::: ", scale)
  // console.log("THE PIXEL RATIO ::::", PixelRatio.getFontScale())
  // console.log("THE NEW SiZE :::: ", newSize)
  // console.log("PIXEL RATIO ROUND TO NEAREST PIXEL :::: ", PixelRatio.roundToNearestPixel(newSize))
  // console.log("THE ROUND OFF ::: ", Math.round(PixelRatio.roundToNearestPixel(newSize)))

  
  return (PixelRatio.roundToNearestPixel(fontScaledSizeRatio));
};

export default FontScaledSizeRatio;
