const questions = [
    {
        question: "O comportamentalismo aceita os aspectos que não podem ser aprendidos: os subjetivos, internos e (ou) fenomenológicos.",
        options: ["Certo", "Errado"],
        correct: 1
    },
    {
        question: "I. A psicologia evolutiva constitui-se simplesmente na psicologia que leva em consideração os conhecimentos adicionais que a biologia da evolução tem a oferecer, na expectativa de que a compreensão do processo que moldou a mente humana impulsionará a descoberta de sua arquitetura.\nII. O Behaviorismo Radical é uma abordagem psicológica. É uma concepção filosófica que fornece as bases epistemológicas para a ciência do comportamento. A abordagem psicológica com base na filosofia do behaviorismo radical é a análise do comportamento",
        options: ["As duas afirmativas são verdadeiras.", "A afirmativa I é verdadeira, e a II é falsa.", "A afirmativa II é verdadeira, e a I é falsa.", "As duas afirmativas são falsas."],
        correct: 1
    },
    {
        question: "Skinner, psicólogo behaviorista, dedicou-se ao estudo do processo de aprendizagem. Considerando os conceitos trazidos pelo autor, comportamento operante é:",
        options: [
            "O comportamento emitido espontânea ou voluntariamente que atua no ambiente para modificá-lo.",
            "Uma forma de resposta automática e involuntária do organismo a determinados estímulos do ambiente.",
            "Um comportamento inato e inerente à espécie humana. Não precisa ser aprendido e é comum em animais.",
            "Um comportamento que fornece uma resposta involuntária a estímulos externos.",
            "Um comportamento que ocorre quando o sujeito aprende ao observar o comportamento de outros."
        ],
        correct: 0
    },
    {
        question: "I. Segundo Skinner, desde tempos remotos, a técnica de controle de comportamento mais comumente utilizada é a punição, seja na forma de castigo físico, seja psicológico. Skinner se mostra a favor da punição, mesmo entendendo que esta, ao contrário do reforço, funciona com desvantagem para aquele que é punido e também para quem o pune.\nII. Reações na escola, como falta de atenção, esquecimento do que aprendeu, evasão e vandalismo, anti-intelectualíssimo são, em sua maioria, respostas ao controle aversivo. A punição gera produtos colaterais, como medo, angústia, depressão, doenças psicossomáticas, submissão, entre outros, além da adoção de mecanismos comportamentais de evitação e fuga.",
        options: ["As duas afirmativas são verdadeiras.", "A afirmativa I é verdadeira, e a II é falsa.", "A afirmativa II é verdadeira, e a I é falsa.", "As duas afirmativas são falsas."],
        correct: 2
    },
    {
        question: "Para Skinner, a Educação é entendida como uma instituição social que busca o “estabelecimento de comportamentos que serão vantajosos para o indivíduo e para outros em algum tempo futuro. Na definição de Skinner, o ensino é entendido como o arranjo de contingências para procedimentos e conteúdo a serem ensinados.",
        options: ["Certo", "Errado"],
        correct: 0
    },
    {
        question: "Skinner identifica três esferas causais no comportamento: filogenético (aprendizado por interações ambientais e condicionamento), ontogenético (traços genéticos evolução da espécie) e cultural (modelação comportamental através de imitação e normas sociais).",
        options: ["Certo", "Errado"],
        correct: 1
    },
    {
        question: "Assinale a alternativa CORRETA, conforme o referencial da análise do comportamento.",
        options: [
            "Skinner propôs a ciência Análise do Comportamento, também conhecida como behaviorismo radical.",
            "O behaviorismo radical nega a possibilidade da auto-observação.",
            "Skinner defende o controle do ambiente e, por isso, adota o mentalismo como Explicação.",
            "O behaviorismo radical é a filosofia da ciência Análise do Comportamento.",
            "O behaviorismo radical insiste na verdade enquanto consenso e rejeita os Eventos privados."
        ],
        correct: 3
    },
    {
        question: "No estudo da psicologia, especialmente na análise do comportamento, dois conceitos são frequentemente abordados: o comportamento operante e o comportamento respondente. Sobre esses conceitos, assinale a alternativa correta:",
        options: [
            "O comportamento operante é voluntário e tem efeito sobre o mundo, enquanto o comportamento respondente é eliciado por estímulos antecedentes do ambiente.",
            "O comportamento respondente é eliciado por estímulos antecedentes do ambiente.",
            "O comportamento operante e o comportamento respondente são ambos eliciados por estímulos antecedentes do ambiente.",
            "O comportamento respondente opera sobre o mundo e é considerado voluntário.",
            "O comportamento operante é geralmente uma resposta involuntária a estímulos externos, como o arrepio da pele em um ambiente frio."
        ],
        correct: 0
    },
    {
        question: "A análise do comportamento, uma clássica teoria da Psicologia, preocupada com o tema e métodos da Psicologia, dedica-se ao estudo das interações entre indivíduo e o meio ambiente. Como nomeamos a técnica da análise do comportamento utilizada com base na generalização respondente e que consiste na divisão do processo de extinção em pequenos passos?",
        options: [
            "Comportamento operante.",
            "Dessensibilização sistemática.",
            "Treino discriminativo.",
            "Esquema de reforçamento intermitente.",
            "Esquema de reforçamento contínuo."
        ],
        correct: 1
    },
    {
        question: "Correlacione (1) para punição ou (2) Para Extinção.\n(__) resposta deixa abruptamente de ser reforçada.\n(__) Apresentação de estímulo aversivo.\n(__) O tempo para que a resposta deixe de ser emitida depende da história e do valor do reforço envolvido.\n(__) Remoção de reforço positivo presente.",
        options: [
            "1, 2, 1, 2.",
            "2, 2, 2, 1.",
            "2, 1, 1, 2.",
            "1, 1, 2, 1."
        ],
        correct: 0
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `Questão ${index + 1}: ${q.question}`;
        questionDiv.appendChild(questionText);

        q.options.forEach((option, i) => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = i;
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            questionDiv.appendChild(optionLabel);
            questionDiv.appendChild(document.createElement('br'));
        });

        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    const incorrectDetails = [];

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected) {
            if (parseInt(selected.value) === q.correct) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
                incorrectDetails.push({
                    question: q.question,
                    selected: q.options[selected.value],
                    correct: q.options[q.correct]
                });
            }
        } else {
            incorrectAnswers++;
            incorrectDetails.push({
                question: q.question,
                selected: "Não respondida",
                correct: q.options[q.correct]
            });
        }
    });

    displayResults(correctAnswers, incorrectAnswers, incorrectDetails);
}

function displayResults(correct, incorrect, details) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<p>Você acertou ${correct} e errou ${incorrect} questões.</p>`;
    details.forEach(detail => {
        quizContainer.innerHTML += `<p>Questão: ${detail.question}<br> Sua resposta: ${detail.selected}<br> Resposta correta: ${detail.correct}</p>`;
    });
    const restartButton = document.createElement('button');
    restartButton.textContent = "Retornar à página inicial";
    restartButton.onclick = () => window.location.href = 'index.html';
    quizContainer.appendChild(restartButton);
}

window.onload = loadQuiz;
