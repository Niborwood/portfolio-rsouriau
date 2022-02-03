# RATP Trafic

## Contenu à mettre sur Supabase

### (Context = context, Réalisation = work)

#### Un projet pour apprendre

Dans l'esprit d'apprendre avec un petit projet, alors que je commençais à attaquer React lors de ma formation chez O'Clock, quatre choses m'étaient encore assez floues lors de ma première semaine sur cette thématique :

1. le système de gestion d'état via React ;
2. les librairies de composants, dont j'avais entendu parler mais dont je ne comprenais pas exactement la fonction ;
3. les API publiques, dont j'avais vu le pouvoir avec `fetch`, mais seulement en surface ;
4. les chiffres exacts des stations RATP les plus visitées.

S'il a suffi à Dieu de six jours pour créer l'Homme, le ciel et la Terre, il m'en aura fallu un peu plus pour maîtriser ces quatre propositions.

#### Middleware nv. 51

Le code de PokeReact est largement imparfait, voire peu fiable à de nombreux endroits. Pour autant, il m'a semblé être pertinent de le mettre ici tant il m'a permis de comprendre l'essence de Redux, et notamment l'utilisation de ces middlewares. Leur appel n'était pas lié à des API, mais plutôt à des `setTimeout()` permettant de gérer les délais d'éxecution des actions.

Il m'a également permis de comprendre une première logique d'écriture d'architecture de composants, par l'erreur, puisque leur rangement dans ce projet était plus que chaotique, dû à une mauvaise décision initiale : ranger les composants par ordre alphabétique. C'est en tombant qu'on se relève le mieux, non ?
