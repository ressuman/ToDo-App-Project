/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        light_header_image: "url('./src/assets/Images/bg-desktop-light.svg')",
        dark_header_image: "url('./src/assets/Images/Todo-Desktop.svg')",
        light_header_image_mobile:
          "url('./src/assets/Images/bg-mobile-light.svg')",
        dark_header_image_mobile: "url('./src/assets/Images/Todo-Mobile.svg')",
      },
    },
  },
  plugins: [],
};
