let typed = new Typed(".multiple-text", {
    strings: ["Desenvolvedor front-end", "Desenvolvedor back-end", "Desenvolvedor python", "Programador Arduino"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

let secTyped = new Typed(".hobbies", {
    strings: ["Gosto de passar o tempo estudando.", "Gosto de passar o tempo programando.", "Gosto de jogar com meus amigos.", "E passar tempo com minha namorada."],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

function changeText(element) {
    let texts = [
        // C/C++ 
        "A linguagem C/C++ foi a primeira qual tive contato e a liguagem cujo estudei e fiz diversos projetos durante meus 3 anos de estudo na ETEC.",
        
        // C# 
        "A linguagem C# foi onde eu foquei meus estudos no 2º e 3º ano da ETEC, onde desenvolvi um projeto de um sistema de estoque para uma empresa X.",
        
        // Python 
        "Python me chamou atenção enquanto ainda fazia curso tecnico na etec, decidi então estudar por conta própria, fiz um curso EAD da pagina Curso em Video e segui pesquisando e aprendendo sozinho. Meu ultimo projeto foi um app de conversão de videos do youtube usando as bibliotecas CustomTkinter e yt-dlp.",
        
        // Java 
        "A linguagem Java foi uma linguagem que decidi estudar após notar o seu grande espaço no mercado, fiz um curso EAD da pagina Curso em Video, utilizando da IDE: 'IntelliJ IDEA community'. Porem ainda tenho pouco dominio sobre esta.",
        
        // GMS 
        "A linguagem GMS foi uma linguagem a qual eu aprendi sozinho e tambem, onde eu desenvolvi meu TCC para formatura na ETEC, o projeto desenvolvido por mim e pelo meu grupo de 2 amigos, foi um game de incentivo popular e concientização sobre a reciclagem de lixo.",
        
        // Unity 
        "O desenvolvimento de jogos com unity, usando a linguagem C# foi algo que decidi estudar junto com o GMS, sendo assim completei o curso 'oficina indie' e continuo estudando e pesquisando sobre.",
        
        // Arduino 
        "Arduino foi uma das materias estudadas na ETEC, onde desenvolviamos diversos prototipos de robotica, utilizando da linguagem C++ em conjunto com arduino e sua IDE.",
        
        // HTML5 
        "HTML5 uma linguagem de marcação estudada durante todo o periodo na ETEC e que tenho trabalhado e usado muito fora da ETEC, criando sites para me divertir, estudar e até para falicitar algumas coisas, como exemplo meu ultimo projeto foi este portfólio apresentado.",
        
        // CSS3 
        "CSS3 uma linguagem de marcação estudada durante todo o periodo na ETEC e que tenho trabalhado e usado muito fora da ETEC, estilizando sites para me divertir, estudar e até para falicitar algumas coisas, como exemplo este portfólio apresentado.",
        
        // Js 
        "A linguagem de programação JS foi uma linguagem que tambem estudei de forma EAD, em diversos cursos e sites, mas principalmente pelo Curso em Video e W3S, meu projeto mais recente utilizando desta linguagem tambem é este portfólio apresentado.",
        
        // NodeJS 
        "Node JS foi um framework que decidi começar a estudar depois de analisar o mercado e perceber que é muito utilizada hoje, estudei e sigo pesquisando por conta própria. Porem ainda tenho pouco dominio sobre esta",
        
        // PHP 
        "PHP foi uma linguagem que estudei no meu 2º e 3º ano na ETEC e que continuo utilizando até hoje, meu ultimo projeto utilizando esta linguagem foi uma chamada digital para a equipe de jiu-jitsu a qual faço parte.",
        
        // Ingles 
        "Estudei a lingua inglesa por 7 anos na escola de inglês renomada, chamada: Calenglish. Tendo assim um certificado de conclusão de curso.",
        
        // Informatica 
        "Tenho lembranças de estudar e aprender mais sobre informatica desde os meus 6/7 anos com ajuda do meu tio que trabalhava com isso, dentro da ETEC tive mais estudo no 1º ano e com tempo pude aprimorar ainda mais, tendo eu mesmo montado meu computador com qual fiz todo este portfólio e grande parte dos meus projetos e tambem sou eu quem faz toda manutenção da maquina.",
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
        "Inglês",
        "Informatica",
    ];
    
    let index = element.getAttribute("data-value");
    document.getElementById("desc-text").innerText = texts[index];
    document.getElementById("desc-name").innerText = names[index];
}

function goBack(){
    let text = "Aqui vai aparecer minha historia com essa linguagem, se desenvolvi projetos e a quanto tempo estudo/trabalho com ela.";
    let name = "";

    document.getElementById("desc-text").innerText = text;
    document.getElementById("desc-name").innerText = name;
}