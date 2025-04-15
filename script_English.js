let typed = new Typed(".multiple-text", {
    strings: ["Front-end developer", "Back-end developer", "Python developer", "Arduino Programmer."],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

let secTyped = new Typed(".hobbies", {
    strings: ["I like to spend time learning.", "I like to spend time programming.", "I love to spend time with my friends.", "I love to spend time with my girlfriend."],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

function changeText(element) {
    let texts = [
        // C/C++ 
        "The C/C++ language was the first one I came into contact with and the language I studied and worked on various projects during my 3 years of study at ETEC.",

        // C# 
        "The C# language was where I focused my studies in the 2nd and 3rd years at ETEC, where I developed an inventory system project for an example company.",

        // Python 
        "Python caught my attention while I was still pursuing my associate degree at ETEC. I decided to study it on my own, took an online course from the 'Curso em Video' page, and continued researching and learning by myself. My latest project was a YouTube video conversion app using the CustomTkinter and yt-dlp libraries.",

        // Java 
        "Java was a language I decided to study after noticing it's significant presence in the market. I took an online course from the 'Curso em Video' page, using the IDE 'IntelliJ IDEA community'. However, I still have limited proficiency in it.",

        // GMS 
        "The GMS language was one I learned on my own and also the one I used to develop my graduation thesis at ETEC. The project, developed by me and my two friends, was a game designed to promote awareness of recycling and environmental issues.",

        // Unity 
        "Game development with Unity, using C#, was something I decided to study alongside GMS. I completed the 'Oficina Indie' course and continue studying and researching about it.",

        // Arduino 
        "Arduino was one of the subjects studied at ETEC, where we developed various robotics prototypes, using C++ in conjunction with Arduino and it's IDE.",

        // HTML5 
        "HTML5 is a markup language I studied throughout my time at ETEC and have worked with extensively outside of ETEC, creating websites for fun, studying, and even simplifying some tasks. For example, my latest project was this portfolio I'm presenting.",

        // CSS3 
        "CSS3 is a markup language I studied throughout my time at ETEC and have worked with a lot outside of ETEC, styling websites for fun, studying, and even simplifying some tasks. For example, this portfolio I'm presenting.",

        // JS 
        "I also studied the JS programming language through online courses and websites, mainly through 'Curso em Video' and W3S. My most recent project using this language is this portfolio.",

        // NodeJS 
        "Node JS was a framework I decided to start studying after analyzing the market and noticing how widely it is used today. I studied it and continue researching on my own. However, I still have limited proficiency in it.",

        // PHP 
        "PHP was a language I studied in my 2nd and 3rd years at ETEC and continue using to this day. My latest project using this language was a digital call system for the jiu-jitsu team I am part of.",

        // English 
        "I studied the English language for 7 years at a renowned language school called Calenglish.",

        // Computer
        "I have memories of studying and learning more about computers since I was 6/7 years old with the help of my uncle, who worked with computers. At ETEC, I studied it more in the 1st grade and, over time, was able to further enhance my skills. I even built my own computer, which I used to create this entire portfolio and many of my projects. I am also the one who handles all the maintenance of the machine."

    ];

    let names = [
        "C/C++",
        "C#",
        "Python",
        "Java",
        "GMS (Game Maker Studio)",
        "Unity (C#)",
        "Arduino IDE (C++)",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Node JS",
        "PHP",
        "English",
        "Computers",
    ];
    
    let index = element.getAttribute("data-value");
    document.getElementById("desc-text").innerText = texts[index];
    document.getElementById("desc-name").innerText = names[index];
}

function goBack(){
    let text = "Here, you'll find more information about the current language and how I started my journey with it.";
    let name = "";

    document.getElementById("desc-text").innerText = text;
    document.getElementById("desc-name").innerText = name;
}