const inicio = document.getElementById('inicio');
const inicioBtnHombre = document.getElementById('inicio-botón-hombre');
const inicioBtnMujer = document.getElementById('inicio-botón-mujer');
const aplicación = document.getElementById('aplicación');
const cerrar = document.getElementById('cerrar');
const aplicaciónTexto = document.getElementById('aplicación-texto');
const aplicaciónBtnHombre = document.getElementById('aplicación-botón-hombre');
const aplicaciónBtnMujer = document.getElementById('aplicación-botón-mujer');



function obtenerElementoAleatorio(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}


function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
}


const apellidos = ["García","Rodríguez","González","Fernández","López","Martínez","Sánchez","Pérez","Gómez",
"Martín","Jiménez","Hernández","Ruiz","Díaz","Moreno","Muñoz",
"Álvarez","Romero","Gutiérrez","Alonso","Navarro","Torres",
"Domínguez","Ramos","Vázquez","Ramírez","Gil","Serrano",
"Morales","Molina","Blanco","Suárez","Castro","Ortega",
"Delgado","Ortiz","Marín","Rubio","Núñez","Sanz","Medina",
"Iglesias","Castillo","Cortés","Garrido","Santos","Guerrero",
"Lozano","Cano","Méndez","Cruz","Prieto","Flores","Herrera",
"Peña","León","Márquez","Cabrera","Gallego","Calvo","Vidal",
"Campos","Reyes","Vega","Fuentes","Carrasco","Díez","Aguilar",
"Caballero","Nieto","Santana","Pascual","Herrero","Vargas",
"Giménez","Montero","Hidalgo","Lorenzo","Santiago","Ibáñez",
"Durán","Benítez","Ferrer","Arias","Mora","Carmona","Vicente",
"Rojas","Soto","Crespo","Román","Pastor","Velasco","Parra",
"Sáez","Moya","Bravo","Soler","Gallardo","Rivera","Esteban",
"Pardo","Silva","Franco","Rivas","Lara","Merino","Espinosa",
"Camacho","Mendoza","Vera","Izquierdo","Rios","Arroyo","Casado",
"Sierra","Redondo","Luque","Montes","Rey","Galán","Carrillo",
"Otero","Segura","Heredia","Marcos","Bernal","Soriano","Robles",
"Martí","Palacios","Valero","Contreras","Vila","Macías","Guerra",
"Varela","Pereira","Expósito","Miranda","Roldán","Benito","Mateo",
"Bueno","Andrés","Guillén","Villar","Aguilera","Escudero","Salazar",
"Mateos","Acosta","Padilla","Calderón","Rivero","Casas","Aparicio",
"Guzmán","Beltrán","Estévez","Salas","Gálvez","Bermúdez","Menéndez","Rico",
"Jurado","Conde","Quintana","Aranda","Plaza","Abad","Gracia","Ávila",
"Hurtado","Trujillo","Blázquez","Escobar","Pacheco","Manzano",
"Santamaría","Villanueva","Costa","Roca","Rueda","Serra","Cuesta",
"Miguel","Mesa","Tomás","Luna","de la Fuente","Simón","Castaño",
"Alarcón","del Río","Zamora","Maldonado","Millán","Lázaro","Pons","Paredes","Sancho","Montoya","Bautista","Blasco","Salvador",
"Ponce","Bermejo","Ballesteros","de la Cruz","Valverde","Oliva","Valle",
"Murillo","Cordero","Antón","Cuevas","Lorente","Amador","Ordóñez",
"Valencia","Pozo","Rodrigo","Barrera","Collado","Cuenca","Martos","Más",
"Juan","Barroso","Quesada","de la Torre","Pulido","Navas","Ros","Arenas",
"Marco","Alba","Cabello","Mena","Galindo","Corral","Soria","Vallejo",
"Rojo","Aguirre","Caro","Gimeno","Aguado","Paz","Escribano","Puig",
"Naranjo","Saiz","Lucas","Villalba","Linares","Domingo","Mata","Asensio",
"Reina","Polo","Ojeda","Ramón","Morán","Leal","Bonilla","Sosa","Burgos",
"Cárdenas","Cáceres","Carretero","Correa","Zapata","Chacón","Aragón",
"Óliver","Córdoba","Carrión","Castellano","Quintero","Pineda","Villa",
"Rosa","Saavedra","Calero","Clemente","Velázquez","Juárez","Roig",
"Carrera","Toledo","Ayala","Alcaraz","Hernando","Andreu","Barrios", 
'Villegas','Cobo','Salgado','Ferreira']

