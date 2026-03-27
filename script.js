const LANGUAGE_STORAGE_KEY = 'resume-language';

const LANGUAGE_COPY = {
    en: {
        title: 'Adi Nurrahman | Full Stack Engineer',
        nav: ['Home', 'About', 'Skills', 'Experience', 'AI Products', 'Works', "Let's Talk"],
        langToggle: 'ID',
        hero: {
            badge: '<i class="fas fa-rocket me-2"></i>Welcome to my universe',
            heading: "Hi, I'm <span class=\"text-gradient\">Adi Nurrahman</span><br><span class=\"typing-text\"></span>",
            description: 'I build scalable software, explore AI-driven products, and enjoy vibe coding fast MVPs into real usable experiences.',
            buttons: ['View Product', 'View Work', 'Contact Me'],
            typing: ['Full Stack Engineer', 'AI Product Builder', 'Vibe Coder']
        },
        profile: {
            label: 'About Me',
            heading: '10+ Years of Engineering Excellence',
            description: 'I am a Full Stack Software Engineer with a strong backend foundation in API architecture, cloud systems, and product delivery. Recently, I have been especially interested in AI, rapid prototyping, and vibe coding to turn ideas into working products faster while still keeping the engineering solid.',
            featureTitles: ['AI Product Curiosity', 'Vibe Coding Builder'],
            featureTexts: ['LLM apps, automation, fast MVP loops', 'Shipping ideas into usable products']
        },
        skills: {
            label: 'My Expertise',
            heading: 'Tools & Technologies',
            cards: ['Languages', 'Frameworks', 'AI & Vibe Coding', 'Tools', 'Cloud & Version Control', 'Database']
        },
        experience: {
            label: 'My Journey',
            heading: 'Professional Experience',
            jobs: [
                {
                    title: 'Software Engineer',
                    period: 'July 2023 - Present',
                    company: 'PT Berlian Sistem Informasi',
                    bullets: [
                        'Maintenance existing web applications',
                        'Bug fixing and performance optimization',
                        'Operation Support and monitoring'
                    ]
                },
                {
                    title: '.NET Developer',
                    period: 'Mar 2023 - Jun 2023',
                    company: 'PT Indo Online Mitra Usaha',
                    bullets: [
                        'Maintenance existing web applications',
                        'Critical Bug fixing'
                    ]
                },
                {
                    title: 'Backend Developer',
                    period: 'Jul 2022 - Jan 2023',
                    company: 'Xtremax Indonesia',
                    bullets: [
                        'Backend development for Nimvio Project',
                        'Created AWS Lambda functions and CloudFormation templates',
                        'Refactored NodeJS code and researched TypeScript migrations'
                    ]
                },
                {
                    title: 'Backend Developer',
                    period: 'Sep 2021 - Jun 2022',
                    company: 'PT. SiCepat Ekspres Indonesia',
                    bullets: [
                        'Part of team rebuilding Clodeo app from .NET to Golang',
                        'Backend development and maintaining GraphQL endpoints'
                    ]
                }
            ]
        },
        vibe: {
            label: "What I'm Building",
            heading: 'AI & Vibe Coding Products',
            intro: 'I enjoy using AI-assisted workflows and vibe coding to validate ideas quickly, turn concepts into working MVPs, and iterate toward products people can actually use.',
            chips: ['AI Workflow', 'Rapid MVP', 'Live Product'],
            titles: ['Activity Tracker', 'VideoKids', 'Ojek Online App'],
            descriptions: [
                'A customizable daily activity checklist website with a dedicated weight logging feature and progress chart. I use it to track weight-loss progress and stay in control of my daily habits.',
                'A platform for managing what children watch, focused on preventing videos from being skipped or changed during a set time period. Parents can control playback duration to help children finish content one by one.',
                'An online ride-hailing platform for motorbikes and cars, where drivers set their own per-kilometer pricing and customers can choose the driver, vehicle type, and fare that fit their needs.'
            ],
            tags: [
                ['Activity Tracking', 'Weight Log', 'Progress Chart'],
                ['Parent Control', 'Timed Playback', 'Child Safety'],
                ['Ride Booking', 'Driver Pricing', 'SaaS Model']
            ],
            buttons: ['Open Product', 'Open Product', 'Open Product']
        },
        portfolio: {
            label: 'Recent Works',
            heading: 'My Portfolio',
            titles: ['Safepedia HSE System', 'Safepedia Dashboard', 'Safepedia Analytics', 'Clodeo', 'Nimvio CMS', 'Nimvio Interface'],
            descriptions: [
                'HSE information system for companies',
                'Dashboard for the HSE information system',
                'Analytics for the HSE platform',
                'Shipment data management system',
                'Content management system',
                'Content management interface'
            ]
        },
        contact: {
            leftHeading: 'Contact Information',
            leftIntro: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
            labels: ['Email', 'Phone', 'Location'],
            follow: 'Follow Me',
            rightHeading: 'Send me a message',
            formLabels: ['Your Name', 'Your Email', 'Subject', 'Message'],
            placeholders: ['John Doe', 'john@example.com', 'Project Discussion', 'Hello, I would like to...'],
            button: 'Send Message'
        },
        footer: '© 2026 Adi Nurrahman. All rights reserved.'
    },
    id: {
        title: 'Adi Nurrahman | Insinyur Full Stack',
        nav: ['Beranda', 'Tentang', 'Keahlian', 'Pengalaman', 'Produk AI', 'Karya', 'Hubungi Saya'],
        langToggle: 'EN',
        hero: {
            badge: '<i class="fas fa-rocket me-2"></i>Selamat datang di dunia saya',
            heading: "Halo, saya <span class=\"text-gradient\">Adi Nurrahman</span><br><span class=\"typing-text\"></span>",
            description: 'Saya membangun software yang skalabel, mengeksplorasi produk berbasis AI, dan menikmati vibe coding untuk mengubah ide menjadi MVP dengan cepat.',
            buttons: ['Lihat Produk', 'Lihat Karya', 'Hubungi Saya'],
            typing: ['Insinyur Full Stack', 'Pembuat Produk AI', 'Vibe Coder']
        },
        profile: {
            label: 'Tentang Saya',
            heading: '10+ Tahun Pengalaman Engineering',
            description: 'Saya adalah Full Stack Software Engineer dengan fondasi backend yang kuat di arsitektur API, sistem cloud, dan delivery produk. Belakangan ini saya sangat tertarik pada AI, rapid prototyping, dan vibe coding untuk mengubah ide menjadi produk yang lebih cepat tanpa mengorbankan kualitas engineering.',
            featureTitles: ['Eksplorasi Produk AI', 'Builder Vibe Coding'],
            featureTexts: ['Aplikasi LLM, otomasi, siklus MVP cepat', 'Mewujudkan ide menjadi produk yang bisa dipakai']
        },
        skills: {
            label: 'Keahlian Utama',
            heading: 'Teknologi & Tools',
            cards: ['Bahasa Pemrograman', 'Framework', 'AI & Vibe Coding', 'Tools', 'Cloud & Kontrol Versi', 'Basis Data']
        },
        experience: {
            label: 'Perjalanan Saya',
            heading: 'Pengalaman Profesional',
            jobs: [
                {
                    title: 'Software Engineer',
                    period: 'Jul 2023 - Sekarang',
                    company: 'PT Berlian Sistem Informasi',
                    bullets: [
                        'Memelihara aplikasi web yang sudah berjalan',
                        'Perbaikan bug dan optimasi performa',
                        'Dukungan operasional dan monitoring'
                    ]
                },
                {
                    title: '.NET Developer',
                    period: 'Mar 2023 - Jun 2023',
                    company: 'PT Indo Online Mitra Usaha',
                    bullets: [
                        'Memelihara aplikasi web yang sudah berjalan',
                        'Perbaikan bug kritis'
                    ]
                },
                {
                    title: 'Backend Developer',
                    period: 'Jul 2022 - Jan 2023',
                    company: 'Xtremax Indonesia',
                    bullets: [
                        'Pengembangan backend untuk proyek Nimvio',
                        'Membuat AWS Lambda functions dan CloudFormation templates',
                        'Refactor code NodeJS dan riset migrasi TypeScript'
                    ]
                },
                {
                    title: 'Backend Developer',
                    period: 'Sep 2021 - Jun 2022',
                    company: 'PT. SiCepat Ekspres Indonesia',
                    bullets: [
                        'Bagian dari tim yang membangun ulang aplikasi Clodeo dari .NET ke Golang',
                        'Pengembangan backend dan pemeliharaan endpoint GraphQL'
                    ]
                }
            ]
        },
        vibe: {
            label: 'Yang Saya Bangun',
            heading: 'Produk AI & Vibe Coding',
            intro: 'Saya menggunakan workflow berbasis AI dan vibe coding untuk memvalidasi ide dengan cepat, mengubah konsep menjadi MVP, dan terus mengiterasi produk yang benar-benar bisa dipakai.',
            chips: ['Alur AI', 'MVP Cepat', 'Produk Langsung'],
            titles: ['Activity Tracker', 'VideoKids', 'Ojek Online App'],
            descriptions: [
                'Website ceklis aktivitas harian yang bisa disesuaikan sendiri, lengkap dengan fitur pencatatan berat badan dan grafik progress untuk membantu kontrol penurunan berat badan dan aktivitas.',
                'Platform untuk mengatur tontonan anak dengan fokus mencegah video dipindah-pindah selama periode tertentu. Orang tua bisa mengatur durasi pemutaran agar anak menonton secara berurutan.',
                'Platform pesan ojek motor dan mobil online, di mana driver mengatur tarif per kilometer sendiri dan customer bisa memilih driver, jenis kendaraan, serta tarif yang sesuai.'
            ],
            tags: [
                ['Pelacakan Aktivitas', 'Catatan Berat', 'Grafik Progress'],
                ['Kontrol Orang Tua', 'Pemutaran Terjadwal', 'Keamanan Anak'],
                ['Pemesanan Ojek', 'Tarif Driver', 'Model SaaS']
            ],
            buttons: ['Buka Produk', 'Buka Produk', 'Buka Produk']
        },
        portfolio: {
            label: 'Proyek Terbaru',
            heading: 'Portofolio Saya',
            titles: ['Safepedia HSE System', 'Safepedia Dashboard', 'Safepedia Analytics', 'Clodeo', 'Nimvio CMS', 'Nimvio Interface'],
            descriptions: [
                'Sistem informasi HSE untuk perusahaan',
                'Dashboard untuk sistem informasi HSE',
                'Analitik untuk platform HSE',
                'Sistem manajemen data pengiriman',
                'Sistem manajemen konten',
                'Antarmuka manajemen konten'
            ]
        },
        contact: {
            leftHeading: 'Informasi Kontak',
            leftIntro: 'Saya selalu terbuka untuk membahas proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda.',
            labels: ['Email', 'Telepon', 'Lokasi'],
            follow: 'Ikuti Saya',
            rightHeading: 'Kirim pesan',
            formLabels: ['Nama Anda', 'Email Anda', 'Subjek', 'Pesan'],
            placeholders: ['Budi', 'budi@email.com', 'Diskusi Proyek', 'Halo, saya ingin...'],
            button: 'Kirim Pesan'
        },
        footer: '© 2026 Adi Nurrahman. Seluruh hak dilindungi.'
    }
};

