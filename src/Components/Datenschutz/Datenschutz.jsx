import React from 'react';
import './Datenschutz.css';
import Daten from './Datenschutzbanner'

const Datenschutz = () => {
  return (
    <>
    <Daten />
    <div className="datenschutz-container">
      <h1 className="datenschutz-header">Datenschutzerklärung</h1>
      
      <section className="datenschutz-section">
        <h2 className="section-header">Allgemeiner Hinweis und Pflichtinformationen</h2>
        <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
        <address className="company-address">
          WHG Holding LLC<br />
          Pajazit Islami 1, Erolina 5<br />
          12000 Fushe Kosovo<br />
          Kosovo
        </address>
        <p>Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</p>
      </section>

      <section className="datenschutz-section">
        <h2 className="section-header">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
        <p>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
      </section>

      <section className="datenschutz-section">
        <h2 className="section-header">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h2>
        <p>Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet.</p>
        <p>Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit:</p>
        <a href="https://aip.rks-gov.net/zyrtari-per-mbrojtjen-e-te-dhenave-personale" className="external-link" target="_blank" rel="noopener noreferrer">
          https://aip.rks-gov.net/zyrtari-per-mbrojtjen-e-te-dhenave-personale
        </a>
      </section>

      <section className="datenschutz-section">
        <h2 className="section-header">Recht auf Datenübertragbarkeit</h2>
        <p>Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
      </section>

      <section className="datenschutz-section">
        <h2 className="section-header">Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h2>
        <p>Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.</p>
      </section>

      <section className="datenschutz-section">
        <h2 className="section-header">SSL- bzw. TLS-Verschlüsselung</h2>
        <p>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der <span className="highlight-text">„https://“</span> Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.</p>
      </section>

      <section className="datenschutz-section">
        <h2 className="section-header">Server-Log-Dateien</h2>
        <p>In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
        <ul className="datenschutz-list">
          <li>Besuchte Seite auf unserer Domain</li>
          <li>Datum und Uhrzeit der Serveranfrage</li>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>IP-Adresse (anonymisiert)</li>
        </ul>
        <p>Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>
      </section>

      <section className="datenschutz-section">
        <h2 className="section-header">Kontaktformular</h2>
        <p>Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.</p>
        <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
        <p>Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
      </section>

      <section className="datenschutz-section">
        <h2 className="section-header">Cookies</h2>
        <p>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
        <p>Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.</p>
        <p>Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.</p>
        <p>Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.</p>
      </section>

      <section className="datenschutz-section">
        <h2 className="section-header">Google Analytics</h2>
        <p>Unsere Website verwendet Funktionen des Webanalysedienstes Google Analytics. Anbieter des Webanalysedienstes ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
        <p>Google Analytics verwendet "Cookies." Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert und eine Analyse der Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen über Ihre Benutzung unserer Website werden an einen Server von Google übermittelt und dort gespeichert. Server-Standort ist im Regelfall die USA.</p>
        <p>Das Setzen von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um unser Webangebot und ggf. auch Werbung zu optimieren.</p>
        
        <h3 className="subsection-header">IP-Anonymisierung</h3>
        <p>Wir setzen Google Analytics in Verbindung mit der Funktion IP-Anonymisierung ein. Sie gewährleistet, dass Google Ihre IP-Adresse innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA kürzt. Es kann Ausnahmefälle geben, in denen Google die volle IP-Adresse an einen Server in den USA überträgt und dort kürzt. In unserem Auftrag wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über Websiteaktivitäten zu erstellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber uns zu erbringen. Es findet keine Zusammenführung der von Google Analytics übermittelten IP-Adresse mit anderen Daten von Google statt.</p>
        
        <h3 className="subsection-header">Browser-Plugin</h3>
        <p>Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige Funktionen unserer Website könnten dadurch jedoch eingeschränkt werden. Ebenso können Sie die Erfassung von Daten bezüglich Ihrer Website-Nutzung einschließlich Ihrer IP-Adresse mitsamt anschließender Verarbeitung durch Google unterbinden. Dies ist möglich, indem Sie das über folgenden Link erreichbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="external-link" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>.</p>
        
        <h3 className="subsection-header">Widerspruch gegen die Datenerfassung</h3>
        <p>Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen unserer Website verhindert: <span className="highlight-text">Google Analytics deaktivieren</span>.</p>
        <p>Einzelheiten zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <a href="https://support.google.com/analytics/answer/6004245?hl=de" className="external-link" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p>
        
        <h3 className="subsection-header">Auftragsverarbeitung</h3>
        <p>Zur vollständigen Erfüllung der gesetzlichen Datenschutzvorgaben haben wir mit Google einen Vertrag über die Auftragsverarbeitung abgeschlossen.</p>
        
        <h3 className="subsection-header">Demografische Merkmale bei Google Analytics</h3>
        <p>Unsere Website verwendet die Funktion "demografische Merkmale" von Google Analytics. Mit ihr lassen sich Berichte erstellen, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Eine Zuordnung der Daten zu einer bestimmten Person ist nicht möglich. Sie können diese Funktion jederzeit deaktivieren. Dies ist über die Anzeigeneinstellungen in Ihrem Google-Konto möglich oder indem Sie die Erfassung Ihrer Daten durch Google Analytics, wie im Punkt "Widerspruch gegen die Datenerfassung" erläutert, generell untersagen.</p>
      </section>

      <section className="datenschutz-section">
        <h2 className="section-header">Google AdWords und Google Conversion-Tracking</h2>
        <p>Unsere Website verwendet Google AdWords. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States.</p>
        <p>AdWords ist ein Online-Werbeprogramm. Im Rahmen des Online-Werbeprogramms arbeiten wir mit Conversion-Tracking. Nach einem Klick auf eine von Google geschaltete Anzeige wird ein Cookie für das Conversion-Tracking gesetzt. Cookies sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Google AdWords Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung der Nutzer. Am Cookie können Google und wir erkennen, dass Sie auf eine Anzeige geklickt haben und zu unserer Website weitergeleitet wurden.</p>
        <p>Jeder Google AdWords-Kunde erhält ein anderes Cookie. Die Cookies sind nicht über Websites von AdWords-Kunden nachverfolgbar. Mit Conversion-Cookies werden Conversion-Statistiken für AdWords-Kunden, die Conversion-Tracking einsetzen, erstellt. Adwords-Kunden erfahren wie viele Nutzer auf ihre Anzeige geklickt haben und auf Seiten mit Conversion-Tracking-Tag weitergeleitet wurden. AdWords-Kunden erhalten jedoch keine Informationen, die eine persönliche Identifikation der Nutzer ermöglichen. Wenn Sie nicht am Tracking teilnehmen möchten, können Sie einer Nutzung widersprechen. Hier ist das Conversion-Cookie in den Nutzereinstellungen des Browsers zu deaktivieren. So findet auch keine Aufnahme in die Conversion-Tracking Statistiken statt.</p>
        <p>Die Speicherung von "Conversion-Cookies" erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir als Websitebetreiber haben ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um unser Webangebot und unsere Werbung zu optimieren.</p>
        <p>Einzelheiten zu Google AdWords und Google Conversion-Tracking finden Sie in den Datenschutzbestimmungen von Google: <a href="https://www.google.de/policies/privacy/" className="external-link" target="_blank" rel="noopener noreferrer">https://www.google.de/policies/privacy/</a>.</p>
        <p>Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.</p>
      </section>
    </div>
    </>
  );
};

export default Datenschutz;