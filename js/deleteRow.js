
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");

function liToggle() {
    
    for(i=0;i<items.length;i++) {
        
        items[i].addEventListener("click",toggleClass);
    }
}

function buttonDelete() {
	var button = document.querySelectorAll("li button");
	for(i=0;i<button.length;i++) {
		button[i].addEventListener("click",clearElement);
	}
}

function clearElement() {
	for(var i=0;i<items.length;i++) {
          this.parentNode.remove();
	}
}

buttonDelete();