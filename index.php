<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Stemwijzer</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <script src="http://stemwijzer.dvc-icta.nl/data.js"></script>
    <script src="script.js" charset="utf-8"></script>
  </head>
  <body>
  <div id="start" class="">
    <div class="w3-container w3-padding-64 container">
      <div class="holder">
        <img class="logo" src="img/logo.svg" alt="">
        <p class="black bold">Stemwijzer Tweede Kamer 2017</p>
        <p class="blue bold">Test uw politieke voorkeur aan de hand van 30 stellingen</p>
        <div class="inner">
          <div class="left">
            <div class="flex">
              <img class="icon" src="img/icon-xsable.svg" alt="">
              <p class="icon_text">Bekijk de toegankelijke versie voor mensen met een visuele beperking</p>
            </div>
            <div class="flex">
              <img class="icon" src="img/icon-lock.svg" alt="">
              <p class="icon_text">De StemWijzer maakt geen gebruik van cookies. Klik hier voor de volledige privacy statement</p>
            </div>
          </div>
          <div class="right">
            <button href="" class="w3-round start-btn white bold" onclick="start()">Start</button>
          </div>
        </div>
      </div>
    </div>
    <div class="w3-container container mt0 dotted_top">
      <div class="holder">
        <p class="bold">Of blik terug met de StemmenTracker</p>
        <p>Wat hebben de partijen in het verleden waargemaakt van hun verkiezingsbeloften? 'Track' uw stem met de Stemmentracker, een website die terugblikt op 30 Tweede Kamerstemmingen van de afgelopen regeerperiode. Met welke partij stemde u mee?</p>
      </div>
    </div>
    <div class="w3-container container partijen mt0">
      <div class="holder">
        <img src="img/1vandaag.svg" class="een_vandaag"alt="">
        <p class="white bold">Deze partijen doen mee</p>
      </div>
      <div class="holder">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/vvd.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/pvda.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/pvv.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/sp.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/cda.svg" alt="">

        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/d66.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/christenunie.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/groenlinks.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/sgp.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/pvdd.svg" alt="">

        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/50plus.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/ondernemerspartij.png" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/vnl.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/denk.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/nieuwewegen.png" alt="">

        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/forumvoordemocratie.png" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/burgerbeweging%20(2).png" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/vrijzinnigepartij.png" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/piratenpartij.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/artikel1.png" alt="">

        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/nietstemmers.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/libertarischepartij.svg" alt="">
        <img class="partij"src="https://tweedekamer2017.stemwijzer.nl/logos/lokaalindekamer.svg" alt="">
      </div>
      <div class="holder">
        <p class="white bold">Deze partijen doen niet mee</p>
      </div>
      <div class="holder">
        <img class="partij" src="https://tweedekamer2017.stemwijzer.nl/public/gfx/parties/geenpeil.png" alt="">
        <img class="partij" src="https://tweedekamer2017.stemwijzer.nl/public/gfx/parties/jezusleeft.png" alt="">
        <img class="partij" src="https://tweedekamer2017.stemwijzer.nl/public/gfx/parties/stemnl.png" alt="">
        <img class="partij" src="https://tweedekamer2017.stemwijzer.nl/public/gfx/parties/mensspirit.png" alt="">
        <img class="partij" src="https://tweedekamer2017.stemwijzer.nl/public/gfx/parties/vdp.png" alt="">
      </div>
    </div>
  </div>
  <div class="question_holder container w3-container w3-padding" id="question_holder">
    <div class="holder">
      <h1 class="blue bold"><span id="question_title"></span> </h1>
      <br>
      <h2 class="black"><span id="question_statement">Dit is een vraag</span> </h2>
    </div>
    <div class="spacer"></div>
    <div class="holder">
      <button class="w3-round white bold question_button" type="button" name="button" onclick="next()">Eens</button>
      <button class="w3-round white bold question_button" type="button" name="button" onclick="next()">Geen van beide</button>
      <button class="w3-round white bold question_button" type="button" name="button" onclick="next()">Oneens</button>
      <div class="skip" onclick="next()">
        <p class="skip_text black" type="button" name="button">Sla deze vraag over</p>
        <img class="skip_arrow" src="img/arrow.svg" alt="">
      </div>
    </div>
  </div>
  <div class="question_holder container w3-container w3-padding" id="qh_alt">
    <div class="holder">
      <h1 class="blue bold"> Zijn er extra onderwerpen die u extra belangrijk vind?</h1>
      <p class="black bold">Aangevinkte stellingen tellen extra mee bij het berekenen van het resulaat.</p>
      <button class="w3-round white bold question_button"type="button" name="button" style="float:right; margin-bottom: 20px;">Ga verder</button>
    </div>
    <div class="holder" id="checkboxes_holder">

    </div>
  </div>
    <footer>
      <img class="footer_logo" src="img/logo-footer.png" alt="">
    </footer>
  </body>
</html>
