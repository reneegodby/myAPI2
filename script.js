const baseURL = "https://api.nasa.gov/planetary/apod?";
let key = "api_key=zdqleSpwYXfuTHgIwnQkeiercwumga2t9uVgMNXN";
let param = "&count=1"
let url = baseURL + key + param;
// console.log(url)

const randomButton = document.querySelector("button");

randomButton.addEventListener("click", (getInfo));


//FETCH
function getInfo(){
    fetch(url)      // Use fetch() to make the request to the API  
        .then(function(picInfo){        // creates a promise containing a response object called picInfo
            // console.log(picInfo);        //fat arrow= .then(picInfo => picInfo.json())
            return picInfo.json(); // Will convert and display result into a json object with picInfo.json() function call
        })
        .then(function(json){   //json object is used in another promise to send info to another function displayInfo(json)
            displayInfo(json);  //fat arrow= .then(json => displayInfo(json))
            randomButton.innerText = "Show me another!";
        })
        .catch(function(err){     //fat arrow = .catch(err => console.log(err))
            console.log(err);
        })
}

function displayInfo(json){     //pass in that fetch data to display function
    console.log(json);

    //clear previous data
    while(randomDate.firstChild){
        randomDate.removeChild(randomDate.firstChild);
    }

    while(randomTitle.firstChild){
        randomTitle.removeChild(randomTitle.firstChild);
    }

    while(randomDescription.firstChild){
        randomDescription.removeChild(randomDescription.firstChild);
    }

    while(randomImg.firstChild){
        randomImg.removeChild(randomImg.firstChild);
    }

           
    //create elements for info
 
    let picTitle = document.createElement('h3');
    let picDate = document.createElement('h4');
    let picImage = document.createElement('img');
    let picExplanation = document.createElement('p');

    //give elements json data
    let newDate = new Date(json[0].date).toDateString();
    picTitle.innerText = `TITLE: ${json[0].title}`;
    picDate.innerText = `DATE IMAGE WAS CAPTURED: ${newDate}`;
    picImage.src = json[0].url;
    picImage.alt = "Astronomy image";
    picExplanation.innerText = `DESCRIPTION: ${json[0].explanation}`;


    //append elements to divs
    randomDate.appendChild(picDate);
    randomTitle.appendChild(picTitle);
    randomDescription.appendChild(picExplanation);
    randomImg.appendChild(picImage);


}






