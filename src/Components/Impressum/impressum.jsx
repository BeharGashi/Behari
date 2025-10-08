// Impressum.jsx
import React from "react";
import './impressum.css'
import ImbressumBanner from '../Impressum/impressumbanner'

export default function Impressum() {
  return (
    <>
      <ImbressumBanner />
      <main className="imp-main" aria-labelledby="impressum-title">
        <h1 className="imp-h1" id="impressum-title">Impressum</h1>

        <p className="imp-p">
          Alle in diesem Impressum gemachten Angaben richten sich nach § 5 TMG.
        </p>

        <section className="imp-section" aria-labelledby="herausgeber">
          <h2 className="imp-h2" id="herausgeber">Herausgeber</h2>
          <address className="imp-address">
            <div>WHG Holding LLC</div>
            <div>Pajazit Islami 1, Erolina 5</div>
            <div>12000 Fushe Kosovo</div>
            <div>Kosovo</div>
            <br />
            <div>
              Telefon Zentrale:{" "}
              <a className="imp-a" href="tel:+38348188572">+383 48 188572</a>
            </div>
            <div>
              Telefon Büro:{" "}
              <a className="imp-a" href="tel:+38348288572">+383 48 288572</a>
            </div>
            <div>
              E-mail:{" "}
              <a className="imp-a" href="mailto:office@whg-holding.com">
                office@whg-holding.com
              </a>
            </div>
          </address>
        </section>

        <section className="imp-section" aria-labelledby="vertretung">
          <h2 className="imp-h2" id="vertretung">Vertreten durch</h2>
          <p className="imp-p">Behar Gashi, Geschäftsführender Gesellschafter</p>
        </section>

        <section className="imp-section" aria-labelledby="rechtsform">
          <h2 className="imp-h2" id="rechtsform">Rechtsform</h2>
          <ul className="imp-ul">
            <li className="imp-li">De. Gesellschaft mit beschränkter Haftung (GmbH)</li>
            <li className="imp-li">En. Limited Liability Company (LLC)</li>
            <li className="imp-li">Al. Shoqëri me Përgjegjësi të Kufizuara (ShPK)</li>
          </ul>
        </section>

        <section className="imp-section" aria-labelledby="sitz">
          <h2 className="imp-h2" id="sitz">Sitz der Gesellschaft</h2>
          <p className="imp-p">12000 Fushe Kosovo, Kosovo</p>
        </section>

        <section className="imp-section" aria-labelledby="handelsregister">
          <h2 className="imp-h2" id="handelsregister">Handelsregister</h2>
          <p className="imp-p">WHG Holding LLC (Kosovo), Amtsgericht Prishtina</p>
        </section>

        <section className="imp-section" aria-labelledby="ustid">
          <h2 className="imp-h2" id="ustid">Umsatzsteuer-Identifikationsnummer</h2>
          <p className="imp-p">WHG Holding LLC (Kosovo), NUI: 812092386</p>
        </section>

        <section className="imp-section" aria-labelledby="agb">
          <h2 className="imp-h2" id="agb">Allgemeine Geschäftsbedingungen</h2>
          <p className="imp-p">
            Die WHG Holding LLC verfügt über folgende Allgemeine
            Geschäftsbedingungen (AGB): <strong className="imp-strong">AGB</strong>.
          </p>
        </section>

        <section className="imp-section" aria-labelledby="unternehmensgegenstand">
          <h2 className="imp-h2" id="unternehmensgegenstand">Unternehmensgegenstand</h2>
          <p className="imp-p">
            Handel, Vertrieb, Planung, Montage, Vermittlung und Betrieb von
            Immobilien und Fertighäusern.
          </p>
        </section>

        <section className="imp-section" aria-labelledby="rechtliche-hinweise">
          <h2 className="imp-h2" id="rechtliche-hinweise">Rechtliche Hinweise</h2>

          <h3 className="imp-h3">Hinweise</h3>
          <p className="imp-p">
            Die Informationen dieser Website werden regelmäßig gepflegt und
            aktualisiert. WHG Holding LLC übernimmt ungeachtet sorgfältiger
            Beschaffung und Bereitstellung von Informationen keinerlei Haftung
            für Richtigkeit, Vollständigkeit, Genauigkeit oder Verfügbarkeit der
            angezeigten Inhalte.
          </p>

          <h3 className="imp-h3">Haftung für Inhalte</h3>
          <p className="imp-p">
            Die WHG Holding LLC Solartechnik übernimmt keinerlei Haftung für
            indirekte, mittelbare, zufällige Schäden oder Folgeschäden, die durch
            oder in Folge der Benutzung dieser Website auftreten. Sämtliche über
            die Website veröffentlichten Informationen werden seitens der WHG
            Holding LLC nach bestem Wissen und Gewissen zur Verfügung gestellt.
          </p>
          <p className="imp-p">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder
            nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
            hinweisen.
          </p>
          <p className="imp-p">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
            von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>
          <p className="imp-p">
            Nach eigenem Ermessen und ohne Übernahme einer Haftung kann die WHG
            Holding LLC diese Website jederzeit ohne Ankündigung ganz oder
            teilweise verändern und deren Betrieb einstellen.
          </p>

          <h3 className="imp-h3">Haftung für Links</h3>
          <p className="imp-p">
            Unsere Internetseite enthält Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p className="imp-p">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
            ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
            Bekanntwerden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </p>

          <h3 className="imp-h3">Urheberrecht</h3>
          <p className="imp-p">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem Deutschen Urheberrecht.
          </p>
          <p className="imp-p">
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p className="imp-p">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet.
          </p>
          <p className="imp-p">
            Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
            Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
            werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
            von Rechtsverletzungen werden wir derartige Inhalte umgehend
            entfernen.
          </p>

          <h3 className="imp-h3">Allgemeines Gleichbehandlungsgesetz (AGG)</h3>
          <p className="imp-p">
            Aus Gründen der leichteren Lesbarkeit wird auf eine
            geschlechterspezifische Differenzierung verzichtet. Entsprechende
            Begriffe gelten im Sinne der Gleichbehandlung für beide Geschlechter.
          </p>
        </section>

        <section className="imp-section" aria-labelledby="betreuung">
          <h2 className="imp-h2" id="betreuung">Technische und konzeptionelle Betreuung dieser Website</h2>
          <p className="imp-p">IT Engineers LLC – Pajzit Islami 1, 12000 Fushe Kosovo</p>
        </section>
      </main>
    </>
  );
}