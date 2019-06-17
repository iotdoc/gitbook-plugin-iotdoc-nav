require(["gitbook", "jQuery"], function(gitbook, $) {

    gitbook.events.bind("start", function(e, config) {
      console.log('start top nav');
    });

    gitbook.events.bind("page.change", function(e) {
      function createHeader() {
        return '<div class="cocos-navbar navbar-collapse" id="navbar" role="navigation"> <ul class="nav navbar-nav"> <li><a href="https://www.horizon.ai/" class="btn" target="_blank"> <img src="../resources/logo.png"  height="30" /></a></li> <li> <a href="#" class="btn autohide"><i class="fa fa-book"></i>开发文档</a> <ul class="hovershow"><li><a href="https://iotdoc.horizon.ai/busiopenapi/" class="btn">Open Api</a></li> <li><a href="#" class="btn">其他文档</a></li></ul> </li><li><a href="https://github.com/iotdoc/busiSDK/tree/master/auth" class="btn autohide"><i class="fa fa-link"></i>鉴权SDK</a></li><li><a href="http://localhost/iotdoc.zip" class="btn autohide"><i class="fa fa-download"></i>下载文档</a></li></ul></div>';
      }
	  
      // Get configuration.
      var $link = $(createHeader());
      $('.book-header').before($link);
    });
});