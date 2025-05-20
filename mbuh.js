// Data resep contoh
const recipes = [
    {
        id: 1,
        title: "Nasi Goreng Spesial",
        image: "Gambar/nasigoreng.jpg",
        ingredients: [
            "Nasi putih",
            "Telur",
            "Bawang merah",
            "Bawang putih",
            "Kecap manis",
            "Garam",
            "Minyak goreng",
            "Ayam suwir"
        ],
        steps: [
            "Panaskan minyak dalam wajan",
            "Tumis bawang merah dan bawang putih hingga harum",
            "Masukkan telur, orak-arik",
            "Tambahkan nasi putih, aduk rata",
            "Bumbui dengan kecap manis dan garam",
            "Masukkan ayam suwir, aduk hingga matang",
            "Sajikan hangat"
        ]
    },
    {
    id: 6,
    title: "Rawon",
    image: "Gambar/rawon.webp",
    ingredients: [
        "Daging sapi sandung lamur",
        "Keluak (buah kepayang)",
        "Daun salam",
        "Serai",
        "Bumbu halus (bawang merah, bawang putih, kunyit, kemiri, ketumbar)",
        "Kecap manis",
        "Tauge pendek",
        "Bawang goreng"
    ],
    steps: [
        "Rebus daging hingga empuk",
        "Haluskan keluak dan campur dengan bumbu halus",
        "Tumis bumbu hingga harum",
        "Masukkan daging rebus beserta air kaldu",
        "Tambahkan kecap dan bumbui",
        "Sajikan dengan tauge, bawang goreng, dan sambal"
    ]
},

{
    id: 7,
    title: "Pempek Palembang",
    image: "Gambar/download.png",
    ingredients: [
        "Ikan giling (belida/tenghiri)",
        "Tepung sagu",
        "Air es",
        "Telur",
        "Bahan cuko (gula merah, cabe rawit, asam jawa, bawang putih)"
    ],
    steps: [
        "Campur ikan dan tepung sagu dengan air es",
        "Bentuk adonan menjadi kapal selam/lenjer",
        "Rebus dalam air mendidih hingga mengapung",
        "Goreng hingga kecokelatan",
        "Sajikan dengan cuko panas"
    ]
},

{
    id: 8,
    title: "Gudeg Jogja",
    image: "Gambar/Gudeg.jpeg",
    ingredients: [
        "Nangka muda",
        "Santan kental",
        "Daun jati",
        "Gula merah",
        "Bawang merah",
        "Bawang putih",
        "Lengkuas",
        "Telur rebus",
        "Areh (santan kental yang dimasak hingga berminyak)"
    ],
    steps: [
        "Rebus nangka muda dengan daun jati hingga lunak",
        "Tumis bumbu halus dan rempah",
        "Masukkan nangka dan santan",
        "Masak selama 6-8 jam dengan api kecil",
        "Sajikan dengan areh, telur rebus, dan sambal goreng krecek"
    ]
},

{
    id: 9,
    title: "Sop Buntut",
    image: "Gambar/Sop Buntut.jpg",
    ingredients: [
        "Buntut sapi",
        "Wortel",
        "Kentang",
        "Kayu manis",
        "Cengkeh",
        "Bawang putih",
        "Jahe",
        "Pala",
        "Emping melinjo"
    ],
    steps: [
        "Presto buntut sapi hingga empuk",
        "Tumis bumbu halus dengan rempah",
        "Masukkan kaldu dan buntut",
        "Tambahkan sayuran",
        "Masak hingga matang",
        "Sajikan dengan emping dan acar"
    ]
},

{
    id: 10,
    title: "Bubur Tinutuan",
    image: "Gambar/Bubur.png",
    ingredients: [
        "Beras",
        "Labu kuning",
        "Bayam",
        "Kangkung",
        "Jagung",
        "Daun kemangi",
        "Ikan asin jambal roti",
        "Sambal dabu-dabu"
    ],
    steps: [
        "Masak beras menjadi bubur",
        "Masukkan labu dan jagung",
        "Tambahkan sayuran hijau",
        "Aduk hingga tercampur rata",
        "Sajikan dengan ikan asin dan sambal dabu-dabu"
    ]
},

{
    id: 12,
    title: "Mie Ayam",
    image: "Gambar/Mie Ayam.jpg",
    ingredients: [
        "Mie telur basah",
        "Dada ayam cincang",
        "Bawang putih",
        "Kecap asin",
        "Minyak wijen",
        "Sawi hijau",
        "Kuah kaldu ayam",
        "Bawang goreng"
    ],
    steps: [
        "Tumis bawang putih hingga harum",
        "Masukkan ayam cincang tumis hingga matang",
        "Tambahkan kecap asin dan minyak wijen",
        "Rebus mie dan sawi hijau secara terpisah",
        "Tata mie dalam mangkuk, beri topping ayam",
        "Siram kuah kaldu panas",
        "Tabur bawang goreng"
    ]
},

{
    id: 13,
    title: "Sate Ayam Madura",
    image: "Gambar/Sate Ayam.webp",
    ingredients: [
        "Daging ayam fillet",
        "Kecap manis",
        "Air jeruk limau",
        "Bumbu kacang (kacang tanah, cabe, gula jawa)",
        "Lontong",
        "Bawang merah",
        "Ketumbar"
    ],
    steps: [
        "Potong dadu ayam, tusuk ke tusuk sate",
        "Rendam dalam campuran kecap dan bumbu halus (bawang merah, ketumbar)",
        "Panggang di atas arang hingga kecokelatan",
        "Sajikan dengan lontong dan bumbu kacang"
    ]
},

{
    id: 14,
    title: "Bakso",
    image: "Gambar/Bakso.webp",
    ingredients: [
        "Daging sapi giling",
        "Tepung tapioka",
        "Bawang putih",
        "Merica",
        "Telur",
        "Mie kuning",
        "Kuah kaldu sapi",
        "Tahu goreng"
    ],
    steps: [
        "Campur daging, tepung tapioka, bawang putih, dan merica",
        "Bentuk bulatan bakso dengan sendok",
        "Rebus dalam air mendidih hingga mengapung",
        "Sajikan dengan mie kuning, tahu goreng, dan kuah kaldu"
    ]
},

{
    id: 15,
    title: "Opor Ayam Kuning",
    image: "Gambar/Opor.jpg",
    ingredients: [
        "Ayam kampung",
        "Santan kental",
        "Lengkuas",
        "Serai",
        "Daun salam",
        "Bumbu halus (kunyit, kemiri, ketumbar, bawang merah, bawang putih)",
        "Kerupuk udang"
    ],
    steps: [
        "Tumis bumbu halus dengan rempah hingga harum",
        "Masukkan ayam, aduk hingga berubah warna",
        "Tuang santan dan masak dengan api kecil",
        "Masak hingga ayam empuk dan kuah mengental",
        "Sajikan dengan ketupat dan kerupuk"
    ]
},

{
    id: 16,
    title: "Soto Betawi",
    image: "Gambar/soto.webp",
    ingredients: [
        "Daging sapi",
        "Santan dan susu",
        "Kentang",
        "Tomat",
        "Emping",
        "Bumbu halus (jahe, lengkuas, jinten)",
        "Daun jeruk"
    ],
    steps: [
        "Rebus daging dengan bumbu halus hingga empuk",
        "Tambahkan santan dan susu",
        "Masukkan kentang yang sudah digoreng",
        "Sajikan dengan emping, tomat, dan bawang goreng"
    ]
},

{
    id: 17,
    title: "Pecel",
    image: "Gambar/pecel.jpg",
    ingredients: [
        "Sayuran rebus (kangkung, tauge, kacang panjang)",
        "Bumbu pecel (kacang tanah, gula merah, kencur, cabe rawit)",
        "Peyek",
        "Telur rebus",
        "Tempe Goreng"
    ],
    steps: [
        "Kukus semua sayuran",
        "Sangrai kacang tanah dan haluskan dengan bumbu",
        "Encerkan bumbu dengan air panas",
        "Tata sayuran di piring, siram bumbu pecel",
        "Tambahkan peyek dan tempe goreng"
    ]
},

{
    id: 18,
    title: "Nasi Goreng Kambing",
    image: "Gambar/Nasi Goreng Daging Koncoku.jpg",
    ingredients: [
        "Nasi putih",
        "Daging kambing cincang",
        "Bawang bombay",
        "Kecap manis",
        "Saus tiram",
        "Bumbu rempah (jinten, kapulaga, kayu manis)",
        "Acar timun"
    ],
    steps: [
        "Tumis bawang bombay dengan rempah",
        "Masukkan daging kambing, masak hingga matang",
        "Tambahkan nasi, kecap, dan saus tiram",
        "Aduk rata hingga beraroma wangi",
        "Sajikan dengan acar dan kerupuk"
    ]
},

{
    id: 19,
    title: "Pepes Ikan",
    image: "Gambar/Pepes Igo.webp",
    ingredients: [
        "Ikan fillet",
        "Daun pisang",
        "Bumbu halus (cabe merah, bawang merah, bawang putih, kunyit, kemiri)",
        "Serai",
        "Daun salam",
        "Daun kemangi",
        "Tomat ceri",
        "Garam",
        "Gula merah"
    ],
    steps: [
        "Lumuri ikan dengan bumbu halus dan garam",
        "Siapkan daun pisang, alasi dengan daun salam",
        "Taruh ikan di atas daun, beri irisan serai, tomat, dan kemangi",
        "Bungkus rapi dan sematkan lidi",
        "Kukus selama 30 menit",
        "Panggang sebentar di atas teflon untuk aroma smokey",
        "Sajikan dengan nasi hangat"
    ]
},

{
    id: 20,
    title: "Lumpia",
    image: "Gambar/62733af9841d8jpg-20220811065730.jpg",
    ingredients: [
        "Kulit lumpia",
        "Rebung",
        "Daging ayam cincang",
        "Udang kupas",
        "Bawang putih",
        "Kecap manis",
        "Tepung maizena (untuk perekat)",
        "Bahan saus (bawang putih, cabe, gula merah, air)"
    ],
    steps: [
        "Tumis bawang putih hingga harum",
        "Masukkan ayam dan udang, aduk hingga matang",
        "Tambahkan rebung dan kecap, masak hingga meresap",
        "Bungkus dengan kulit lumpia, rekatkan dengan larutan maizena",
        "Goreng dalam minyak panas hingga kuning keemasan",
        "Untuk saus: rebus semua bahan hingga kental",
        "Sajikan lumpia dengan saus kental"
    ]
}
    // ... (data resep lainnya tetap sama)
];

