import { Mulish } from 'next/font/google';

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap"
});

const Theme = {
  colors: {
    black: '#000',
    white: '#fff',
  },
  font: {
    mulish: mulish.style.fontFamily,
  },
};

export default Theme;