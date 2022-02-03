# PokeReact

## Contenu à mettre sur Supabase

### (Context = context, Réalisation = work)

#### Gotta try/catch them all

Il n'y a rien de tel que d'apprendre en s'amusant, et il n'y a rien de tel que Pokémon pour s'amuser. PokeReact fut un tout petit projet réalisé sur un week-end, durant ma formation chez O'Clock. A ce moment, j'étais confronté à un problème très simple : Redux était très compliqué.

Alors, plutôt que de relire encore et encore des exemples de code de profs qui marche, j'ai décidé de me lancer dans du code qui potentiellement bugue, et de le tester moi-même.

#### Middleware nv. 51

Le code de PokeReact est largement imparfait, voire peu fiable à de nombreux endroits. Pour autant, il m'a semblé être pertinent de le mettre ici tant il m'a permis de comprendre l'essence de Redux, et notamment l'utilisation de ces middlewares. Leur appel n'était pas lié à des API, mais plutôt à des `setTimeout()` permettant de gérer les délais d'éxecution des actions.

Il m'a également permis de comprendre une première logique d'écriture d'architecture de composants, par l'erreur, puisque leur rangement dans ce projet était plus que chaotique, dû à une mauvaise décision initiale : ranger les composants par ordre alphabétique. C'est en tombant qu'on se relève le mieux, non ?
