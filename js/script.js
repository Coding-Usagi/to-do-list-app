function newItem(){

  //Adding a new item to the list of items
  let li = $('.selectedElement').append('<li>item</li>')
  let inputValue = $('#input').val();
  let text = $('.text').append('inputValue');
  li.append(li);

  if (inputValue === ''){
    alert("You must write something!");
  } else {
    let list = $('.#list');
    list.append(li);

    //Crossing out an item from the list of items
    function crossOut() {
      li.classList.toggle("strike");
    }

    $('li').on("dbclick", function (crossOut){
    });

    //Adding the delete button "X"
    let crossOutButton = $('.selectedElement').append("crossOutButton");
    crossOutButton.append($('.text).append("X");
    li.append(crossOutButton);

    $('crossOutButton').on("click", function (deleteListItem);

    //Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem(){
      li.classList.add("delete")
    }

    $('#list').sortable();
  }
