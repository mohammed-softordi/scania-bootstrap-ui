$.fn.onReady = function(func) {
  var elm = this.jquery ? this[0] : this;

  if (document.addEventListener) {
      elm.addEventListener('DOMContentLoaded', func, false);
  } else if (window.addEventListener) {
      elm.addEventListener('load', func, false );
  } else if (document.attachEvent) {
      elm.attachEvent("onreadystatechange", func);
  } else {
      elm.attachEvent("onload", func);
  }
};

// This function adds a script element with chosen src, to the page head section
var importScript = function(src, id) {
    var head = document.getElementsByTagName("head")[0],
        script = document.createElement("script");

    script.setAttribute("src", src);
    if(id) {
    	script.setAttribute("id", id);
    }
    head.appendChild(script);
}

// Adding bootstrap framework
importScript("https://static.scania.com/vendors/frameworks/bootstrap/3.2.0/js/bootstrap.min.js", "bootstrap");

// Adding our bootstrap addons that are not a standalone component
importScript("https://static.scania.com/development/global/js/bootstrap/scania-bootstrap-addons.js");

// Triggers bootstrapReady when bootstrap framework has been loaded
$("#bootstrap").on("load", function() {
	$(document).trigger("bootstrapReady");
});