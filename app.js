var questions = [
    "Can name all 3 Pilgrim ships",
    "Plays football",
    "Has an unusual Thanksgiving tradition",
    "Has a turkey disaster story",
    "Vegetarian",
    "Loves cranberry sauce",
    "Has celebrated Thanksgiving in another country",
    "Can name 5 things grateful for",
    "Makes a mean green bean casserole",
    "Eats mac and cheese on Thanksgiving",
    "Has worked retail on Black Friday",
    "Thanksgiving is favorite holiday",
    "Has seen a turkey in real life",
    "Watched the Macy's T-day parade in person",
    "Willing to share pie recipe",
    "Has attended a Friendsgiving",
    "Loves leftovers",
    "Dines out for Thanksgiving",
    "Can name 5 native American tribes",
    "Watches football",
    "Can gobble like a turkey",
    "Celebrates Canadian Thanksgiving",
    "Hates cranberry sauce",
    "Goes Black Friday shopping"
].sort(_=> Math.random() - 0.5);

document.querySelector("#get-question").onclick = function() {
    document.getElementById('question-display').innerHTML = questions.pop() || "End of Game!";    
  }