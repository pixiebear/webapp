<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <title>Pixiebears.xyz</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">


    <!-- Latest compiled and minified CSS -->
    
     <link href="/css/bootstrap.css" rel="stylesheet">
    <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }
    </style>
    <!-- Latest compiled and minified CSS -->
   <link href="/css/bootstrap-responsive.css" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
                    <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
                                   <link rel="shortcut icon" href="../assets/ico/favicon.png">
                                      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <script src="/public/js/jquery.js"></script>
      <script src="/public/js/typewrite.js"></script>

      <script>
          $(document).ready(function(){
              $('#helloText').typewrite({
                
                  actions: [
                  {speed: 19},
                  {blinkSpeed: 0},
                      {type: 'Hello, welcome pixie bear!'},
                      {blinkingCursor:false},
                  ]
              });

              $('#helloParag').typewrite({
                
                actions: [
                    {delay: 1500},
                    {blinkingCursor:false},
                    {speed: 60},
                    {blinkSpeed: 0},
                    {type: 'Tired of all those collections under the pretext &#39;we are saving the word&#39; &#39;we want to help you with your mental health&#39; and it is quite obvious making as much money as possible is the only agenda. We too want to make as much money as possible by helping you do the same and being downright honest about it. None of the money will be donated anywhere. All the money stays right here, in the community.'},
                    {speed: 8},
                    
                    
                ]
            });
          });
      </script>
  </head>

  <body id="home">

    @include('header')

    <div class="container">
        @yield('content')
        
        <div class="page-header">
          <h1 class="text-center">Frequently Asked Questions</h1>
        </div>
        
        <footer>
          <p>© PIXI BEAERS 2022</p>
        </footer>


    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
   
    <script src="../assets/js/bootstrap-transition.js"></script>
    <script src="../assets/js/bootstrap-alert.js"></script>
    <script src="../assets/js/bootstrap-modal.js"></script>
    <script src="../assets/js/bootstrap-dropdown.js"></script>
    <script src="../assets/js/bootstrap-scrollspy.js"></script>
    <script src="../assets/js/bootstrap-tab.js"></script>
    <script src="../assets/js/bootstrap-tooltip.js"></script>
    <script src="../assets/js/bootstrap-popover.js"></script>
    <script src="../assets/js/bootstrap-button.js"></script>
    <script src="../assets/js/bootstrap-collapse.js"></script>
    <script src="../assets/js/bootstrap-carousel.js"></script>
    <script src="../assets/js/bootstrap-typeahead.js"></script>
    <script src="/public/js/coin.js"></script>

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init();
    </script>
  </body>
</html>

