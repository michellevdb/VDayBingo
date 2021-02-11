var questions = [
    "February birthday",
    "Has watched 'The Notebook' 5+ times",
    "Loves Valentine's Day",
    "In a relationship for 5+ years",
    "Hates Valentine's Day",
    "Has written a love letter",
    "Homemade presents",
    "Has seen 'The Princess Bride' 5+ times",
    "Loves chocolate",
    "Has a secret admirer",
    "Bought expensive jewelry",
    "Watches 'The Bachelor/Bachelorette'",
    "Has spent Valentine's Day in another country",
    "Planning to cook at home",
    "Buys chocolate at 50% off on 2/15",
    "Loves romantic comedies",
    "Was a secret admirer",
    "Has had a blind date on V-Day",
    "Proposed or proposed to on V-Day",
    "Has forgotten about V-Day while in a relationship",
    "Has ruined a Valentine's Day surprise",
    "Worked in a restaurant on V-Day",
    "Started a new relationsihp this year",
    "Loves conversation hearts"
].sort(_=> Math.random() - 0.5);

document.querySelector("#get-question").onclick = function() {
    document.getElementById('question-display').innerHTML = questions.pop() || "End of Game!";    
  }