<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <title>Pixiebears.xyz</title>
    <link rel="icon" type="image/x-icon" href="/img/fav.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="@yield('description', 'Pixie Bears collection of 5555 Solana NFTs represents a group of bears who had just woken up from a long hibernation and are ready to gather all the resources and never again worry about getting fat for winter. All the bear necessities you might imagine. Honey, berries, and of course salmon. Fat for life!')">
    <meta name="keywords" content="@yield('keywords', 'NTF,SOLANA, ntf solana, pixie bears ntf, pixiebearssol, pixie bears nft solana')">
    <meta name="author" content="">
    <meta property="og:image" content="@yield('ogimage', 'https://pixiebears.xyz/img/instagram/2mid.png')">
    <meta name="twitter:image" content="@yield('twimage','https://pixiebears.xyz/img/instagram/2mid.png')">
    <!-- Le styles -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">


    <!-- Latest compiled and minified CSS -->

     <link href="{{ mix('/css/bootstrap.css') }}" rel="stylesheet">

    <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }

      #overlay{
            position: fixed;
            background: black;
            width: 100%;
            z-index: 1035;
            top: 0;
            left:0;
            display: grid;
	 place-items: center;
	 height: 100vh;
	 margin: 0;
	 background-color: black;
      }


 .c-loader {
	 width: 240px;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
}
 .c-loader__title {
	 text-transform: uppercase;
	 color: white;
	 font-size: 12px;
	 text-align: center;
	 position: relative;
	 height: 12px;
	 width: 100%;
}
 .is--started .c-loader__title {
	 animation: loaderTitle 3s ease infinite;
	 animation-iteration-count: 1
}
 .c-loader__state {
	 position: absolute;
	 left: 0;
	 right: 0;
}
 .is--started .c-loader__state--progress {
	 animation: loaderStateProgress 3s step-end infinite;
	 animation-iteration-count: 1
}
 .c-loader__state--complete {
	 opacity: 0;
}
 .is--started .c-loader__state--complete {
	 animation: loaderStateComplete 3s step-end infinite;
	 animation-iteration-count: 1
}
 .c-loader__dots {
	 letter-spacing: -4px;
}
 .c-loader__holder {
	 margin-top: 24px;
	 position: relative;
}
 .c-loader__svg {
	 fill: white;
}
 .c-loader__progress {
	 background: white;
	 height: 12px;
	 display: block;
	 position: absolute;
	 top: 5px;
	 left: 10px;
	 right: 11px;
	 transform: scaleX(0);
	 transform-origin: left center;
}
 .is--started .c-loader__progress {
	 animation: loader 3s ease infinite;
	 animation-iteration-count: 1
}
 .c-loader__progress-helper {
	 position: absolute;
	 background: white;
	 height: 4px;
	 width: 4px;
	 display: block;
}
 .c-loader__progress-helper--left {
	 opacity: 0;
	 left: 7px;
	 top: 9px;
}
 .is--started .c-loader__progress-helper--left {
	 opacity: 1;
}
 .c-loader__progress-helper--right {
	 opacity: 0;
	 right: 7px;
	 top: 9px;
}
 .is--started .c-loader__progress-helper--right {
	 animation: loaderHelperRight 3s step-end infinite;
	 animation-iteration-count: 1
}
 @keyframes loaderTitle {
	 0% {
		 opacity: 1;
	}
	 85% {
		 opacity: 1;
	}
	 86% {
		 opacity: 0;
	}
	 87% {
		 opacity: 1;
	}
	 88% {
		 opacity: 0;
	}
	 89% {
		 opacity: 1;
	}
	 90% {
		 opacity: 0;
	}
	 91% {
		 opacity: 1;
	}
	 92% {
		 opacity: 0;
	}
	 93% {
		 opacity: 1;
	}
	 100% {
		 opacity: 1;
	}
}
 @keyframes loaderStateProgress {
	 0% {
		 opacity: 1;
	}
	 85% {
		 opacity: 0;
	}
	 100% {
		 opacity: 0;
	}
}
 @keyframes loaderStateComplete {
	 0% {
		 opacity: 0;
	}
	 85% {
		 opacity: 1;
	}
	 100% {
		 opacity: 1;
	}
}
 @keyframes loaderHelperRight {
	 0% {
		 opacity: 0;
	}
	 100% {
		 opacity: 1;
	}
}
 @keyframes loader {
	 0% {
		 transform: scaleX(0);
	}
	 20% {
		 transform: scaleX(0.1);
	}
	 25% {
		 transform: scaleX(0.24);
	}
	 43% {
		 transform: scaleX(0.41);
	}
	 56% {
		 transform: scaleX(0.5);
	}
	 66% {
		 transform: scaleX(0.52);
	}
	 71% {
		 transform: scaleX(0.6);
	}
	 75% {
		 transform: scaleX(0.76);
	}
	 80% {
		 transform: scaleX(0.86);
	}
	 90% {
		 transform: scaleX(1);
	}
	 100% {
		 transform: scaleX(1);
	}
}
 .svg-filters {
	 position: absolute;
	 visibility: hidden;
	 width: 1px;
	 height: 1px;
}
 .c-button--distorted {
	 cursor: pointer;
	 -webkit-font-smoothing: antialiased;
	 background-color: #222;
	 border: none;
	 display: inline-block;
	 font-family: 'Montserrat', sans-serif;
	 font-size: 0.85em;
	 font-weight: 700;
	 text-decoration: none;
	 user-select: none;
	 letter-spacing: 0.1em;
	 color: white;
	 padding: 20px 40px;
	 text-transform: uppercase;
	 transition: background-color 0.1s ease-out;
}
 .c-button--distorted:hover {
	 background-color: #2cd892;
	 color: #fff;
}
 .c-button--distorted:focus {
	 outline: none;
	 color: #fff;
}
 .safari .c-button {
	 -webkit-filter: none !important;
	 filter: none !important;
}
 .c-button--distorted {
	 position: absolute;
	 right: 30px;
	 top: 23px;
	 transform: translateZ(0);
	 outline: 90px solid transparent !important;
}

    </style>
    <!-- Latest compiled and minified CSS -->
   <link href="{{ mix('/css/bootstrap-responsive.css') }}" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="/js/html3shiv.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/img/fav.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/img/fav.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/img/fav.png">
                    <link rel="apple-touch-icon-precomposed" href="/img/fav.png">
                                   <link rel="shortcut icon" href="/img/fav.png">
                                      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      <script src="/public/js/jquery.js"></script>
      <script src="/public/js/typewrite.js"></script>


      <script>
          $(document).ready(function(){
              $('#helloText').typewrite({

                  actions: [
                      {delay: 3500},
                  {speed: 19},
                  {blinkSpeed: 0},
                      {type: 'Hello, welcome pixie bear!'},
                      {blinkingCursor:false},
                  ]
              });

          });
      </script>
  </head>

  <body id="home">


    @include('header')

    <div style="background-image: url('/img/BGBlue.png');
    height: 1730px;position: absolute;width: 100%;z-index: 0;" class="rellax" data-rellax-speed="-3"></div>

