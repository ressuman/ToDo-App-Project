/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        light_header_image: "url('./public/bg-desktop-light.jpg')",
        dark_header_image: "url('./public/Todo-Desktop.png')",
        light_header_image_mobile: "url('./public/bg-mobile-light.jpg')",
        dark_header_image_mobile: "url('./public/Todo-Mobile.png')",
      },
    },
  },
  plugins: [],
};