// State Management
let appState = {
    currentView: 'main',
    previousStates: [],
    selectedIngredients: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    currentRecipes: [...recipes]
};

// DOM Elements
const dom = {
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    ingredientInput: document.getElementById('ingredient-input'),
    addIngredientBtn: document.getElementById('add-ingredient-btn'),
    ingredientsTags: document.getElementById('ingredients-tags'),
    filterBtn: document.getElementById('filter-btn'),
    resetBtn: document.getElementById('reset-btn'),
    showFavoritesBtn: document.getElementById('show-favorites-btn'),
    recipesContainer: document.getElementById('recipes-container'),
    mainHeader: document.querySelector('.main-header'),
    subMenuHeader: document.querySelector('.submenu-header'),
    subMenuTitle: document.querySelector('.submenu-title'),
    subMenuInfo: document.querySelector('.submenu-info'),
    recipeModal: document.getElementById('recipe-modal'),
    closeModal: document.getElementById('close-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalImage: document.getElementById('modal-image'),
    modalIngredients: document.getElementById('modal-ingredients'),
    modalSteps: document.getElementById('modal-steps'),
    favoriteBtn: document.getElementById('favorite-btn')
};

// Fungsi Tampilan Resep
function displayRecipes(recipesToDisplay) {
    dom.recipesContainer.innerHTML = '';
    
    if (recipesToDisplay.length === 0) {
        dom.recipesContainer.innerHTML = `
            <div class="empty-state">
                <p>📭 Tidak ditemukan resep yang sesuai</p>
            </div>
        `;
        return;
    }
    
    recipesToDisplay.forEach(recipe => {
        const isFavorited = appState.favorites.includes(recipe.id);
        const recipeCard = `
            <div class="recipe-card">
                <img src="${recipe.image}" 
                     alt="${recipe.title}" 
                     class="recipe-image"
                     onerror="this.src='img/default-food.jpg'">
                <div class="recipe-info">
                    <h3>${recipe.title}</h3>
                    <div class="ingredients-preview">
                        ${recipe.ingredients.slice(0, 3).join(', ')}...
                    </div>
                    <div class="recipe-actions">
                        <button class="view-btn" data-id="${recipe.id}">👁️ Lihat</button>
                        <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" 
                                data-id="${recipe.id}">
                            ${isFavorited ? '❤️ Favorit' : '♡ Favorit'}
                        </button>
                    </div>
                </div>
            </div>
        `;
        dom.recipesContainer.insertAdjacentHTML('beforeend', recipeCard);
    });

    // Event Listeners untuk tombol
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const recipeId = parseInt(e.target.dataset.id);
            showRecipeModal(recipeId);
        });
    });

    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const recipeId = parseInt(e.target.dataset.id);
            toggleFavorite(recipeId);
        });
    });
}

