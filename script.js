// Mad Lib Webiste

// Button one

// event listener
document.getElementById("btn1").addEventListener("click", buildMadLib);

// event function
function buildMadLib() {
  // Input
  let pluralNoun = document.getElementById("input1").value;
  let adjective = document.getElementById("input2").value;
  let verb = document.getElementById("input3").value;
  let noun = document.getElementById("input4").value;
  let pluralNoun2 = document.getElementById("input5").value;
  let location = document.getElementById("input6").value;

  // Process
  let result =
    `"There are too many ` +
    pluralNoun +
    " on this " +
    adjective +
    ` airplane!", I screamed. "Sombody has to ` +
    verb +
    " on the " +
    noun +
    ` to solve this problem! If we don't do anyting the ` +
    pluralNoun2 +
    ` will make us crash into ` +
    location +
    `"`;

  // Output
  document.getElementById("result").innerHTML = result;
}

// Button two

// event listener
document.getElementById("btn2").addEventListener("click", buildMadLib2);

// event function
function buildMadLib2() {
  // Input
  let pluralNoun = document.getElementById("input1").value;
  let adjective = document.getElementById("input2").value;
  let verb = document.getElementById("input3").value;
  let noun = document.getElementById("input4").value;
  let pluralNoun2 = document.getElementById("input5").value;
  let location = document.getElementById("input6").value;

  // Process
  let result =
    `M.E LaZerte Highschool has lots of ` +
    pluralNoun +
    ` and they are all very ` +
    adjective +
    `. When I am at school I ` +
    verb +
    ` at the ` +
    noun +
    ` and the ` +
    pluralNoun2 +
    `. After school I like to go to ` +
    location +
    `.`;

  // Output
  document.getElementById("result").innerHTML = result;
}
