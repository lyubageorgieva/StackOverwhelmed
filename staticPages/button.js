function upvote(){
  var vote = document.getElementById("vote").innerHTML;
  var votePlus = parseInt(vote);
  votePlus++;
  document.querySelector("#vote").textContent = votePlus;
}

function downvote(){
  var vote = document.getElementById("vote").innerHTML;
  var voteMinus = parseInt(vote);
  voteMinus--;
  document.querySelector("#vote").textContent = voteMinus;
}