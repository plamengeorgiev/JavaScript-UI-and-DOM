var tags = ["cms", "javascript", "js", "ASP.NET MVC", ".net", ".net", ".net", ".net", ".net", ".net", ".net", "css", "wordpress", "xaml", "js", "http", "web", "asp.net", "asp.net MVC", "ASP.NET MVC", "wp", "javascript", "js", "cms", "html", "javascript", "http", "http", "CMS"];
var tagCloud = generateTagCloud(tags, 12, 50);

function generateTagCloud(tags, minSize, maxSize) {

    var tagObjects = countTagOccurance(tags);

    var powers = calculatePowers(tagObjects, minSize, maxSize);

    for (var i = 0; i < tagObjects.length; i++) {
        tagObjects[i].fontSize = powers[tagObjects[i].count - 1];
    }

    // Generate tags and append them to DocumentFragment
    var fragment = document.createDocumentFragment();
    var tagTemplate = document.createElement('a');
    tagTemplate.className = 'tag';
    tagTemplate.href = '#';
    var whiteSpaceTemplate = document.createElement('span');
    whiteSpaceTemplate.innerHTML = ', ';

    for (var j = 0; j < tagObjects.length; j++) {
        tagTemplate.innerHTML = tagObjects[j].name;
        tagTemplate.style.fontSize = tagObjects[j].fontSize + 'px';
        fragment.appendChild(tagTemplate.cloneNode(true));
        fragment.appendChild(whiteSpaceTemplate.cloneNode(true));
    }

    var container = document.getElementById('tagCloud');
    container.appendChild(fragment);

}

function countTagOccurance(tags) {
    var tagsDictionary = [];
    var tagIsInArray = false;
    for (var i = 0; i < tags.length; i++) {
        var currentTag = tags[i];
        for (var j = 0; j < tagsDictionary.length; j++) {
            if (tagsDictionary[j].name === currentTag) {
                tagsDictionary[j].count++;
                tagIsInArray = true;
            }
        }
        if (!tagIsInArray) {
            tagsDictionary.push({ name: currentTag, count: 1, fontSize: 'unknown' });
        }
        tagIsInArray = false;
    }

    return tagsDictionary;
}

function calculatePowers(tagsDictionary, minSize, maxSize) {
    var powers = [];
    var maxOccurance = (function () {
        var max = 1;
        for (var i = 0; i < tagsDictionary.length; i++) {
            if (tagsDictionary[i].count > max) {
                max = tagsDictionary[i].count;
            }
        }
        return max;
    }());

    powers.push(minSize);
    var shift = (maxSize - minSize) / (maxOccurance - 2);
    for (var i = 1; i < maxOccurance - 1; i++) {
        powers[i] = Math.floor(powers[i - 1] + shift);
    }
    powers.push(maxSize);

    return powers;
}