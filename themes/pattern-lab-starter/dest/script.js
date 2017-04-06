'use strict';

(function mainThemeScript($, Drupal) {
  Drupal.behaviors.plStarter = {
    attach: function attach(context) {
      $('html', context).addClass('js');
    }
  };
})(jQuery, Drupal);
'use strict';

(function secondaryThemeScript($, Drupal) {
  Drupal.behaviors.demo2 = {
    attach: function attach(context) {
      $('html', context).addClass('js2');
    }
  };
})(jQuery, Drupal);
"use strict";

(function testScript($, Drupal) {
  Drupal.behaviors.test = {
    attach: function attach(context) {}
  };
})(jQuery, Drupal);
"use strict";

function openTab(evt, tabname) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("box1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";

    console.log(tabname);
}
//# sourceMappingURL=script.js.map
