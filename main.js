const REGEXP_NUMBER = new RegExp("[0-9]");
const REGEXP_MINUSCULE = new RegExp("[a-z]");
const REGEXP_MAJUSCULE = new RegExp("[A-Z]");
const REGEX = /^a-zA-Z0-9\s@/;

const SUBMIT_BTN = document.querySelector("#submit");

function force_mdp(str) {
  let n = 0;
  let l = str.length;
  if (REGEXP_NUMBER.test(str)) {
    n += 10;
  }
  if (REGEXP_MINUSCULE.test(str)) {
    n += 26;
  }
  if (REGEXP_MAJUSCULE.test(str)) {
    n += 26;
  }
  if (str.match(REGEX)) {
    n += 28;
  }
  if (n == 0) {
    return 0;
  }
  return Math.round(l * Math.log2(n));
}

console.log(force_mdp(" "));

SUBMIT_BTN.addEventListener("click", (e) => {
  let force_password = force_mdp(document.querySelector("#password").value);
  if (isNaN(force_password) || force_password == 0) {
    alert(
      "Entrez un mot de passe valide\nUtilisez uniquement des lettres minuscules, majuscules, des chiffres et des caractères spéciaux excepté l'espace et '@'"
    );
  } else if (force_password <= 104) {
    alert(
      `
      Votre mot de passe n'est pas assez fort, réessayez avec un mot de passe plus complexe.\n
      Utillisez des majuscules, minuscules, chiffres et caractères spéciaux pour améliorer sa complexité.`
    );
  } else {
    alert("Votre mot de passe a bien été enregistré");
  }
});
