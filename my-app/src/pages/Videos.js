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
        }
    ], 
    [ // Mathematics (ID: 2xx)
        {
            id: 201,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Derivative.svg/1200px-Derivative.svg.png",
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
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Limit_example.svg/1200px-Limit_example.svg.png",
            title: "Calculus: Limits",
            description: "Understand the fundamental concept of limits in calculus.",
            video: "https://www.youtube.com/watch?v=YNstP0ESndU" // Limits by The Organic Chemistry Tutor
        },
        {
            id: 204,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Linear_subspaces_with_shading.svg/1200px-Linear_subspaces_with_shading.svg.png",
            title: "Linear Algebra",
            description: "Learn about vectors, matrices, and linear transformations.",
            video: "https://www.youtube.com/watch?v=JnTa9XtvmfI" // Linear Algebra by 3Blue1Brown
        }
    ], 
    [ // Physics (ID: 3xx)
        {
            id: 301,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Newtons_cradle_animation_book_2.gif/440px-Newtons_cradle_animation_book_2.gif",
            title: "Classical Mechanics",
            description: "Study the motion of objects and the forces acting upon them.",
            video: "https://www.youtube.com/watch?v=ApUFtLCrU90" // Physics by Walter Lewin (MIT)
        },
        {
            id: 302,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Magnet0873.png/440px-Magnet0873.png",
            title: "Electromagnetism",
            description: "Learn about electric and magnetic fields, Maxwell's equations.",
            video: "https://www.youtube.com/watch?v=Y5c3xe7D9W8" // Electromagnetism by Michel van Biezen
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
        }
    ],
    [ // English (ID: 6xx)
        {
            id: 601,
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/William_Shakespeare_by_John_Taylor.jpg/440px-William_Shakespeare_by_John_Taylor.jpg",
            title: "Shakespeare Literature",
            description: "Study of Shakespeare's major works and influence.",
            video: "https://www.youtube.com/watch?v=O3Fvs2h7YwY" // Shakespeare by CrashCourse
        }
    ]
];

export default materials;