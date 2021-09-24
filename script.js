const baseURL = "https://api.nasa.gov/planetary/apod?";
let key = "api_key=zdqleSpwYXfuTHgIwnQkeiercwumga2t9uVgMNXN";
let param = "&count=1"
let url = baseURL + key + param;
// console.log(url)

const randomButton = document.querySelector("button");
 let image = document.querySelector("img").src;

randomButton.addEventListener("click", getInfo);

//FETCH
function getInfo(){
    fetch(url)      // Use fetch() to make the request to the API  
        .then(function(picInfo){        // creates a promise containing a response object called picInfo
            // console.log(picInfo);
            return picInfo.json(); // Will convert and display result into a json object with picInfo.json() function call
        })
        .then(function(json){   //json object is used in another promise to send info to another function
            displayInfo(json);
            
        })
}

function displayInfo(json){
    console.log(json);

   
        
    //create elements for info
    let picTitle = document.createElement('h3');
    let picDate = document.createElement('h6');
    let picImage = document.createElement('img');
    let picExplanation = document.createElement('p');

    //give elements json data
    
    picTitle.innerText = json[0].title;
    picDate.innerText = json[0].date;
    picExplanation.innerText = json[0].explanation;


    //append elements to divs
    
    randomDate.appendChild(picDate);
    randomTitle.appendChild(picTitle);
    randomDescription.appendChild(picExplanation);
    randomImg.appendChild(picImage);



    // let imgLink = json.url;  // creating a variable to pull the docs objects out of the API arrays
    // pic.src = imgLink;  //set source of html image to variable
    // pic.alt = 'random picture from NASA'
    // let imgLink = json[0].url;
    // pic.src = imgLink;
    
}
  displayInfo()





