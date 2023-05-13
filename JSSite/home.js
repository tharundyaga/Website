let selectedSection = 'section1';
const DISPLAY_BLOCK = 'display-block';


function onClickSecbtn(id) {
    if (selectedSection === id) {
        return;
    }
    document.getElementById(id).classList.add('display-block');
    document.getElementById(selectedSection).classList.remove('display-block');
    selectedSection = id;
}