let typedInstance = null;
let activeLanguage = 'en';
let languageBootstrapped = false;

function setText(selector, value, root = document) {
    const el = root.querySelector(selector);
    if (el) {
        el.textContent = value;
    }
}

function setHtml(selector, value, root = document) {
    const el = root.querySelector(selector);
    if (el) {
        el.innerHTML = value;
    }
}

function setTexts(nodes, values) {
    nodes.forEach((node, index) => {
        if (node && values[index] !== undefined) {
            node.textContent = values[index];
        }
    });
}

function setPlaceholders(nodes, values) {
    nodes.forEach((node, index) => {
        if (node && values[index] !== undefined) {
            node.setAttribute('placeholder', values[index]);
        }
    });
}

function initTyping(strings) {
    const target = document.querySelector('.typing-text');
    if (!target || typeof Typed === 'undefined') {
        return;
    }

    if (typedInstance && typeof typedInstance.destroy === 'function') {
        typedInstance.destroy();
    }

    target.textContent = '';
    typedInstance = new Typed('.typing-text', {
        strings,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

function applyLanguage(lang) {
    const copy = LANGUAGE_COPY[lang] || LANGUAGE_COPY.en;
    activeLanguage = lang in LANGUAGE_COPY ? lang : 'en';

    document.documentElement.lang = activeLanguage;
    document.title = copy.title;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, activeLanguage);

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = copy.langToggle;
        langToggle.setAttribute('aria-label', activeLanguage === 'en' ? 'Switch to Indonesian' : 'Switch to English');
    }

    setTexts(document.querySelectorAll('#navbarNav .nav-link'), copy.nav);

    setHtml('#hero .custom-badge', copy.hero.badge);
    setHtml('#hero h1', copy.hero.heading);
    setText('#hero .lead', copy.hero.description);
    setTexts(document.querySelectorAll('#hero .d-flex.flex-wrap > a'), copy.hero.buttons);

    setText('#profile h6', copy.profile.label);
    setText('#profile h2', copy.profile.heading);
    setText('#profile .col-lg-7 > p', copy.profile.description);

    const profileCards = document.querySelectorAll('#profile .glass-card.p-3.rounded-3');
    if (profileCards[0]) {
        setText('h4', copy.profile.featureTitles[0], profileCards[0]);
        setText('span', copy.profile.featureTexts[0], profileCards[0]);
    }
    if (profileCards[1]) {
        setText('h4', copy.profile.featureTitles[1], profileCards[1]);
        setText('span', copy.profile.featureTexts[1], profileCards[1]);
    }

    setText('#skills .text-center.mb-5 h6', copy.skills.label);
    setText('#skills .text-center.mb-5 h2', copy.skills.heading);
    const skillCards = document.querySelectorAll('#skills .skill-card');
    copy.skills.cards.forEach((label, index) => {
        if (skillCards[index]) {
            setText('h4', label, skillCards[index]);
        }
    });

    setText('#experience .text-center.mb-5 h6', copy.experience.label);
    setText('#experience .text-center.mb-5 h2', copy.experience.heading);
    const timelineItems = document.querySelectorAll('#experience .timeline-item');
    timelineItems.forEach((item, index) => {
        const job = copy.experience.jobs[index];
        if (!job) return;
        setText('.timeline-content h4', job.title, item);
        setText('.timeline-content .badge', job.period, item);
        setText('.timeline-content h6', job.company, item);
        const bullets = item.querySelectorAll('.custom-list li');
        bullets.forEach((bullet, bulletIndex) => {
            if (job.bullets[bulletIndex] !== undefined) {
                bullet.textContent = job.bullets[bulletIndex];
            }
        });
    });

    setText('#vibe-products .text-center.mb-5 h6', copy.vibe.label);
    setText('#vibe-products .text-center.mb-5 h2', copy.vibe.heading);
    setText('#vibe-products .text-center.mb-5 p', copy.vibe.intro);

    const productCards = document.querySelectorAll('#vibe-products .product-card');
    productCards.forEach((card, index) => {
        setText('.product-chip', copy.vibe.chips[index], card);
        setText('h4', copy.vibe.titles[index], card);
        setText('p', copy.vibe.descriptions[index], card);
        setTexts(card.querySelectorAll('.skill-tag'), copy.vibe.tags[index] || []);
        const button = card.querySelector('.mt-4 a');
        if (button) {
            button.textContent = copy.vibe.buttons[index] || copy.vibe.buttons[0];
        }
    });

    setText('#portfolio .text-center.mb-5 h6', copy.portfolio.label);
    setText('#portfolio .text-center.mb-5 h2', copy.portfolio.heading);
    const carouselCaptions = document.querySelectorAll('#portfolio .carousel-caption');
    carouselCaptions.forEach((caption, index) => {
        setText('h3', copy.portfolio.titles[index], caption);
        setText('p', copy.portfolio.descriptions[index], caption);
    });

    setText('#contact .col-lg-5 h3', copy.contact.leftHeading);
    setText('#contact .col-lg-5 > p', copy.contact.leftIntro);
    setTexts(document.querySelectorAll('#contact .col-lg-5 h6.mb-0'), copy.contact.labels);
    setText('#contact .col-lg-5 .mt-5 h6', copy.contact.follow);
    setText('#contact .col-lg-7 h3', copy.contact.rightHeading);
    setTexts(document.querySelectorAll('#contact .col-lg-7 label.form-label'), copy.contact.formLabels);
    setPlaceholders(document.querySelectorAll('#contact .col-lg-7 .custom-input'), copy.contact.placeholders);
    const contactButton = document.querySelector('#contact .col-lg-7 button[type="button"]');
    if (contactButton) {
        contactButton.innerHTML = `${copy.contact.button} <i class="fas fa-paper-plane ms-2"></i>`;
    }

    setText('footer p', copy.footer);

    initTyping(copy.hero.typing);
}

function bootstrapLanguageSwitcher() {
    if (languageBootstrapped) {
        return;
    }
    languageBootstrapped = true;

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            applyLanguage(activeLanguage === 'en' ? 'id' : 'en');
        });
    }

    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'en';
    applyLanguage(savedLanguage);
}