<div style="background-image: url('/img/BGYellow.png');
height: 1730px;position: absolute;width: 100%;z-index: 0;padding-top:600px;" class="rellax" data-rellax-speed="4"></div>


    <div class="container" style="z-index: 20;position: relative;">


        @yield('content')




        <section id="faq">
             <div class="page-header">
          <h1 class="text-center">Frequently Asked Questions</h1>
        </div>



        <div class="bs-docs-example">
            <div class="accordion" id="accordion2">


                <div class="accordion-group" data-aos="fade-up">
                    <div class="accordion-heading">
                      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseFive">
                        How many mintable NFTs will there be ?
                      </a>
                    </div>
                    <div id="collapseFive" class="accordion-body collapse">
                      <div class="accordion-inner">
                        There are gonna be 5555 mintable NFTs on Solana Blockchain
                    </div>
                    </div>
                  </div>

                  <div class="accordion-group" data-aos="fade-up">
                    <div class="accordion-heading">
                      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseSix">
                        When is the minting date ?
                      </a>
                    </div>
                    <div id="collapseSix" class="accordion-body collapse">
                      <div class="accordion-inner">
                        Minting date is yet to be announced
                      </div>
                    </div>
                  </div>

                  <div class="accordion-group" data-aos="fade-up">
                    <div class="accordion-heading">
                      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseSeven">
                        What is gonna be the minting price?
                      </a>
                    </div>
                    <div id="collapseSeven" class="accordion-body collapse">
                      <div class="accordion-inner">
                        The minting price is gonna be 0.55 SOL per mint for WHITELISTED membears, and 0.7 for PUBLIC sale.
                      </div>
                    </div>
                  </div>


                  <div class="accordion-group" data-aos="fade-up">
                    <div class="accordion-heading">
                      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseFour">
                        How do i get WHITELISTED?
                      </a>
                    </div>
                    <div id="collapseFour" class="accordion-body collapse">
                      <div class="accordion-inner">
                        Stay active, help the community, submit art, make memes and be creative.
                      </div>
                    </div>
                  </div>


              <div class="accordion-group" data-aos="fade-up">
                <div class="accordion-heading">
                  <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
                    Where can I hear about the project development?
                  </a>
                </div>
                <div id="collapseOne" class="accordion-body collapse">
                  <div class="accordion-inner">
                    Latest Pixie Bears updates, only on our official links. Provided on this website.
                  </div>
                </div>
              </div>


              <div class="accordion-group" data-aos="fade-up">
                <div class="accordion-heading">
                  <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree">
                    Will it be some Gated Comunity for Membears?
                  </a>
                </div>
                <div id="collapseThree" class="accordion-body collapse">
                  <div class="accordion-inner">
                    Bears should be free, not gated. But if we speak about secret access for OG Members. Psst...It's coming !
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        <footer class="mt-5">
          <p>© PIXIE BEARS 2022</p>
        </footer>


    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->

    <script src="/js/bootstrap-transition.js"></script>
    <script src="/js/bootstrap-alert.js"></script>
    <script src="/js/bootstrap-modal.js"></script>
    <script src="/js/bootstrap-dropdown.js"></script>
    <script src="/js/bootstrap-scrollspy.js"></script>
    <script src="/js/bootstrap-tab.js"></script>
    <script src="/js/bootstrap-tooltip.js"></script>
    <script src="/js/bootstrap-popover.js"></script>
    <script src="/js/bootstrap-button.js"></script>
    <script src="/js/bootstrap-collapse.js"></script>
    <script src="/js/bootstrap-carousel.js"></script>
    <script src="/js/bootstrap-typeahead.js"></script>


    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>

    <script src="/js/rellax.min.js"></script>
    <script>
      // Accepts any class name
      var rellax = new Rellax('.rellax');
    </script>

    <script>
      AOS.init();

      $(window).load(function(){
   setTimeout(
  function()
  {
   $('#overlay').fadeOut();
  }, 2300);

});

    </script>
  </body>
</html>

