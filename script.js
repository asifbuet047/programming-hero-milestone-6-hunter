function getInputFieldValueById(id) {
    return document.getElementById(id).value;
}
function setInputFieldEmptyById(id) {
    document.getElementById(id).value = '';
}

function getContentTextById(id) {
    return document.getElementById(id).innerText;
}

function setContentTextById(id, contentText) {
    return document.getElementById(id).innerText = contentText;
}

function checkAndReturnIfNumber(valueString) {
    var valueFloat = parseFloat(valueString);
    if (valueFloat >= 0) {
        return valueFloat;
    } else {
        return false;
    }
}

function getContentAsNumberById(id) {
    return checkAndReturnIfNumber(getContentTextById(id));

}


function replaceContentTextWithId(id, text) {
    window.document.getElementById(id).innerText = text;
}

function enableElement(elementObject) {
    elementObject.disabled = false;

}

function disableElement(elementObject) {
    elementObject.disabled = true;

}

function addChildInContainer(parentObject, childContent) {
    var newChild = document.createElement('h1');
    newChild.innerText = childContent;
    parentObject.append(newChild);
}

function removeChildrenInContainer(parentObject) {
    while (parentObject.firstChild) {
        parentObject.removeChild(parentObject.firstChild);
    }
}

function makeCard(data) {
    const mobileContainer = document.getElementById('mobileSection');
    const container = document.createElement('div');
    container.classList = 'card w-96 bg-base-100 shadow-xl';
    container.innerHTML = `<img src="${data.image}" alt="Moblies" />
    <div class="card-body">
        <h2 class="card-title">${data.phone_name}</h2>
        <p>${data.brand}</p>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>`;
    mobileContainer.append(container);
}



const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', async () => {
    const raw = await window.fetch(`https://openapi.programming-hero.com/api/phones?search=${getInputFieldValueById('searchField')}`);
    const data = await raw.json();
    if (data.status === true) {
        const list = data['data'];
        list.forEach((v, i, a) => makeCard(v))
    } else {

    }

});

