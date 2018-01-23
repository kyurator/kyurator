function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/10yoc-VUUL50KmM7iq7VJNgbOYFnJXpgVddbpgsYflq0/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)

