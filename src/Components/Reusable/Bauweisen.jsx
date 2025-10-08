import React from "react";
import PropTypes from "prop-types";
import "./bauweisen.css";

import Bauw1 from "./builder-installing-corrugated-iron-sheet-used-as-f-2025-01-16-22-37-45-utc-1024x1024.webp";
import Nauw2 from "./simple-living-room-interior-2025-02-10-12-07-17-utc-1024x1024.webp";

/* Fallback items (përdor "image" – jo image1/image2) */
const defaultItems = [
    {
        image: Bauw1,
        alt: "Holzrahmenbau / Rohbau",
        title: "Rohbau",
        description:
            "Ein Rohbau-Haus bildet das stabile Fundament für Ihr zukünftiges Zuhause. Von den tragenden Außenwänden bis zur Dachkonstruktion schaffen wir eine robuste und langlebige Basis, die nach höchsten Bau- und Energiestandards errichtet wird. Diese Bauweise gibt Ihnen die volle Gestaltungsfreiheit, da Sie den gesamten Innenausbau nach Ihren persönlichen Vorstellungen planen und umsetzen können. Ob Sie sich für eine moderne, minimalistische Architektur oder eine traditionelle Bauweise entscheiden – mit einem Rohbau haben Sie die Möglichkeit, jedes Detail individuell anzupassen. Sie können Materialien, Raumaufteilung und technische Installationen frei wählen, sodass Ihr Zuhause genau Ihren Bedürfnissen entspricht.",
    },
    {
        image: Nauw2,
        alt: "Schlüsselfertiges Haus",
        title: "Schlüsselfertig",
        description:
            "Mit unserer schlüsselfertigen Bauweise erhalten Sie ein perfekt vorbereitetes Zuhause, in dem Sie nur noch die Tür öffnen und einziehen müssen. Sämtliche Arbeiten am Haus sind im Vorfeld abgeschlossen – von der Planung über den Rohbau bis hin zu den letzten Innenausbau-Details. Unsere erfahrenen Fachkräfte kümmern sich um jeden Schritt des Bauprozesses mit höchster Präzision, sodass Sie sich entspannt auf Ihr neues Zuhause freuen können. Genießen Sie den Komfort und die Sicherheit eines Rundum-Sorglos-Pakets und überlassen Sie uns die Arbeit. Entdecken Sie mit Natural Haus die Leichtigkeit des schlüsselfertigen Bauens – ein sorgenfreier Weg zum Eigenheim, ganz nach Ihren Wünschen!",
    },
];

/**
 * Komponent i ripërdorshëm për seksionin "Unsere Bauweisen".
 * Props:
 *  - heading: titulli i seksionit
 *  - items: [{ image, alt, title, description }]
 */
export default function Bauweisen({
    heading = "Unsere Bauweisen",
    items: itemsProp,
}) {
    // përdor props nëse vijnë, ndryshe fallback lokal
    const data =
        Array.isArray(itemsProp) && itemsProp.length ? itemsProp : defaultItems;

    return (
        <section className="nwh-bauweisen" aria-labelledby="bauweisen-title">
            <div className="nwh-bauweisen-container">
                <h2 id="bauweisen-title" className="nwh-bauweisen-heading">
                    {heading}
                </h2>

                <div className="nwh-bauweisen-grid" role="list">
                    {data.map((item, idx) => {
                        const { image, alt, title, description } = item;

                        return (
                            <article
                                className="nwh-bauweisen-card"
                                role="listitem"
                                key={`${title}-${idx}`}
                                tabIndex={0}
                            >
                                {image && (
                                    <img
                                        src={image}
                                        alt={alt || title}
                                        className="nwh-bauweisen-image"
                                        loading="lazy"
                                        decoding="async"
                                        sizes="(min-width: 900px) 33vw, 100vw"
                                    />
                                )}

                                <div className="nwh-bauweisen-content">
                                    <h3 className="nwh-bauweisen-title">{title}</h3>
                                    <p className="nwh-bauweisen-description">{description}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

Bauweisen.propTypes = {
    heading: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            alt: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ),
};
