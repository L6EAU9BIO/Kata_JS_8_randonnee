# Les questions de révision

## Dans un fichier notes.md, réponds avec tes mots :

### Qu'est-ce qu'une prop ? D'où vient-elle, et qui décide de sa valeur ?

Un prop est une abréviation de "propriété", elle équivaut à une variable d'un composant. Elle à la articularité d'être en lecture à sens unique, du parent, vers l'enfant. Cette limite peut néamoins être contourné ar l'utilisation d'un call back. 
De ce que j'en comprend celui qui lui attribut une valeur est le composant parent a qui il est attribué.

### Pourquoi React a besoin d'une key sur les éléments d'une liste ?

Les "key" sont présentent au sein des element d'un liste pour assurer la singularité de chaque données, cela evite des doublons lors de listing en imposant un ordre et une identidté à chaque valeur.

### EtiquetteDifficulte est tout petit. Qu'est-ce qu'on gagne à en faire un composant ?

Chaque composant est réutilisable à l'infini, grâce à sa création, il pourra être itilisé à different endroit sans avoir à le recrée. On dit d'ailleurs que c'est la force de React car il est modulable et facile à reprendre par un evntuel autre developpeur à qui un proejt serait transmit. 

### Pourquoi className et pas class ?

"className" est la syntaxe correcte pour l'utilisation des class HTML au sein du JSX

### En une phrase : qu'est-ce qui te revient facilement, et qu'est-ce que tu avais oublié ?

Ce qui revient facielement est probablement les syntaxe basique du HTML qui s'intègre au sein du JSX, l'idée même du React est assez simple avec ses composants réutilisables.
Néamoins ce qui rest encore à approfondir est l'ordre logique des choses, queel composant se relie à tel autre composant, la syntaxe des fonctions, integration du json aus sein du JS, les import et export, la simplification de certaines démarches ainsi que l'utilisation des props.