function theBeatlesPlay(musicians, instruments) {
  beatles = [];
  for (i = 0; i < 4; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts
}

function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array;
}