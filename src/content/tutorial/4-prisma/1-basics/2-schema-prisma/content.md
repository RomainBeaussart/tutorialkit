---
type: lesson
title: Schema Prisma
editor: false
terminal: false
previews: false
---

### Définition des Modèles de Données

#### **Objectifs de l'Étape :**
- Comprendre comment définir des modèles de données avec Prisma en utilisant le fichier `schema.prisma`.
- Apprendre à utiliser différents types de champs et leurs attributs pour modéliser vos données.
- Explorer la gestion des relations entre les modèles et comment les représenter dans Prisma.

---

#### **1. Qu'est-ce qu'un Modèle de Données dans Prisma ?**

Un modèle de données dans Prisma représente une table dans votre base de données. Chaque modèle est défini dans le fichier `schema.prisma`, et les colonnes de la table sont définies sous forme de champs dans le modèle. Prisma vous permet de décrire précisément la structure des données que vous voulez gérer, en offrant un support complet pour les types de données, les relations entre les tables, et les contraintes de validation.

**Exemple de modèle de base :**
```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  posts Post[]
}
```

**Explication :**
- **`model User`** : Déclare un modèle nommé `User`, qui correspondra à une table `User` dans la base de données.
- **Champs** : Chaque ligne dans le modèle représente une colonne dans la table :
  - **`id`** : Champ entier (`Int`) qui sert de clé primaire avec un auto-incrément.
  - **`name`** : Champ de type chaîne de caractères (`String`).
  - **`email`** : Champ de type chaîne avec une contrainte d'unicité (`@unique`).
  - **`posts`** : Relation avec un autre modèle `Post`, définissant un lien entre utilisateurs et articles.

---

#### **2. Types de Champs dans Prisma**

Prisma supporte une variété de types de champs qui vous permettent de modéliser vos données avec précision.

##### **a) Types Scalaires**
Les types scalaires sont des types de données de base que vous pouvez utiliser dans vos modèles. Voici quelques exemples courants :

- **`Int`** : Un nombre entier.
- **`Float`** : Un nombre à virgule flottante.
- **`String`** : Une chaîne de caractères.
- **`Boolean`** : Un booléen (`true` ou `false`).
- **`DateTime`** : Une date et une heure.
- **`Json`** : Un champ JSON pour stocker des objets ou des tableaux.
- **`Bytes`** : Un champ pour stocker des données binaires.

##### **b) Attributs des Champs**
Prisma permet d'ajouter des attributs aux champs pour spécifier des comportements supplémentaires, comme les clés primaires, les valeurs par défaut, ou les contraintes d'unicité.

- **`@id`** : Marque le champ comme clé primaire.
- **`@default`** : Définit une valeur par défaut pour le champ.
- **`@unique`** : Implique que les valeurs dans ce champ doivent être uniques dans la table.
- **`@updatedAt`** : Met à jour automatiquement la valeur de ce champ à chaque mise à jour de l'enregistrement (généralement utilisé avec `DateTime`).

**Exemple :**
```prisma
model Product {
  id        Int      @id @default(autoincrement())
  name      String   @unique
  price     Float
  createdAt DateTime @default(now())
}
```
*Ici, `id` est une clé primaire avec auto-incrément, `name` est unique, et `createdAt` est automatiquement défini à la date et l'heure actuelles lors de la création.*

---

#### **3. Relations entre les Modèles**

Les relations entre les modèles Prisma permettent de définir des associations entre les tables, telles que les relations un-à-un, un-à-plusieurs, et plusieurs-à-plusieurs. Prisma simplifie la gestion de ces relations tout en assurant l'intégrité des données.

##### **a) Relation Un-à-Plusieurs (1:n)**
Une relation un-à-plusieurs signifie qu'un enregistrement d'une table peut être lié à plusieurs enregistrements d'une autre table.

**Exemple :**
```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
  posts Post[]
}

model Post {
  id       Int    @id @default(autoincrement())
  title    String
  content  String?
  author   User   @relation(fields: [authorId], references: [id])
  authorId Int
}
```

**Explication :**
- **`User`** : Un utilisateur peut avoir plusieurs articles (`posts`).
- **`Post`** : Chaque article a un auteur (`author`), qui est un utilisateur, et une clé étrangère `authorId` qui fait référence à l'ID de l'utilisateur.

##### **b) Relation Un-à-Un (1:1)**
Une relation un-à-un lie un enregistrement d'une table à un seul enregistrement d'une autre table.

**Exemple :**
```prisma
model User {
  id     Int      @id @default(autoincrement())
  name   String
  email  String   @unique
  profile Profile?
}

model Profile {
  id     Int    @id @default(autoincrement())
  bio    String
  user   User   @relation(fields: [userId], references: [id])
  userId Int    @unique
}
```

**Explication :**
- **`User`** : Un utilisateur a un profil (`profile`).
- **`Profile`** : Chaque profil est associé à un utilisateur unique (`userId` est unique).

##### **c) Relation Plusieurs-à-Plusieurs (n:n)**
Une relation plusieurs-à-plusieurs permet à plusieurs enregistrements d'une table d'être associés à plusieurs enregistrements d'une autre table.

**Exemple :**
```prisma
model Post {
  id      Int      @id @default(autoincrement())
  title   String
  content String?
  tags    Tag[]    @relation(references: [id])
}

model Tag {
  id    Int    @id @default(autoincrement())
  name  String @unique
  posts Post[] @relation(references: [id])
}
```

**Explication :**
- **`Post`** : Un article peut avoir plusieurs étiquettes (`tags`).
- **`Tag`** : Une étiquette peut être associée à plusieurs articles (`posts`).

*Prisma gère automatiquement les tables pivot pour ce type de relation.*

---

#### **4. Gestion des Relations dans Prisma**

Prisma facilite la gestion des relations entre les modèles grâce à des opérations intégrées qui permettent d'ajouter, de mettre à jour, et de supprimer des relations de manière sécurisée.

**Création avec relations :**
```typescript
const newUser = await prisma.user.create({
  data: {
    name: 'Bob',
    email: 'bob@example.com',
    posts: {
      create: [{ title: 'Premier Post' }, { title: 'Deuxième Post' }]
    }
  }
});
```
*Cela crée un utilisateur avec deux articles associés.*

**Mise à jour des relations :**
```typescript
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: {
    posts: {
      connect: { id: 2 },
      disconnect: { id: 3 }
    }
  }
});
```
*Ici, l'utilisateur avec l'ID 1 a un nouvel article connecté (`id: 2`) et un autre article déconnecté (`id: 3`).*

---

#### **5. Conclusion**

La définition des modèles de données avec Prisma est une étape cruciale pour structurer efficacement votre base de données. En utilisant les types de champs, les attributs, et les relations, vous pouvez modéliser des données complexes tout en bénéficiant d'une gestion simplifiée grâce à Prisma.

**Points à retenir :**
- **Modélisation flexible** : Prisma vous permet de définir des modèles simples ou complexes, en incluant toutes les relations nécessaires.
- **Type-safety** : Les types de données et les relations sont bien définis, ce qui réduit les erreurs et améliore la maintenabilité.
- **Facilité de gestion des relations** : Prisma simplifie les opérations de création, de mise à jour et de suppression pour les relations entre les modèles.