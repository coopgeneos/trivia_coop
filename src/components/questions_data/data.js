const topics = [{
    question: 'Elegi un tema sobre el cual te gustaria contestar/aprender algo',
    answers: [
        'Cooperativismo',
        'Lenguajes de programación',
        'Software Libre',
    ],
}]

// Lenguajes de programación:
const topic1 = [{
  question: '¿En que capa se ejecuta PHP?',
  answers: [
    'Cliente',
    'Servidor',
    'Servidor y Cliente',
    'Persistencia'
  ],
  correct: 1
}, {
  question: '¿En que capa se ejecuta JavaScript?',
  answers: [
    'Cliente',
    'Servidor',
    'Servidor y Cliente',
    'Persistencia'
  ],
  correct: 2
}, {
  question: '¿En que capa se ejecuta PYTHON?',
  answers: [
    'Cliente',
    'Servidor',
    'Servidor y Cliente',
    'Persistencia'
  ],
  correct: 1
}, {
  question: '¿En que capa se ejecuta SQL?',
  answers: [
    'Cliente',
    'Servidor',
    'Servidor y Cliente',
    'Persistencia'
  ],
  correct: 3
}, {
  question: '¿Cuál de los siguientes NO es un motor de base de datos?',
  answers: [
    'MySQL',
    'PostgreSQL',
    'NodeJS',
    'MongoDB'
  ],
  correct: 2
}, {
  question: '¿Cuál de los siguientes NO es lenguaje interpretado?',
  answers: [
    'PHP',
    'Python',
    'JavaScript',
    'Java'
  ],
  correct: 3
}, {
  question: '¿Cuál de los siguientes NO es lenguaje compilado?',
  answers: [
    'Python',
    'Java',
    'Pascal',
    'C++'
  ],
  correct: 0
}, {
  question: '¿Cuál fue el lenguaje mas utilizado profesionalmente en 2022?',
  answers: [
    'Python',
    'Java',
    'JavaScript',
    'GoLang'
  ],
  correct: 0
}, {
  question: '¿Cuál fue el lenguaje mas utilizado profesionalmente en 2020?',
  answers: [
    'Python',
    'Java',
    'JavaScript',
    'C++'
  ],
  correct: 1
}, {
  question: '¿Cuál fue el primer lenguaje de programación?',
  answers: [
    'ALGOL',
    'FORTRAN',
    'LISP',
    'COBOL'
  ],
  correct: 1
}, {
  question: '¿Cuál de los siguientes lenguajes NO es tipado??',
  answers: [
    'Java',
    'Pascal',
    'C++',
    'PHP'
  ],
  correct: 3
}, {
  question: '¿En qué año se creó el primer lenguaje de programación?',
  answers: [
    '1957',
    '1961',
    '1963',
    '1965'
  ],
  correct: 0
}, {
  question: '¿Cuál de los siguientes lenguajes es tipado?',
  answers: [
    'Java',
    'JavaScript',
    'Python',
    'PHP'
  ],
  correct: 0
}];

// Cooperativismo

const topic2 = [{
  question: 'La fuerza de trabajo en una cooperativa de trabajo son:',
  answers: [
    'Sus trabajadores/as',
    'Sus dueños',
    'Sus asociados',
    'Todas la anteriores'
  ],
  correct: 3
}, {
  question: 'La toma de decisiones en una cooperativa de trabajo es tomada por:',
  answers: [
    'Sus trabajadores/as',
    'Sus dueños',
    'Sus asociados',
    'Todas la anteriores'
  ],
  correct: 3
}, {
  question: 'Los servicios de una cooperativa de trabajo son mas baratos que los de una empresa tradicional:',
  answers: [
    'Verdadero',
    'Falso'
  ],
  correct: 1
},/* {
  question: 'La organización en una cooperativa de trabajo es:',
  answers: [
    'Horizontal',
    'Vertical'
  ],
  correct: 3
}, */{
  question: 'La propiedad de una cooperativa de trabajo es de:',
  answers: [
    'Sus accionistas',
    'Sus fundadores/as',
    'Todos/as sus trabajadores/as',
    'De quien la compro'
  ],
  correct: 2
}, {
  question: 'En una cooperativa de trabajo, ¿que relación hay entre los/las trabajadores/as y los/as asociados/as?',
  answers: [
    'Ninguna',
    'Los/as asociados/as manejan a los/las trabajadores/as',
    'Son lo mismo'
  ],
  correct: 2
}, {
  question: 'Una cooperativa de trabajo depende del estado',
  answers: [
    'Verdadero',
    'Falso'
  ],
  correct: 1
}, {
  question: 'El peso del voto de un/a asociado/a durante la toma de decisiones en una cooperativa es:',
  answers: [
    'Según antiguedad',
    'Según cargo',
    'El voto de todos/as vale lo mismo',
    'Según capital aportado'
  ],
  correct: 2
}, {
  question: '¿Que hacen las cooperativas de trabajo con su excedente economico?',
  answers: [
    'Lo guardan',
    'Lo reparten',
    'Se decide colectivamente'
  ],
  correct: 2
}, {
  question: '¿Cómo reparten las cooperativas de trabajo su excedente economico?',
  answers: [
    'En partes iguales',
    'Equitativamente',
    'Según lo trabajado',
    'Cada cooperativa reglamenta su reparto de excedentes'
  ],
  correct: 3
}];

