/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/@googledrive/index@2.3.6/src/app.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function init() {
    document.siteName = $("title").html();
    var e = `<header>\n   <div id="nav">\n   </div>\n</header>\n<div class="loading" id="spinner" style="display:none;">Loading&#8230;</div>\n<div>\n<div id="content" style="padding-top: ${UI.header_padding}px;${UI.fixed_footer ? " padding-bottom: clamp(170px, 100%, 300px);" : ""}">\n</div>\n<div class="modal fade" id="SearchModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="SearchModelLabel" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="SearchModelLabel"></h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true"></span>\n        </button>\n      </div>\n      <div class="modal-body" id="modal-body-space">\n      </div>\n      <div class="modal-footer" id="modal-body-space-buttons">\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<footer class="footer mt-auto py-3 text-muted ${UI.footer_style_class}" style="${UI.fixed_footer ? "position: fixed; " : ""}left: 0; bottom: 0; width: 100%; color: white; z-index: 9999;${UI.hide_footer ? " display:none;" : " display:block;"}"> <div class="container" style="width: auto; padding: 0 10px;"> © ${UI.copyright_year} - <a href=" ${UI.company_link}" target="_blank"> ${UI.company_name}</a>, All Rights Reserved.</p> </div> </footer>\n  `;
    $("body").html(e)
}
const folder_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_11)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,24,24)"><path fill="rgb(255,159,0)" fill-opacity="1" d=" M16,-12 C16,-12 -2,-12 -2,-12 C-2,-12 -6,-16 -6,-16 C-6,-16 -16,-16 -16,-16 C-18.200000762939453,-16 -20,-14.199999809265137 -20,-12 C-20,-12 -20,12 -20,12 C-20,14.208999633789062 -18.208999633789062,16 -16,16 C-16,16 13.682000160217285,16 13.682000160217285,16 C13.682000160217285,16 20,5 20,5 C20,5 20,-8 20,-8 C20,-10.199999809265137 18.200000762939453,-12 16,-12z"></path></g></g><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,24,26)"><path fill="rgb(255,201,40)" fill-opacity="1" d=" M16,-14 C16,-14 -16,-14 -16,-14 C-18.200000762939453,-14 -20,-12.199999809265137 -20,-10 C-20,-10 -20,10 -20,10 C-20,12.199999809265137 -18.200000762939453,14 -16,14 C-16,14 16,14 16,14 C18.200000762939453,14 20,12.199999809265137 20,10 C20,10 20,-10 20,-10 C20,-12.199999809265137 18.200000762939453,-14 16,-14z"></path></g></g></g></svg>'
  , video_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_11)"><g transform="matrix(1,0,0,1,24,24)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(63,81,181)" fill-opacity="1" d=" M16,17 C16,17 -16,17 -16,17 C-18.200000762939453,17 -20,15.199999809265137 -20,13 C-20,13 -20,-9 -20,-9 C-20,-9 20,-9 20,-9 C20,-9 20,13 20,13 C20,15.199999809265137 18.200000762939453,17 16,17z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M16,-9 C16,-9 12,-3 12,-3 C12,-3 16,-3 16,-3 C16,-3 20,-9 20,-9 C20,-9 16,-9 16,-9z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M8,-9 C8,-9 4,-3 4,-3 C4,-3 8,-3 8,-3 C8,-3 12,-9 12,-9 C12,-9 8,-9 8,-9z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M0,-9 C0,-9 -4,-3 -4,-3 C-4,-3 0,-3 0,-3 C0,-3 4,-9 4,-9 C4,-9 0,-9 0,-9z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M-8,-9 C-8,-9 -12,-3 -12,-3 C-12,-3 -8,-3 -8,-3 C-8,-3 -4,-9 -4,-9 C-4,-9 -8,-9 -8,-9z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M-16,-9 C-16,-9 -20,-3 -20,-3 C-20,-3 -16,-3 -16,-3 C-16,-3 -12,-9 -12,-9 C-12,-9 -16,-9 -16,-9z"></path></g></g></g><g transform="matrix(1,0,0,1,24,24)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(63,81,181)" fill-opacity="1" d=" M19.399999618530273,-15.699999809265137 C19.399999618530273,-15.699999809265137 -20,-9 -20,-9 C-20,-9 -20.299999237060547,-11 -20.299999237060547,-11 C-20.700000762939453,-13.199999809265137 -19.200000762939453,-15.199999809265137 -17,-15.600000381469727 C-17,-15.600000381469727 14.600000381469727,-20.899999618530273 14.600000381469727,-20.899999618530273 C16.799999237060547,-21.299999237060547 18.799999237060547,-19.799999237060547 19.200000762939453,-17.600000381469727 C19.200000762939453,-17.600000381469727 19.399999618530273,-15.699999809265137 19.399999618530273,-15.699999809265137z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M-5.199999809265137,-17.600000381469727 C-5.199999809265137,-17.600000381469727 -0.30000001192092896,-12.300000190734863 -0.30000001192092896,-12.300000190734863 C-0.30000001192092896,-12.300000190734863 3.700000047683716,-13 3.700000047683716,-13 C3.700000047683716,-13 -1.2999999523162842,-18.299999237060547 -1.2999999523162842,-18.299999237060547 C-1.2999999523162842,-18.299999237060547 -5.199999809265137,-17.600000381469727 -5.199999809265137,-17.600000381469727z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M-13.100000381469727,-16.299999237060547 C-13.100000381469727,-16.299999237060547 -8.199999809265137,-11 -8.199999809265137,-11 C-8.199999809265137,-11 -4.199999809265137,-11.699999809265137 -4.199999809265137,-11.699999809265137 C-4.199999809265137,-11.699999809265137 -9.199999809265137,-16.899999618530273 -9.199999809265137,-16.899999618530273 C-9.199999809265137,-16.899999618530273 -13.100000381469727,-16.299999237060547 -13.100000381469727,-16.299999237060547z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M2.700000047683716,-18.899999618530273 C2.700000047683716,-18.899999618530273 7.599999904632568,-13.699999809265137 7.599999904632568,-13.699999809265137 C7.599999904632568,-13.699999809265137 11.5,-14.300000190734863 11.5,-14.300000190734863 C11.5,-14.300000190734863 6.599999904632568,-19.600000381469727 6.599999904632568,-19.600000381469727 C6.599999904632568,-19.600000381469727 2.700000047683716,-18.899999618530273 2.700000047683716,-18.899999618530273z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M10.5,-20.200000762939453 C10.5,-20.200000762939453 15.5,-15 15.5,-15 C15.5,-15 19.399999618530273,-15.699999809265137 19.399999618530273,-15.699999809265137 C19.399999618530273,-15.699999809265137 14.5,-20.899999618530273 14.5,-20.899999618530273 C14.5,-20.899999618530273 10.5,-20.200000762939453 10.5,-20.200000762939453z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M-16.5,-14 C-17.327999114990234,-14 -18,-13.32800006866455 -18,-12.5 C-18,-11.67199993133545 -17.327999114990234,-11 -16.5,-11 C-15.67199993133545,-11 -15,-11.67199993133545 -15,-12.5 C-15,-13.32800006866455 -15.67199993133545,-14 -16.5,-14z"></path></g></g></g></svg>'
  , code_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_2)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,24,21)"><path fill="rgb(83,109,121)" fill-opacity="1" d=" M-18,-13 C-18,-13 18,-13 18,-13 C18,-13 18,13 18,13 C18,13 -18,13 -18,13 C-18,13 -18,-13 -18,-13z"></path></g><g opacity="1" transform="matrix(1,0,0,1,24,20.5)"><path fill="rgb(186,222,250)" fill-opacity="1" d=" M-16,-10.5 C-16,-10.5 16,-10.5 16,-10.5 C16,-10.5 16,10.5 16,10.5 C16,10.5 -16,10.5 -16,10.5 C-16,10.5 -16,-10.5 -16,-10.5z"></path></g><g opacity="1" transform="matrix(1,0,0,1,24,37)"><path fill="rgb(69,90,99)" fill-opacity="1" d=" M-3,-3 C-3,-3 3,-3 3,-3 C3,-3 3,0 3,0 C3,0 -3,0 -3,0 C-3,0 -3,-3 -3,-3z M9,0 C9,0 -9,0 -9,0 C-11,0 -11,2 -11,2 C-11,2 -11,3 -11,3 C-11,3 11,3 11,3 C11,3 11,2 11,2 C11,2 11,0 9,0z"></path></g></g><g transform="matrix(0.8999999761581421,0,0,0.8999999761581421,2.2750015258789062,-1.0999984741210938)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,15.315999984741211,24.465999603271484)"><path fill="rgb(21,101,192)" fill-opacity="1" d=" M-0.8989999890327454,0.02500000037252903 C-0.8989999890327454,0.02500000037252903 3.684000015258789,2.0399999618530273 3.684000015258789,2.0399999618530273 C3.684000015258789,2.0399999618530273 3.684000015258789,4.894999980926514 3.684000015258789,4.894999980926514 C3.684000015258789,4.894999980926514 -3.684000015258789,1.2100000381469727 -3.684000015258789,1.2100000381469727 C-3.684000015258789,1.2100000381469727 -3.684000015258789,-1.1990000009536743 -3.684000015258789,-1.1990000009536743 C-3.684000015258789,-1.1990000009536743 3.684000015258789,-4.894999980926514 3.684000015258789,-4.894999980926514 C3.684000015258789,-4.894999980926514 3.684000015258789,-2.0399999618530273 3.684000015258789,-2.0399999618530273 C3.684000015258789,-2.0399999618530273 -0.8989999890327454,0.02500000037252903 -0.8989999890327454,0.02500000037252903z"></path></g><g opacity="1" transform="matrix(-1,0,0,-1,32.70000076293945,24.465999603271484)"><path fill="rgb(21,101,192)" fill-opacity="1" d=" M-0.8989999890327454,0.02500000037252903 C-0.8989999890327454,0.02500000037252903 3.684000015258789,2.0399999618530273 3.684000015258789,2.0399999618530273 C3.684000015258789,2.0399999618530273 3.684000015258789,4.894999980926514 3.684000015258789,4.894999980926514 C3.684000015258789,4.894999980926514 -3.684000015258789,1.2100000381469727 -3.684000015258789,1.2100000381469727 C-3.684000015258789,1.2100000381469727 -3.684000015258789,-1.1990000009536743 -3.684000015258789,-1.1990000009536743 C-3.684000015258789,-1.1990000009536743 3.684000015258789,-4.894999980926514 3.684000015258789,-4.894999980926514 C3.684000015258789,-4.894999980926514 3.684000015258789,-2.0399999618530273 3.684000015258789,-2.0399999618530273 C3.684000015258789,-2.0399999618530273 -0.8989999890327454,0.02500000037252903 -0.8989999890327454,0.02500000037252903z"></path></g><g opacity="1" transform="matrix(1,0,0,1,24.240999221801758,24)"><path fill="rgb(21,101,192)" fill-opacity="1" d=" M-1.1649999618530273,7.986000061035156 C-1.1649999618530273,7.986000061035156 -3.259000062942505,7.986000061035156 -3.259000062942505,7.986000061035156 C-3.259000062942505,7.986000061035156 1.1619999408721924,-7.916999816894531 1.1619999408721924,-7.916999816894531 C1.1619999408721924,-7.916999816894531 3.259000062942505,-7.916999816894531 3.259000062942505,-7.916999816894531 C3.259000062942505,-7.916999816894531 -1.1649999618530273,7.986000061035156 -1.1649999618530273,7.986000061035156z"></path></g></g></g></svg>'
  , zip_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><g transform="translate(0 -1020.362)"><path fill="#e9eded" fill-rule="evenodd" stroke="#4bbfeb" stroke-linecap="round" stroke-linejoin="round" d="m 26.49822,1027.8658 0,21.5 c 0,0.831 -0.66899,1.5 -1.49998,1.5 l -18.00004,0 c -0.83099,0 -1.49998,-0.669 -1.49998,-1.5 l 0,-26 c 0,-0.831 0.66899,-1.5 1.49998,-1.5 l 13.50002,0 z"/><path fill="#4bbfeb" d="m 4.99822,1044.3658 0,2 0,2 0,1 c 0,1.108 0.89198,2 2,2 l 18,0 c 1.10802,0 2,-0.892 2,-2 l 0,-1 0,-2 0,-2 -2,0 -18,0 -2,0 z"/><path fill="#4bbfeb" stroke="#4bbfeb" stroke-linecap="round" stroke-linejoin="round" d="m 26.49466,1027.8658 -4.49997,0 c -0.83099,0 -1.49998,-0.6691 -1.49998,-1.5 l 0,-4.5"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#4bbfeb" fill-rule="evenodd" d="M 15.498047 7 L 15.498047 8 L 14.498047 8 L 14.498047 9 L 15.498047 9 L 15.498047 10 L 14.498047 10 L 14.498047 11 L 15.498047 11 L 15.498047 12 L 14.498047 12 L 14.498047 13 L 15.498047 13 L 15.498047 14 L 14.498047 14 L 14.498047 15 L 15.498047 15 L 15.498047 16 L 14.498047 16 L 14.498047 17 L 15.498047 17 L 15.498047 18 L 14.998047 18 A 0.50004997 0.50004997 0 0 0 14.498047 18.5 L 14.498047 19.464844 A 0.50004997 0.50004997 0 0 0 14.498047 19.5 L 14.498047 20 L 14.498047 20.5 C 14.498047 21.3224 15.175696 22 15.998047 22 C 16.820398 22 17.498047 21.3224 17.498047 20.5 L 17.498047 20.033203 A 0.50004997 0.50004997 0 0 0 17.498047 20 L 17.498047 19.5 L 17.498047 18.5 A 0.50004997 0.50004997 0 0 0 16.998047 18 L 16.498047 18 L 16.498047 17 L 17.498047 17 L 17.498047 16 L 16.498047 16 L 16.498047 15 L 17.498047 15 L 17.498047 14 L 16.498047 14 L 16.498047 13 L 17.498047 13 L 17.498047 12 L 16.498047 12 L 16.498047 11 L 17.498047 11 L 17.498047 10 L 16.498047 10 L 16.498047 9 L 17.498047 9 L 17.498047 8 L 16.498047 8 L 16.498047 7 L 15.498047 7 z M 15.498047 19 L 16.498047 19 L 16.498047 19.5 L 16.498047 20.5 C 16.498047 20.7857 16.283696 21 15.998047 21 C 15.712398 21 15.498047 20.7857 15.498047 20.5 L 15.498047 20.033203 A 0.50004997 0.50004997 0 0 0 15.498047 20 L 15.498047 19.5 L 15.498047 19 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#e9eded" fill-rule="evenodd" d="M 13.490234 24.990234 A 0.50005 0.50005 0 0 0 12.998047 25.496094 L 12.998047 29.498047 A 0.50005 0.50005 0 1 0 13.998047 29.498047 L 13.998047 25.496094 A 0.50005 0.50005 0 0 0 13.490234 24.990234 z M 11.511719 24.998047 A 0.50005 0.50005 0 0 0 11.460938 25 L 8.5058594 25 A 0.50005 0.50005 0 1 0 8.5058594 26 L 10.498047 26 L 8.1347656 29.154297 A 0.50005 0.50005 0 0 0 8.4375 29.992188 A 0.50019268 0.50019268 0 0 0 8.4472656 29.994141 A 0.50005 0.50005 0 0 0 8.5058594 29.998047 L 11.494141 29.998047 A 0.50005 0.50005 0 1 0 11.494141 28.998047 L 9.5019531 28.998047 L 11.865234 25.841797 A 0.50005 0.50005 0 0 0 11.75 25.066406 A 0.50005 0.50005 0 0 0 11.720703 25.050781 A 0.50005 0.50005 0 0 0 11.705078 25.042969 A 0.50005 0.50005 0 0 0 11.675781 25.03125 A 0.50005 0.50005 0 0 0 11.658203 25.025391 A 0.50005 0.50005 0 0 0 11.511719 24.998047 z M 16.498047 25.003906 C 15.723646 25.003906 15.086569 25.606569 15.013672 26.363281 C 15.013355 26.366575 15.012014 26.369747 15.011719 26.373047 A 0.50005 0.50005 0 0 0 14.998047 26.498047 C 14.998039 26.500027 14.998047 26.501925 14.998047 26.503906 L 14.998047 29.498047 A 0.50005 0.50005 0 1 0 15.998047 29.498047 L 15.998047 27.910156 C 16.155295 27.966775 16.322382 28.003906 16.498047 28.003906 C 17.320552 28.003906 17.998047 27.326406 17.998047 26.503906 C 17.998047 25.681406 17.320552 25.003906 16.498047 25.003906 z M 16.498047 26.003906 C 16.780112 26.003906 16.998047 26.221906 16.998047 26.503906 C 16.998047 26.786006 16.780112 27.003906 16.498047 27.003906 C 16.215982 27.003906 15.998047 26.786006 15.998047 26.503906 L 15.998047 26.498047 C 16.001131 26.218978 16.217997 26.003906 16.498047 26.003906 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/></g></svg>'
  , image_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_19)"><g transform="matrix(1,0,0,1,24,24)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(245,124,0)" fill-opacity="1" d=" M16,17 C16,17 -16,17 -16,17 C-18.200000762939453,17 -20,15.199999809265137 -20,13 C-20,13 -20,-13 -20,-13 C-20,-15.199999809265137 -18.200000762939453,-17 -16,-17 C-16,-17 16,-17 16,-17 C18.200000762939453,-17 20,-15.199999809265137 20,-13 C20,-13 20,13 20,13 C20,15.199999809265137 18.200000762939453,17 16,17z"></path></g></g><g transform="matrix(1,0,0,1,35,16)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,249,196)" fill-opacity="1" d=" M0,-3 C-1.656999945640564,-3 -3,-1.656999945640564 -3,0 C-3,1.656999945640564 -1.656999945640564,3 0,3 C1.656999945640564,3 3,1.656999945640564 3,0 C3,-1.656999945640564 1.656999945640564,-3 0,-3z"></path></g></g><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,20,24)"><path fill="rgb(148,42,9)" fill-opacity="1" d=" M0,-8 C0,-8 -11,8 -11,8 C-11,8 11,8 11,8 C11,8 0,-8 0,-8z"></path></g><g opacity="1" transform="matrix(1,0,0,1,31,27)"><path fill="rgb(191,54,12)" fill-opacity="1" d=" M0,-5 C0,-5 -8,5 -8,5 C-8,5 8,5 8,5 C8,5 0,-5 0,-5z"></path></g></g></g></svg>'
  , audio_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_30)"><g mask="url(#__lottie_element_41)" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,26,24)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(129,211,249)" stroke-opacity="1" stroke-width="2" d=" M-16,0 C-16,-8.836000442504883 -8.836000442504883,-16 0,-16 C0.6779999732971191,-16 1.3450000286102295,-15.958000183105469 2,-15.87600040435791 C9.892999649047852,-14.892000198364258 16,-8.159000396728516 16,0 C16,8.159000396728516 9.892999649047852,14.892000198364258 2,15.87600040435791 C1.3450000286102295,15.958000183105469 0.6779999732971191,16 0,16 C-8.836000442504883,16 -16,8.836999893188477 -16,0z"></path></g></g><g mask="url(#__lottie_element_38)" style="display: none;" transform="matrix(1,0,0,1,0,0)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,26,24)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(129,211,249)" stroke-opacity="1" stroke-width="2" d=" M-16,0 C-16,-8.836000442504883 -8.836000442504883,-16 0,-16 C0.6779999732971191,-16 1.3450000286102295,-15.958000183105469 2,-15.87600040435791 C9.892999649047852,-14.892000198364258 16,-8.159000396728516 16,0 C16,8.159000396728516 9.892999649047852,14.892000198364258 2,15.87600040435791 C1.3450000286102295,15.958000183105469 0.6779999732971191,16 0,16 C-8.836000442504883,16 -16,8.836999893188477 -16,0z"></path></g></g><g mask="url(#__lottie_element_35)" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,26,24)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(79,195,247)" stroke-opacity="1" stroke-width="2" d=" M-11,0 C-11,-6.074999809265137 -6.074999809265137,-11 0,-11 C0.6830000281333923,-11 1.3519999980926514,-10.937999725341797 2,-10.819000244140625 C7.119999885559082,-9.878000259399414 11,-5.392000198364258 11,0 C11,5.39300012588501 7.119999885559082,9.878000259399414 2,10.817999839782715 C1.3519999980926514,10.937999725341797 0.6830000281333923,11 0,11 C-6.074999809265137,11 -11,6.074999809265137 -11,0z"></path></g><g opacity="1" transform="matrix(1,0,0,1,26,24)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(3,169,244)" stroke-opacity="1" stroke-width="2" d=" M-6,0 C-6,-3.312999963760376 -3.312999963760376,-6 0,-6 C0.7009999752044678,-6 1.375,-5.880000114440918 2,-5.658999919891357 C4.329999923706055,-4.835000038146973 6,-2.611999988555908 6,0 C6,2.611999988555908 4.329999923706055,4.835000038146973 2,5.6579999923706055 C1.375,5.880000114440918 0.7009999752044678,6 0,6 C-3.312999963760376,6 -6,3.312999963760376 -6,0z"></path></g></g><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,9.5,24)"><path fill="rgb(83,109,121)" fill-opacity="1" d=" M4.5,8 C4.5,8 -2.5,8 -2.5,8 C-3.6050000190734863,8 -4.5,7.105000019073486 -4.5,6 C-4.5,6 -4.5,-6 -4.5,-6 C-4.5,-7.105000019073486 -3.6050000190734863,-8 -2.5,-8 C-2.5,-8 4.5,-8 4.5,-8 C4.5,-8 4.5,8 4.5,8z"></path></g><g opacity="1" transform="matrix(1,0,0,1,20,24)"><path fill="rgb(120,144,156)" fill-opacity="1" d=" M6,18 C6,18 -6,8 -6,8 C-6,8 -6,-8 -6,-8 C-6,-8 6,-18 6,-18 C6,-18 6,18 6,18z"></path></g></g></g></svg>'
  , markdown_icon = '<svg width="1.5em" height="1.5em" viewBox="0 0 1024 1024"><path d="M265.61429932 63.6656706h493.57455644c111.51629209 0 201.91670068 90.40220771 201.91670068 201.91580157v493.57545556c0 111.51449297-90.40040859 201.91670068-201.91670068 201.91670069H265.61429932c-111.51539297 0-201.91580068-90.40220771-201.91580069-201.91670069V265.58147217c0-111.51359385 90.40040859-201.91580068 201.91580069-201.91580157z" fill="#707070"></path><path d="M763.60576133 722.16141084L670.49099316 599.42972305h48.19382491V302.57788818h89.84188652v296.85183487h48.19382491L763.60576133 722.16141084zM519.02738545 472.82885791c0-13.71570117 0.30399346-28.21926709 0.91827773-43.48821445l-13.67612753 19.09855107c-0.1726831 0.54323174-0.34626533 1.10265205-0.52074757 1.62609698l-7.15195107 10.50577734-109.52234384 166.63092451-40.52562364-62.91054668h-0.25092949l-28.34248359-44.38850449-41.19926749-63.95563828h0.36425304l-8.60086846-13.47016729-0.46318536-1.8752291-14.42082305-21.30475518c1.05318633 33.22347451 1.60451191 57.42426622 1.60451192 72.50254365v229.53787296h-89.15835059V303.99532753h140.37862325l77.89348828 115.26944679h1.3346956l80.12037832-115.26944678H610.08255019v417.34224141H519.02828457V472.82885791z" fill="#ffffff"></path></svg>'
  , pdf_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_44)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,24,24)"><path fill="rgb(255,87,34)" fill-opacity="1" d=" M16,21 C16,21 -16,21 -16,21 C-16,21 -16,-21 -16,-21 C-16,-21 6,-21 6,-21 C6,-21 16,-11 16,-11 C16,-11 16,21 16,21z"></path></g><g opacity="1" transform="matrix(1,0,0,1,33.75,9.25)"><path fill="rgb(251,233,231)" fill-opacity="1" d=" M4.75,4.75 C4.75,4.75 -4.75,4.75 -4.75,4.75 C-4.75,4.75 -4.75,-4.75 -4.75,-4.75 C-4.75,-4.75 4.75,4.75 4.75,4.75z"></path></g></g><g transform="matrix(1,0,0,1,24,24)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-8,15 C-8.399999618530273,15 -8.699999809265137,14.899999618530273 -9,14.800000190734863 C-10.100000381469727,14.199999809265137 -10.199999809265137,13.300000190734863 -10,12.600000381469727 C-9.600000381469727,11.399999618530273 -7.400000095367432,9.899999618530273 -4.5,8.600000381469727 C-4.5,8.600000381469727 -4.5,8.600000381469727 -4.5,8.600000381469727 C-3.200000047683716,6.199999809265137 -2.200000047683716,3.700000047683716 -1.600000023841858,1.600000023841858 C-2.5999999046325684,-0.30000001192092896 -3.0999999046325684,-2.0999999046325684 -3.0999999046325684,-3.4000000953674316 C-3.0999999046325684,-4.099999904632568 -2.9000000953674316,-4.699999809265137 -2.5999999046325684,-5.199999809265137 C-2.200000047683716,-5.699999809265137 -1.600000023841858,-6 -0.800000011920929,-6 C0.10000000149011612,-6 0.800000011920929,-5.5 1.100000023841858,-4.599999904632568 C1.600000023841858,-3.4000000953674316 1.2999999523162842,-1.2000000476837158 0.6000000238418579,1.2999999523162842 C1.600000023841858,3 2.799999952316284,4.599999904632568 4.099999904632568,5.800000190734863 C6,5.400000095367432 7.699999809265137,5.199999809265137 8.800000190734863,5.400000095367432 C10.699999809265137,5.699999809265137 11,7 11,7.5 C11,9.600000381469727 8.800000190734863,9.600000381469727 8,9.600000381469727 C6.5,9.600000381469727 5,9 3.700000047683716,7.900000095367432 C3.700000047683716,7.900000095367432 3.700000047683716,7.900000095367432 3.700000047683716,7.900000095367432 C1.2999999523162842,8.5 -1.100000023841858,9.300000190734863 -3,10.199999809265137 C-4,11.899999618530273 -5,13.300000190734863 -5.900000095367432,14.100000381469727 C-6.800000190734863,14.800000190734863 -7.5,15 -8,15z M-6.800000190734863,12.100000381469727 C-7.300000190734863,12.399999618530273 -7.699999809265137,12.699999809265137 -7.900000095367432,13 C-7.699999809265137,12.899999618530273 -7.300000190734863,12.699999809265137 -6.800000190734863,12.100000381469727z M6.800000190734863,7.400000095367432 C7.199999809265137,7.5 7.599999904632568,7.599999904632568 8,7.599999904632568 C8.600000381469727,7.599999904632568 8.899999618530273,7.5 9,7.5 C9,7.5 9,7.5 9,7.5 C8.899999618530273,7.400000095367432 8.199999809265137,7.199999809265137 6.800000190734863,7.400000095367432z M-0.20000000298023224,3.799999952316284 C-0.6000000238418579,5 -1.2000000476837158,6.300000190734863 -1.7000000476837158,7.5 C-0.5,7.099999904632568 0.699999988079071,6.699999809265137 1.899999976158142,6.400000095367432 C1.100000023841858,5.599999904632568 0.4000000059604645,4.699999809265137 -0.20000000298023224,3.799999952316284z M-0.800000011920929,-4 C-0.8999999761581421,-4 -0.8999999761581421,-4 -0.8999999761581421,-4 C-1,-3.9000000953674316 -1.100000023841858,-3.200000047683716 -0.699999988079071,-1.7000000476837158 C-0.6000000238418579,-2.9000000953674316 -0.6000000238418579,-3.799999952316284 -0.800000011920929,-4z"></path></g></g></g></svg>'
  , file_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_63)"><g transform="matrix(1,0,0,1,7.75,2.75)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,16.25,21.25)"><path fill="rgb(144,201,248)" fill-opacity="1" d=" M16,21 C16,21 -16,21 -16,21 C-16,21 -16,-21 -16,-21 C-16,-21 6,-21 6,-21 C6,-21 16,-11 16,-11 C16,-11 16,21 16,21z"></path></g></g><g transform="matrix(1,0,0,1,15,21)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(24,118,210)" stroke-opacity="1" stroke-width="2" d=" M1,1 C1,1 18,1 18,1"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(24,118,210)" stroke-opacity="1" stroke-width="2" d=" M1,5 C1,5 14,5 14,5"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(24,118,210)" stroke-opacity="1" stroke-width="2" d=" M1,9 C1,9 18,9 18,9"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(24,118,210)" stroke-opacity="1" stroke-width="2" d=" M1,13 C1,13 14,13 14,13"></path></g></g><g transform="matrix(1,0,0,1,28.75,4.25)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,5,5)"><path fill="rgb(224,245,253)" fill-opacity="1" d=" M4.75,4.75 C4.75,4.75 -4.75,4.75 -4.75,4.75 C-4.75,4.75 -4.75,-4.75 -4.75,-4.75 C-4.75,-4.75 0,0 0,0 C0,0 4.75,4.75 4.75,4.75z"></path></g></g></g></svg>'
  , Os = {
    isWindows: navigator.userAgent.toUpperCase().indexOf("WIN") > -1,
    isMac: navigator.userAgent.toUpperCase().indexOf("MAC") > -1,
    isMacLike: /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent),
    isIos: /(iPhone|iPod|iPad)/i.test(navigator.userAgent),
    isMobile: /Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};