// Fungsi Navigasi
function navigateTo(viewType, title, additionalInfo = '') {
    appState.previousStates.push({
        type: appState.currentView,
        title: document.title,
        recipes: appState.currentRecipes
    });
    
    appState.currentView = viewType;
    updateView(title, viewType, additionalInfo);
    updateDocumentTitle(title);
}

function goBack() {
    if (appState.previousStates.length > 0) {
        const prevState = appState.previousStates.pop();
        appState.currentView = prevState.type;
        appState.currentRecipes = prevState.recipes;
        updateView(prevState.title, prevState.type);
        displayRecipes(appState.currentRecipes);
        updateDocumentTitle(prevState.title);
    }
}

// Fungsi Pencarian
function handleSearch() {
    const searchTerm = dom.searchInput.value.trim().toLowerCase();
    if (!searchTerm) return;

    appState.currentRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
    );
    
    navigateTo('search', `Hasil Pencarian: "${searchTerm}"`);
    displayRecipes(appState.currentRecipes);
}

// Fungsi Filter Bahan
function applyFilter() {
    if (appState.selectedIngredients.length === 0) {
        alert('Silakan tambahkan bahan terlebih dahulu!');
        return;
    }

    appState.currentRecipes = recipes.filter(recipe =>
        appState.selectedIngredients.every(ing =>
            recipe.ingredients.some(recipeIng =>
                recipeIng.toLowerCase().includes(ing.toLowerCase())
            )
        )
    );
    
    navigateTo(
        'filter', 
        'Resep Berdasarkan Bahan',
        `Bahan: ${appState.selectedIngredients.join(', ')}`
    );
    displayRecipes(appState.currentRecipes);
}

