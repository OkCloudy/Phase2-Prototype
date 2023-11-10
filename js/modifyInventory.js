
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    var ul = document.getElementById("item-list")
    var li = document.createElement("li")
    var txt = document.getElementById("item-input").value
    var detailsBtn = document.createElement("button")
    detailsBtn.setAttribute('class', 'detail-btn')
    detailsBtn.textContent = "details"

    li.appendChild(document.createTextNode(txt))
    li.appendChild(detailsBtn)

    ul.appendChild(li)
    document.getElementById("myForm").style.display = "none";
  }

  function closeFormCancel() {
    document.getElementById("myForm").style.display = "none";
  }