function saveNote() {
    const noteText = document.getElementById('noteText').value;
    document.cookie = `savedNote=${noteText}`;
    alert('Note saved!');
}
function loadSavedNote() {
    const savedNote = document.cookie.replace(/(?:(?:^|.*;\s*)savedNote\s*=\s*([^;]*).*$)|^.*$/, "$1");
    document.getElementById('noteText').value = savedNote;
    alert('Note loaded successfully!');
}

function changeFont() {
    const fontSelect = document.getElementById('fontSelect');
    const selectedFont = fontSelect.options[fontSelect.selectedIndex].value;
    document.getElementById('noteText').style.fontFamily = selectedFont;
}

function changeColor() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedColor = colorSelect.options[colorSelect.selectedIndex].value;
    document.getElementById('noteText').style.color = selectedColor;
}
function changeSize() {
    const newSize = document.getElementById('sizeSelect').value;
    document.getElementById('noteText').style.fontSize = newSize + 'px';
}
function downloadNote() {
    const noteText = document.getElementById('noteText').value;
    const blob = new Blob([noteText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'note.txt';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
    alert('Note downloaded!');
}
