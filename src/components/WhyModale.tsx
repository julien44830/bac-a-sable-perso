"use client";

export default function WhyModale() {
    return (
        <div className="space-y-4 leading-relaxed text-white/90">
            <p>
                Ce site a pour objectif de centraliser, documenter et expérimenter des composants et
                effets visuels en React, principalement orientés animation, interaction et rendu
                graphique.
            </p>

            <p>
                Il sert à la fois de laboratoire technique et de base de référence, permettant de
                tester rapidement un effet, comprendre son intégration, identifier ses dépendances
                et visualiser son rendu en situation réelle.
            </p>

            <p>
                Chaque composant est présenté avec une démonstration interactive, son code
                d’utilisation, ses éventuelles dépendances npm et, lorsque nécessaire, les styles
                CSS associés.
            </p>

            <p>
                L’objectif est de faciliter la réutilisation, la comparaison et l’évolution de ces
                effets dans différents projets, tout en conservant une structure claire, maintenable
                et extensible.
            </p>
        </div>
    );
}
