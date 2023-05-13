const GRID_SECTION = 'gridSection';
const ADD_SECTION = 'addSection';
const DISPLAY_BLOCK = 'display-block';

function onClickAdd() {
    document.getElementById(ADD_SECTION).classList.add(DISPLAY_BLOCK);
    document.getElementById(GRID_SECTION).classList.remove(DISPLAY_BLOCK);
}

function onClickSave() {
    let fname = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    let hobby = document.getElementById('hobby').value;
	if(fname.length == 0 || lname.length == 0 || hobby.length == 0) {
		if(fname.length == 0) {
			document.getElementById('fname-error-msg').innerHTML = "First name field is required.";
		} else {
			document.getElementById('fname-error-msg').innerHTML = "";
		}
		if(lname.length == 0) {
			document.getElementById('lname-error-msg').innerHTML = "Last name field is required.";
		} else {
			document.getElementById('lname-error-msg').innerHTML = "";
		}
		if(hobby.length == 0) {
			document.getElementById('hobby-error-msg').innerHTML = "Hobby field is required.";
		} else {
			document.getElementById('hobby-error-msg').innerHTML = "";
		}
		return false;
	}
    const tbody = document.getElementById('grid').getElementsByTagName('tbody')[0];
    let newRow = tbody.insertRow(tbody.rows.length);
    newRow.innerHTML = '<td>' + fname + '</td><td>' + lname + '</td><td>' + hobby + '</td>';
    onClickCancel();
}
function onClickCancel() {
    document.getElementById(ADD_SECTION).classList.remove(DISPLAY_BLOCK);
    document.getElementById(GRID_SECTION).classList.add(DISPLAY_BLOCK);
	clearFileds();
}

function clearFileds() {
    document.getElementById('hobby').value = '';
}