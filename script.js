// 1. Define the Ingredients
const bases = [
    { id: 'acid', name: 'Acid', img: 'assets/acid.png' },
    { id: 'booze', name: 'Booze', img: 'assets/booze.png' },
    { id: 'juice', name: 'Fruit Juice', img: 'assets/juice.png' },
    { id: 'invisibility', name: 'Invisibility', img: 'assets/invisiblility.png' },
    { id: 'water', name: 'Water (Duplication)', img: 'assets/water.png' },
    { id: 'polymorph', name: 'Polymorph (Random)', img: 'assets/polymorph.png' }
];

const secondaries = [
    { id: 'confusion', name: 'Confusion', img: 'assets/confusion.png' },
    { id: 'sickness', name: 'Sickness', img: 'assets/sickness.png' },
    { id: 'blindness', name: 'Blindness', img: 'assets/blindness.png' },
    { id: 'speed', name: 'Speed', img: 'assets/speed.png' },
    { id: 'restoremagic', name: 'Restore Magic', img: 'assets/restoremagic.png' },
    { id: 'cureailment', name: 'Cure Ailment', img: 'assets/cureailment.png' }
];

const finalResults = [
    { id: 'firestorm', name: 'Firestorm', img: 'assets/firestorm.png' },
    { id: 'icestorm', name: 'Icestorm', img: 'assets/icestorm.png' },
    { id: 'lightning', name: 'Thunderstorm', img: 'assets/lightning.png' },
    { id: 'strength', name: 'Strength', img: 'assets/strength.png' },
    { id: 'paralyze', name: 'Paralysis', img: 'assets/paralyze.png' },
    { id: 'levitation', name: 'Levitation', img: 'assets/levitation.png' },
    { id: 'healing', name: 'Healing', img: 'assets/healing.png' },
    { id: 'extrahealing', name: 'Extra Healing', img: 'assets/extrahealing.png' }
];

// 2. Define the Results Matrix
// This maps [Base ID] + [Secondary ID] -> Result Name & Icon
const recipes = {
    'acid': {
        'confusion': { name: 'Firestorm', img: 'assets/firestorm.png' },
        'sickness': { name: 'Thunderstorm', img: 'assets/lightning.png' },
        'blindness': { name: 'Icestorm', img: 'assets/icestorm.png' },
        'speed': { name: 'Strength', img: 'assets/strength.png' },
        'restoremagic': { name: 'Levitation', img: 'assets/levitation.png' },
        'cureailment': { name: 'Healing', img: 'assets/healing.png' }
    },
    'booze': {
        'confusion': { name: 'Thunderstorm', img: 'assets/lightning.png' },
        'sickness': { name: 'Icestorm', img: 'assets/icestorm.png' },
        'blindness': { name: 'Firestorm', img: 'assets/firestorm.png' },
        'speed': { name: 'Paralysis', img: 'assets/paralyze.png' },
        'restoremagic': { name: 'Strength', img: 'assets/strength.png' },
        'cureailment': { name: 'Extra Healing', img: 'assets/extrahealing.png' }
    },
    'juice': {
        'confusion': { name: 'Icestorm', img: 'assets/icestorm.png' },
        'sickness': { name: 'Firestorm', img: 'assets/firestorm.png' },
        'blindness': { name: 'Thunderstorm', img: 'assets/lightning.png' },
        'speed': { name: 'Levitation', img: 'assets/levitation.png' },
        'restoremagic': { name: 'Paralysis', img: 'assets/paralyze.png' },
        'cureailment': { name: 'Strength', img: 'assets/strength.png' }
    },
    'invisibility': {
        'confusion': { name: 'Paralysis', img: 'assets/paralyze.png' },
        'sickness': { name: 'Healing', img: 'assets/healing.png' },
        'blindness': { name: 'Extra Healing', img: 'assets/extrahealing.png' },
        'speed': { name: 'Icestorm', img: 'assets/icestorm.png' },
        'restoremagic': { name: 'Firestorm', img: 'assets/firestorm.png' },
        'cureailment': { name: 'Thunderstorm', img: 'assets/lightning.png' }
    },
    'water': {
        'confusion': { name: 'Confusion', img: 'assets/confusion.png' },
        'sickness': { name: 'Sickness', img: 'assets/sickness.png' },
        'blindness': { name: 'Blindness', img: 'assets/blindness.png' },
        'speed': { name: 'Speed', img: 'assets/speed.png' },
        'restoremagic': { name: 'Restore Magic', img: 'assets/restoremagic.png' },
        'cureailment': { name: 'Cure Ailment', img: 'assets/cureailment.png' }
    },
    'polymorph': {
        'confusion': { name: 'Random', img: 'assets/polymorph.png' },
        'sickness': { name: 'Random', img: 'assets/polymorph.png' },
        'blindness': { name: 'Random', img: 'assets/polymorph.png' },
        'speed': { name: 'Random', img: 'assets/polymorph.png' },
        'restoremagic': { name: 'Random', img: 'assets/polymorph.png' },
        'cureailment': { name: 'Random', img: 'assets/polymorph.png' }
    }
};

// State
let selectedBase = null;
let selectedSecondary = null;

// DOM Elements
const baseGrid = document.getElementById('base-grid');
const secGrid = document.getElementById('secondary-grid');
const resultIcon = document.getElementById('result-icon');
const resultName = document.getElementById('result-name');

// 3. Initialize Grids
function init() {
    // Render Base Buttons
    bases.forEach(b => {
        const btn = createButton(b, 'base');
        baseGrid.appendChild(btn);
    });

    // Render Secondary Buttons
    secondaries.forEach(s => {
        const btn = createButton(s, 'sec');
        secGrid.appendChild(btn);
    });
}

function createButton(item, type) {
    const div = document.createElement('div');
    div.className = 'icon-btn';
    div.dataset.id = item.id;
    div.dataset.type = type;
    
    // Create image element
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;
    // Add fallback if image fails (shows text instead)
    img.onerror = () => { img.style.display='none'; div.innerText = item.name.substring(0,2); };
    
    div.appendChild(img);

    div.addEventListener('click', () => handleSelection(item, type, div));
    return div;
}

function handleSelection(item, type, element) {
    // Clear previous selection highlight in the same group
    const parent = type === 'base' ? baseGrid : secGrid;
    Array.from(parent.children).forEach(c => c.classList.remove('active'));
    
    // Set new selection
    element.classList.add('active');

    if (type === 'base') {
        selectedBase = item;
        document.getElementById('selected-base-name').innerText = item.name;
    } else {
        selectedSecondary = item;
        document.getElementById('selected-secondary-name').innerText = item.name;
    }

    calculateResult();
}

function calculateResult() {
    if (!selectedBase || !selectedSecondary) return;

    // Check logic matrix
    const baseId = selectedBase.id;
    const secId = selectedSecondary.id;
    
    // Safety check if combination exists
    if (recipes[baseId] && recipes[baseId][secId]) {
        const result = recipes[baseId][secId];
        updateResultUI(result.name, result.img);
    } else {
        updateResultUI('Unknown', '');
    }
}

function updateResultUI(name, imgSrc) {
    resultName.innerText = name;
    if(imgSrc) {
        resultIcon.innerHTML = `<img src="${imgSrc}" alt="${name}">`;
    } else {
        resultIcon.innerHTML = '?';
    }
    
    // Simple animation effect
    resultIcon.style.transform = "scale(1.2)";
    setTimeout(() => resultIcon.style.transform = "scale(1)", 200);
}

// Run
init();