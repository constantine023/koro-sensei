document.getElementById("getFact").addEventListener("click", () => {
  let number = document.getElementById("number").value;

  fetch("http://numbersapi.com/" + number)
    .then(reponse => reponse.text())
    .then(data => {
        if(document.getElementById("number").value==""){
            document.getElementById("fact").innerHTML = "Emter a number first";

        }else{

            let fact = data;
            //   console.log(data);
            document.getElementById("fact").innerHTML = fact;
        }
        })
    .catch((err) => console.log(err));
});
