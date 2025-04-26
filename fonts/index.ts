import localFont from "next/font/local";
import { Noto_Sans_Symbols_2 } from "next/font/google";

export const fontMessinaMono = localFont({
  src: "./MessinaSansMono-Book.woff2",
});

export const fontHelveticaNow = localFont({
  src: "./HelveticaNowDisplay-Regular.woff2",
});

export const fontIntegralCfDemi = localFont({
  src: "./Fontspring-DEMO-integralcf-demibold.otf",
});

export const notoSymbols2 = Noto_Sans_Symbols_2({ subsets: ["latin-ext"], weight: "400" });
