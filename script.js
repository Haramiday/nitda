async function fetchText() {
    let response = await fetch('https://nitdanewapi.herokuapp.com/');
    let data = await response.json();
    console.log('Hello')
    console.log(data);
    for (var i=0;i < data.length;i++){
        document.getElementById("wrapper").innerHTML += 
              "<img src="+data[i].imageurl+">";
        document.getElementById("wrapper").innerHTML += 
              "<p>"+data[i].name+"</p>";
        document.getElementById("wrapper").innerHTML += 
              "<p>"+data[i].phonenumber+"</p>";
        document.getElementById("wrapper").innerHTML += 
              "<p>"+data[i].emailaddress+"</p>";
        document.getElementById("wrapper").innerHTML += 
              "<p>"+data[i].address+"</p>";
    }
}

fetchText();