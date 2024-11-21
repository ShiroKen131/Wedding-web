function bukaUndangan() {
    const homeSection = document.querySelector('#Home');
    const header = document.querySelector('header');
    const kotakMusik = document.querySelector('#kotakmusik');
    const quotesSection = document.querySelector('#Quotes');
    const lagu = document.querySelector('#lagu');

    homeSection.style.display = 'none';
    header.style.display = 'flex'; // Assuming you want a flex layout for the header
    kotakMusik.style.display = 'block';
    quotesSection.style.display = 'block';
    document.body.style.overflow = 'auto';

    lagu.play();

    // Scroll to the Quotes section
    quotesSection.scrollIntoView({ behavior: 'smooth' });

    // Store the state in sessionStorage
    sessionStorage.setItem('invitationOpened', 'true');
}
function putar () {
    const lagu = document.querySelector('#lagu');
    const tombol = document.querySelector('#kontrol');
    const tombolMusik = document.querySelector('#tombol-musik');

    if (lagu.paused){
        lagu.play();
        tombol.src = "assets/img/pause.png";
        tombolMusik.classList.remove('paused'); // Belum ke pause ketika dipencet ()
    }
    else  {
        lagu.pause();
        tombol.src = "assets/img/play.png";
        tombolMusik.classList.add('paused'); // Akan ke pause ketika dipencet
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('#hamburgerMenu');
    const navBar = document.querySelector('#navbar');

    hamburger.addEventListener('click', function() {
        navBar.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});


window.addEventListener('load', function() {
    const invitationOpened = sessionStorage.getItem('invitationOpened');
    const homeSection = document.querySelector('#Home');
    const header = document.querySelector('header');
    const kotakMusik = document.querySelector('#kotakmusik');
    const quotesSection = document.querySelector('#Quotes');

    if (invitationOpened !== 'true') {

        window.scrollTo(0, 0);
        homeSection.style.display = 'block';
        header.style.display = 'none';
        kotakMusik.style.display = 'none';
        quotesSection.style.display = 'none';
        document.body.style.overflow = 'hidden';
    } else {

        bukaUndangan();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('#hamburgerMenu');
    const navBar = document.querySelector('#navbar');

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation(); 
        navBar.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        if (!navBar.contains(e.target) && !hamburger.contains(e.target)) {
            navBar.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    navBar.addEventListener('touchstart', function(e) {
        e.stopPropagation();
    }, {passive: true});


    navBar.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, {passive: false});

    const navLinks = navBar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navBar.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('messageForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        var name = document.getElementById('name').value;
        var message = document.getElementById('message').value;
        var displayDiv = document.getElementById('messageDisplay');
        
        // Membuat elemen baru untuk pesan
        var newMessage = document.createElement('div');
        newMessage.className = 'message-item';
        
        var nameElement = document.createElement('div');
        nameElement.className = 'message-name';
        nameElement.textContent = name;
        
        var messageElement = document.createElement('div');
        messageElement.textContent = message;
        
        newMessage.appendChild(nameElement);
        newMessage.appendChild(messageElement);
        
        // Menambahkan pesan baru ke awal div display
        displayDiv.insertBefore(newMessage, displayDiv.firstChild);
        
        // Reset form
        this.reset();
    });
});









document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navBar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll('header nav a');

    // Fungsi untuk menutup navbar
    function closeNavbar() {
        navBar.classList.remove("active");
    }

    // Toggle navbar saat hamburger di-klik
    hamburger.addEventListener("click", function () {
        navBar.classList.toggle("active");
    });

    // Menutup navbar saat link di-klik (khusus untuk mode mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            if (window.innerWidth <= 900) {  // Sesuaikan dengan breakpoint mobile Anda
                closeNavbar();
            }
        });
    });

    // Menangani perubahan ukuran window
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            closeNavbar();
        }
    });
});

// Fungsi untuk menangani scroll dan active link
function handleScroll() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}


function copyAccountNumber() {
    const accountNumber = document.getElementById('accountNumber').innerText;
    navigator.clipboard.writeText(accountNumber).then(() => {
        alert('Nomor rekening berhasil disalin!');
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('rsvpForm');
    var thankYouMessage = document.getElementById('thankYouMessage');
    var containerRsvp = document.querySelector('.container-rsvp');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah form dari submit secara default
        
        // Menyembunyikan form
        containerRsvp.style.display = 'none';
        
        // Menampilkan pesan terima kasih
        thankYouMessage.style.display = 'block';
    });
});

