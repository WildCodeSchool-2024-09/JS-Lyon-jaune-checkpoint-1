/*
Voici un exemple de tableau de personnes. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renverra un nouveau tableau,
lui-même contenant deux sous-tableaux :
- Le premier contient uniquement des devs web seniors
- Le second ne contient que des data analysts seniors
(Étant donné qu'une personne est senior si elle a 5 ans d'expérience ou plus)

const persons = [
  { name: 'Mary', experience: 2, job: 'web dev' },
  { name: 'Tony', experience: 6, job: 'data analyst' },
  { name: 'John', experience: 2, job: 'data analyst' },
  { name: 'Jane', experience: 6, job: 'web dev' },
  { name: 'Maggie', experience: 2, job: 'web dev' },
  { name: 'Leonardo', experience: 2, job: 'data analyst' },
  { name: 'Carla', experience: 4, job: 'data analyst' },
  { name: 'Mickael', experience: 7, job: 'web dev' },
  { name: 'Penelope', experience: 7, job: 'web dev' },
  { name: 'Homer', experience: 5, job: 'data analyst' },
  { name: 'Leonardo', experience: 2, job: 'data analyst' },
  { name: 'Carla', experience: 4, job: 'web dev' },
  { name: 'Lisa', experience: 3, job: 'web dev' },
  { name: 'Millie', experience: 5, job: 'data analyst' },
  { name: 'Penelope', experience: 7, job: 'web dev' },
];

*/

// Voici un exemple de tableau de personnes. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renverra un nouveau tableau,
// lui-même contenant deux sous-tableaux :
// - Le premier contient uniquement des devs web seniors
// - Le second ne contient que des data analysts seniors
// (Étant donné qu'une personne est senior si elle a 5 ans d'expérience ou plus)

function findSeniors(persons) {
  // initialisation des données dont on va avoir besoin
  const result = [];

  const devWebSenior = [];
  const dataAnalystSenior = [];

  // coeur de l'algo / traitement de l'algo
  persons.forEach((person) => {
    if (person.job === "web dev" && person.experience >= 5) {
      devWebSenior.push(person);
    } else if (person.job === "data analyst" && person.experience >= 5) {
      dataAnalystSenior.push(person);
    }
  });

  // result.push(devWebSenior);
  // result.push(dataAnalystSenior);

  // renvoie vers l'exterieur du resultat attendu
  // return result;

  return [devWebSenior, dataAnalystSenior];
}

module.exports = findSeniors;