const nombresHombre = ["Antonio","Manuel","José","Francisco","David","Juan",
"Javier","José Antonio","Daniel","Francisco Javier","José Luis","Carlos",
"Jesús","Alejandro","Miguel","José Manuel","Rafael","Miguel Ángel",
"Pablo","Pedro","Ángel","Sergio","José María","Fernando","Jorge","Luis",
"Alberto","Álvaro","Juan Carlos","Adrián","Diego","Juan José",
"Raúl","Iván","Juan Antonio","Rubén","Enrique","Óscar","Ramón",
"Andrés","Juan Manuel","Vicente","Santiago","Joaquín","Mario",
"Víctor","Eduardo","Roberto","Jaime","Francisco José","Marcos",
"Hugo","Ignacio","Jordi","Alfonso","Ricardo","Salvador","Guillermo",
"Marc","Gabriel","Emilio","Gonzalo","Martín","José Miguel","Julio",
"Julián","Tomás","Nicolás","Agustín","José Ramón","Samuel","Ismael",
"Cristian","Lucas","Joan","Félix","Aitor","Héctor","Iker","Álex",
"Juan Francisco","José Carlos","Josep","Sebastián","César","Mariano",
"Alfredo","Domingo","Mateo","José Ángel","Rodrigo","Víctor Manuel",
"Felipe","José Ignacio","Luis Miguel","José Francisco","Xavier",
"Juan Luis","Albert","Pau","Gregorio","Aaron","Antonio José",
"Lorenzo","Izan","Borja","Eric","Esteban","Arturo","Cristóbal",
"Joel","Isaac","José Javier","Asier","Antonio Jesús",
"Juan Miguel","Francisco Manuel","Darío","Eugenio","Jesús María",
"Bruno","Jaume","Leo","Unai","Abel","Marco","Germán","Jonathan",
"Pedro José","Mikel","José Vicente","Sergi","Valentín","Moisés",
"Christian","Omar","Juan Ramón","Pol","Íñigo","Jon","Gerard",
"Manuel Jesús","Juan Pedro","Adolfo","Arnau","Adam","Israel",
"Oriol","Ernesto","Miquel","Antonio Manuel","Isidro","Jonatan",
"Eloy","Bernardo","Gerardo","Óliver","Benito","Carmelo","Federico",
"José Alberto","Jesús Manuel","Francesc","Luis Alberto",
"Alonso","Saúl","Juan Jesús","Pascual","Roger","Kevin","Elías",
"Matías","Erik","Juan Pablo","Iñaki","Josep María","Carles","Ander",
"Enzo","Benjamín","Bartolomé","Guillem","Alexander","Carlos Alberto",
"Marco Antonio","Pere","Pedro Antonio","Lluís","Fermín","José Enrique",
"Antoni","Marcelino","Abraham","Julen","Ángel Luis","Juan Ignacio",
"Aleix","Francisco Jesús","Xabier","Aurelio","Gorka","Ferrán",
"Luis Fernando","Gustavo","Leonardo","Román","Jerónimo","Jan",
"Yeray","Manuel Ángel","José Juan","Luis Manuel","Jacinto","Damián",
"Carlos Javier","Eusebio","José David","Ian","Pedro Luis",
"Victoriano","Enric","Armando","Isidoro","Juan Bautista","Jairo",
"Eneko","Blas","Eduard","José Joaquín","Ginés","Julio César",
"Teodoro","Biel","Santos","Dionisio","Juan María","Edgar",
"Cándido","Justo","Nil","Francisco Antonio","Luca","Florencio",
"Dylan","Gael","Emilio José","José Andrés","Simón","Luis Antonio",
"Emiliano","Luis Ángel","Jesús Ángel","Máximo","Jacobo","Serafín",
"Alexis","Luis María","Thiago","Igor","Ezequiel","Faustino","Yago",
"Alexandre","Fidel","Ramiro","Claudio","Manuel Antonio",
"Francisco Miguel","Juan Diego","Amador","Pedro Manuel",
"Andreu","Jorge Luis","Ibai","Mauro","José Daniel","José Fernando",
"Rayan","Rogelio","Ion","Iago","Luciano","Aritz","Juan Dios",
"Carlos Manuel","Juan Andrés","Joaquim","Juan Vicente",
"Manuel José","Antonio Javier","Cayetano","Josué","Leandro","Ildefonso"
]

