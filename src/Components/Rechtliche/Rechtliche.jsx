import React from 'react';
import './Rechtliche.css';
import RechBanner from './Rechtlichebanner'

const Rechtliche = () => {
  return (
    <>
    <RechBanner/>

    <div className="rechtliche-container">
      <h1 className="rechtliche-header">Rechtliche Hinweise</h1>
      
      <section className="rechtliche-section">
        <h2 className="section-header">Inhalt des Online-Angebots</h2>
        <p>
          Die WHG Holding LLC übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. 
          Haftungsansprüche gegen die WHG Holding LLC, die sich auf Schäden materieller oder ideeller Art beziehen, welche durch die Nutzung oder Nichtnutzung 
          der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, 
          sofern seitens der WHG Holding LLC kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich. 
          Die WHG Holding LLC behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, 
          zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
        </p>
      </section>

      <section className="rechtliche-section">
        <h2 className="section-header">Urheberrecht</h2>
        <p>
          Die WHG Holding LLC ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Bildnisse, Tondokumente, Videosequenzen und Texte 
          zu beachten, von ihr selbst erstellte Grafiken, Bildnisse, Tondokumente, Videosequenzen und Texte zu nutzen, auf lizenzfreie Grafiken, Bildnisse, 
          Tondokumente, Videosequenzen und Texte zurückzugreifen oder Grafiken, Bildnisse, Tondokumente, Videosequenzen und Texte zu nutzen, deren Nutzungsrechte 
          sie erworben hat.
        </p>
        <p>
          Das Copyright für veröffentlichte, von der WHG Holding LLC selbst erstellte Objekte bleibt allein bei der WHG Holding LLC. Eine Vervielfältigung oder 
          Verwendung solcher Grafiken, Bildnisse, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne 
          ausdrückliche Zustimmung der WHG Holding LLC nicht gestattet.
        </p>
      </section>

      <section className="rechtliche-section">
        <h2 className="section-header">Rechtswirksamkeit dieses Haftungsausschlusses</h2>
        <p>
          Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne 
          Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des 
          Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
        </p>
      </section>

      <section className="rechtliche-section">
        <h2 className="section-header">Verweise und Links</h2>
        <p>
          Auf unseren Internet-Seiten finden Sie auch Links zu anderen Seiten im Internet. Wir möchten Sie darauf hinweisen, dass wir keinen Einfluss auf die 
          Gestaltung und den Inhalt der Seiten haben, auf die verlinkt wird. Wir können daher auch keine Gewähr für die Aktualität, Korrektheit, Vollständigkeit 
          oder Qualität der dort bereitgestellten Informationen übernehmen. Vor diesem Hintergrund distanzieren wir uns hiermit von allen Inhalten dieser Seiten. 
          Diese Erklärung gilt für alle auf unseren Internet-Seiten enthaltenen Links zu externen Seiten und deren Inhalte.
        </p>
      </section>

      <section className="rechtliche-section">
        <h2 className="section-header">Informationen zur Online-Streitbeilegung</h2>
        <p>
          Die von der EU bereitgestellte Plattform zur Online-Streitbeilegung (sog. OS-Plattform) stellt eine zentrale Anlaufstelle für Verbraucher und Unternehmer 
          dar, Streitigkeiten im Zusammenhang mit Online-Kaufverträgen und Online-Dienstverträgen zwischen einem in der EU wohnenden Verbraucher und einem in der 
          EU niedergelassenen Unternehmer außergerichtlich beizulegen.
        </p>
      </section>


    </div>
    </>
  );
};

export default Rechtliche;