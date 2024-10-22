// Carregar a navbar
fetch('assets/components/navbar/navbar.html')
    .then(response => response.text())
    .then(data => {
        // Inserir o conteúdo da navbar dentro do container
        document.getElementById('navbar-container').innerHTML = data;

        // Carregar o script da navbar após o HTML ser carregado
        const script = document.createElement('script');
        script.src = 'assets/components/navbar/navbar.js';  // Caminho para o script
        document.body.appendChild(script);  // Adiciona o script ao final do body
    });

// Carregar o footer
fetch('assets/components/footer/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-container').innerHTML = data;
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutUsSection = document.getElementById("aboutUs");

    // Observer to check if the section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutUsSection.classList.add("fade-in", "animate-slideInLeft", "animate-slideInBottom"); // Apply all entry animations
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    observer.observe(aboutUsSection); // Start observing
});

// Lista de eventos (pode vir de uma API ou JSON)
const events = [
    {
        title: "Live College | Propósito Pertencer",
        date: "21/10/2024",
        time: "20:30h",
        location: "Instagram",
        description: [
            'Hoje, as 20h30 teremos a Live no Instagram, com o tema "Propósito Pertencer", com a participação do Pastor Danilo Gujral.'
        ],
        image: "assets/images/events/Pertencer-Icmav.png",
        links: [
            { url: "https://instagram.com/icmav.college", label: "Aceder Live no Instagram" }
        ]
    },
    {
        title: "Abe Huber",
        date: "30/10/2024",
        time: "21:00h",
        location: "ICMAV Sede",
        description: [
            "No dia 30/10, quarta-feira, às 21h, receberemos o Pastor Abe Huber com uma palavra poderosa!",
            "Estamos a preparar um ambiente especial para si, mas para isso confirme a sua presença. Para inscrever-te basta aceder ao link a baixo:"
        ],
        image: "assets/images/events/Abe-Huber.jpg",
        links: [
            { url: "https://icmav.churchcenter.com/people/forms/838448", label: "Fazer Inscrição" }
        ]
    },
    {
        title: "Classe Boas Vindas",
        date: "4/11/18/25 Novembro",
        time: "20:30h",
        location: "Zoom",
        description: [
            "A Classe é destinada a todos aqueles que desejam conhecer mais sobre a família ICMAV, os que querem assumir o compromisso do batismo nas águas, e também aos que querem tornar-se membros.",
            "Para te inscreveres na Classe de Boas Vindas podes aceder ao link a baixo ou inscrever-te no domingo, no stand ICMAV com Propósito."
        ],
        image: "assets/images/events/Classe-Boas-Vindas.png",
        links: [
            { url: "https://icmav.churchcenter.com/people/forms/838104", label: "Fazer Inscrição" }
        ]
    }
];

let currentIndex = 0; // Track the current event in the carousel
let autoRotate; // Variable for automatic carousel rotation interval
const carousel = document.getElementById('carousel'); // Carousel element reference
const eventModal = document.getElementById('eventModal'); // Modal element reference

// Function to open the modal with event details
function openModal(event) {
    // Add event details to the modal
    document.getElementById('modalImage').src = event.image;
    document.getElementById('modalTitle').textContent = event.title;

    // Display the date and time separately
    document.getElementById('modalDate').textContent = `Date: ${event.date}`;
    document.getElementById('modalTime').textContent = `Time: ${event.time}`;
    
    document.getElementById('modalLocation').textContent = event.location;

    // Add multiple descriptions (supports HTML formatting)
    const descriptionContainer = document.getElementById('modalDescription');
    descriptionContainer.innerHTML = ''; // Clear previous content

    // Loop through each description paragraph
    event.description.forEach(paragraph => {
        const p = document.createElement('p');
        p.innerHTML = paragraph; // Using innerHTML for formatted text
        descriptionContainer.appendChild(p);
    });

    // Add links if any are provided
    if (event.links && event.links.length > 0) {
        event.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.label;
            a.classList.add('text-blue-500', 'underline', 'block', 'mt-2');
            a.target = '_blank'; // Open the link in a new tab
            descriptionContainer.appendChild(a);
        });
    }

    // Show the modal
    eventModal.classList.remove('hidden');
}