function getDocumentHeight() {
    var e = document;
    return Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight)
}
function getQueryVariable(e) {
    for (var t, n = window.location.search.substring(1).split("&"), a = 0; a < n.length; a++)
        if ((t = n[a].split("="))[0] == e)
            return t[1];
    return !1
}
function render(e) {
    e.indexOf("?") > 0 && (e = e.substr(0, e.indexOf("?"))),
    title(e),
    nav(e);
    if (e.includes("/fallback")) {
        window.scroll_status = {
            event_bound: !1,
            loading_lock: !1
        };
        const e = getQueryVariable("a")
          , t = getQueryVariable("id");
        return e ? fallback(t, !0) : list(null, t, !0)
    }
    window.MODEL.is_search_page ? (window.scroll_status = {
        event_bound: !1,
        loading_lock: !1
    },
    render_search_result_list()) : e.match(/\/\d+:$/g) || "/" == e.slice(-1) ? (window.scroll_status = {
        event_bound: !1,
        loading_lock: !1
    },
    list(e)) : file(e)
}
function title(e) {
    e = decodeURI(e);
    var t = window.current_drive_order || 0
      , n = window.drive_names[t];
    e = e.replace(`/${t}:`, "");
    var a = window.MODEL;
    a.is_search_page ? $("title").html(`${n} - Search results for ${a.q} `) : $("title").html(`${n} - ${e}`)
}
function nav(e) {
    var t = window.MODEL
      , n = ""
      , a = window.current_drive_order || 0;
    n += `<nav class="navbar navbar-expand-lg${UI.fixed_header ? " fixed-top" : ""} ${UI.header_style_class}">\n    <div class="container-fluid">\n  <a class="navbar-brand" href="/">${UI.logo_image ? '<img border="0" alt="' + UI.company_name + '" src="' + UI.logo_link_name + '" height="' + UI.logo_height + '" width="' + UI.logo_width + '">' : UI.logo_link_name}</a>\n  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n  <div class="collapse navbar-collapse" id="navbarSupportedContent">\n    <ul class="navbar-nav me-auto mb-2 mb-lg-0">\n      <li class="nav-item">\n        <a class="nav-link" href="/${a}:/">${UI.nav_link_1}</a>\n      </li>`;
    var i = window.drive_names
      , o = window.drive_names[a];
    n += `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${o}</a><div class="dropdown-menu" aria-labelledby="navbarDropdown">`,
    i.forEach(( (e, t) => {
        n += `<a class="dropdown-item"  href="/${t}:/">${e}</a>`
    }
    )),
    n += "</div></li>",
    n += `<li class="nav-item">\n    <a class="nav-link" href="${UI.contact_link}" target="_blank">${UI.nav_link_4}</a>\n  </li>${UI.show_logout_button ? '<li class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>' : ""}`;
    var l = `\n</ul>\n<form class="d-flex" method="get" action="/${a}:search">\n<input class="form-control me-2" name="q" type="search" placeholder="Search" aria-label="Search" value="${t.is_search_page && t.q || ""}" required>\n<button class="btn ${UI.search_button_class}" onclick="if($('#search_bar_form>input').val()) $('#search_bar_form').submit();" type="submit">Search</button>\n</form>\n</div>\n</div>\n</nav>\n`;
    t.root_type < 2 && (n += l),
    $("#nav").html(n)
}
function sleep(e) {
    const t = Date.now();
    let n = null;
    do {
        n = Date.now()
    } while (n - t < e)
}
function requestListPath(e, t, n, a, i=3, o=!1) {
    var l = {
        id: t.id || "",
        type: "folder",
        password: t.password || "",
        page_token: t.page_token || "",
        page_index: t.page_index || 0
    };
    $("#update").show(),
    document.getElementById("update").innerHTML = "<div class='alert alert-info' role='alert'> Connecting...</div></div></div>",
    o && (e = "/0:fallback"),
    console.log("Performing Request again"),
    function t() {
        fetch(o ? "/0:fallback" : e, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(l)
        }).then((function(e) {
            if (!e.ok)
                throw new Error("Request failed");
            return e.json()
        }
        )).then((function(t) {
            t && t.error && 401 === t.error.code ? askPassword(e) : t && null === t.data ? (document.getElementById("spinner").remove(),
            document.getElementById("list").innerHTML = "<div class='alert alert-danger' role='alert'> Server didn't send any data.</div></div></div>",
            $("#update").hide()) : t && t.data && (n(t, e, l),
            $("#update").hide())
        }
        )).catch((function(e) {
            i > 0 ? (sleep(2e3),
            document.getElementById("update").innerHTML = "<div class='alert alert-info' role='alert'> Retrying...</div></div></div>",
            t()) : (document.getElementById("update").innerHTML = "<div class='alert alert-danger' role='alert'> Unable to get data from the server. Something went wrong.</div></div></div>",
            document.getElementById("list").innerHTML = "<div class='alert alert-danger' role='alert'> We were unable to get data from the server. " + e + "</div></div></div>",
            $("#update").hide())
        }
        ))
    }()
}
function requestSearch(e, t, n=3) {
    var a = {
        q: e.q || null,
        page_token: e.page_token || null,
        page_index: e.page_index || 0
    };
    $("#update").html("<div class='alert alert-info' role='alert'> Connecting...</div></div></div>"),
    function e(n) {
        fetch(`/${window.current_drive_order}:search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(a)
        }).then((function(e) {
            if (!e.ok)
                throw new Error("Request failed");
            return e.json()
        }
        )).then((function(e) {
            e && null === e.data && ($("#spinner").remove(),
            $("#list").html("<div class='alert alert-danger' role='alert'> Server didn't send any data.</div></div></div>"),
            $("#update").remove()),
            e && e.data && (t && t(e, a),
            $("#update").remove())
        }
        )).catch((function(t) {
            n > 0 ? (sleep(2e3),
            $("#update").html("<div class='alert alert-info' role='alert'> Retrying...</div></div></div>"),
            e(n - 1)) : ($("#update").html("<div class='alert alert-danger' role='alert'> Unable to get data from the server. Something went wrong. 3 Failures</div></div></div>"),
            $("#list").html("<div class='alert alert-danger' role='alert'> We were unable to get data from the server.</div></div></div>"),
            $("#spinner").remove())
        }
        ))
    }(n)
}
function list(e, t="", n=!1) {
    console.log(t);
    var a = `<div class="container">${UI.fixed_header ? "<br>" : ""}\n    <div id="update"></div>\n    <div id="head_md" style="display:none; padding: 20px 20px;"></div>\n    <div class="container" id="select_items" style="padding: 0px 50px 10px; display:none;">\n      <div class="d-flex align-items-center justify-content-between">\n        <div class="form-check mr-3">\n          <input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" id="select-all-checkboxes">\n          <label class="form-check-label" for="select-all-checkboxes">Select all</label>\n        </div>\n        <button id="handle-multiple-items-copy" style="padding: 5px 10px; font-size: 12px;" class="btn btn-success">Copy</button>\n      </div>\n    </div>\n    <div class="${UI.path_nav_alert_class} d-flex align-items-center" role="alert" style="margin-bottom: 0; padding-bottom: 0rem;">\n      <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">\n        <ol class="breadcrumb" id="folderne">\n          <li class="breadcrumb-item"><a href="/">Home</a></li>`
      , i = window.location.pathname.trim("/").split("/")
      , o = "/";
    if (i.length > 1)
        for (var l in i) {
            var r = i[l]
              , s = decodeURIComponent(r).replace(/\//g, "%2F").replace(/\?.+/g, "$'")
              , d = s.length > 15 ? s.slice(0, 5) + "..." : s.slice(0, 15);
            if (o += r + "/",
            "" === d)
                break;
            a += `<li class="breadcrumb-item"><a href="${o}">${d}</a></li>`
        }
    a += `</ol>\n    </nav>\n  </div>\n  <div id="list" class="list-group text-break"></div>\n  <div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count"><span class="number text-center"></span> | <span class="totalsize text-center"></span></div>\n  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>\n</div>`,
    $("#content").html(a);
    var c = localStorage.getItem("password" + e);
    function p(e, a, i) {
        console.log(e, a, i),
        $("#list").data("nextPageToken", e.nextPageToken).data("curPageIndex", e.curPageIndex),
        $("#spinner").remove(),
        null === e.nextPageToken ? ($(window).off("scroll"),
        window.scroll_status.event_bound = !1,
        window.scroll_status.loading_lock = !1,
        n ? append_files_to_fallback_list(a, e.data.files) : append_files_to_list(a, e.data.files)) : (console.log("doing something..."),
        n ? append_files_to_fallback_list(a, e.data.files) : append_files_to_list(a, e.data.files),
        !0 !== window.scroll_status.event_bound && ($(window).on("scroll", (function() {
            var e = $(this).scrollTop()
              , o = getDocumentHeight();
            if (e + $(this).height() > o - (Os.isMobile ? 130 : 80)) {
                if (!0 === window.scroll_status.loading_lock)
                    return;
                window.scroll_status.loading_lock = !0,
                $(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`).insertBefore("#readme_md");
                let e = $("#list");
                n ? (console.log("fallback inside handleSuccessResult"),
                requestListPath(a, {
                    id: t,
                    password: i.password,
                    page_token: e.data("nextPageToken"),
                    page_index: e.data("curPageIndex") + 1
                }, p, null, 5, t, n = !0)) : requestListPath(a, {
                    password: i.password,
                    page_token: e.data("nextPageToken"),
                    page_index: e.data("curPageIndex") + 1
                }, p, null)
            }
        }
        )),
        window.scroll_status.event_bound = !0)),
        !0 === window.scroll_status.loading_lock && (window.scroll_status.loading_lock = !1)
    }
    $("#list").html(`<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`),
    $("#readme_md").hide().html(""),
    $("#head_md").hide().html(""),
    n ? (console.log("fallback inside list"),
    requestListPath(e, {
        id: t,
        password: c
    }, p, null, null, n = !0)) : (console.log("handling this"),
    requestListPath(e, {
        password: c
    }, p, null));
    document.getElementById("handle-multiple-items-copy").addEventListener("click", ( () => {
        const e = document.querySelectorAll('input[type="checkbox"]:checked')
          , t = [];
        if (0 === e.length)
            return void alert("No items selected!");
        e.forEach((e => {
            const n = e.value;
            t.push(n)
        }
        ));
        const n = t.join("\n")
          , a = document.createElement("textarea");
        a.value = n,
        document.body.appendChild(a),
        a.select(),
        document.execCommand("copy"),
        document.body.removeChild(a),
        alert("Selected items copied to clipboard!")
    }
    ))
}
function askPassword(e) {
    $("#spinner").remove();
    var t = prompt("Directory encryption, please enter the password", "");
    localStorage.setItem("password" + e, t),
    null != t && "" != t ? list(e) : history.go(-1)
}
function append_files_to_fallback_list(e, t) {
    try {
        console.log("append_files_to_fallback_list");
        var n = $("#list")
          , a = null === n.data("nextPageToken")
          , o = "0" == n.data("curPageIndex");
        html = "";
        let g = [];
        var l = 0
          , r = !1;
        for (i in t) {
            var s = t[i]
              , d = "/fallback?id=" + s.id;
            if (s.modifiedTime = utc2delhi(s.modifiedTime),
            "application/vnd.google-apps.folder" == s.mimeType)
                html += `<a href="${d}" style="color: ${UI.folder_text_color};" class="countitems list-group-item list-group-item-action"> ${folder_icon} ${s.name} ${UI.display_time ? '<span class="badge bg-info float-end"> ' + s.modifiedTime + " </span>" : ""}</a>`;
            else {
                l = l + Number(s.size);
                s.size = formatFileSize(s.size);
                r = !0;
                var c = s.name
                  , p = UI.second_domain_for_dl ? UI.downloaddomain + s.link : window.location.origin + s.link;
                c.replace(new RegExp("#","g"), "%23").replace(new RegExp("\\?","g"), "%3F");
                a && "README.md" == s.name && UI.render_readme_md && get_file(d, s, (function(e) {
                    markdown("#readme_md", e),
                    $("img").addClass("img-fluid")
                }
                )),
                "HEAD.md" == s.name && UI.render_head_md && get_file(d, s, (function(e) {
                    markdown("#head_md", e),
                    $("img").addClass("img-fluid")
                }
                ));
                var m = s.fileExtension;
                "?a=view",
                " view",
                html += '<div class="list-group-item list-group-item-action">' + (UI.allow_selecting_files ? '<input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" value="' + p + '" id="flexCheckDefault">' : ""),
                "|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${m}|`) >= 0 ? html += video_icon : "|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${m}|`) >= 0 ? html += code_icon : "|zip|rar|tar|.7z|.gz|".indexOf(`|${m}|`) >= 0 ? html += zip_icon : "|bmp|jpg|jpeg|png|gif|".indexOf(`|${m}|`) >= 0 ? html += image_icon : "|m4a|mp3|flac|wav|ogg|".indexOf(`|${m}|`) >= 0 ? html += audio_icon : "|md|".indexOf(`|${m}|`) >= 0 ? html += markdown_icon : "|pdf|".indexOf(`|${m}|`) >= 0 ? html += pdf_icon : html += file_icon,
                html += ` <a class="countitems size_items list-group-item-action" style="text-decoration: none; color: ${UI.css_a_tag_color};" href="${d}&a=view">${s.name}</a>${UI.display_download ? `<a href="${p}"><svg class="float-end"width="25px" style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg></a>` : ""}${UI.display_size ? '<span class="badge bg-primary float-end"> ' + s.size + " </span>" : ""}${UI.display_time ? ' <span class="badge bg-info float-end"> ' + s.modifiedTime + " </span>" : ""}</div>`
            }
        }
        if (r && UI.allow_selecting_files && (document.getElementById("select_items").style.display = "block"),
        g.length > 0) {
            let t = localStorage.getItem(e)
              , n = g;
            if (!o && t) {
                let e;
                try {
                    e = JSON.parse(t),
                    Array.isArray(e) || (e = [])
                } catch (t) {
                    e = []
                }
                n = e.concat(g)
            }
            localStorage.setItem(e, JSON.stringify(n))
        }
        n.html(("0" == n.data("curPageIndex") ? "" : n.html()) + html),
        a && (total_size = formatFileSize(l) || "0 Bytes",
        total_items = n.find(".countitems").length,
        total_files = n.find(".size_items").length,
        0 == total_items ? $("#count").removeClass("d-none").find(".number").text("Empty Folder") : 1 == total_items ? $("#count").removeClass("d-none").find(".number").text(total_items + " item") : $("#count").removeClass("d-none").find(".number").text(total_items + " items"),
        0 == total_files ? $("#count").removeClass("d-none").find(".totalsize").text("Zero Files") : 1 == total_files ? $("#count").removeClass("d-none").find(".totalsize").text(total_files + " File with Size " + total_size) : $("#count").removeClass("d-none").find(".totalsize").text(total_files + " Files with Size " + total_size))
    } catch (e) {
        console.log(e)
    }
}
function append_files_to_list(e, t) {
    var n = $("#list")
      , a = null === n.data("nextPageToken")
      , o = "0" == n.data("curPageIndex");
    html = "";
    let l = [];
    var r = 0
      , s = !1;
    for (i in t) {
        var d = t[i]
          , c = e + (encodeURIComponent(d.name).replace(/\//g, "%2F") + "/").replace(new RegExp("#","g"), "%23").replace(new RegExp("\\?","g"), "%3F");
        if (d.modifiedTime = utc2delhi(d.modifiedTime),
        "application/vnd.google-apps.folder" == d.mimeType)
            html += `<a href="${c}" style="color: ${UI.folder_text_color};" class="countitems list-group-item list-group-item-action"> ${folder_icon} ${d.name} ${UI.display_time ? '<span class="badge bg-info float-end"> ' + d.modifiedTime + " </span>" : ""}</a>`;
        else {
            r = r + Number(d.size);
            d.size = formatFileSize(d.size);
            s = !0;
            var p = d.name
              , m = UI.second_domain_for_dl ? UI.downloaddomain + d.link : window.location.origin + d.link
              , g = e + p.replace(new RegExp("#","g"), "%23").replace(new RegExp("\\?","g"), "%3F");
            a && "README.md" == d.name && UI.render_readme_md && get_file(c, d, (function(e) {
                markdown("#readme_md", e),
                $("img").addClass("img-fluid")
            }
            )),
            "HEAD.md" == d.name && UI.render_head_md && get_file(c, d, (function(e) {
                markdown("#head_md", e),
                $("img").addClass("img-fluid")
            }
            ));
            var f = d.fileExtension;
            console.log(f),
            g += "?a=view",
            " view",
            html += '<div class="list-group-item list-group-item-action">' + (UI.allow_selecting_files ? '<input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" value="' + m + '" id="flexCheckDefault">' : ""),
            "|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${f}|`) >= 0 ? html += video_icon : "|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${f}|`) >= 0 ? html += code_icon : "|zip|rar|tar|.7z|.gz|".indexOf(`|${f}|`) >= 0 ? html += zip_icon : "|bmp|jpg|jpeg|png|gif|".indexOf(`|${f}|`) >= 0 ? html += image_icon : "|m4a|mp3|flac|wav|ogg|".indexOf(`|${f}|`) >= 0 ? html += audio_icon : "|md|".indexOf(`|${f}|`) >= 0 ? html += markdown_icon : "|pdf|".indexOf(`|${f}|`) >= 0 ? html += pdf_icon : html += file_icon,
            html += ` <a class="countitems size_items list-group-item-action" style="text-decoration: none; color: ${UI.css_a_tag_color};" href="${g}">${d.name}</a>${UI.display_download ? `<a href="${m}"><svg class="float-end"width="25px" style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg></a>` : ""}${UI.display_size ? '<span class="badge bg-primary float-end"> ' + d.size + " </span>" : ""}${UI.display_time ? ' <span class="badge bg-info float-end"> ' + d.modifiedTime + " </span>" : ""}</div>`
        }
    }
    if (s && UI.allow_selecting_files && (document.getElementById("select_items").style.display = "block"),
    l.length > 0) {
        let t = localStorage.getItem(e)
          , n = l;
        if (!o && t) {
            let e;
            try {
                e = JSON.parse(t),
                Array.isArray(e) || (e = [])
            } catch (t) {
                e = []
            }
            n = e.concat(l)
        }
        localStorage.setItem(e, JSON.stringify(n))
    }
    n.html(("0" == n.data("curPageIndex") ? "" : n.html()) + html),
    a && (total_size = formatFileSize(r) || "0 Bytes",
    total_items = n.find(".countitems").length,
    total_files = n.find(".size_items").length,
    0 == total_items ? $("#count").removeClass("d-none").find(".number").text("Empty Folder") : 1 == total_items ? $("#count").removeClass("d-none").find(".number").text(total_items + " item") : $("#count").removeClass("d-none").find(".number").text(total_items + " items"),
    0 == total_files ? $("#count").removeClass("d-none").find(".totalsize").text("Zero Files") : 1 == total_files ? $("#count").removeClass("d-none").find(".totalsize").text(total_files + " File with Size " + total_size) : $("#count").removeClass("d-none").find(".totalsize").text(total_files + " Files with Size " + total_size))
}
function render_search_result_list() {
    var e = `\n  <div class="container"><br>\n  <div id="update"></div>\n  <div class="container" id="select_items" style="padding: 0px 50px 10px; display:none;">\n  <div class="d-flex align-items-center justify-content-between">\n    <div class="form-check mr-3">\n      <input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" id="select-all-checkboxes">\n      <label class="form-check-label" for="select-all-checkboxes">Select all</label>\n    </div>\n    <button id="handle-multiple-items-copy" style="padding: 5px 10px; font-size: 12px;" class="btn btn-success">Copy</button>\n  </div>\n  </div>\n  <div class="card">\n  <div class="${UI.path_nav_alert_class} d-flex align-items-center" role="alert" style="margin-bottom: 0;">Search Results</div>\n  <div id="list" class="list-group text-break">\n  </div>\n  </div>\n  <div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count"><span class="number text-center"></span> | <span class="totalsize text-center"></span></div>\n  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>\n  </div>\n  `;
    $("#content").html(e),
    $("#list").html(`<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`),
    $("#readme_md").hide().html(""),
    $("#head_md").hide().html(""),
    requestSearch({
        q: window.MODEL.q
    }, (function e(t, n) {
        $("#list").data("nextPageToken", t.nextPageToken).data("curPageIndex", t.curPageIndex),
        $("#spinner").remove(),
        null === t.nextPageToken ? ($(window).off("scroll"),
        window.scroll_status.event_bound = !1,
        window.scroll_status.loading_lock = !1,
        append_search_result_to_list(t.data.files)) : (append_search_result_to_list(t.data.files),
        !0 !== window.scroll_status.event_bound && ($(window).on("scroll", (function() {
            var t = $(this).scrollTop()
              , n = getDocumentHeight();
            if (t + $(this).height() > n - (Os.isMobile ? 130 : 80)) {
                if (!0 === window.scroll_status.loading_lock)
                    return;
                window.scroll_status.loading_lock = !0,
                $(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`).insertBefore("#readme_md");
                let t = $("#list");
                requestSearch({
                    q: window.MODEL.q,
                    page_token: t.data("nextPageToken"),
                    page_index: t.data("curPageIndex") + 1
                }, e)
            }
        }
        )),
        window.scroll_status.event_bound = !0)),
        !0 === window.scroll_status.loading_lock && (window.scroll_status.loading_lock = !1)
    }
    ));
    document.getElementById("handle-multiple-items-copy").addEventListener("click", ( () => {
        const e = document.querySelectorAll('input[type="checkbox"]:checked')
          , t = [];
        if (0 === e.length)
            return void alert("No items selected!");
        e.forEach((e => {
            const n = e.value;
            t.push(n)
        }
        ));
        const n = t.join("\n")
          , a = document.createElement("textarea");
        a.value = n,
        document.body.appendChild(a),
        a.select(),
        document.execCommand("copy"),
        document.body.removeChild(a),
        alert("Selected items copied to clipboard!")
    }
    ))
}
function append_search_result_to_list(e) {
    try {
        window.current_drive_order;
        var t = $("#list")
          , n = null === t.data("nextPageToken");
        html = "";
        var a = 0
          , o = !1;
        for (i in e) {
            var l = e[i];
            if (null == l.size && (l.size = ""),
            l.modifiedTime = utc2delhi(l.modifiedTime),
            "application/vnd.google-apps.folder" == l.mimeType)
                html += `<a style="color: ${UI.folder_text_color};" onclick="onSearchResultItemClick('${l.id}', false)" data-bs-toggle="modal" data-bs-target="#SearchModel" class="countitems list-group-item list-group-item-action"> ${folder_icon} ${l.name} ${UI.display_time ? '<span class="badge bg-info float-end"> ' + l.modifiedTime + " </span>" : ""}</a>`;
            else {
                o = !0,
                a = a + Number(l.size);
                l.size = formatFileSize(l.size);
                var r = l.fileExtension
                  , s = UI.second_domain_for_dl ? UI.downloaddomain + l.link : window.location.origin + l.link;
                html += `<div style="color: ${UI.css_a_tag_color};" gd-type="$item['mimeType']}" class="countitems size_items list-group-item list-group-item-action">${UI.allow_selecting_files ? '<input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" value="' + s + '" id="flexCheckDefault">' : ""}`,
                "|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${r}|`) >= 0 ? html += video_icon : "|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${r}|`) >= 0 ? html += code_icon : "|zip|rar|tar|.7z|.gz|".indexOf(`|${r}|`) >= 0 ? html += zip_icon : "|bmp|jpg|jpeg|png|gif|".indexOf(`|${r}|`) >= 0 ? html += image_icon : "|m4a|mp3|flac|wav|ogg|".indexOf(`|${r}|`) >= 0 ? html += audio_icon : "|md|".indexOf(`|${r}|`) >= 0 ? html += markdown_icon : "|pdf|".indexOf(`|${r}|`) >= 0 ? html += pdf_icon : html += file_icon,
                html += ` <span onclick="onSearchResultItemClick('${l.id}', true)" data-bs-toggle="modal" data-bs-target="#SearchModel">${l.name}</span>${UI.display_download ? `<a href="${s}"><svg class="float-end"width="25px" style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg></a>` : ""}<span class="badge float-end csize"> ${UI.display_size ? '<span class="badge bg-primary float-end"> ' + l.size + " </span>" : ""}${UI.display_time ? ' <span class="badge bg-info float-end"> ' + l.modifiedTime + " </span>" : ""}</div>`
            }
        }
        o && UI.allow_selecting_files && (document.getElementById("select_items").style.display = "block"),
        t.html(("0" == t.data("curPageIndex") ? "" : t.html()) + html),
        n && (total_size = formatFileSize(a) || "0 Bytes",
        total_items = t.find(".countitems").length,
        total_files = t.find(".size_items").length,
        0 == total_items ? $("#count").removeClass("d-none").find(".number").text("No Results") : 1 == total_items ? $("#count").removeClass("d-none").find(".number").text(total_items + " item") : $("#count").removeClass("d-none").find(".number").text(total_items + " items"),
        0 == total_files ? $("#count").removeClass("d-none").find(".totalsize").text("Found Nothing") : 1 == total_files ? $("#count").removeClass("d-none").find(".totalsize").text(total_files + " File with Size " + total_size) : $("#count").removeClass("d-none").find(".totalsize").text(total_files + " Files with Size " + total_size))
    } catch (e) {
        console.log(e)
    }
}
function onSearchResultItemClick(e, t) {
    var n = window.current_drive_order
      , a = "Loading...";
    $("#SearchModelLabel").html(a);
    var i = `<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div>`;
    $("#modal-body-space").html(i);
    var o = {
        id: e
    };
    fetch(`/${n}:id2path`, {
        method: "POST",
        body: JSON.stringify(o),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then((function(e) {
        if (e.ok)
            return e.json();
        throw new Error("Request failed.")
    }
    )).then((function(e) {
        var n = `${e.path}`.replace(new RegExp("#","g"), "%23").replace(new RegExp("\\?","g"), "%3F");
        a = "Result",
        $("#SearchModelLabel").html(a),
        i = `<a class="btn btn-info" href="${n}${t ? "?a=view" : ""}">Open</a> <a class="btn btn-secondary" href="${n}${t ? "?a=view" : ""}" target="_blank">Open in New Tab</a>`,
        $("#modal-body-space").html(i)
    }
    )).catch((function(n) {
        console.log(n);
        a = "Fallback Method",
        $("#SearchModelLabel").html(a),
        i = `<a class="btn btn-info" href="/fallback?id=${e}&${t ? "a=view" : ""}">Open</a> <a class="btn btn-secondary" href="/fallback?id=${e}&${t ? "a=view" : ""}" target="_blank">Open in New Tab</a>`,
        $("#modal-body-space").html(i)
    }
    ))
}
function get_file(e, t, n) {
    var a = "file_path_" + e + t.modifiedTime
      , i = localStorage.getItem(a);
    if (null != i)
        return n(i);
    $.get(e, (function(e) {
        localStorage.setItem(a, e),
        n(e)
    }
    ))
}
async function fallback(e, t) {
    if (!t)
        return list(e, !0);
    var n = await getCookie("root_id") || "";
    $("#content").html(`<div class="d-flex justify-content-center" style="height: 150px"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`),
    fetch("/0:fallback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: e
        })
    }).then((function(e) {
        if (!e.ok)
            throw new Error("Request failed");
        return e.json()
    }
    )).then((function(e) {
        console.log(e);
        var t = e.mimeType
          , a = e.fileExtension;
        const i = ["php", "css", "go", "java", "js", "json", "txt", "sh", "md", "html", "xml", "py", "rb", "c", "cpp", "h", "hpp"]
          , o = ["mp4", "webm", "avi", "mpg", "mpeg", "mkv", "rm", "rmvb", "mov", "wmv", "asf", "ts", "flv", "3gp", "m4v"]
          , l = ["mp3", "flac", "wav", "ogg", "m4a", "aac", "wma", "alac"]
          , r = ["bmp", "jpg", "jpeg", "png", "gif", "svg", "tiff", "ico"]
          , s = ["pdf"];
        if ("application/vnd.google-apps.folder" === t)
            window.location.href = window.location.pathname + "/";
        else if (a) {
            const d = e.name
              , c = encodeURIComponent(d)
              , p = formatFileSize(e.size)
              , m = UI.second_domain_for_dl ? UI.downloaddomain + e.link : window.location.origin + e.link
              , g = e.id;
            if (t.includes("video") || o.includes(a)) {
                file_video(d, c, p, e.thumbnailLink ? e.thumbnailLink.replace("s220", "s0") : UI.poster, m, t, g, n)
            } else
                t.includes("audio") || l.includes(a) ? file_audio(d, c, p, m, g, n) : t.includes("image") || r.includes(a) ? file_image(d, c, p, m, g, n) : t.includes("pdf") || s.includes(a) ? file_pdf(d, c, p, m, g, n) : i.includes(a) ? file_code(d, c, p, m, g, n) : file_others(d, c, p, m, g, n)
        }
    }
    )).catch((function(e) {
        var t = `\n          <div class="container"><br>\n          <div class="card text-center">\n            <div class="card-body text-center">\n              <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error. ` + e + '</div>\n            </div>\n            <p>The requested URL was not found on this server. That’s all we know.</p>\n            <div class="card-text text-center">\n              <div class="btn-group text-center">\n                <a href="/" type="button" class="btn btn-primary">Homepage</a>\n              </div>\n            </div><br>\n          </div>\n        </div>';
        $("#content").html(t)
    }
    ))
}
async function file(e) {
    var t = await getCookie("root_id") || "";
    e.split("/").pop();
    $("#content").html(`<div class="d-flex justify-content-center" style="height: 150px"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`),
    fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            path: e
        })
    }).then((function(e) {
        if (!e.ok)
            throw new Error("Request failed");
        return e.json()
    }
    )).then((function(e) {
        console.log(e);
        var n = e.mimeType
          , a = e.fileExtension;
        const i = ["php", "css", "go", "java", "js", "json", "txt", "sh", "md", "html", "xml", "py", "rb", "c", "cpp", "h", "hpp"]
          , o = ["mp4", "webm", "avi", "mpg", "mpeg", "mkv", "rm", "rmvb", "mov", "wmv", "asf", "ts", "flv", "3gp", "m4v"]
          , l = ["mp3", "flac", "wav", "ogg", "m4a", "aac", "wma", "alac"]
          , r = ["bmp", "jpg", "jpeg", "png", "gif", "svg", "tiff", "ico"]
          , s = ["pdf"];
        if ("application/vnd.google-apps.folder" === n)
            window.location.href = window.location.pathname + "/";
        else if (a) {
            const d = e.name
              , c = encodeURIComponent(d)
              , p = formatFileSize(e.size)
              , m = UI.second_domain_for_dl ? UI.downloaddomain + e.link : window.location.origin + e.link
              , g = e.id;
            if (n.includes("video") || o.includes(a)) {
                file_video(d, c, p, e.thumbnailLink ? e.thumbnailLink.replace("s220", "s0") : UI.poster, m, n, g, t)
            } else
                n.includes("audio") || l.includes(a) ? file_audio(d, c, p, m, g, t) : n.includes("image") || r.includes(a) ? file_image(d, c, p, m, g, t) : n.includes("pdf") || s.includes(a) ? file_pdf(d, c, p, m, g, t) : i.includes(a) ? file_code(d, c, p, m, g, t) : file_others(d, c, p, m, g, t)
        }
    }
    )).catch((function(e) {
        var t = `\n          <div class="container"><br>\n          <div class="card text-center">\n            <div class="card-body text-center">\n              <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error. ` + e + '</div>\n            </div>\n            <p>The requested URL was not found on this server. That’s all we know.</p>\n            <div class="card-text text-center">\n              <div class="btn-group text-center">\n                <a href="/" type="button" class="btn btn-primary">Homepage</a>\n              </div>\n            </div><br>\n          </div>\n        </div>';
        $("#content").html(t)
    }
    ))
}
const copyButton = '<button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copy</span> </button>';
function generateCopyFileBox(e, t) {
    return `<div class="row justify-content-center mt-3" id="copyresult">\n  <div class="col-12 col-md-8" id="copystatus"><div class='alert alert-secondary' role='alert'> Send Request to Copy File </div></div>\n  <div class="col-12 col-md-8"> <input id="user_folder_id" type="text" class="form-control" placeholder="Enter Your Folder ID to Copy this File" value="${t}" required></div>\n  <div class="col-12 col-md-8 mt-2"> <button id="copy_file" onclick="copyFile('${e}')" style="margin-top: 5px;" class="btn btn-danger btn-block">Copy File to Own Drive</button></div>\n  </div>`
}
function file_others(e, t, n, a, i, o) {
    var l = window.location.pathname.split("/");
    const r = UI.allow_file_copy ? generateCopyFileBox(i, o) : "";
    for (var s = "", d = "", c = 0; c < l.length; c++) {
        var p = l[c];
        c == l.length - 1 ? d += p + "?a=view" : d += p + "/",
        p.length > 15 && (p = (p = decodeURIComponent(p)).substring(0, 10) + "..."),
        "" == p && (p = "Home"),
        s += '<a href="' + d + '" class="breadcrumb-item">' + p + "</a>"
    }
    var m = `\n    <div class="container"><br>\n      <nav aria-label="breadcrumb">\n        <ol class="breadcrumb">\n          ${s}\n        </ol>\n      </nav>\n            <div class="card text-center">\n            <div class="card-body text-center">\n              <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${e}<br>${n}</div>\n            </div>\n            <div class="card-body">\n            <div class="input-group mb-4">\n              <input type="text" class="form-control" id="dlurl" value="${a}" readonly>\n            </div>\n            <div class="card-text text-center">\n            <div class="btn-group text-center">\n                <a href="${a}" type="button" class="btn btn-primary">Download</a>\n                <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                  <span class="sr-only"></span>\n                </button>\n                <div class="dropdown-menu">\n                  <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Free)</a>\n                  <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Lite)</a>\n                  <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${t};end">1DM+ (Plus)</a>\n                </div>\n            </div>\n            ` + copyButton + r + "\n            </div>\n            <br></div>";
    $("#content").html(m)
}
function file_code(e, t, n, a, i, o, l, r) {
    var s = window.location.pathname.split("/");
    const d = UI.allow_file_copy ? generateCopyFileBox(l, r) : "";
    for (var c = "", p = "", m = 0; m < s.length; m++) {
        var g = s[m];
        m == s.length - 1 ? p += g + "?a=view" : p += g + "/",
        g.length > 15 && (g = (g = decodeURIComponent(g)).substring(0, 10) + "..."),
        "" == g && (g = "Home"),
        c += '<a href="' + p + '" class="breadcrumb-item">' + g + "</a>"
    }
    var f = `\n    <div class="container"><br>\n      <nav aria-label="breadcrumb">\n        <ol class="breadcrumb">\n          ${c}\n        </ol>\n      </nav>\n      <div class="card text-center">\n        <div class="card-body text-center">\n          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${e}<br>${n}</div>\n        </div>\n        <div id="code_spinner"></div>` + (UI.second_domain_for_dl ? "" : '<pre class="line-numbers language-markup" data-src="plugins/line-numbers/index.html" data-start="-5" style="white-space: pre-wrap; counter-reset: linenumber -6;" data-src-status="loaded" tabindex="0"><code id="editor"></code></pre>') + `<div class="card-body">\n          <div class="input-group mb-4">\n            <input type="text" class="form-control" id="dlurl" value="${i}" readonly>\n          </div>\n          <div class="card-text text-center">\n            <div class="btn-group text-center">\n              <a href="${i}" type="button" class="btn btn-primary">Download</a>\n              <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                <span class="sr-only"></span>\n              </button>\n              <div class="dropdown-menu">\n                <a class="dropdown-item" href="intent:${i}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Free)</a>\n                <a class="dropdown-item" href="intent:${i}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Lite)</a>\n                <a class="dropdown-item" href="intent:${i}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${t};end">1DM+ (Plus)</a>\n              </div>\n            </div>\n            ` + copyButton + d + "\n          </div>\n          <br>\n        </div>\n      </div>\n    </div>";
    $("#content").html(f);
    $("#code_spinner").html('<div class="d-flex justify-content-center"><div class="spinner-border m-5" role="status"><span class="sr-only"></span></div></div>'),
    a <= 2097152 ? $.get(i, (function(e) {
        $("#editor").html($("<div/>").text(e).html()),
        $("#code_spinner").html("")
    }
    )) : ($("#code_spinner").html(""),
    $("#editor").html(`<div class="${UI.file_view_alert_class}" id="file_details" role="alert">File size is too large to preview, Max Limit is 2 MB</div>`))
}
function file_video(e, t, n, a, i, o, l, r) {
    var s = btoa(i)
      , d = window.location.pathname.split("/");
    const c = UI.allow_file_copy ? generateCopyFileBox(l, r) : "";
    for (var p = "", m = "", g = 0; g < d.length; g++) {
        var f = d[g];
        g == d.length - 1 ? m += f + "?a=view" : m += f + "/",
        f.length > 15 && (f = (f = decodeURIComponent(f)).substring(0, 10) + "..."),
        "" == f && (f = "Home"),
        p += '<a href="' + m + '" class="breadcrumb-item">' + f + "</a>"
    }
    let v;
    UI.disable_player || ("plyr" == player_config.player ? (v = `<video id="player" playsinline controls data-poster="${a}">\n      <source src="${i}" type="video/mp4" />\n      <source src="${i}" type="video/webm" />\n        </video>`,
    player_js = "https://cdn.plyr.io/" + player_config.plyr_io_version + "/plyr.polyfilled.js",
    player_css = "https://cdn.plyr.io/" + player_config.plyr_io_version + "/plyr.css") : "videojs" == player_config.player ? (v = `<video id="vplayer" poster="${a}" muted=true class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%" data-setup='{"fluid": true}' style="--plyr-captions-text-color: #ffffff;--plyr-captions-background: #000000;">\n      <source src="${i}" type="video/mp4" />\n      <source src="${i}" type="video/webm" />\n      <source src="${i}" type="video/avi" />\n    </video>`,
    player_js = "https://vjs.zencdn.net/" + player_config.videojs_version + "/video.js",
    player_css = "https://vjs.zencdn.net/" + player_config.videojs_version + "/video-js.css") : "dplayer" == player_config.player ? (v = '<div id="player-container"></div>',
    player_js = "https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js",
    player_css = "https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css") : "jwplayer" == player_config.player && (v = '<div id="player"></div>',
    player_js = "https://content.jwplatform.com/libraries/IDzF9Zmk.js",
    player_css = ""));
    var u = `\n    <div class="container text-center"><br>\n      <nav aria-label="breadcrumb">\n        <ol class="breadcrumb">\n          ${p}\n        </ol>\n      </nav>\n      <div class="card text-center">\n        <div class="text-center">\n          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${e}<br>${n}</div>${v}</div>\n        </br>\n        ${UI.disable_video_download ? "" : `\n          <div class="card-body">\n          <div class="input-group mb-4">\n          <input type="text" class="form-control" id="dlurl" value="${i}" readonly>\n          </div>\n          <div class="btn-group text-center">\n              <a href="${i}" type="button" class="btn btn-primary">Download</a>\n              <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n              <span class="sr-only"></span>\n              </button>\n              <div class="dropdown-menu">\n              <a class="dropdown-item" href="iina://weblink?url=${i}">IINA</a>\n              <a class="dropdown-item" href="potplayer://${i}">PotPlayer</a>\n              <a class="dropdown-item" href="vlc://${i}">VLC Mobile</a>\n              <a class="dropdown-item" href="${i}">VLC Desktop</a>\n              <a class="dropdown-item" href="nplayer-${i}">nPlayer</a>\n              <a class="dropdown-item" href="intent://${i}#Intent;type=video/any;package=is.xyz.mpv;scheme=https;end;">mpv-android</a>\n              <a class="dropdown-item" href="mpv://${s}">mpv x64</a>\n              <a class="dropdown-item" href="intent:${i}#Intent;package=com.mxtech.videoplayer.ad;S.title=${t};end">MX Player (Free)</a>\n              <a class="dropdown-item" href="intent:${i}#Intent;package=com.mxtech.videoplayer.pro;S.title=${t};end">MX Player (Pro)</a>\n              <a class="dropdown-item" href="intent:${i}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Free)</a>\n              <a class="dropdown-item" href="intent:${i}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Lite)</a>\n              <a class="dropdown-item" href="intent:${i}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${t};end">1DM+ (Plus)</a>\n              </div>\n          </div>\n          ` + copyButton + c + "\n          \n          </div>\n          </div>\n          "}\n      </div>\n    </div>\n  `;
    $("#content").html(u);
    var h = document.createElement("script");
    h.src = player_js,
    h.onload = function() {
        if ("plyr" == player_config.player) {
            new Plyr("#player")
        } else if ("videojs" == player_config.player) {
            new videojs("vplayer")
        } else if ("dplayer" == player_config.player) {
            new DPlayer({
                container: document.getElementById("player-container"),
                screenshot: !0,
                video: {
                    url: i,
                    pic: a,
                    thumbnails: a
                }
            })
        } else
            "jwplayer" == player_config.player && jwplayer("player").setup({
                file: i,
                type: o,
                autostart: !1,
                image: a,
                width: "100%",
                aspectratio: "16:9",
                title: e,
                description: "Powered by Google Drive Index",
                tracks: [{
                    file: i,
                    kind: "captions",
                    label: "Default",
                    default: !0
                }],
                captions: {
                    color: "#f3f378",
                    fontSize: 14,
                    backgroundOpacity: 50,
                    edgeStyle: "raised"
                }
            })
    }
    ,
    document.head.appendChild(h);
    var y = document.createElement("link");
    y.href = player_css,
    y.rel = "stylesheet",
    document.head.appendChild(y)
}
function file_audio(e, t, n, a, i, o) {
    var l = btoa(a)
      , r = window.location.pathname.split("/");
    const s = UI.allow_file_copy ? generateCopyFileBox(i, o) : "";
    for (var d = "", c = "", p = 0; p < r.length; p++) {
        var m = r[p];
        p == r.length - 1 ? c += m + "?a=view" : c += m + "/",
        m.length > 15 && (m = (m = decodeURIComponent(m)).substring(0, 10) + "..."),
        "" == m && (m = "Home"),
        d += '<a href="' + c + '" class="breadcrumb-item">' + m + "</a>"
    }
    var g = `\n    <div class="container text-center"><br>\n      <nav aria-label="breadcrumb">\n        <ol class="breadcrumb">\n          ${d}\n        </ol>\n      </nav>\n      <div class="card text-center">\n        <div class="text-center">\n          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${e}<br>${n}</div>\n          ${UI.disable_player ? "" : `\n          <video id="aplayer" poster="${UI.audioposter}" muted=true class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%" data-setup='{"fluid": true}' style="--plyr-captions-text-color: #ffffff;--plyr-captions-background: #000000;">\n            <source src="${a}" type="audio/mpeg" />\n            <source src="${a}" type="audio/ogg" />\n            <source src="${a}" type="audio/wav" />\n          </video>`}\n        </div>\n        </br>\n        ${UI.disable_audio_download ? "" : `\n          <div class="card-body">\n          <div class="input-group mb-4">\n          <input type="text" class="form-control" id="dlurl" value="${a}" readonly>\n          </div>\n          <div class="btn-group text-center">\n              <a href="${a}" type="button" class="btn btn-primary">Download</a>\n              <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n              <span class="sr-only"></span>\n              </button>\n              <div class="dropdown-menu">\n              <a class="dropdown-item" href="iina://weblink?url=${a}">IINA</a>\n              <a class="dropdown-item" href="potplayer://${a}">PotPlayer</a>\n              <a class="dropdown-item" href="vlc://${a}">VLC Mobile</a>\n              <a class="dropdown-item" href="${a}">VLC Desktop</a>\n              <a class="dropdown-item" href="nplayer-${a}">nPlayer</a>\n              <a class="dropdown-item" href="intent://${a}#Intent;type=audio/any;package=is.xyz.mpv;scheme=https;end;">mpv-android</a>\n              <a class="dropdown-item" href="mpv://${l}">mpv x64</a>\n              <a class="dropdown-item" href="intent:${a}#Intent;package=com.mxtech.videoplayer.ad;S.title=${t};end">MX Player (Free)</a>\n              <a class="dropdown-item" href="intent:${a}#Intent;package=com.mxtech.videoplayer.pro;S.title=${t};end">MX Player (Pro)</a>\n              <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Free)</a>\n              <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Lite)</a>\n              <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${t};end">1DM+ (Plus)</a>\n              </div>\n          </div>\n          ` + copyButton + s + "\n          <br>\n          </div>\n          </div>\n          "}\n      </div>\n    </div>\n  `;
    $("#content").html(g);
    var f = document.createElement("script");
    f.src = "https://vjs.zencdn.net/" + UI.videojs_version + "/video.min.js",
    f.onload = function() {
        videojs("aplayer")
    }
    ,
    document.head.appendChild(f);
    var v = document.createElement("link");
    v.href = "https://vjs.zencdn.net/" + UI.videojs_version + "/video-js.css",
    v.rel = "stylesheet",
    document.head.appendChild(v)
}
function file_pdf(e, t, n, a, i, o) {
    var l = window.location.pathname.split("/");
    UI.allow_file_copy && generateCopyFileBox(i, o);
    for (var r = "", s = "", d = 0; d < l.length; d++) {
        var c = l[d];
        d == l.length - 1 ? s += c + "?a=view" : s += c + "/",
        c.length > 15 && (c = (c = decodeURIComponent(c)).substring(0, 10) + "..."),
        "" == c && (c = "Home"),
        r += '<a href="' + s + '" class="breadcrumb-item">' + c + "</a>"
    }
    var p = `\n    <div class="container text-center"><br>\n      <nav aria-label="breadcrumb">\n        <ol class="breadcrumb">\n          ${r}\n        </ol>\n      </nav>\n    <div class="card">\n    <div class="card-body text-center">\n    <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${e}<br>${n}</div>\n    <div>\n    </div><br>\n    <iframe src="https://docs.google.com/gview?url=${encodeURIComponent(a)}&embedded=true" style="width:100%; height:500px;" frameborder="0"></iframe>\n    </div>\n    <div class="card-body">\n    <div class="input-group mb-4">\n    <input type="text" class="form-control" id="dlurl" value="${a}" readonly>\n    </div>\n    <div class="card-text text-center">\n    <div class="btn-group text-center">\n        <a href="${a}" type="button" class="btn btn-primary">Download</a>\n        <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n            <span class="sr-only"></span>\n        </button>\n        <div class="dropdown-menu">\n            <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Free)</a>\n            <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Lite)</a>\n            <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${t};end">1DM+ (Plus)</a>\n        </div>\n    </div>\n    ` + copyButton + "\n    </div>\n    <br>\n    \n    </div>\n    </div>\n    </div>  \n  ";
    $("#content").html(p)
}
function file_image(e, t, n, a, i, o) {
    var l = window.location.pathname.split("/");
    const r = UI.allow_file_copy ? generateCopyFileBox(i, o) : "";
    for (var s = "", d = "", c = 0; c < l.length; c++) {
        var p = l[c];
        c == l.length - 1 ? d += p + "?a=view" : d += p + "/",
        p.length > 15 && (p = (p = decodeURIComponent(p)).substring(0, 10) + "..."),
        "" == p && (p = "Home"),
        s += '<a href="' + d + '" class="breadcrumb-item">' + p + "</a>"
    }
    var m = `\n    <div class="container text-center"><br>\n      <nav aria-label="breadcrumb">\n        <ol class="breadcrumb">\n          ${s}\n        </ol>\n      </nav>\n      <div class="card">\n        <div class="card-body text-center">\n          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${e}<br>${n}</div>\n          <img src="${a}" id="load_image" width="100%">\n        </div>\n        <div class="card-body">\n          <div class="input-group mb-4">\n            <div class="input-group-prepend">\n              <span class="input-group-text" id="">Full URL</span>\n            </div>\n            <input type="text" class="form-control" id="dlurl" value="${a}" readonly>\n          </div>\n          <div class="card-text text-center">\n            <div class="btn-group text-center">\n              <a href="${a}" type="button" class="btn btn-primary">Download</a>\n              <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                <span class="sr-only"></span>\n              </button>\n              <div class="dropdown-menu">\n                <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Free)</a>\n                <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Lite)</a>\n                <a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${t};end">1DM+ (Plus)</a>\n              </div>\n            </div>\n            ` + copyButton + r + "\n          </div>\n          <br>\n        </div>\n      </div>\n    </div>\n  ";
    $("#content").html(m)
}
function utc2delhi(e) {
    var t = new Date(e)
      , n = new Date(t.getTime() + 198e5)
      , a = n.getFullYear()
      , i = ("0" + (n.getMonth() + 1)).slice(-2);
    return `${("0" + n.getDate()).slice(-2)}-${i}-${a} ${("0" + n.getHours()).slice(-2)}:${("0" + n.getMinutes()).slice(-2)}:${("0" + n.getSeconds()).slice(-2)}`
}
function formatFileSize(e) {
    return e >= 1099511627776 ? e = (e / 1099511627776).toFixed(2) + " TB" : e >= 1073741824 ? e = (e / 1073741824).toFixed(2) + " GB" : e >= 1048576 ? e = (e / 1048576).toFixed(2) + " MB" : e >= 1024 ? e = (e / 1024).toFixed(2) + " KB" : e > 1 ? e += " bytes" : 1 === e ? e += " byte" : e = "",
    e
}
function markdown(e, t) {
    var n = marked.parse(t);
    $(e).show().html(n)
}
function copyFunction() {
    var e = document.getElementById("dlurl");
    e.select(),
    e.setSelectionRange(0, 99999),
    navigator.clipboard.writeText(e.value).then((function() {
        document.getElementById("myTooltip").innerHTML = "Copied"
    }
    )).catch((function(e) {
        console.error("Failed to copy text: ", e)
    }
    ))
}
function outFunc() {
    document.getElementById("myTooltip").innerHTML = "Copy"
}
function updateCheckboxes() {
    const e = document.querySelectorAll('input[type="checkbox"]')
      , t = document.getElementById("select-all-checkboxes");
    e.length > 0 && t && t.addEventListener("click", ( () => {
        e.forEach((e => {
            e.checked = t.checked
        }
        ))
    }
    ))
}
async function getCookie(e) {
    for (var t = e + "=", n = document.cookie.split(";"), a = 0; a < n.length; a++) {
        for (var i = n[a]; " " == i.charAt(0); )
            i = i.substring(1, i.length);
        if (0 == i.indexOf(t))
            return i.substring(t.length, i.length)
    }
    return null
}
async function copyFile(e) {
    try {
        const t = document.getElementById("copystatus");
        t.innerHTML = "<div class='alert alert-danger' role='alert'> Processing... </div>";
        const n = document.getElementById("user_folder_id").value;
        if ("" === n)
            return t.innerHTML = "<div class='alert alert-danger' role='alert'> Empty ID </div>",
            null;
        document.getElementById("spinner").style.display = "block",
        document.cookie = `root_id=${n}; expires=Thu, 18 Dec 2050 12:00:00 UTC`;
        const a = Math.floor(Date.now() / 1e3)
          , i = await fetch("/copy", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `id=${encodeURIComponent(e)}&root_id=${n}&resourcekey=null&time=${a}`
        });
        if (500 === i.status)
            t.innerHTML = "<div class='alert alert-danger' role='alert'> Unable to Copy File, Make Sure you've added system@zindex.eu.org to your Destination Folder </div>";
        else if (401 === i.status)
            t.innerHTML = "<div class='alert alert-danger' role='alert'> Unauthorized </div>";
        else if (i.ok) {
            const e = await i.json();
            if (e && e.name) {
                const t = `https://drive.google.com/file/d/${e.id}/view?usp=share_link`;
                document.getElementById("copyresult").innerHTML = `<div class="col-12 col-md-12"> <input type="text" id="usercopiedfile" class="form-control" placeholder="Enter Your Folder ID to Copy this File" value="${t}" readonly></div> <div class="col-12 col-md-12"> <a href="${t}" target="_blank" style="margin-top: 5px;" class="btn btn-danger btn-block">Open Copied File</a></div>`
            } else
                e && e.error && e.error.message ? t.innerHTML = "<div class='alert alert-danger' role='alert'> " + e.error.message + " </div>" : t.innerHTML = "<div class='alert alert-danger' role='alert'> Unable to Copy File </div>"
        } else
            t.innerHTML = "<div class='alert alert-danger' role='alert'> Unable to Copy File </div>";
        document.getElementById("spinner").style.display = "none"
    } catch (e) {
        document.getElementById("copystatus").innerHTML = "<div class='alert alert-danger' role='alert'> An error occurred " + e + "</div>",
        document.getElementById("spinner").style.display = "none"
    }
}
String.prototype.trim = function(e) {
    return e ? this.replace(new RegExp("^\\" + e + "+|\\" + e + "+$","g"), "") : this.replace(/^\s+|\s+$/g, "")
}
,
window.onpopstate = function() {
    render(window.location.pathname)
}
,
$((function() {
    init(),
    render(window.location.pathname)
}
));
const observer = new MutationObserver(( () => {
    updateCheckboxes()
}
))
  , options = {
    childList: !0,
    subtree: !0
};
observer.observe(document.documentElement, options);
