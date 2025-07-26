import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as Splashscreen from "expo-splash-screen";
import { useEffect } from "react";

// Cegah splash screen hilang otomatis
Splashscreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "bitcount": require("../assets/fonts/Bitcount_Cursive-Medium.ttf"),
    "bitcountVariable": require("../assets/fonts/Bitcount-VariableFont_CRSV,ELSH,ELXP,slnt,wght.ttf"),
    "inter": require("../assets/fonts/Inter_24pt-Light.ttf"),
    "openSansBoldItalic": require("../assets/fonts/OpenSans_Condensed-ExtraBoldItalic.ttf"),
    "openSansItalic": require("../assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf"),
    "openSans": require("../assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
    "robotoItalic": require("../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf"),
    "robotoMedium": require("../assets/fonts/Roboto-MediumItalic.ttf"),
    "roboto": require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
    "spaceMono": require("../assets/fonts/SpaceMono-Regular.ttf"),
    "ubuntu": require("../assets/fonts/Ubuntu-Regular.ttf"),
  });

  useEffect(() => {
    if (error) {
      console.error("Font loading error:", error);
    }
    if (loaded || error) {
      Splashscreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  return <Stack />;
}
