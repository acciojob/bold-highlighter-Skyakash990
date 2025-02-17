function highlight() {
	
     let strongElements = document.querySelectorAll('strong');
	strongElements.forEach(element => {
        element.style.color = "rgb(0, 128, 0)";
    });
}


function return_normal() {
    //Write your code here
	 let strongEl= document.querySelectorAll('strong');

    strongEl.forEach(element => {
        element.style.color = "rgb(0, 0, 0)";
    
}
