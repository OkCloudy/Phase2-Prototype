
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    var ul = document.getElementById("item-list")
    var li = document.createElement("li")
    var txt = document.getElementById("item-input").value
    var deleteBtn = document.createElement("button")
    deleteBtn.setAttribute('class', 'delete-btn')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click",clearElement)

    li.appendChild(document.createTextNode(txt))
    li.appendChild(deleteBtn)

    ul.appendChild(li)
    document.getElementById("myForm").style.display = "none";
  }

  function closeFormCancel() {
    document.getElementById("myForm").style.display = "none";
  }


var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");

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