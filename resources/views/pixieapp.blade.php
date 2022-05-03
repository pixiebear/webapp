<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <title>Pixiebears.xyz</title>
    <link rel="icon" type="image/x-icon" href="/img/fav.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="@yield('description', 'Pixie Bears collection of 5555 Solana NFTs represents a group of bears who had just woken up from a long hibernation and are ready to gather all the resources and never again worry about getting fat for winter. All the bear necessities you might imagine. Honey, berries, and of course salmon. Fat for life!')">
    <meta name="keywords" content="@yield('keywords', 'NTF,SOLANA, ntf solana, pixie bears ntf, pixiebearssol, pixie bears nft solana')
    <meta name="author" content="">
    <meta property="og:image" content="@yield('ogimage', 'https://pixiebears.xyz/img/Chew.webp')">
    <meta name="twitter:image" content="@yield('twimage','https://pixiebears.xyz/img/Chew.webp')">
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
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/ico/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/ico/apple-touch-icon-72-precomposed.png">
                    <link rel="apple-touch-icon-precomposed" href="/ico/apple-touch-icon-57-precomposed.png">
                                   <link rel="shortcut icon" href="/ico/favicon.png">
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

              $('#helloParag').typewrite({

                actions: [
                    {delay: 4500},
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
        <section id="faq">
             <div class="page-header">
          <h1 class="text-center">Frequently Asked Questions</h1>
        </div>



        <div class="bs-docs-example">
            <div class="accordion" id="accordion2">
              <div class="accordion-group">
                <div class="accordion-heading">
                  <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
                    Where can I hear about the project development?
                  </a>
                </div>
                <div id="collapseOne" class="accordion-body in collapse" style="height: auto;">
                  <div class="accordion-inner">
                    Latest Pixie Bears updates, only on our official links. Provided on this website.
                </div>
                </div>
              </div>


              <div class="accordion-group">
                <div class="accordion-heading">
                  <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo">
                    Where can I buy my Pixie Bear?
                  </a>
                </div>
                <div id="collapseTwo" class="accordion-body collapse" style="height: 0px;">
                  <div class="accordion-inner">
                    Pixies Bears can only be  purchased on Magic Eden using the official link on the website. All other sources are Scams.
                </div>
                </div>
              </div>

              <div class="accordion-group">
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

              <div class="accordion-group">
                <div class="accordion-heading">
                  <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseFour">
                    Dose this project have WHITELIST??
                  </a>
                </div>
                <div id="collapseFour" class="accordion-body collapse">
                  <div class="accordion-inner">
                    You can bet your ass!
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>


        <footer>
          <p>© PIXI BEAERS 2022</p>
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
    <script>
      AOS.init();

      $(window).load(function(){
   setTimeout(
  function()
  {
   $('#overlay').fadeOut();
  }, 2300);

});


/**
 * Old school8-Bit loader
 * Due to CORS issues audio might not play :( SORRY!
 * @author Daphne Smit <hi@daphnesmit.nl>
 *
 * Mouse trace by tholmas
 * @see https://github.com/tholman/cursor-effects
 */
const loading = document.getElementById('audio-loading')
const complete = document.getElementById('audio-complete')

// Start distorted button
initButton()

// Init the audio
function initLoader () {
  const loader = document.querySelector('.c-loader')
  loader.classList.add('is--started')
}

// Init the audio
function initAudio () {

  playSounds();
  setInterval(playSounds, 9000);

  function playSounds() {
    console.log('play')
    loading.currentTime = 0;
    complete.currentTime = 0;
    setTimeout(() => loading.play(), 1)
    setTimeout(() => complete.play(), 7300)
    setTimeout(() => {
      complete.pause()
      loading.pause()
    }, 9000)
  }
}

// Animate button
function initButton() {

  var isSafari = /constructor/i.test(window.HTMLElement);
  var isFF = !!navigator.userAgent.match(/firefox/i);

  if (isSafari) {
    document.getElementsByTagName('html')[0].classList.add('safari');
  }
  const button = document.querySelector('.c-button')
  const turbVal = { val: 0.000001 };
  const turb = document.querySelector('#filter-distorted feTurbulence')
  const buttonTimeline = new TimelineLite({
    paused: true,
    onUpdate: () => turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val), // Firefox bug is value is 0
    onStart: () => button.style.filter = 'url(#filter-distorted)',
    onComplete: () => button.style.filter = 'none'
  });

  buttonTimeline.to(turbVal, 0.4, { val: 0.4 });
  buttonTimeline.to(turbVal, 0.2, { val: 0.000001 });

  button.addEventListener('click', () => {

    // Start loading
    initLoader()
    // Start bloody annoying audio
    initAudio()
    buttonTimeline.restart()
  })
}

// Mouse trail cursor
function ghostCursor(options) {
  let hasWrapperEl = options && options.element;
  let element = hasWrapperEl || document.body;

  let width = window.innerWidth;
  let height = window.innerHeight;
  let cursor = { x: width / 2, y: width / 2 };
  let particles = [];
  let canvas, context;

  let baseImage = new Image();
  baseImage.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F3sVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN3s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==";

  function init() {
    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.style.top = "0px";
    canvas.style.left = "0px";
    canvas.style.pointerEvents = "none";

    if (hasWrapperEl) {
      canvas.style.position = "absolute";
      element.appendChild(canvas);
      canvas.width = element.clientWidth;
      canvas.height = element.clientHeight;
    } else {
      canvas.style.position = "fixed";
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
    }

    bindEvents();
    loop();
  }

  // Bind events that are needed
  function bindEvents() {
    element.addEventListener("mousemove", onMouseMove);
    element.addEventListener("touchmove", onTouchMove);
    element.addEventListener("touchstart", onTouchMove);
    window.addEventListener("resize", onWindowResize);
  }

  function onWindowResize(e) {
    width = window.innerWidth;
    height = window.innerHeight;

    if (hasWrapperEl) {
      canvas.width = element.clientWidth;
      canvas.height = element.clientHeight;
    } else {
      canvas.width = width;
      canvas.height = height;
    }
  }

  function onTouchMove(e) {
    if (e.touches.length > 0) {
      for (let i = 0; i < e.touches.length; i++) {
        addParticle(e.touches[i].clientX, e.touches[i].clientY, baseImage);
      }
    }
  }

  function onMouseMove(e) {
    if (hasWrapperEl) {
      const boundingRect = element.getBoundingClientRect();
      cursor.x = e.clientX - boundingRect.left;
      cursor.y = e.clientY - boundingRect.top;
    } else {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    }

    addParticle(cursor.x, cursor.y, baseImage);
  }

  function addParticle(x, y, image) {
    particles.push(new Particle(x, y, image));
  }

  function updateParticles() {
    context.clearRect(0, 0, width, height);

    // Update
    for (let i = 0; i < particles.length; i++) {
      particles[i].update(context);
    }

    // Remove dead particles
    for (let i = particles.length - 1; i >= 0; i--) {
      if (particles[i].lifeSpan < 0) {
        particles.splice(i, 1);
      }
    }
  }

  function loop() {
    updateParticles();
    requestAnimationFrame(loop);
  }

  /**
   * Particles
   */

  function Particle(x, y, image) {
    const lifeSpan = 40;
    this.initialLifeSpan = lifeSpan; //ms
    this.lifeSpan = lifeSpan; //ms
    this.position = { x: x, y: y };

    this.image = image;

    this.update = function (context) {
      this.lifeSpan--;
      const opacity = Math.max(this.lifeSpan / this.initialLifeSpan, 0);

      context.globalAlpha = opacity;
      context.drawImage(
        this.image,
        this.position.x, // - (this.canv.width / 2) * scale,
        this.position.y //- this.canv.height / 2,
      );
    };
  }

  init();
}
new ghostCursor()


    </script>
  </body>
</html>

