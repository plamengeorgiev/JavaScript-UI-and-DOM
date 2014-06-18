function extractInnerDivsQuerySelector() {
    var divs = document.querySelectorAll('div div');
    var innerDivs = divs
    console.log(divs);
}

function extractInnerDivsGetElements() {
    var divs = document.getElementsByTagName('div');
    var innerDivs = [];
    var tempCollection = [];
    for (var i = 0; i < divs.length; i++) {
        tempCollection = divs[i].getElementsByTagName('div');
        if (tempCollection!=null) {
            for (var j = 0; j < tempCollection.length; j++) {
                innerDivs.push(tempCollection[j]);
            }
        }
    }
    console.log(innerDivs);
}

function extractTextFromInput() {
    var textInputs = document.querySelectorAll('input[text]');
    var texts = []
    for (var i = 0; i < textInputs.length; i++) {
        texts.push(textInputs[i].value);
    }
    console.log(texts);
}

function changeBackgroundColor() {
    var colorInput = document.getElementById('bg-color');
    var color = colorInput.value;
    document.body.bgColor = color;
}