// Function to close the modal
function closeModal() {
    eventModal.classList.add('hidden');
}

// Close the modal when the mobile close button is clicked
document.getElementById('closeModalBtnMobile').addEventListener('click', function() {
    closeModal();
});

// Close the modal when the desktop close button is clicked
document.getElementById('closeModalBtnDesktop').addEventListener('click', function() {
    closeModal();
});

// Close the modal when clicking outside or pressing the ESC key
window.addEventListener('click', (e) => {
    if (e.target === eventModal) {
        closeModal();
    }
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Function to dynamically build the carousel
function buildCarousel() {
    carousel.innerHTML = ""; // Clear existing carousel items

    // Add 3 visible events (previous, current, next)
    for (let i = -1; i <= 1; i++) {
        const eventIndex = (currentIndex + i + events.length) % events.length;
        const event = events[eventIndex];

        // Create event item structure
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('carousel-item', 'flex-shrink-0', 'w-full', 'md:w-[32%]', 'h-auto', 'flex', 'flex-col', 'items-center', 'justify-center', 'p-4', 'bg-gray-800', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition-shadow', 'duration-300');

        // HTML structure for the event with a box and styled info
        eventDiv.innerHTML = `
            <div class="carousel-item-inner w-full flex flex-col items-center justify-center">
                <img src="${event.image}" alt="${event.title}" class="w-full h-auto object-contain rounded-md mb-4">
                <div class="text-center text-white">
                    <h3 class="text-2xl font-bold">${event.title}</h3>
                    <div class="flex items-center justify-center mt-2 text-gray-400">
                        <i class="fa-solid fa-calendar mr-2"></i>
                        <p class="text-base">${event.date}</p>
                    </div>
                    <div class="flex items-center justify-center mt-1 text-gray-400">
                        <i class="fa-solid fa-location-dot mr-2"></i>
                        <p class="text-base">${event.location}</p>
                    </div>
                    <button class="mt-2 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors duration-300" onclick='openModal(${JSON.stringify(event)})'>More Information</button>
                </div>
            </div>
        `;
        carousel.appendChild(eventDiv);
    }

    // Add smooth transition class
    carousel.classList.add('transition-transform', 'duration-500', 'ease-in-out');
}

// Function to update the indicators (dots)
function updateIndicators() {
    const indicators = document.getElementById('indicators');
    indicators.innerHTML = ''; // Clear existing indicators

    // Create an indicator (dot) for each event
    events.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator', 'bg-gray-500', 'rounded-full', 'h-3', 'w-3', 'cursor-pointer');
        if (index === currentIndex) {
            indicator.classList.add('bg-white');
        }
        indicator.addEventListener('click', () => {
            currentIndex = index;
            resetAutoRotate(); // Reset the auto-rotate timer when clicking an indicator
            buildCarousel();
            updateIndicators();
        });
        indicators.appendChild(indicator);
    });
}

// Function to reset the automatic rotation timer
function resetAutoRotate() {
    clearInterval(autoRotate); // Clear the current interval
    autoRotate = setInterval(() => {
        currentIndex = (currentIndex + 1) % events.length; // Move to the next event
        buildCarousel();
        updateIndicators();
    }, 10000); // Set the rotation interval to 10 seconds
}

// Initialize the carousel
buildCarousel();
updateIndicators();
resetAutoRotate(); // Start the auto-rotation

// Next button event handler
document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % events.length;
    resetAutoRotate(); // Reset the auto-rotate timer when manually moving to the next event
    buildCarousel();
    updateIndicators();
});

// Previous button event handler
document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + events.length) % events.length;
    resetAutoRotate(); // Reset the auto-rotate timer when manually moving to the previous event
    buildCarousel();
    updateIndicators();
});
