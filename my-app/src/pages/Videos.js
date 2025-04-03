import { title, video } from "framer-motion/client";

const materials = [
    [ // Computer Science (ID: 1xx)
        { 
            id: 101,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png", 
            title: "PHP Course", 
            description: "Learn PHP, one of the most popular server-side scripting languages for web development.",
            video: "https://www.youtube.com/watch?v=OK_JCtrrv-c" // PHP Tutorial by Traversy Media
        },
        { 
            id: 102,
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", 
            title: "JavaScript Course", 
            description: "Master JavaScript, the language that powers dynamic and interactive web pages.",
            video: "https://www.youtube.com/watch?v=PkZNo7MFNFg" // Learn JavaScript - FreeCodeCamp
        },
        { 
            id: 103,
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg", 
            title: "Android Studio Course", 
            description: "Get started with Android development using Android Studio and build native Android apps.",
            video: "https://www.youtube.com/watch?v=fis26HvvDII" // Android Dev Tutorial by CodingWithMitch
        },
        { 
            id: 104,
            logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", 
            title: "C Programming Course", 
            description: "Understand the fundamentals of C programming, a powerful language for system-level programming.",
            video: "https://www.youtube.com/watch?v=KJgsSFOSQv0" // C Programming by freeCodeCamp
        },
        { 
            id: 105,
            logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", 
            title: "C++ Course", 
            description: "Dive deeper into C++ programming, covering object-oriented programming and more.",
            video: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" // C++ by freeCodeCamp
        },
        { 
            id: 106,
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png", 
            title: "Flutter & Dart Course", 
            description: "Build beautiful cross-platform mobile applications with Flutter, Google's UI toolkit.",
            video: "https://www.youtube.com/watch?v=VPvVD8t02U8" // Flutter Course by Academind
        },
        { 
            id: 107,
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", 
            title: "Git & GitHub Guide", 
            description: "Learn how to use GitHub for version control, collaboration, and open-source projects.",
            video: "https://www.youtube.com/watch?v=RGOj5yH7evk" // Git/GitHub by freeCodeCamp
        },
        { 
            id: 108,
            logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", 
            title: "Java Course", 
            description: "Master Java, one of the most popular and versatile programming languages in the world.",
            video: "https://www.youtube.com/watch?v=eIrMbAQSU34" // Java by Programming with Mosh
        },
        { 
            id: 109,
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg", 
            title: "Lua Course", 
            description: "Learn Lua, a lightweight scripting language often used in game development and embedded systems.",
            video: "https://www.youtube.com/watch?v=iMacxZQMPXs" // Lua by freeCodeCamp
        },
        { 
            id: 110,
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", 
            title: "Next.js Course", 
            description: "Explore the Next.js framework for building fast, SEO-friendly React applications.",
            video: "https://www.youtube.com/watch?v=9P8mASSREYM" // Next.js by Lee Robinson (Vercel)
        },
        { 
            id: 111,
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", 
            title: "Python Course", 
            description: "Master Python, one of the most versatile and widely used programming languages for data science and web development.",
            video: "https://www.youtube.com/watch?v=rfscVS0vtbw" // Python by freeCodeCamp
        },
        { 
            id: 112,
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", 
            title: "React Course", 
            description: "Learn React, the popular JavaScript library for building interactive user interfaces.",
            video: "https://www.youtube.com/watch?v=bMknfKXIFA8" // React by freeCodeCamp
        },
        { 
            id: 113,
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", 
            title: "Tailwind CSS Guide", 
            description: "Master Tailwind CSS, a utility-first CSS framework that makes web design faster and more efficient.",
            video: "https://www.youtube.com/watch?v=4wGmylafgM4" // Tailwind by The Net Ninja
        },{
            id:114,
            logo:"https://miro.medium.com/v2/resize:fit:1400/0*Qqqd7UsfFDPL7WXh.jpeg",
            title:"Linux",
            description:"Are you board of windows try Linux",
            video:"https://www.youtube.com/watch?v=sWbUDq4S6Y8"
        }
    ], 
    [ // Mathematics (ID: 2xx)
        {
            id: 201,
            logo: "https://www.derivative-calculator.net/layout/derivative-calculator.png,q1715417188.pagespeed.ce.7SmbMyFxyy.png",
            title: "Calculus: Derivatives",
            description: "Derivatives form the foundation of calculus, measuring the rate of change of a function.",
            video: "https://www.youtube.com/watch?v=5yfh5cf4-0w" // Derivatives by 3Blue1Brown
        },
        {
            id: 202,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Integral_example.svg/1200px-Integral_example.svg.png",
            title: "Calculus: Integrals",
            description: "Integrals are the reverse process of derivatives, used to calculate areas under curves.",
            video: "https://www.youtube.com/watch?v=rfG8ce4nNh0" // Integrals by Professor Leonard
        },
        {
            id: 203,
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoslsd0vPXEl35D7ISMT3CumcAW5tQMb1QbA&s",
            title: "Calculus: Limits",
            description: "Understand the fundamental concept of limits in calculus.",
            video: "https://www.youtube.com/watch?v=YNstP0ESndU" // Limits by The Organic Chemistry Tutor
        },
        {
            id: 204,
            logo: "https://i.ytimg.com/vi/0WDhKCPtbng/sddefault.jpg",
            title: "Linear Algebra",
            description: "Learn about vectors, matrices, and linear transformations.",
            video: "https://www.youtube.com/watch?v=JnTa9XtvmfI" // Linear Algebra by 3Blue1Brown
        },
        {
            id:205,
            logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8m4EbsfGyMqLoZO1NmkpPLfYh2T13WpXhJQ&s",
            title:"Matrix",
            description:"Are you a geek try a matrix",
            video:"https://www.youtube.com/watch?v=UG4vugxXub0",
        },{
            id:206,
            logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVZaB4NapTk3asy1rbHLTWufkOTKUCSKcxQ&s",
            description:"Raul CATARGIU is bigger than that",
            title:"Geometry",
            video:"https://www.youtube.com/watch?v=E8eSLTs6yQ0"
        },
        {
            id:207,
            logo:"https://i.ytimg.com/vi/6arYULpiHXA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDj1z774JSzKnF8qsVxlhmwJ0Nd2w",
            title:"UPT te conecteaza Video 1",
            description:"Video-ul de pregatire pentru admitere de la poli",
            video:"https://www.youtube.com/watch?v=6arYULpiHXA&list=PLYy1GEpUunTOmCyC0j_U71Wol9eNMaiw4&index=9"
        },
        {
            id:208,
            video:"https://www.youtube.com/watch?v=beAZXfNr9lk&list=PLYy1GEpUunTOmCyC0j_U71Wol9eNMaiw4&index=8",
            title:"UPT te conecteaza Video 2",
            description:"Video-ul de pregatire pentru admitere de la poli",
            logo:"https://i.ytimg.com/vi/beAZXfNr9lk/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBXCmqdytwFJztuHAOSV1nZYE-GqQ"
        },
        {
            id:209,
            logo:"https://i.ytimg.com/vi/DpuF7z9JA7s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBAEJR2jDxG10AZvENxtnUY2H7EWQ",
            title:"UPT te conecteaza Video 3",
            description:"Video-ul de pregatire pentru admitere de la poli",
            video:"https://www.youtube.com/watch?v=DpuF7z9JA7s&list=PLYy1GEpUunTOmCyC0j_U71Wol9eNMaiw4&index=7"
        },
        {
            id:210,
            logo:"https://i.ytimg.com/vi/UufEms65DJA/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBPzU-lJJ7Z7PSGatVF7HDcCLxzxA",
            title:"UPT te conecteaza Video 4",
            description:"Video-ul de pregatire pentru admitere de la poli",
            video:"https://www.youtube.com/watch?v=yyxHEMK44xw&list=PLYy1GEpUunTOmCyC0j_U71Wol9eNMaiw4"
        },
        {
            id:211,
            logo:"https://i.ytimg.com/vi/x1OYLSDZkBk/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCG-3ZWwqzJKrCUcYg0-mBfIhcC6w",
            title:"UPT te conecteaza Video 5",
            description:"Video-ul de pregatire pentru admitere de la poli",
            video:"https://www.youtube.com/watch?v=x1OYLSDZkBk&list=PLYy1GEpUunTOmCyC0j_U71Wol9eNMaiw4&index=5"
        },
        {
            id:212,
            logo:"https://i.ytimg.com/vi/HcU_-lZGn5I/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCQDMc87aJEcJen2AEnoxrRXxO4_A",
            title:"UPT te conecteaza Video 6",
            description:"Video-ul de pregatire pentru admitere de la poli",
            video:"https://www.youtube.com/watch?v=HcU_-lZGn5I&list=PLYy1GEpUunTOmCyC0j_U71Wol9eNMaiw4&index=4"
        },
        {
            id:213,
            logo:"https://i.ytimg.com/vi/wue_vPtDfH0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDSfrKd-EzFiQ0A583GIG9du904Xg",
            title:"UPT te conecteaza Video 7",
            description:"Video-ul de pregatire pentru admitere de la poli",
            video:"https://www.youtube.com/watch?v=81joq58q2sM&list=PLYy1GEpUunTOmCyC0j_U71Wol9eNMaiw4&index=3"
        },
        {
            id:214,
            logo:"https://i.ytimg.com/vi/yyxHEMK44xw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBb2tk10AOHqLjV72kN-MXm-1Wm2w",
            title:"UPT te conecteaza Video 8",
            description:"Video-ul de pregatire pentru admitere de la poli",
            video:"https://www.youtube.com/watch?v=yyxHEMK44xw&list=PLYy1GEpUunTOmCyC0j_U71Wol9eNMaiw4&index=1"
        },
        {
            id:215,
            logo:"https://i.ytimg.com/vi/wue_vPtDfH0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDSfrKd-EzFiQ0A583GIG9du904Xg",
            title:"UPT te conecteaza Video 8",
            description:"Video-ul de pregatire pentru admitere de la poli",
            video:"https://www.youtube.com/watch?v=wue_vPtDfH0&list=PLYy1GEpUunTOmCyC0j_U71Wol9eNMaiw4&index=2"
        },
        {
            id:216,
            logo:"https://i.ytimg.com/an_webp/-cZ3wSMnnA8/mqdefault_6s.webp?du=3000&sqp=CJWNub8G&rs=AOn4CLBZrGY0gGSDbA0NE8OrxyGqGrq8XA",
            title:"UPT instructiuni Admitere",
            description:"Acest videoclip te va ghida prin pașii necesari pentru a te înscrie online la Universitatea Politehnica Timișoara. Urmărește-l pentru a te asigura că finalizezi corect procesul de admitere. Mult succes!",
            video:"https://www.youtube.com/watch?v=-cZ3wSMnnA8"
        }
    ], 
    [ // Physics (ID: 3xx)
        {
            id: 301,
            logo: "https://cdn.iconscout.com/icon/premium/png-512-thumb/classical-physics-1807310-1534300.png?f=webp&w=512",
            title: "Classical Mechanics",
            description: "Study the motion of objects and the forces acting upon them.",
            video: "https://www.youtube.com/watch?v=ApUFtLCrU90" // Physics by Walter Lewin (MIT)
        },
        {
            id: 302,
            logo: "https://cdn.vectorstock.com/i/1000x1000/48/01/electromagnetism-glyph-icon-electromagnetic-force-vector-29164801.webp",
            title: "Electromagnetism",
            description: "Learn about electric and magnetic fields, Maxwell's equations.",
            video: "https://www.youtube.com/watch?v=Y5c3xe7D9W8" // Electromagnetism by Michel van Biezen
        },
        {
            "id": 303,
            "logo": "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
            "title": "Quantum Mechanics",
            "description": "Explore the behavior of matter and energy at atomic and subatomic scales.",
            "video": "https://www.youtube.com/watch?v=IRBfpBPELmE" // Quantum Physics for Dummies by Domain of Science
        },
        {
            "id": 304,
            "logo": "https://cdn-icons-png.flaticon.com/512/2694/2694047.png",
            "title": "Thermodynamics",
            "description": "Study heat, work, temperature, and energy transfer in physical systems.",
            "video": "https://www.youtube.com/watch?v=oY1eyLEo8_A" // Thermodynamics by CrashCourse
        },
        {
            "id": 305,
            "logo": "https://cdn-icons-png.flaticon.com/512/3602/3602145.png",
            "title": "Relativity",
            "description": "Understand Einstein's theories of special and general relativity.",
            "video": "https://www.youtube.com/watch?v=ajhFNcUTJI0" // Relativity by PBS Space Time
        },
        {
            "id": 306,
            "logo": "https://cdn-icons-png.flaticon.com/512/2936/2936886.png",
            "title": "Astrophysics",
            "description": "Study the physics of celestial objects and the universe.",
            "video": "https://www.youtube.com/watch?v=G2FZrk5F7dY" // Astrophysics by ScienceClic
        },
        {
            "id": 307,
            "logo": "https://cdn-icons-png.flaticon.com/512/3602/3602132.png",
            "title": "Nuclear Physics",
            "description": "Learn about atomic nuclei, their structure, and interactions.",
            "video": "https://www.youtube.com/watch?v=KWAsz59F8gA" // Nuclear Physics by Professor Dave Explains
        },
        {
            "id": 308,
            "logo": "https://cdn-icons-png.flaticon.com/512/4392/4392562.png",
            "title": "Particle Physics",
            "description": "Study fundamental particles and the forces governing their interactions.",
            "video": "https://www.youtube.com/watch?v=0Eya3q3q4sA" // Particle Physics by Fermilab
        },
        {
            "id": 309,
            "logo": "https://cdn-icons-png.flaticon.com/512/4392/4392529.png",
            "title": "Optics",
            "description": "Explore light behavior, reflection, refraction, and optical instruments.",
            "video": "https://www.youtube.com/watch?v=KTzGBJPuJwM" // Optics by Physics Videos by Eugene Khutoryansky
        },
        {
            "id": 310,
            "logo": "https://cdn-icons-png.flaticon.com/512/2933/2933451.png",
            "title": "Acoustics",
            "description": "Study sound waves, vibration, and auditory phenomena.",
            "video": "https://www.youtube.com/watch?v=XDsk6tZX55g" // Acoustics by ScienceClic
        },
        {
            "id": 311,
            "logo": "https://cdn-icons-png.flaticon.com/512/3602/3602126.png",
            "title": "Fluid Dynamics",
            "description": "Understand the motion of liquids and gases.",
            "video": "https://www.youtube.com/watch?v=5W6J8b0-D8k" // Fluid Dynamics by Steve Brunton
        },
        {
            "id": 312,
            "logo": "https://cdn-icons-png.flaticon.com/512/2933/2933453.png",
            "title": "Solid State Physics",
            "description": "Study rigid matter, crystals, and material properties.",
            "video": "https://www.youtube.com/watch?v=9y3I7R9lKQ4" // Solid State Physics by MIT OpenCourseWare
        },
        {
            "id": 313,
            "logo": "https://cdn-icons-png.flaticon.com/512/2933/2933456.png",
            "title": "Plasma Physics",
            "description": "Learn about ionized gases and their applications.",
            "video": "https://www.youtube.com/watch?v=VkeSI_B5Ljc" // Plasma Physics by Lesics
        },
        {
            "id": 314,
            "logo": "https://cdn-icons-png.flaticon.com/512/3602/3602138.png",
            "title": "Biophysics",
            "description": "Apply physics principles to biological systems.",
            "video": "https://www.youtube.com/watch?v=uY5UVO6VQwA" // Biophysics by iBiology
        },
        {
            "id": 315,
            "logo": "https://cdn-icons-png.flaticon.com/512/2933/2933458.png",
            "title": "Geophysics",
            "description": "Study Earth's physical properties using physics methods.",
            "video": "https://www.youtube.com/watch?v=BCQ5n8u2g40" // Geophysics by Sven Holbik
        },
        {
            "id": 316,
            "logo": "https://cdn-icons-png.flaticon.com/512/2933/2933460.png",
            "title": "Atomic Physics",
            "description": "Investigate atoms as isolated systems of electrons and nuclei.",
            "video": "https://www.youtube.com/watch?v=1MaOqvnkBxk" // Atomic Physics by Professor M does Science
        },
        {
            "id": 317,
            "logo": "https://cdn-icons-png.flaticon.com/512/3602/3602150.png",
            "title": "Condensed Matter Physics",
            "description": "Study matter with strong electromagnetic interactions.",
            "video": "https://www.youtube.com/watch?v=k6UM9MARWDU" // Condensed Matter Physics by MIT OpenCourseWare
        }
    ],
    [ // Chemistry (ID: 4xx)
        {
            id: 401,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Myoglobin.png/440px-Myoglobin.png",
            title: "Organic Chemistry",
            description: "Study of carbon-containing compounds and their reactions.",
            video: "https://www.youtube.com/watch?v=zFyR1JNJbwk" // Organic Chemistry by Leah4Sci
        }
    ],
    [ // Biology (ID: 5xx)
        {
            id: 501,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Blausen_0212_CellMembrane.png/440px-Blausen_0212_CellMembrane.png",
            title: "Cell Biology",
            description: "Study of cell structure and function, the basic unit of life.",
            video: "https://www.youtube.com/watch?v=URUJD5NEXC8" // Biology by CrashCourse
        },
        {
            "id": 502,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/DNA_Structure%2BKey%2BLabelled.pn_NoBB.png/640px-DNA_Structure%2BKey%2BLabelled.pn_NoBB.png",
            "title": "Genetics",
            "description": "Study of heredity, DNA, and genetic variation.",
            "video": "https://www.youtube.com/watch?v=CBezq1fFUEA" // Amoeba Sisters
        },
        {
            "id": 503,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Anatomy_of_the_Human_Ear.svg/640px-Anatomy_of_the_Human_Ear.svg.png",
            "title": "Human Anatomy",
            "description": "Explore the structure of the human body.",
            "video": "https://www.youtube.com/watch?v=0jDF46x52h8" // CrashCourse Anatomy
    }
    ],
    [ // English (ID: 6xx)
        {
            id: 601,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/William_Shakespeare_by_John_Taylor.jpg/440px-William_Shakespeare_by_John_Taylor.jpg",
            title: "Shakespeare Literature",
            description: "Study of Shakespeare's major works and influence.",
            video: "https://www.youtube.com/watch?v=O3Fvs2h7YwY" // Shakespeare by CrashCourse
        },
        {
            "id": 602,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Jane_Austen_coloured_version.jpg/440px-Jane_Austen_coloured_version.jpg",
            "title": "Classic British Literature",
            "description": "Works of Jane Austen, Dickens, and Brontë sisters.",
            "video": "https://www.youtube.com/watch?v=TV2X0i0vx9I" // The School of Life
        },
        {
            "id": 603,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/440px-George_Orwell_press_photo.jpg",
            "title": "Modern Literature",
            "description": "20th-century works like Orwell, Hemingway, and Fitzgerald.",
            "video": "https://www.youtube.com/watch?v=9RZAY1f3l6E" // TED-Ed
        }
    ],
    [//Romanian
        {
            "id": 701,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mihai_Eminescu.jpg/440px-Mihai_Eminescu.jpg",
            "title": "Mihai Eminescu",
            "description": "Romania's national poet and Romantic literature.",
            "video": "https://www.youtube.com/watch?v=QkZ4HrXJZ9w" // Romanian cultural channel
        },
        {
            "id": 702,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ion_Creanga.jpg/440px-Ion_Creanga.jpg",
            "title": "Ion Creangă",
            "description": "Classic Romanian children's literature and folklore.",
            "video": "https://www.youtube.com/watch?v=8b8J7_5lZ4E" // Storytime adaptations
        },
        {
            "id": 703,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Mircea_Elide.jpg/440px-Mircea_Elide.jpg",
            "title": "Mircea Eliade",
            "description": "Romanian philosopher and historian of religions.",
            "video": "https://www.youtube.com/watch?v=WXg8P0u9W9I" // Philosophy lectures
        }
    ],
    [
        {
            "id": 801,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_topographic_-_en.svg/640px-World_map_topographic_-_en.svg.png",
            "title": "Physical Geography",
            "description": "Landforms, climate, and natural phenomena.",
            "video": "https://www.youtube.com/watch?v=WZtHlBkHBqk" // NatGeo
        },
        {
            "id": 802,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Population_density.png/640px-Population_density.png",
            "title": "Human Geography",
            "description": "Population, urbanization, and cultural landscapes.",
            "video": "https://www.youtube.com/watch?v=5x6cKhu5kZ8" // CrashCourse Geography
        },
        {
            "id": 803,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/640px-The_Earth_seen_from_Apollo_17.jpg",
            "title": "Environmental Geography",
            "description": "Human impact on ecosystems and sustainability.",
            "video": "https://www.youtube.com/watch?v=WfGMYdalClU" // Our Changing Climate
        }
    ]
    ,
    [
        {
            "id": 901,
            "logo": "https://i.ytimg.com/vi/fM1czS_VYDI/maxresdefault.jpg", // Oversimplified thumbnail
            "title": "World War I",
            "description": "The Great War in a nutshell.",
            "video": "https://www.youtube.com/watch?v=fM1czS_VYDI" // Oversimplified WWI
        },
        {
            "id": 902,
            "logo": "https://i.ytimg.com/vi/-CQatuQdQv4/maxresdefault.jpg", // Oversimplified thumbnail
            "title": "The French Revolution",
            "description": "Guillotines, Napoleon, and chaos.",
            "video": "https://www.youtube.com/watch?v=-CQatuQdQv4" // Oversimplified French Rev
        },
        {
            "id": 903,
            "logo": "https://i.ytimg.com/vi/dBq2xgWl5to/maxresdefault.jpg", // Oversimplified thumbnail
            "title": "The Cold War",
            "description": "USA vs USSR, nukes, and spies.",
            "video": "https://www.youtube.com/watch?v=dBq2xgWl5to" // Oversimplified Cold War
        }
    ]
    ,
    [
        {
            "id": 1001,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Supply-demand-equilibrium.svg/640px-Supply-demand-equilibrium.svg.png",
            "title": "Microeconomics",
            "description": "Supply, demand, and market behavior.",
            "video": "https://www.youtube.com/watch?v=Vss3nofHpZI" // Jacob Clifford
        },
        {
            "id": 1002,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/GDP_per_capita_World_map_IMF_2022.svg/640px-GDP_per_capita_World_map_IMF_2022.svg.png",
            "title": "Macroeconomics",
            "description": "GDP, inflation, and national economies.",
            "video": "https://www.youtube.com/watch?v=XnFv3d8qllI" // CrashCourse Economics
        },
        {
            "id": 1003,
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bitcoin_blockchain.png/640px-Bitcoin_blockchain.png",
            "title": "Modern Economics",
            "description": "Cryptocurrency, globalization, and digital markets.",
            "video": "https://www.youtube.com/watch?v=1YyAzVmP9xQ" // Economics Explained
        }
    ]
];
 
export default materials;