# Individuell inlämning för UX/UI Fördjupning

React JS, React Routing och Framer Motion.
All design samt svg-er är skapad av mig.

## Home page

Landningssida med en call to action ("flytande" knapp med en kort shine animering) gjord med keyframes och Framer Motion. Här har jag tänkt på staging och var jag vill att användaren ska klicka.
Vid knappklick aktiveras en flerstegsanimering som sedan navigerar användaren till "The Park". Animeringen är stor och ganska överdriven för att skapa lite "drama".

## The Park

Karta över parken och dess upplevelser. Varje nod på kartan har en hover-effekt i form av skalning och karisma (smiley).
När användaren klickar på noden aktiveras en pop up som visar den aktuella upplevelsen. Pop up-en har en backdrop av blur för att användaren inte ska bli förvirrad av andra element.
Varje attraktion har en animering som i stora drag visar "åkturen". Dessa animeringar är gjorda med keyframes där många av animationens 12 grundprinciper finns represemterade (framförallt squash and stretch och timing).

## Accomodation

Tre kort med tillhörande info om parkens boende. Korten har en hover-effekt som ger det aktuella kortet lite större yta av skärmen samt en box-shadow för att "fånga in" användarens blick. 
Kanppen har en yttre box-shadow som ändras till inre vid hover, för att simulera att knappen nu går "inåt" i skärmen. Vid knappklick skalar knappen och blir lite mindre för att tydligt visa användaren att hen klickat på den.

## Meny

Slide in menyn aktiveras genom att klicka på hamburgaren i högra hörnet. Varje path i ikonen har animerats med Framer Motion för att få en så mjuk övergång som möjligt när ikonen går från hamburgare till "stäng meny".
Menyn i sig glider in från toppen av skärmen och sedan faller menyalternativen in (follow through).

