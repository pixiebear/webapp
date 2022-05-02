@extends('pixieapp')
@section('title', 'PIXIE BEARS NFT')
@section('description', 'Pixie Bears collection of 5555 Solana NFTs represents a group  of bears who had just woken up from a long hibernation and are ready to gather all the resources and never again worry about getting fat for winter. All the bear necessities you might imagine. Honey, berries, and of course salmon. Fat for life!')
@section('keywords', 'NFT, SOLANA, PIXIE BEARS, SOL')
@section('robots', '')
@section('content')
  <div id="overlay">
            <div class="c-loader is--started">
                <div class="c-loader__title">
                  <div class="c-loader__state c-loader__state--progress">Now Loading <span class="c-loader__dots">...</span></div>
                  <div class="c-loader__state c-loader__state--complete">Complete</div>
                </div>
                <div class="c-loader__holder">
                  <span class="c-loader__progress"></span>
                  <span class="c-loader__progress-helper c-loader__progress-helper--left"></span>
                  <span class="c-loader__progress-helper c-loader__progress-helper--right"></span>
                  <svg class="c-loader__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237 22">
                    <path d="M235.4 8.5h-1.6V5h-4V1H5.8v4h-3v3.5h-2v6h2V17h3v4h224v-4h4v-2.5h1.6v-6zm-3.6 6.5h-4v4H7.8v-4h-3V7h3V3h220v4h4v8z" id="Layer_7"></path>
                  </svg>
                </div>
            </div>
        </div>



    <div class="bs-docs-example" style="height: 100vh;margin: 10px;">
        <div class="hero-unit hero text-left" >


          <h1 id="helloText" class="text-left"></h1>
          <p id="helloParag" style="padding:0;min-height: 160px; overflow: hidden;margin:0;"></p>


          <p class="text-center" style="position: initial;margin-top: 50px;"><a class="btn btn-primary btn-large" href="#story">Learn more</a></p>
        </div>
    </div>

    <section id="story" style="padding-top: 80px;">
          <h1 class="text-center">Story</h1>
          <p class="mb-5">
            Pixie Bears collection of 5555 Solana NFTs represents a group  of bears who had just woken up from a long hibernation and are ready to gather all the resources and never again worry about getting fat for winter. All the bear necessities you might imagine. Honey, berries, and of course salmon. Fat for life!
          </p>
    </section>

    <section id="roadmap" style="padding-top: 70px;">

        <div class="page-header">
          <h1 class="text-center">ROAD MAP</h1>
        </div>

        <div class="row">
            <div class="col-6 mb-5">
                <p class="page-header" data-aos="fade-right">
                    Phase 1 <br><br>
                    Comunitry Creation
                  </p>
            </div>

            <div class="col-6 mt-5">
                <p class="page-header" data-aos="fade-left">
                    Phase 2 <br><br>
                    Mint of 5,555 Pixie Bears TBA
                  </p>
            </div>

            <div class="col-6 mb-5">
                <p class="page-header" data-aos="fade-right">
                    Phase 3 <br><br>
                    Staking
                  </p>
            </div>

            <div class="col-6 mt-5">
                <p class="page-header" data-aos="fade-left">
                    Phase 4 <br><br>
                    Generation 2
                  </p>
            </div>

            <div class="col-6 mb-5">
                <p class="page-header" data-aos="fade-right">
                    Phase 5 <br><br>
                    Bear Dens
                  </p>
            </div>

            <div class="col-6 mt-5">
                <p class="page-header" data-aos="fade-left">
                    Phase 6 <br><br>
                    Giveway
                  </p>
            </div>

            <div class="col-6 mb-5">
                <p class="page-header" data-aos="fade-right">
                    Phase 7 <br><br>
                    Trading tools & Merch Store
                  </p>
            </div>

            <div class="col-6 mt-5">
                <p class="page-header" data-aos="fade-left">
                    Phase 8 <br><br>
                    Establishing DAO
                  </p>
            </div>

        </div>





  </section>

    <section id="thumbnails">
<div class="row">

    <div class="col-4">
        <div class="thumbnail">
            <img  src="/img/Snap.webp" style="width: 300px; height: 300px;">
        <div class="caption">
            <h3>Whoopty J</h3>
            <p>Papa bear, knows it all in crypto. BTC & SOL MAXI </p>
            <p class="text-center"><a href="https://twitter.com/whooptyJJ" class="btn btn-primary">Twitter</a></p>
        </div>
        </div>
    </div>

    <div class="col-4">

        <div class="thumbnail">
            <img  src="/img/Noah.webp" style="width: 300px; height: 300px;"><div class="caption">
                <h3>Noah</h3>
                <p>Young hustla, he knows to find his way in grind. Old school trader.</p>
                <p class="text-center"><a href="https://twitter.com/dika_marko" class="btn btn-primary">Twitter</a></p>
              </div>
        </div>

      </div>


      <div class="col-4">
        <div class="thumbnail">
            <img  src="/img/Chew.webp" style="width: 300px; height: 300px;">
            <div class="caption">
             <h3>Chewy</h3>
             <p>Chewy is chewing code and desing. He's half Neo half Cicada.</p>
             <p class="text-center"><a href="https://twitter.com/immrdrop" class="btn btn-primary">Twitter</a></p>
           </div>
        </div>

      </div>

      <div class="col-4">
        <div class="thumbnail">

            <img  src="/img/Hurl.webp" style="width: 300px; height: 300px;">

            <div class="caption">
                <h3>Hurl</h3>
                <p>Gurl our Hurl is drowing this amazing art. She's undiscoved dimond talent. </p>

              </div>
        </div>
      </div>

      <div class="col-4">
            <div class="thumbnail">
            <img  src="/img/Trif.webp" style="width: 300px; height: 300px;">
            <div class="caption">
            <h3>Trif</h3>
            <p>You are reading it here, well Trif has writen this. Our firend and famus anononimus writer. </p>

            </div>
        </div>
    </div>

</div>



    </section>

  @endsection