window.initLanguageSwitcher = bootstrapLanguageSwitcher;

document.addEventListener('DOMContentLoaded', function() {
    // Navbar components
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Handle navbar collapse
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
            // Adding solid background if menu is opened while at the top
            if (window.scrollY < 50) {
                navbar.classList.toggle('scrolled');
            }
        });

        // Close navbar when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbar.contains(event.target)) {
                navbarCollapse.classList.remove('show');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = targetId === '#top' ? document.body : document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = 80; // approximate height
                const targetPosition = targetId === '#top' ? 0 : targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    // Form submission simulation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="button"]');
            if (btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin ms-2"></i>';
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.innerHTML = 'Sent Successfully! <i class="fas fa-check ms-2"></i>';
                    btn.classList.add('btn-success');
                    btn.classList.remove('btn-primary');
                    contactForm.reset();
                    
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        btn.classList.remove('btn-success');
                        btn.classList.add('btn-primary');
                    }, 3000);
                }, 1500);
            }
        });
        
        // Handle the button click specifically since we used type="button" in HTML
        const submitBtn = contactForm.querySelector('button[type="button"]');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                contactForm.dispatchEvent(new Event('submit', { cancelable: true }));
            });
        }
    }

    // Change navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            // Only remove if menu is not open
            if (!navbarCollapse.classList.contains('show')) {
                navbar.classList.remove('scrolled');
            }
        }
    });

    bootstrapLanguageSwitcher();
});