// Software Libre
const topic3 = [{
  question: '¿Cuál de las siguientes libertades NO es la de un software libre?',
  answers: [
    'Libertad de estudiar el código',
    'Libertad de acceder al código',
    'Libertad de modificar el código',
    'Libertad de modificar su licencia'
  ],
  correct: 3
}, {
  question: 'El software libre no tiene licencia',
  answers: [
    'Verdadero',
    'Falso'
  ],
  correct: 1
}, {
  question: '¿Cómo se puede ganar dinero a través del software libre?',
  answers: [
    'Vendiendo su implementacion',
    'Ofreciendo un servicio en torno al mismo',
    'Niguna',
    'Ambas'
  ],
  correct: 3
}, {
  question: 'Con el software libre no se puede ganar dinero',
  answers: [
    'Falso',
    'Verdadero'
  ],
  correct: 0
}, {
  question: '¿Cuál de las siguientes libertades NO es la de un software libre?',
  answers: [
    'Libertad de ejecutar el programa como se desee, con cualquier propósito',
    'Libertad de acceder al código y estudiarlo, sin modificarlo',
    'Libertad de distribuir copias para ayudar a otros',
    'Libertad de distribuir copias modificadas a terceros'
  ],
  correct: 1
}, {
  question: '¿Cuál de las siguientes libertades NO es la de un software libre?',
  answers: [
    'Libertad de ejecutar el programa como se desee, con cualquier propósito',
    'Libertad de acceder al código, estudiarlo y modificarlo',
    'Libertad de distribuir copias para ayudar a otros',
    'Libertad de vender cualquier cantidad de licencias'
  ],
  correct: 3
}, {
  question: 'Cuál es el número de libertades que tiene el Software Libre?',
  answers: [
    '2',
    '3',
    '4',
    '5',
  ],
  correct: 2
}, {
  question: '¿Que hacen las cooperativas de trabajo con su excedente economico?',
  answers: [
    'Lo guardan',
    'Lo reparten',
    'Se decide colectivamente'
  ],
  correct: 2
}, {
  question: 'Unix es:',
  answers: [
    'Una Marca',
    'Un sistema operativo',
    'Una empresa',
    'Un Juego'
  ],
  correct: 1
}, {
  question: '¿Cual de los siguientes sistemas operativos no esta basado en UNIX',
  answers: [
    'Linux',
    'MacOS',
    'Android',
    'Windows'
  ],
  correct: 3
}, {
  question: 'Software libre es lo mismo que Software gratis',
  answers: [
    'Verdadero',
    'Falso',
  ],
  correct: 1
}, {
  question: '¿Cómo se llama el software que no es libre?',
  answers: [
    'Preso',
    'Privativo',
    'Priviligiado',
    'Capitalista'
  ],
  correct: 1
}];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function _generateData() {
    const questionTopic1 = {...topic1[getRandomInt(topic1.length - 1)], topic: "Lenguajes de programación"};
    const questionTopic2 = {...topic2[getRandomInt(topic2.length - 1)], topic: "Cooperativismo"};
    const questionTopic3 = {...topic3[getRandomInt(topic3.length - 1)], topic: "Software Libre"};


    return [questionTopic1, questionTopic2, questionTopic3]
}

module.exports = {
    generateData: _generateData()
}
