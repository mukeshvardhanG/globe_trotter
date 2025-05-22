// Country data with 10 countries
const countries = {
    france: {
        name: "France",
        flag: "https://flagcdn.com/w320/fr.png",
        description: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.",
        language: "French",
        currency: "Euro (€)",
        population: "67 million",
        places: [
            { name: "Eiffel Tower", image: "https://images.unsplash.com/photo-1431274172761-fca41d930114" },
            { name: "Louvre Museum", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a" },
            { name: "Mont Saint-Michel", image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216" }
        ]
    },
    japan: {
        name: "Japan",
        flag: "https://flagcdn.com/w320/jp.png",
        description: "Japan is an island country in East Asia known for its dense cities, imperial palaces, mountainous national parks and thousands of shrines and temples. Shinkansen bullet trains connect the main islands of Kyushu, Honshu and Hokkaido.",
        language: "Japanese",
        currency: "Yen (¥)",
        population: "126 million",
        places: [
            { name: "Mount Fuji", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3" },
            { name: "Tokyo Tower", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989" },
            { name: "Fushimi Inari Shrine", image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81" }
        ]
    },
    usa: {
        name: "United States",
        flag: "https://flagcdn.com/w320/us.png",
        description: "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation's presence into the Pacific Ocean. Major cities include New York, a global finance and culture center, and Washington, DC, the capital.",
        language: "English",
        currency: "US Dollar ($)",
        population: "331 million",
        places: [
            { name: "Statue of Liberty", image: "https://images.unsplash.com/photo-1524312418663-8d0b9693b8a0" },
            { name: "Grand Canyon", image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35" },
            { name: "Golden Gate Bridge", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" }
        ]
    },
    italy: {
        name: "Italy",
        flag: "https://flagcdn.com/w320/it.png",
        description: "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins.",
        language: "Italian",
        currency: "Euro (€)",
        population: "60 million",
        places: [
            { name: "Colosseum", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5" },
            { name: "Venice Canals", image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0" },
            { name: "Leaning Tower of Pisa", image: "https://images.unsplash.com/photo-1553618551-d3d0ec76426e" }
        ]
    },
    australia: {
        name: "Australia",
        flag: "https://flagcdn.com/w320/au.png",
        description: "Australia is a country and continent surrounded by the Indian and Pacific oceans. Its major cities - Sydney, Brisbane, Melbourne, Perth, Adelaide - are coastal, but its capital, Canberra, is inland and the largest inland city.",
        language: "English",
        currency: "Australian Dollar (A$)",
        population: "26 million",
        places: [
            { name: "Sydney Opera House", image: "https://images.unsplash.com/photo-1523428096881-5bd79d043006" },
            { name: "Great Barrier Reef", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5" },
            { name: "Uluru", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be" }
        ]
    },
    thailand: {
        name: "Thailand",
        flag: "https://flagcdn.com/w320/th.png",
        description: "Thailand is a Southeast Asian country known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha.",
        language: "Thai",
        currency: "Baht (฿)",
        population: "69 million",
        places: [
            { name: "Bangkok", image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed" },
            { name: "Phuket", image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60" },
            { name: "Chiang Mai", image: "https://images.unsplash.com/photo-1536599424071-0b215a388ba7" }
        ]
    },
    spain: {
        name: "Spain",
        flag: "https://flagcdn.com/w320/es.png",
        description: "Spain, a country on Europe's Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum.",
        language: "Spanish",
        currency: "Euro (€)",
        population: "47 million",
        places: [
            { name: "Sagrada Familia", image: "https://images.unsplash.com/photo-1583422409516-2895a77efded" },
            { name: "Alhambra", image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a" },
            { name: "Park Güell", image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a" }
        ]
    },
    brazil: {
        name: "Brazil",
        flag: "https://flagcdn.com/w320/br.png",
        description: "Brazil, a vast South American country, stretches from the Amazon Basin in the north to vineyards and massive Iguaçu Falls in the south. Rio de Janeiro, symbolized by its 38m Christ the Redeemer statue atop Mount Corcovado.",
        language: "Portuguese",
        currency: "Real (R$)",
        population: "213 million",
        places: [
            { name: "Christ the Redeemer", image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f" },
            { name: "Iguazu Falls", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3" },
            { name: "Amazon Rainforest", image: "https://images.unsplash.com/photo-1458966480358-a0ac9dee2362" }
        ]
    },
    egypt: {
        name: "Egypt",
        flag: "https://flagcdn.com/w320/eg.png",
        description: "Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza's colossal Pyramids and Great Sphinx.",
        language: "Arabic",
        currency: "Egyptian Pound (E£)",
        population: "102 million",
        places: [
            { name: "Great Pyramid of Giza", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368" },
            { name: "Luxor Temple", image: "https://images.unsplash.com/photo-1526666923127-b2970f64b422" },
            { name: "Valley of the Kings", image: "https://images.unsplash.com/photo-1572251334007-5d28b4364e38" }
        ]
    },
    canada: {
        name: "Canada",
        flag: "https://flagcdn.com/w320/ca.png",
        description: "Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometers.",
        language: "English, French",
        currency: "Canadian Dollar (C$)",
        population: "38 million",
        places: [
            { name: "Niagara Falls", image: "https://images.unsplash.com/photo-1520013333831-acd77cc09021" },
            { name: "Banff National Park", image: "https://images.unsplash.com/photo-1500581276021-a4bbcd0050c5" },
            { name: "CN Tower", image: "https://images.unsplash.com/photo-1508050919630-b135583b29ab" }
        ]
    }
};

// Package data with categories
const packages = [
    {
        id: 1,
        title: "Bali Beach Paradise",
        price: 899,
        duration: "7 days",
        category: "beach",
        country: "indonesia",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
        rating: 4.8,
        reviews: [
            { name: "Sarah J.", rating: 5, text: "The beaches were absolutely stunning!" },
            { name: "Mike T.", rating: 4, text: "Great resort but food could be better" }
        ]
    },
    {
        id: 2,
        title: "Swiss Alps Adventure",
        price: 1299,
        duration: "10 days",
        category: "mountain",
        country: "switzerland",
        image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f",
        rating: 4.9,
        reviews: [
            { name: "Emma S.", rating: 5, text: "Breathtaking views and excellent hiking" },
            { name: "David L.", rating: 5, text: "Best skiing experience of my life" }
        ]
    },
    {
        id: 3,
        title: "Tokyo City Explorer",
        price: 1099,
        duration: "8 days",
        category: "city",
        country: "japan",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
        rating: 4.7,
        reviews: [
            { name: "Lisa K.", rating: 5, text: "Incredible city with amazing food" },
            { name: "John P.", rating: 4, text: "Very busy but fascinating culture" }
        ]
    },
    {
        id: 4,
        title: "Amazon Jungle Expedition",
        price: 1499,
        duration: "12 days",
        category: "adventure",
        country: "brazil",
        image: "https://images.unsplash.com/photo-1458966480358-a0ac9dee2362",
        rating: 4.6,
        reviews: [
            { name: "Alex R.", rating: 5, text: "Unforgettable wildlife experiences" },
            { name: "Sophia M.", rating: 4, text: "Challenging but rewarding adventure" }
        ]
    },
    {
        id: 5,
        title: "Paris Romantic Getaway",
        price: 999,
        duration: "6 days",
        category: "city",
        country: "france",
        image: "https://images.unsplash.com/photo-1431274172761-fca41d930114",
        rating: 4.8,
        reviews: [
            { name: "James B.", rating: 5, text: "Perfect romantic vacation" },
            { name: "Olivia W.", rating: 5, text: "The city of love didn't disappoint" }
        ]
    },
    {
        id: 6,
        title: "Great Barrier Reef Dive",
        price: 1199,
        duration: "9 days",
        category: "beach",
        country: "australia",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
        rating: 4.9,
        reviews: [
            { name: "Daniel K.", rating: 5, text: "Best diving experience ever" },
            { name: "Mia S.", rating: 5, text: "The coral reefs are breathtaking" }
        ]
    },
    {
        id: 7,
        title: "Rocky Mountain Trek",
        price: 1399,
        duration: "14 days",
        category: "mountain",
        country: "canada",
        image: "https://images.unsplash.com/photo-1500581276021-a4bbcd0050c5",
        rating: 4.7,
        reviews: [
            { name: "Ryan H.", rating: 5, text: "Stunning mountain landscapes" },
            { name: "Chloe T.", rating: 4, text: "Challenging but worth every step" }
        ]
    },
    {
        id: 8,
        title: "Egyptian Wonders Tour",
        price: 1599,
        duration: "10 days",
        category: "adventure",
        country: "egypt",
        image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368",
        rating: 4.8,
        reviews: [
            { name: "Noah G.", rating: 5, text: "The pyramids are even more impressive in person" },
            { name: "Ava L.", rating: 4, text: "Fascinating history and culture" }
        ]
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Set min date for departure to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('depart-date').min = today;
    
    // Initialize country cards
    initCountryCards();
    
    // Initialize packages
    filterPackages('all');
    
    // Set up event listeners
    setupEventListeners();
    
    // Check for existing cookie
    checkLoginCookie();
    
    // Start animations
    startAnimations();
});

// Initialize country cards in destinations
function initCountryCards() {
    const carouselTrack = document.getElementById('carousel-track');
    carouselTrack.innerHTML = '';
    
    for (const [key, country] of Object.entries(countries)) {
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.onclick = () => showCountryModal(key);
        
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${country.places[0].image}')">
                <div class="price-tag">From $${Math.floor(Math.random() * 1000) + 500}</div>
            </div>
            <div class="card-content">
                <h3>${country.name}</h3>
                <div class="rating">
                    ${'<i class="fas fa-star"></i>'.repeat(4)}
                    <i class="fas fa-star-half-alt"></i>
                    <span>4.5</span>
                </div>
                <p>${country.description.substring(0, 120)}...</p>
                <button class="book-now">Explore</button>
            </div>
        `;
        
        carouselTrack.appendChild(card);
    }
}

// Carousel functionality
let currentPosition = 0;
function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const cardWidth = document.querySelector('.destination-card').offsetWidth;
    currentPosition += direction * cardWidth * 3; // Move 3 cards at a time
    
    // Limit scrolling
    const maxPosition = -((Object.keys(countries).length - 3) * cardWidth);
    currentPosition = Math.max(currentPosition, maxPosition);
    currentPosition = Math.min(currentPosition, 0);
    
    track.style.transform = `translateX(${currentPosition}px)`;
}

// Show country modal with details
function showCountryModal(countryKey) {
    const country = countries[countryKey];
    const modal = document.getElementById('country-modal');
    
    // Set country info
    document.getElementById('country-name').textContent = country.name;
    document.getElementById('country-flag').src = country.flag;
    document.getElementById('country-description').textContent = country.description;
    document.getElementById('country-language').textContent = country.language;
    document.getElementById('country-currency').textContent = country.currency;
    document.getElementById('country-population').textContent = country.population;
    
    // Load places to visit
    const placesContainer = document.getElementById('places-container');
    placesContainer.innerHTML = '';
    
    country.places.forEach(place => {
        const placeCard = document.createElement('div');
        placeCard.className = 'place-card';
        placeCard.innerHTML = `
            <div class="place-image" style="background-image: url('${place.image}')"></div>
            <div class="place-name">${place.name}</div>
        `;
        placesContainer.appendChild(placeCard);
    });
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideCountryModal() {
    document.getElementById('country-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Filter packages by category
function filterPackages(category) {
    const container = document.getElementById('package-container');
    container.innerHTML = '';
    
    // Update active tab
    document.querySelectorAll('.package-tabs button').forEach(btn => {
        btn.classList.remove('active');
    });
    event?.target.classList.add('active');
    
    // Filter packages
    const filtered = category === 'all' 
        ? packages 
        : packages.filter(p => p.category === category);
    
    // Display packages
    filtered.forEach(pkg => {
        const packageCard = document.createElement('div');
        packageCard.className = 'package-card';
        packageCard.innerHTML = `
            <div class="package-image" style="background-image: url('${pkg.image}')">
                <div class="package-price">$${pkg.price}</div>
            </div>
            <div class="package-content">
                <h3>${pkg.title}</h3>
                <div class="package-meta">
                    <span><i class="fas fa-clock"></i> ${pkg.duration}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${countries[pkg.country]?.name || pkg.country}</span>
                </div>
                <div class="package-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(Math.floor(pkg.rating))}
                    ${pkg.rating % 1 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    <span>${pkg.rating}</span>
                </div>
                <button class="book-now" onclick="bookPackage(${pkg.id})">Book Now</button>
            </div>
        `;
        container.appendChild(packageCard);
    });
    
    // Load reviews for this category
    loadReviews(category);
}

// Load reviews for a package category
function loadReviews(category) {
    const container = document.getElementById('review-container');
    container.innerHTML = '';
    
    // Get reviews for this category
    let reviews = [];
    if (category === 'all') {
        packages.forEach(pkg => reviews.push(...pkg.reviews));
    } else {
        packages.filter(p => p.category === category).forEach(pkg => reviews.push(...pkg.reviews));
    }
    
    // Display reviews
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <div class="reviewer">
                <img src="https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg" alt="${review.name}">
                <div class="reviewer-info">
                    <h4>${review.name}</h4>
                    <div class="rating">
                        ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
                        ${review.rating % 1 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                    </div>
                </div>
            </div>
            <p class="review-text">"${review.text}"</p>
            <div class="review-date">${getRandomDate()}</div>
        `;
        container.appendChild(reviewCard);
    });
}

// Book a package
function bookPackage(id) {
    const pkg = packages.find(p => p.id === id);
    if (pkg) {
        alert(`Booking ${pkg.title} for $${pkg.price}`);
        // In a real app, this would redirect to booking page
    }
}

// Login/Signup functions
function showLogin() {
    document.getElementById('login-modal').style.display = 'flex';
    document.getElementById('signup-modal').style.display = 'none';
    document.body.style.overflow = 'hidden';
}

function hideLogin() {
    document.getElementById('login-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showSignup() {
    document.getElementById('signup-modal').style.display = 'flex';
    document.getElementById('login-modal').style.display = 'none';
    document.body.style.overflow = 'hidden';
}

function hideSignup() {
    document.getElementById('signup-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Form validation
function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    let isValid = true;
    
    // Email validation
    if (!validateEmail(email)) {
        document.getElementById('login-email-error').textContent = 'Please enter a valid email';
        isValid = false;
    } else {
        document.getElementById('login-email-error').textContent = '';
    }
    
    // Password validation
    if (password.length < 6) {
        document.getElementById('login-password-error').textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        document.getElementById('login-password-error').textContent = '';
    }
    
    if (isValid) {
        // Set cookie
        setCookie('user', email, 7);
        alert('Login successful! (This is a demo)');
        hideLogin();
    }
    
    return false; // Prevent form submission for demo
}

function validateSignup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;
    let isValid = true;
    
    // Email validation
    if (!validateEmail(email)) {
        document.getElementById('signup-email-error').textContent = 'Please enter a valid email';
        isValid = false;
    } else {
        document.getElementById('signup-email-error').textContent = '';
    }
    
    // Password validation
    if (password.length < 6) {
        document.getElementById('signup-password-error').textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        document.getElementById('signup-password-error').textContent = '';
    }
    
    // Confirm password
    if (password !== confirmPassword) {
        document.getElementById('signup-confirm-error').textContent = 'Passwords do not match';
        isValid = false;
    } else {
        document.getElementById('signup-confirm-error').textContent = '';
    }
    
    if (isValid) {
        // Set cookie
        setCookie('user', email, 7);
        alert('Account created successfully! (This is a demo)');
        hideSignup();
    }
    
    return false; // Prevent form submission for demo
}

// Validate email with regex
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Contact form validation
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    const email = document.getElementById('contact-email').value;
    if (!validateEmail(email)) {
        e.preventDefault();
        document.getElementById('email-error').textContent = 'Please enter a valid email address';
    } else {
        document.getElementById('email-error').textContent = '';
        alert('Thank you for your message! We will contact you soon.');
    }
});

// Cookie handling
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) return cookieValue;
    }
    return null;
}

function checkLoginCookie() {
    const user = getCookie('user');
    if (user) {
        console.log('Welcome back, ' + user);
    }
}

// Animation functions
function startAnimations() {
    // Airplane animation
    const airplane = document.querySelector('.airplane');
    let airplanePos = -100;
    
    function animateAirplane() {
        airplanePos += 1;
        if (airplanePos > window.innerWidth + 100) {
            airplanePos = -100;
        }
        airplane.style.left = airplanePos + 'px';
        requestAnimationFrame(animateAirplane);
    }
    animateAirplane();
    
    // Bubbles animation
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble, index) => {
        let yPos = 0;
        let xPos = index * 100;
        let rotation = 0;
        
        function animateBubble() {
            yPos -= 0.5;
            rotation += 0.5;
            
            if (yPos < -1000) {
                yPos = 0;
                xPos = Math.random() * window.innerWidth;
            }
            
            bubble.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${rotation}deg)`;
            requestAnimationFrame(animateBubble);
        }
        animateBubble();
    });
}

// Helper functions
function getRandomDate() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[Math.floor(Math.random() * 12)];
    const day = Math.floor(Math.random() * 28) + 1;
    const year = 2020 + Math.floor(Math.random() * 4);
    return `${month} ${day}, ${year}`;
}

function setupEventListeners() {
    // Close modals when clicking outside
    window.onclick = function(event) {
        if (event.target.className === 'modal') {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
    
    // Close modals with close button
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    // Track window size
    window.addEventListener('resize', function() {
        console.log(`Window resized to: ${window.innerWidth}x${window.innerHeight}`);
    });
    
    // Track page navigation
    window.addEventListener('popstate', function(event) {
        console.log('Navigation state changed:', event.state);
    });
    
    // Display screen info
    console.log('Screen info:', {
        width: screen.width,
        height: screen.height,
        colorDepth: screen.colorDepth,
        orientation: screen.orientation?.type
    });
    
    // Display location info
    console.log('Location info:', {
        href: location.href,
        hostname: location.hostname,
        pathname: location.pathname,
        protocol: location.protocol
    });
    
    // Document info
    console.log('Document info:', {
        title: document.title,
        lastModified: document.lastModified,
        readyState: document.readyState
    });
}

// Search travel function
function searchTravel() {
    const from = document.getElementById('from-location').value;
    const to = document.getElementById('to-location').value;
    const departDate = document.getElementById('depart-date').value;
    const returnDate = document.getElementById('return-date').value;
    
    if (!from || !to || !departDate) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Show loading
    const searchBtn = document.querySelector('.search-btn');
    const originalText = searchBtn.innerHTML;
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
    searchBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        searchBtn.innerHTML = originalText;
        searchBtn.disabled = false;
        
        // Display results
        alert(`Found trips from ${from} to ${to} departing ${departDate}${returnDate ? ', returning ' + returnDate : ''}`);
        
        // Track this search in history
        history.pushState({ 
            search: { from, to, departDate, returnDate } 
        }, '', `#search`);
    }, 2000);
}

// Change search tab
function changeSearchTab(tab) {
    document.querySelectorAll('.search-tabs button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // In a real app, this would change the search form
    console.log('Switched to', tab, 'search');
}

// Go to home
function goHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}