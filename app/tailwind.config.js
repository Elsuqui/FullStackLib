/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/tailwind-datepicker-react/dist/**/*.js",
];
export const theme = {
  extend: {},
};
export const plugins = [
  plugin(({ addUtilities }) => {
    addUtilities({
      '.no-scrollbar::-webkit-scrollbar': {
        'display': 'none'
      },
      '.no-scrollbar': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none'
      }
    });
  })
];

