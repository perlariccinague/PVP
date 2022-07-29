const list = document.querySelector('#auftrag_list');
const formular = document.querySelector('#form-search');

//To hide the auftragList, when the user load the page
list.style.display = 'none';

// prevent form submit
formular.addEventListener('submit', function(event){
    event.preventDefault();
});


document.querySelector('#ctrl_1').addEventListener('input', filterList);
function filterList(){
    const searchInput = document.querySelector('#ctrl_1');
    const input = searchInput.value.toLowerCase();
    let visibleTogglersCount = 0;
    const listItems = document.querySelectorAll('.toggler');

    listItems.forEach((item) => {
        let text = item.textContent;
        if(text.toLowerCase().includes(input.toLowerCase())){
            item.style.display = '';
            visibleTogglersCount++;
           item.classList.add('visible');
        } else {
            item.classList.remove('visible');
            item.style.display = 'none';
        }
    });
    const visibleToggler = document.querySelector('.visible');
    if(visibleTogglersCount === 1 && !visibleToggler.classList.contains('showing')) {
        visibleToggler.click();
        visibleToggler.classList.add('showing');
    } else if(visibleTogglersCount > 1 && visibleToggler.classList.contains('showing')){
        visibleToggler.click();
        visibleToggler.classList.remove('showing');
    }

    if(input === "") {
        list.style.display = 'none';
    } else {
        list.style.display = "";
    }
}