// Fungsi Favorit
function toggleFavorite(recipeId) {
    const index = appState.favorites.indexOf(recipeId);
    if (index === -1) {
        appState.favorites.push(recipeId);
    } else {
        appState.favorites.splice(index, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(appState.favorites));
    
    if (appState.currentView === 'favorites') {
        showFavorites();
    } else {
        displayRecipes(appState.currentRecipes);
    }
}

function showFavorites() {
    appState.currentRecipes = recipes.filter(r => 
        appState.favorites.includes(r.id)
    );
    
    navigateTo('favorites', 'Resep Favorit');
    displayRecipes(appState.currentRecipes);
}

// Fungsi Bahan
function addIngredient() {
    const ingredient = dom.ingredientInput.value.trim();
    if (ingredient && !appState.selectedIngredients.includes(ingredient)) {
        appState.selectedIngredients.push(ingredient);
        updateIngredientsTags();
        dom.ingredientInput.value = '';
    }
}

function updateIngredientsTags() {
    dom.ingredientsTags.innerHTML = '';
    appState.selectedIngredients.forEach(ingredient => {
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `
            ${ingredient}
            <span class="tag-remove" data-ingredient="${ingredient}">&times;</span>
        `;
        dom.ingredientsTags.appendChild(tag);
    });

    document.querySelectorAll('.tag-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const ingredientToRemove = e.target.dataset.ingredient;
            appState.selectedIngredients = appState.selectedIngredients.filter(
                ing => ing !== ingredientToRemove
            );
            updateIngredientsTags();
        });
    });
}

