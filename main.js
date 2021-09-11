function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/58q4viZs6/model.json', YAYProject);
}

function YAYProject(){
  classifier.classify(gotResults);
}


function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    lol_red = Math.floor(Math.random() * 255) + 1;
    bluee = Math.floor(Math.random() * 255) + 1;
    funny_green = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = "Acurracy of voice - "+ (results[0].confidence * 100).toFixed(2); + "%";
    document.getElementById("result_label").style.color = 'rgb(' + lol_red + ',' +  funny_green +',' +  bluee+ ')'; 
         document.getElementById("result_count").style.color = 'rgb(' + lol_red + ',' +  funny_green +',' +  bluee + ')';  
    var doggo = document.getElementById('animal');
    var cat = document.getElementById('animal');
    var listen= document.getElementById('animal');
 
    if (results[0].label == "Dog") {
      doggo.src = "cute-kitty-best-kitty.gif";
      doggo = doggo+1;
    } else if (results[0].label == "Meow") {
      cat.src = "funny-animals-dog.gif";
      cat = cat + 1;
    } else{
      listen.src = 'listen.gif';
    }
     }
 }

