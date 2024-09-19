// array called characters
let characters = [];
let currentIndex = 0;

document.getElementById('add-btn').addEventListener('click', () => {
    const name = document.getElementById('character-name').value;
    const score = document.getElementById('initiative-score').value;

    if(name && score) {
        addCharacterToList(name, parseInt(score));
        document.getElementById('character-name').value = '';
        document.getElementById('initiative-score').value = '';
        } else {
            alert('Please fill in both fields');
        }
});

document.getElementById('next-btn').addEventListener('click', () => {
    nextCharacter();
});

function nextCharacter() {
    //increase currenteIndex with 1
    currentIndex++;
    //currentIndex modulus length of character list
    currentIndex = currentIndex % characters.length;
    //display character at current index
    renderCharacters();
}

// function that takes name and score, pushes them to the array as a tuple
function addCharacterToList(name, score) {
    characters.push({name, score});
    sortCharacters();
    renderCharacters();
    }

function sortCharacters() {
    characters.sort((a, b) => b.score - a.score);
}

function renderCharacters() {
    const characterList = document.getElementById('initiative-list');
    characterList.innerHTML = '';
    characters.forEach((character, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${character.name} - ${character.score} <button onclick="removeCharacter('${character.name}')">Remove</button>`;
        if (index === currentIndex){
            li.classList.add('highlight');
        }else{
            li.classList.remove('highlight');
        }
        
        characterList.appendChild(li);
        });
        }

/* function addCharacterToList(name, score) {
    const list = document.getElementById('initiative-list');
    const item = document.createElement('li');
    item.innerHTML = `${name} - ${score} <button onclick="removeCharacter(this)">Remove</button>`;
    list.appendChild(item);
    
}
 */
function removeCharacter(name) {
    characters = characters.filter(character => character.name !== name); // Remove by name
    renderCharacters(); // Re-render the list after removal
}








