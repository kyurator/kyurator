function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/e/2PACX-1vSfeFW2F060OPu6-nKkd11zr7_nAxnZj1sIhn0d6CFWoG_D1P0R9DzMhIkD_pnZDiRyYJ_p11MhlY6F/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)

