module.exports = {
  content: [
    "./src/resources/views/**/*.html",
    "./src/resources/js/views/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        def: ["HK Grotesk"]
      },
      colors: {
        transparent: 'transparent',
        // RED
        'bc_box_red_bg':'#E43E3E',
        'bc_box_red_bg_hv': '#CA3737',
        'bc_box_red_bd':'#CB3232',
        //

        // PLAIN
        'bc_box_plain_bg': '#F2F2F2',
        'bc_box_plain_bg_hv': '#E7E7E7',
        'bc_box_plain_bd': '#DFDFDF',
        //

        // BLUE SKY
        'bc_box_blue_bg':'#3E80E4',
        'bc_box_blue_bd':'#327FCB',
        //

        // YELLOW
        'bc_box_yellow_bg':'#F0DB47',
        'bc_box_yellow_bd':'#DCC83D',
        //

        // PURPLE
        'bc_box_purple_bg':'#BF3EE4',
        'bc_box_purple_bg_hv': '#B437D8',
        'bc_box_purple_bd':'#A932CB',
        //

      },
      dropShadow: {
        'bc_buttons': '3px 3px 4px rgba(0,0,0,0.45)',
        'bc_box': '2px 2px 2px rgba(0,0,0,0.30)'
      },
      boxShadow: {
        'bc_inner_box': 'inset 0px 2px 4px 0px rgba(0,0,0,0.45)'
      }
    },
  },
  plugins: [],
}
