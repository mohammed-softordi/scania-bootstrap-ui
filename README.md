# scania-bootstrap-ui

Scania Bootstrap UI is a custimized version of the popular CSS Framework developed by Twitter,<a href="http://getbootstrap.com">Bootstrap</a>.
Basically, you can use it when developing web sites and you will then be helped by our pre-styled elements.


## Installation

      bower install scania-bootstrap-ui

# Usage

Copy scania-bootstrap-overrides.css file to bower_components/bootstrap directory under your app root.

Add the following script to your index.html file and you are good to go :<br/>

     <link href="https://static.scania.com/resources/fonts/scania-sans/scania-fonts.css" rel="stylesheet" type="text/css">
     <link rel="stylesheet" href="//static.scania.com/vendors/frameworks/bootstrap/3.3.5/css/bootstrap.css" type="text/css">
     <link rel="stylesheet" type="text/css" href="bower_components/scania-bootstrap-ui/less/scania-bootstrap.less" >


Add the .bootstrap selector to the body tag in your index.html and follow the Scania Bootstrap guidelines and design principles.

    <body class="bootstrap" ng-controller="CoreCtrl as core" ng-attr-data-env="{{core.envname}}">

The complete UI guidelines can be found <a href="https://static.scania.com/cds/cds-site/index.html">here</a>