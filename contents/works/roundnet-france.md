# Roundnet France

## Contenu à mettre sur Supabase

### (Context = context, Réalisation = work)

#### De joueur à développeur

Roundnet France est de loin mon plus projet de plus grande échelle concernant le développement web. Sortant de [ma formation chez O'Clock](https://oclock.io/) avec des compétences fullstack et une appétence particulière pour React, j'ai choisi de [suivre un cours sur Udemy](https://www.udemy.com/course/nextjs-react-the-complete-guide/) pour apprendre le framework dont tout le monde parle : [Next JS](https://nextjs.org/).

Dans le même temps, je travaille en collaboration avec la nouvellement créée Fédération française de Roundnet, dont l'object est de promouvoir le sport à l'échelle nationale. Joueur passionné et membre de longue date des premières associations, le vieux site Wix lourd et daté s'écroule de toute part.

C'est donc tout naturellement, à la conjonction des nouvelles compétences acquises et d'un besoin réel que je me propose de refaire l'intégralité de leur site, en me basant sur un système win-win : la fédération gagne un site, je gagne de quoi monter en compétence et en expérience avec un contexte quasi-professionnel : un client, des besoins, des solutions techniques à apporter, le tout dans un délai serré pour préparer les premiers championnats du monde, en septembre 2022.

#### Réalisation

Entre **mi-décembre et mi-janvier 2022**, date prévue pour le lancement d'une première version publiable du site, je me suis donc lancé dans l'aventure de la création d'un site web complet et en partie administrable (liste des clubs, liste des membres, permissions utilisateurs, interface d'administration) avec tous les enjeux que cela implique. Me fixant à chaque nouveau projet, peu importe son échelle, d'apprendre et découvrir de nouveaux outils, librairies et frameworks, j'ai pu développer ma curiosité et mes compétences sur un certain nombre de fonctionnalités centrales d'une application web :

- Outre l'environnement React/NextJS, j'ai utilisé [la librairie de composants MUI (v5)](https://mui.com/) qui me semblait idéale pour pouvoir créer, dans un délai aussi court, une interface utilisateur classique et facilement identifiable par les internautes,
- niveau sécurité et authentification, je suis passé par Next-Auth, avec un provider pour me faire la main, Google,
- les données sont stockées dans une base MongoDB Atlas,
- les fichiers ne pouvant pas être stockés en environnement serverless, j'ai utilisé Firebase Storage (dans son SDK v9),
- les appels API côté client utilisent [SWR](https://swr.vercel.app/), dont les outils de cache et de mutabilité des données sont très utiles,
- Joi pour la validation des données,
- Sendgrid pour l'envoi de mails.

Chacune de ces technologies fut aussi importante pour le bon fonctionnement du site qu'essentielles dans ma compréhension du développement web, des documentations, du debugging, de l'utilisation des ressources des communautés. Grâce aux efforts de mes interlocuteurs au sein de la fédération, avec qui nous avons établi un cahier des charges clair et des étapes courtes d'itération agiles, j'ai pu développer mon savoir-faire auprès d'un projet à taille réelle.

Le site [Roundnet France est en ligne depuis mi-janvier, déployé sur Vercel](https://www.roundnetfrance.fr/), respectant les délais initialement proposés. Il possède une interface d'administration complète qui permet aux membres de la fédération d'ajuster certains contenus essentiels du site par eux-même, de manière complètement autonome. Je continue à travailler sur ce projet qui me passionne pour lui apporter le plus de fonctionnalités possibles et en faire la référence non seulement en France, mais également en Europe.
