var addItemId=0;
    function addTocart (item) {
    addItemId += 1;
    var selecteditem = document.createElement ('div');
    selecteditem.classList .add('carting');
    selecteditem.settAttribute(' id', addItemId) ;
    var img = document .createElement ('img');
    img. setAttribute('src', item.children[0].currentsrc);
    var title = document .createElement ('div');
    title.innerText = item.children[1].innerText;
    var label = document .createElement ('div')
    label.innerText = item.children[2].children[0].innerText;
    var select = document.createElement ('span');
    select.innertext = item.children[2].children[1].value;
    label.append(select);
    var delBtn = document .createElement ('button');
    delBtn.innertext = 'Delete';
    delBtn.setAttribute('onclick', 'del ('+addttemrd+')');
    var cartItems = document.getElementById('title');
    selecteditem.append(img);
    selecteditem.append(title);
    selecteditem.append(delBtn);
    cartItems.append(selecteditem);
}
function del(item)
{
document.getElementById(item).remove();
}