// Fungsi Modal
function showRecipeModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    dom.modalTitle.textContent = recipe.title;
    dom.modalImage.src = recipe.image;
    dom.modalImage.alt = recipe.title;

    dom.modalIngredients.innerHTML = '';
    recipe.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.textContent = ing;
        dom.modalIngredients.appendChild(li);
    });

    dom.modalSteps.innerHTML = '';
    recipe.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        dom.modalSteps.appendChild(li);
    });

    const isFavorited = appState.favorites.includes(recipeId);
    dom.favoriteBtn.textContent = isFavorited ? '❤️ Hapus Favorit' : '♡ Tambah Favorit';
    dom.favoriteBtn.dataset.id = recipeId;
    
    dom.recipeModal.style.display = 'block';
}

// Fungsi Bantuan
function updateView(title, type, additionalInfo = '') {
    if (type === 'main') {
        dom.mainHeader.style.display = 'block';
        dom.subMenuHeader.classList.add('hidden');
    } else {
        dom.mainHeader.style.display = 'none';
        dom.subMenuHeader.classList.remove('hidden');
        dom.subMenuTitle.textContent = title;
        dom.subMenuInfo.textContent = additionalInfo;
    }
}

function updateDocumentTitle(title) {
    document.title = `${title} - ResepIN`;
}

function resetApp() {
    appState = {
        currentView: 'main',
        previousStates: [],
        selectedIngredients: [],
        favorites: JSON.parse(localStorage.getItem('favorites')) || [],
        currentRecipes: [...recipes]
    };
    dom.searchInput.value = '';
    updateIngredientsTags();
    updateView('Resep Terbaru', 'main');
    displayRecipes(appState.currentRecipes);
}

// Event Listeners
dom.searchBtn.addEventListener('click', handleSearch);
dom.searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

dom.addIngredientBtn.addEventListener('click', addIngredient);
dom.ingredientInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addIngredient();
});

dom.filterBtn.addEventListener('click', applyFilter);
dom.resetBtn.addEventListener('click', resetApp);
dom.showFavoritesBtn.addEventListener('click', showFavorites);
dom.closeModal.addEventListener('click', () => {
    dom.recipeModal.style.display = 'none';
});
dom.favoriteBtn.addEventListener('click', (e) => {
    const recipeId = parseInt(e.target.dataset.id);
    toggleFavorite(recipeId);
    dom.recipeModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === dom.recipeModal) {
        dom.recipeModal.style.display = 'none';
    }
});

// Inisialisasi
updateView('Resep Terbaru', 'main');
displayRecipes(appState.currentRecipes);