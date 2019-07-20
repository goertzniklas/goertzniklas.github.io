
  
    <?php include("header.php");?>
 

  <body>
    <div class="stars1"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>
    <div class="stars4"></div>
    <div class="stars5"></div>

    <?php include("nav.php");?>

    <!-- HEADER -->
    <section id="header">
      <div class="space">
        <div id="astronaut" class="astronaut"></div>
      </div>
      
      <div class="container">
        <div class="aboutme">
          <div class=" text-center"><p>Über mich</p></div>
          <h2 class="text-center">Hallo, ich bin Niklas</h2>
          <h2 class="text-center">Lerne mich näher kennen.</h2>
            <p style="text-align: center;">
              Es freut mich, dass du den Weg auf meine Website gefunden hast! 
              
              Mein Name ist Niklas Görtz. 
              Ich bin 26 Jahre alt und wohne aktuell in einem besinnlichen Örtchen Namens Haaren.<br><br>
              
              Ich witme mich gerne verschiedener Projekte. 
              So habe ich diese Seite ins Leben gerufen, um mich näher vorstellen zu können. 
              Ich hoffe, dass du am Ende einen besseren Eindruck von mir, meinem Werdegang, Kenntnissen und Interessen gewinnen konntest.
            </p>
          </div>
        </div>
    </section>

    <!-- CAREER -->
    <section id="career">
      <div class="container">
        <div class="row">

          <div class="col-12">
            <p class="text-center preTitle">TIMELINE</p>
            <h1 class="text-center sectionTitle">WERDEGANG</h1>
            <h2 class="text-center postTitle">Mein Leben in wichtigen Schritten.</h2>
            <div class="mt-5"></div>
          </div>

          <div id="more1">
            <div class="col-md-6">
              <ul class="timeline">
                <li>
                  <p>2019</p>
                  <p>
                    Beginn der Erlernung der Programmiersprache Java.
                  </p>
                </li>
                <li>
                  <p>2016</p>
                  <p>
                    Seit dem Q4 2016 arbeite ich als kaufmännischer Mitarbeiter in der IT-Abteilung von Sportwelt Scherer in Übach-Palenberg. Neben meinen Tätigkeiten konnte ich in dieser Zeit weitere Aufgaben umsetzen:
                    <br><br>
                    - Mitarbeit bei der Umsetzung der neuen Datenschutz-Grundverordnung. Erstellung eines Datenschutzkonzeptes und des Verzeichnisses von Verarbeitungstätigkeiten.
                    - Optimierung der Kassiervorgänge über das plentymarkets POS-Modul.
                    - Optimierung der Versandabwicklung über die Schnittstelle AX4.
                    - Erstellung eines Mitarbeiterbeurteilungs-Systems.
                    <br><br>
                    Weitere Informationen zu meinem aktuellen Job findest du im <a href="#" >Zwischenzeugnis</a>.
                  </p>
                </li>
              </ul>
            </div>

            <div class="col-md-6">
              <ul class="timeline">
                <li>
                  <p>2014</p>
                  <p>
                    Entwicklung einer Tauschbörse, bei der Kunden Artikel hochladen können und diese direkt oder zeitversetzt mit Hilfe einer Tauschwärhung tauschen. Erstellung des Online Marktplatzes mit dem Grid-System Bootstrap. Für die Bearbeitung wurde Gitkraken eingesetzt. Nähere Erlernung von Javascript.
                  </p>
                </li>
                <li>
                  <p>2013</p>
                  <p>
                    Beginn meiner 3-jährigen Ausbildung zum Bürokaufmann bei der Firma Sodermanns Automobile GmbH. Neben allgemeinen Büro- und Verwaltungsaufgaben mit der Führung der monatlichen Umsatzstatistik beauftragt und verantwortlich für die Verwaltung und Optimierung der Onlinepräszenz.
                  </p>
                </li>
                <li>
                  <p>2011</p>
                  <p>
                    Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-12 text-center">
            <div id="dots1"></div>
            <div class="moreBtn1" onclick="more()" id="myBtn1">Zeig mir mehr!</div>
        </div>

      </div>
    </section>

    <!-- JOBS -->
    <section id="jobs">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="text-center preTitle">BERUFSERFAHRUNG</p>
            <h1 class="text-center sectionTitle">BERUFE</h1>
            <h2 class="text-center postTitle">Verteilung meiner Aufgaben.</h2>
            <div class="mt-5"></div>
          </div>
          <div class="col-6 text-center">
            SPORTWELT SCHERER<br>
            2,5 Jahre<br>
            IT-Abteilung
          </div>
          <div class="col-6 text-center">
            SODERMANNS AUTOMOBILE GMBH<br>
            3 Jahre<br>
            Ausbildung
          </div>
          <div class="col-12">
            <div class="diagram"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills">
        <div class="container">
          <div class="row">
  
            <div class="col-12">
              <p class="text-center preTitle">KNOW-HOW</p>
              <h1 class="text-center sectionTitle">SKILLS</h1>
            </div>
  
            <div class="col">
              <div class="skill">
                <p class="skillTag">JAVA</p>
                <img class="skillImg" src="img/logos/java.png"><img>
              </div>
            </div>
            <div class="col">
              <div class="skill">
                <p class="skillTag">JS / ES6</p>
                <img class="skillImg" src="img/logos/js.png"><img>
              </div>
            </div>
            <div class="col">
              <div class="skill">
                <p class="skillTag">HTML</p>
                <img class="skillImg" src="img/logos/html.png"><img>
              </div>
            </div>
            <div class="col">
              <div class="skill">
                <p class="skillTag">CSS</p>
                <img class="skillImg" src="img/logos/css.png"><img>
              </div>
            </div>
            <div class="col">
              <div class="skill">
                <p class="skillTag">PHP</p>
                <img class="skillImg" src="img/logos/php.png"><img>
              </div>
            </div>
            <div class="col">
              <div class="skill">
                <p class="skillTag">TWIG</p>
                <img class="skillImg" src="img/logos/twig.png"><img>
              </div>
            </div>
            <div class="col">
              <div class="skill">
                <p class="skillTag">RUBY</p>
                <img class="skillImg" src="img/logos/ruby.png"><img>
              </div>
            </div>
            <div class="col">
              <div class="skill">
                <p class="skillTag">PYTHON</p>
                <img class="skillImg" src="img/logos/python.png"><img>
              </div>
            </div>
            <div class="col">
              <div class="skill">
                <p class="skillTag">MONGODB</p>
                <img class="skillImg" src="img/logos/mdb.png"><img>
              </div>
            </div>
            <div class="col">
                <div class="skill">
                  <p class="skillTag">TINYDB</p>
                  <img class="skillImg" src="img/logos/tdb.png"><img>
                </div>
              </div>
            <div class="col">
              <div class="skill">
                <p class="skillTag">BOOTSTRAP</p>
                <img class="skillImg" src="img/logos/bs.png"><img>
              </div>
            </div>
            <div class="col">
                <div class="skill">
                  <p class="skillTag">NODEJS</p>
                  <img class="skillImg" src="img/logos/node.png"><img>
                </div>
              </div>
            <div class="col">
              <div class="skill">
                <p class="skillTag">JQUERY</p>
                <img class="skillImg" src="img/logos/jq.png"><img>
              </div>
            </div>
            <div class="col">
              <div class="skill">
                <p class="skillTag">GIT</p>
                <img class="skillImg" src="img/logos/git.png"><img>
              </div>
            </div>
  
            <div class="col-12">
              <p class="preTitle"></p>
              <h2 class="text-center postTitle">Womit ich Erfahrung gesammelt habe.</h2>
              <div class="mt-5"></div>
            </div>
    
            
            <div id="more2">
              <div class="col-md-6">
                <ul class="timeline">
                  <li>
                    <p>2019</p>
                    <p>
                      Beginn der Erlernung der Programmiersprache Java.
                    </p>
                  </li>
                  <li>
                    <p>2016</p>
                    <p>
                      Seit dem Q4 2016 arbeite ich als kaufmännischer Mitarbeiter

                        in der IT-Abteilung von Sportwelt Scherer in Übach-Palenberg. Neben meinen Tätigkeiten konnte ich in dieser Zeit weitere Aufgaben umsetzen:
                        <br><br>
                        - Mitarbeit bei der Umsetzung der neuen Datenschutz-Grundverordnung. Erstellung eines Datenschutzkonzeptes und des Verzeichnisses von Verarbeitungstätigkeiten.
                        - Optimierung der Kassiervorgänge über das plentymarkets POS-Modul.
                        - Optimierung der Versandabwicklung über die Schnittstelle AX4.
                        - Erstellung eines Mitarbeiterbeurteilungs-Systems.
                        <br><br>
                        Weitere Informationen zu meinem aktuellen Job im Zwischenzeugnis.
                      </p>
                  </li>
                </ul>
              </div>
              
    
              <div class="col-md-6">
               
                <ul class="timeline">
                  <li>
                    <p>2014</p>
                    <p>
                        Entwicklung einer Tauschbörse, bei der Kunden Artikel hochladen können und diese direkt oder zeitversetzt mit Hilfe einer Tauschwärhung tauschen. Erstellung des Online Marktplatzes mit dem Grid-System Bootstrap. Für die Bearbeitung wurde Gitkraken eingesetzt. Nähere Erlernung von Javascript.
                      </p>
                  </li>
                  <li>
                    <p>2013</p>
                    <p>
                      Beginn meiner 3-jährigen Ausbildung zum Bürokaufmann bei der Firma Sodermanns Automobile GmbH. Neben allgemeinen Büro- und Verwaltungsaufgaben mit der Führung der monatlichen Umsatzstatistik beauftragt und verantwortlich für die Verwaltung und Optimierung der Onlinepräszenz.
                    </p>
                  </li>
                  <li>
                    <p>2011</p>
                    <p>
                      Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...
                    </p>
                  </li>
                </ul>
              </div>
            </div> 

            <div class="col-12 text-center">
                <div id="dots2"></div>
                <div class="moreBtn2" onclick="more()" id="myBtn2">Zeig mir mehr!</div>
            </div>

          </div>
        </div>
      </section>

      

    <!-- ACTIVITIES -->
    <section id="activities">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="text-center preTitle">FREIZEIT</p>
            <h1 class="text-center sectionTitle">HOBBYS</h1>
            <h2 class="text-center postTitle">So gestalte ich meine Freizeit.</h2>
            <div class="mt-5"></div>


            <div id="more3">
              <ul class="timeline">
                <li>
                  <p class="hobbyHeading">MUSIK | GITARRE</p>
                  <p class="hobbyText">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                  </p>
                </li>
                <li>
                  <p class="hobbyHeading">WEBDESIGN | GRAFIKBEARBEITUNG</p>
                  <p class="hobbyText">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                  </p>
                </li>
                <li>
                  <p class="hobbyHeading">SCHWIMMEN</p>
                  <p class="hobbyText">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                  </p>
                </li>
                <li>
                  <p class="hobbyHeading">LESEN</p>
                  <p class="hobbyText">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                  </p>
                </li>
                <li>
                  <p class="hobbyHeading">EXPLORING</p>
                  <p class="hobbyText">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-12 text-center">
              <div id="dots3"></div>
              <div class="moreBtn3" onclick="more()" id="myBtn3">Zeig mir mehr!</div>
          </div>

        </div>
      </div>
    </section>

    <!-- DOCUMENTS -->
    <section id="documents">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="text-center preTitle">DOKUMENTE</p>
            <h1 class="text-center sectionTitle">UNTERLAGEN</h1>
            <h2 class="text-center postTitle">Ein tieferer Einblick.</h2>
            
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-6">
            <a href="#">
              <div class="docBtn">
                Lebenslauf
              </div>
            </a>
          </div>
          <div class="col-6">
            <a href="#">
              <div class="docBtn">
                Zeugnisse
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="text-center preTitle">KOMMUNIKATION</p>
            <h1 class="text-center sectionTitle">KONTAKT</h1>
            <h2 class="text-center postTitle">Lass uns in Kontakt treten.</h2>
          </div>
        </div>
      </div>
      <div class="container contact-form">
        <div class="row">

          <div class="col-6">
            <p>Betreff:
            <br/><input id="subject" class="contactInp" name="reference" /></p>
          </div>

          <div class="col-6">
            <p>Name:
            <br/><input id="name" class="contactInp"  type="text" name="name" /></p>
          </div>

          <div class="col-6">
            <p>Telefon:
            <br/><input id="phone" class="contactInp"  name="phone" /></p>
          </div>

          <div class="col-12">
            <p>Nachricht:
            <br/><textarea id="message" class="contactInpTexA" name="message" rows="10" cols="50"></textarea></p>
          </div>

          <div class="col-6">
            <p>
              <input id="contactSend" class="contactInp" type="submit" value="Send" />
            </p>
          </div>

          <div class="col-12">
            <input id="contactCheckbox" type="checkbox" name="dpp" value="value1">
            <span>
              Ich habe die <a href="#">Datenschutzerklärung</a> gelesen und akzeptiere diese.
            </span>
          </div>

        </div>
      </div>
    </section>


    <?php include("footer.php");?>


    <script src="js/custom.js"></script>
  </body>
</html>