const nombresMujer = ["María Carmen","María","Carmen","Ana María",
"María Pilar","Laura","Josefa","Isabel","María Dolores",
"María Teresa","Ana","Marta","Cristina","María Ángeles",
"Lucía","María Isabel","María Jose","Francisca","Antonia",
"Dolores","Sara","Paula","Elena","María Luisa","Raquel",
"Rosa María","Manuela","Pilar","Concepción","María Jesús",
"Mercedes","Julia","Beatriz","Alba","Sílvia","Nuria","Irene",
"Rosario","Patricia","Juana","Teresa","Encarnación","Andrea",
"Rocío","Montserrat","Mónica","Alicia","María Mar","Sandra","Sonia",
"Marina","Rosa","Ángela","Susana","Natalia","Yolanda","Margarita",
"Sofía","Claudia","María Josefa","Eva","Carla","María Rosario",
"Inmaculada","María Mercedes","Ana Isabel","Noelia","Esther",
"Verónica","Nerea","Carolina","Daniela","Inés","Eva María",
"María Victoria","Ángeles","Míriam","Lorena","María Rosa",
"Ana Belén","María Elena","Martina","Victoria","María Concepción",
"Amparo","Alejandra","María Antonia","Lidia","Celia","Catalina",
"María Nieves","Fátima","Ainhoa","Olga","Consuelo","Clara",
"Gloria","María Cristina","María Soledad","Adriana","Emilia",
"Anna","Aurora","Vanesa","Virginia","Luisa","Esperanza","Blanca",
"María Luz","Milagros","Josefina","Lourdes","Valeria","Emma",
"María Belén","Purificación","Isabel María","Estefanía","Begoña",
"Laia","Gema","María Begoña","Elisa","Noa","María Asunción",
"María Lourdes","Belén","María Esther","María Paz","Tamara",
"Magdalena","Araceli","Ariadna","Valentina","Aitana","Rebeca",
"Matilde","Paloma","Mireia","Gemma","Remedios","Almudena","Asunción",
"Vanessa","Elvira","Carlota","María Inmaculada","Soledad","Noemí",
"Vicenta","Trinidad","Natividad","María Cruz","Tania","María Eugenia",
"Leire","María Amparo","Diana","Lara","Ascensión","Jessica",
"Ainara","Nieves","Rafaela","Adela","María Rocío","Carmen María",
"Juana María","Felisa","Candela","Amelia","Amalia","Elisabet",
"Leticia","Aroa","Leonor","Bárbara","Mariana","Gabriela","Lola",
"Judith","Ester","Ramona","Guadalupe","Jimena","Berta","Sheila",
"Cecilia","Joaquina","Nora","María Magdalena","Jennifer","Judit",
"Alexandra","Helena","María Encarnación","Estrella","Juliana",
"Rosalía","Nadia","Olivia","Soraya","María Francisca","Ruth",
"Elsa","Agustina","Petra","María Montserrat","María Yolanda",
"Erika","Naiara","María Gloria","Adoración","María Milagros",
"Paola","María Consuelo","Mar","Aina","Leyre","Aida","Alma",
"África","Macarena","Estela","Vega","Amaia","Vera","Yaiza",
"Tatiana","Elisabeth","Abril","María Remedios","María Reyes",
"Eugenia","Saray","Eulalia","Iria","Amanda","María Aranzazu",
"Iris","Itziar","María Trinidad","Herminia","Joana","Aranzazu",
"María Esperanza","Ane","Maite","Enriqueta","María Fernanda",
"Piedad","Mirian","Florentina","Ana Rosa","Elizabeth","Meritxell",
"Desirée","Gregoria","Antonia María","Neus","Violeta","María Sol",
"Aurelia","Rita","Salma","María Inés","María Julia","Triana",
"Cándida","Elia","Amaya","Chloe","Merce","Lydia","Alba María",
"Jana","Caridad","Irina","Esmeralda","Nayara","Luna","Sagrario",
"Irati","Roser","Ana Cristina","María Manuela","Mía","María Candelaria",
"María Gracia","Gisela","Águeda","María Ascensión","Alexia",
"Aya","Aicha","Consolación","Naima","Ángela María","Adelina"]


const nombresLugares = ["Ceuta","Melilla","La Coruña","Pontevedra","Lugo","Orense",
"Oviedo","Santander","Vizcaya","Álava","Guipúzcoa","Pamplona",
"Huesca","Lérida","Tarragona","Barcelona","Gerona","León","Palencia",
"Burgos","Logroño","Zamora","Valladolid","Segovia","Ávila","Soria",
"Salamanca","Zaragoza","Teruel","Madrid","Guadalajara","Cuenca",
"Toledo","Ciudad Real","Castellón","Valencia","Alicante","Cáceres",
"Badajoz","Huelva","Sevilla","Córdoba","Jaén","Cádiz","Málaga",
"Granada","Almería","Baleares","Canarias"]

function crearPersona(sexo, display){
    
    let sexoNombre

    if(sexo === 'm'){
        shuffle(nombresHombre)
        sexoNombre = obtenerElementoAleatorio(nombresHombre)
    }
    else{
        shuffle(nombresMujer)
        sexoNombre = obtenerElementoAleatorio(nombresMujer)
    }

    if(display === 'sí'){
        inicio.style.display = 'none'
        aplicación.style.display = 'block'
    }

    
    shuffle(apellidos)
    shuffle(nombresLugares)
    let primerApellido = obtenerElementoAleatorio(apellidos)
    let segundoApellido = obtenerElementoAleatorio(apellidos)
    let lugar = obtenerElementoAleatorio(nombresLugares)
    
    aplicaciónTexto.innerHTML = `
        <h3>Hello!</h3>
        <h3> I am <span class='v'>${sexoNombre}</span> <span class='v'>${primerApellido}</span> <span class='v'>${segundoApellido}</span>.</h3>
        <h3> I live in <span class='v'>${lugar}</span>.</h3>       
    `
    }


cerrar.addEventListener('click', ()=>{
    aplicación.style.display = 'none';
    inicio.style.display = 'block';
})

inicioBtnHombre.addEventListener('click', ()=>{
    crearPersona('m', 'sí')
})
inicioBtnMujer.addEventListener('click', ()=>{
    crearPersona('f', 'sí')
})
aplicaciónBtnHombre.addEventListener('click', ()=>{
    crearPersona('m', 'no')
})
aplicaciónBtnMujer.addEventListener('click', ()=>{
    crearPersona('f', 'no')
})
