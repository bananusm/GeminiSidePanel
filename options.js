document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.getElementById('status');
    var counter = 0;

    document.addEventListener('click', function() {
        counter++;
        statusElement.textContent = 'Clicked ' + counter + ' times';
        //chrome.runtime.sendMessage({ action: 'aaa', data: 'bbb' });
    });

});