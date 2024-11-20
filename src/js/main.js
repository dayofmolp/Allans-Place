// Properties Data
const properties = [
    {
        id: 1,
        name: "Student Haven",
        location: "32 Kasselvlei, Cape Town",
        price: "4,000",
        image: "/images/placeholder.jpg",
        tags: [
            { label: "NSFAS Accredited", variant: "default" },
            { label: "Available", variant: "secondary" }
        ],
        amenities: [
            { icon: "wifi", label: "Free WiFi" },
            { icon: "shield", label: "24/7 Security" },
            { icon: "coffee", label: "Study Areas" },
            { icon: "users", label: "Common Room" }
        ],
        description: "Modern student accommodation with all essential amenities for comfortable living and studying. Features include high-speed WiFi, 24/7 security, and dedicated study spaces."
    },
    {
        id: 2,
        name: "Academia House",
        location: "Fourie Street, Cape Town",
        price: "5,500",
        image: "/images/placeholder.jpg",
        tags: [
            { label: "NSFAS Accredited", variant: "default" },
            { label: "Popular", variant: "secondary" }
        ],
        amenities: [
            { icon: "wifi", label: "Free WiFi" },
            { icon: "shield", label: "Security" },
            { icon: "clock", label: "24/7 Access" },
            { icon: "coffee", label: "Study Areas" }
        ],
        description: "Premium student living space with en-suite bathrooms and modern facilities. Ideal location near major universities and transport routes."
    }
];

// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    renderProperties();
});

// Render Properties
function renderProperties() {
    const grid = document.getElementById('properties-grid');
    grid.innerHTML = properties.map(property => `
        <div class="property-card bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative h-48">
                <div class="absolute right-3 top-3 z-10 space-x-2">
                    ${property.tags.map(tag => `
                        <span class="inline-block px-2 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                            ${tag.label}
                        </span>
                    `).join('')}
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <img src="${property.image}" alt="${property.name}" class="h-full w-full object-cover">
            </div>
            <div class="p-4">
                <h3 class="text-xl font-bold">${property.name}</h3>
                <div class="mt-2 flex items-center text-gray-600">
                    <i data-feather="map-pin" class="w-4 h-4 mr-2"></i>
                    <span class="text-sm">${property.location}</span>
                </div>
                <div class="mt-4 grid grid-cols-2 gap-2">
                    ${property.amenities.map(amenity => `
                        <div class="flex items-center text-sm text-gray-600">
                            <i data-feather="${amenity.icon}" class="w-4 h-4 mr-2"></i>
                            <span>${amenity.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="border-t bg-gray-50 p-4">
                <div class="flex items-center justify-between">
                    <div>
                        <span class="text-sm text-gray-600">Starting from</span>
                        <p class="text-lg font-bold text-blue-600">R${property.price}/month</p>
                    </div>
                    <button onclick="showPropertyDetails(${property.id})" 
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    feather.replace();
}

// Show Property Details
function showPropertyDetails(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    const modal = document.getElementById('property-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="relative">
            <button onclick="closeModal()" class="absolute right-0 top-0 p-2">
                <i data-feather="x" class="w-6 h-6"></i>
            </button>
            <h2 class="text-2xl font-bold mb-2">${property.name}</h2>
            <p class="text-gray-600 mb-4">${property.location}</p>
            <div class="relative h-64 mb-4">
                <img src="${property.image}" alt="${property.name}" class="h-full w-full rounded-lg object-cover">
            </div>
            <div class="space-y-4">
                <div>
                    <h4 class="font-semibold mb-2">Amenities</h4>
                    <div class="grid grid-cols-2 gap-2">
                        ${property.amenities.map(amenity => `
                            <div class="flex items-center bg-gray-50 p-2 rounded-lg">
                                <i data-feather="${amenity.icon}" class="w-4 h-4 mr-2"></i>
                                <span class="text-sm">${amenity.label}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-2">Description</h4>
                    <p class="text-sm text-gray-600">${property.description}</p>
                </div>
                <div class="flex justify-end space-x-2 mt-4">
                    <button onclick="closeModal()" 
                        class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        Close
                    </button>
                    <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Contact Agent
                    </button>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
    feather.replace();
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('property-modal');
    modal.classList.remove('active');
}

// Scroll to Properties
function scrollToProperties() {
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
}

// Handle Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const alert = document.getElementById('success-alert');
    alert.style.display = 'block';
    this.reset();
    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('property-modal');
    if (event.target === modal) {
        closeModal();
    }
}
