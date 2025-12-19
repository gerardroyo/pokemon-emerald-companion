// Complete move data for Generation 3 with descriptions and categories
export const moveData = {
    // Normal type moves
    "Placaje": { type: "Normal", category: "Físico", power: 40, accuracy: 100, desc: "Embiste al objetivo con todo el cuerpo." },
    "Imagen": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Crea copias ilusorias que aumentan la Evasión." },
    "Derribo": { type: "Normal", category: "Físico", power: 90, accuracy: 100, desc: "Placaje potente que también daña al atacante." },
    "Golpe Cuerpo": { type: "Normal", category: "Físico", power: 85, accuracy: 100, desc: "Golpe con todo el cuerpo. Puede paralizar." },
    "Ataque Rápido": { type: "Normal", category: "Físico", power: 40, accuracy: 100, desc: "Ataque veloz que siempre golpea primero." },
    "Rapidez": { type: "Normal", category: "Especial", power: 60, accuracy: 100, desc: "Lanza estrellas que nunca fallan." },
    "Otra Vez": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Obliga al rival a repetir su último movimiento." },
    "Finta": { type: "Siniestro", category: "Físico", power: 60, accuracy: 100, desc: "Ataque que ignora Protección y Detección." },
    "Cuchillada": { type: "Normal", category: "Físico", power: 70, accuracy: 100, desc: "Corte con garras. Alta prob. de golpe crítico." },
    "Hiperrayo": { type: "Normal", category: "Especial", power: 150, accuracy: 90, desc: "Rayo devastador. Requiere recarga después." },
    "Doble Filo": { type: "Normal", category: "Físico", power: 120, accuracy: 100, desc: "Ataque temerario que daña mucho al usuario." },
    "Sónico": { type: "Normal", category: "Especial", power: null, accuracy: 100, desc: "Onda sónica que causa daño fijo de 20 PS." },
    "Supersónico": { type: "Normal", category: "Estado", power: null, accuracy: 55, desc: "Ondas que confunden al objetivo." },
    "Salpicar": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "No hace absolutamente nada." },
    "Rizo Defensa": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Se enrosca para subir la Defensa." },
    "Fortaleza": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Tensa los músculos para subir la Defensa." },
    "Bloqueo": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Impide que el objetivo huya o sea cambiado." },
    "Malicioso": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Mirada intimidante que baja la Defensa rival." },
    "Aullido": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Aúlla para subir el Ataque Especial." },
    "Atracción": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Enamora al rival si es de sexo opuesto." },
    "Doble Equipo": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Crea copias para aumentar la Evasión." },
    "Protección": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Evita todos los ataques ese turno." },
    "Velo Sagrado": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Protege al equipo de estados alterados." },
    "Danza Caos": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Danza que sube Ataque pero confunde." },
    "Tambor": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Maximiza Ataque a costa de PS." },
    "Relajo": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "No hace nada. Habilidad Ausente lo usa." },
    "Bostezo": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Hace bostezar al rival. Dormirá el siguiente turno." },
    "Contoneo": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Sube el Ataque rival pero lo confunde." },
    "Rugido": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Asusta al rival y lo cambia por otro." },
    "Beso Dulce": { type: "Normal", category: "Estado", power: null, accuracy: 75, desc: "Beso que confunde al objetivo." },
    "Recuperación": { type: "Normal", category: "Estado", power: null, accuracy: 100, desc: "Recupera la mitad de los PS máximos." },
    "Explosión": { type: "Normal", category: "Físico", power: 250, accuracy: 100, desc: "Explosión masiva. El usuario se debilita." },
    "Autodestrucción": { type: "Normal", category: "Físico", power: 200, accuracy: 100, desc: "Explosión que debilita al usuario." },

    // Fuego
    "Lanzallamas": { type: "Fuego", category: "Especial", power: 95, accuracy: 100, desc: "Lanza llamas intensas. Puede quemar." },
    "Sofoco": { type: "Fuego", category: "Especial", power: 140, accuracy: 90, desc: "Ataque devastador que baja At. Esp. propio." },
    "Fuego Fatuo": { type: "Fuego", category: "Estado", power: null, accuracy: 75, desc: "Fuego fantasmal que quema al objetivo." },
    "Día Soleado": { type: "Fuego", category: "Estado", power: null, accuracy: 100, desc: "Intensifica el sol. Potencia ataques de Fuego." },

    // Agua
    "Surf": { type: "Agua", category: "Especial", power: 95, accuracy: 100, desc: "Gran ola que golpea a todos en combate." },
    "Hidropulso": { type: "Agua", category: "Especial", power: 60, accuracy: 100, desc: "Onda de agua. Puede confundir." },
    "Hidrobomba": { type: "Agua", category: "Especial", power: 120, accuracy: 80, desc: "Potente chorro de agua a presión." },
    "Buceo": { type: "Agua", category: "Físico", power: 60, accuracy: 100, desc: "Se sumerge y ataca en el siguiente turno." },
    "Cascada": { type: "Agua", category: "Físico", power: 80, accuracy: 100, desc: "Carga con una cascada. Puede hacer retroceder." },
    "Azote": { type: "Normal", category: "Físico", power: null, accuracy: 100, desc: "Más daño cuanto menos PS tenga el usuario." },
    "Danza Lluvia": { type: "Agua", category: "Estado", power: null, accuracy: 100, desc: "Invoca lluvia. Potencia ataques de Agua." },

    // Eléctrico
    "Rayo": { type: "Eléctrico", category: "Especial", power: 95, accuracy: 100, desc: "Descarga eléctrica potente. Puede paralizar." },
    "Onda Trueno": { type: "Eléctrico", category: "Estado", power: null, accuracy: 100, desc: "Onda eléctrica que paraliza al objetivo." },
    "Chispa": { type: "Eléctrico", category: "Físico", power: 65, accuracy: 100, desc: "Placaje eléctrico. Puede paralizar." },
    "Onda Voltio": { type: "Eléctrico", category: "Especial", power: 60, accuracy: 100, desc: "Descarga eléctrica que siempre paraliza." },

    // Planta
    "Giga Drenado": { type: "Planta", category: "Especial", power: 60, accuracy: 100, desc: "Absorbe PS del rival. Cura la mitad del daño." },
    "Rayo Solar": { type: "Planta", category: "Especial", power: 120, accuracy: 100, desc: "Carga luz solar y ataca. Instantáneo con sol." },
    "Drenadoras": { type: "Planta", category: "Estado", power: null, accuracy: 100, desc: "Planta semillas que drenan PS cada turno." },
    "Espora Alg.": { type: "Planta", category: "Estado", power: null, accuracy: 75, desc: "Esparce esporas que bajan la Velocidad." },
    "Brazo Pincho": { type: "Planta", category: "Físico", power: 60, accuracy: 100, desc: "Golpea con brazo espinoso. Alta prob. crítico." },
    "Espora": { type: "Planta", category: "Estado", power: null, accuracy: 100, desc: "Esparce esporas que duermen al objetivo." },

    // Hielo
    "Rayo Hielo": { type: "Hielo", category: "Especial", power: 95, accuracy: 100, desc: "Rayo helado que puede congelar al rival." },
    "Rayo Aurora": { type: "Hielo", category: "Especial", power: 65, accuracy: 100, desc: "Velo helado multicolor. Puede congelar." },
    "Ventisca": { type: "Hielo", category: "Especial", power: 120, accuracy: 70, desc: "Tormenta de nieve brutal. Puede congelar." },
    "Bola Hielo": { type: "Hielo", category: "Físico", power: 30, accuracy: 90, desc: "Bola de hielo que incrementa poder cada turno." },
    "Frío Agudo": { type: "Hielo", category: "Especial", power: null, accuracy: 30, desc: "Ataque que debilita de un golpe si acierta." },
    "Granizo": { type: "Hielo", category: "Estado", power: null, accuracy: 100, desc: "Invoca granizo que daña a no-Hielo." },

    // Lucha
    "Patada Baja": { type: "Lucha", category: "Físico", power: 65, accuracy: 100, desc: "Patada baja. Más daño a rivales pesados." },
    "Karate-choque": { type: "Lucha", category: "Físico", power: 50, accuracy: 100, desc: "Golpe certero con alta prob. de crítico." },
    "Mov. Sísmico": { type: "Lucha", category: "Físico", power: null, accuracy: 100, desc: "Lanza al rival. Daño igual al nivel del usuario." },
    "Puño Certero": { type: "Lucha", category: "Físico", power: 150, accuracy: 50, desc: "Golpe devastador pero de baja precisión." },
    "Corpulencia": { type: "Lucha", category: "Estado", power: null, accuracy: 100, desc: "Tensa músculos. Sube Ataque y Defensa." },
    "Empujón": { type: "Lucha", category: "Físico", power: 20, accuracy: 100, desc: "Empuja con las palmas. Ataca primero." },
    "Tiro Vital": { type: "Lucha", category: "Físico", power: 70, accuracy: 100, desc: "Ataca un punto vital. Alta prob. de crítico." },
    "Inversión": { type: "Lucha", category: "Físico", power: null, accuracy: 100, desc: "Más daño cuanto menos PS tenga el usuario." },
    "Gancho Alto": { type: "Lucha", category: "Físico", power: 85, accuracy: 100, desc: "Puñetazo ascendente muy potente." },
    "Demolición": { type: "Lucha", category: "Físico", power: 75, accuracy: 100, desc: "Puñetazo fuerte capaz de romper barreras." },
    "Martillazo": { type: "Lucha", category: "Físico", power: 100, accuracy: 100, desc: "Golpe con las pinzas muy potente." },

    // Veneno
    "Polución": { type: "Veneno", category: "Especial", power: 30, accuracy: 75, desc: "Baño de lodo. Puede envenenar." },
    "Bomba Lodo": { type: "Veneno", category: "Especial", power: 90, accuracy: 100, desc: "Lanza lodo tóxico. Puede envenenar." },
    "Tóxico": { type: "Veneno", category: "Estado", power: null, accuracy: 90, desc: "Envenena gravemente. Daño crece cada turno." },

    // Tierra
    "Terremoto": { type: "Tierra", category: "Físico", power: 100, accuracy: 100, desc: "Terremoto que golpea a todos los adyacentes." },
    "Magnitud": { type: "Tierra", category: "Físico", power: null, accuracy: 100, desc: "Terremoto de intensidad variable (10-150)." },
    "Ataque Arena": { type: "Tierra", category: "Estado", power: null, accuracy: 100, desc: "Lanza arena que baja la Precisión rival." },
    "Tormenta Arena": { type: "Roca", category: "Estado", power: null, accuracy: 100, desc: "Tormenta de arena que daña a no-Tierra/Roca/Acero." },

    // Volador
    "Vuelo": { type: "Volador", category: "Físico", power: 70, accuracy: 100, desc: "Vuela alto y ataca en el siguiente turno." },
    "Golpe Aéreo": { type: "Volador", category: "Físico", power: 60, accuracy: 100, desc: "Ataque aéreo que nunca falla." },
    "Mov. Espejo": { type: "Volador", category: "Especial", power: null, accuracy: 100, desc: "Devuelve el daño especial recibido x2." },

    // Psíquico
    "Psíquico": { type: "Psíquico", category: "Especial", power: 90, accuracy: 100, desc: "Onda psíquica potente. Puede bajar Def. Esp." },
    "Psicorrayo": { type: "Psíquico", category: "Especial", power: 65, accuracy: 100, desc: "Rayo psíquico que puede confundir." },
    "Reflejo": { type: "Psíquico", category: "Estado", power: null, accuracy: 100, desc: "Barrera que reduce daño físico al equipo." },
    "Pantalla Luz": { type: "Psíquico", category: "Estado", power: null, accuracy: 100, desc: "Barrera que reduce daño especial al equipo." },
    "Paz Mental": { type: "Psíquico", category: "Estado", power: null, accuracy: 100, desc: "Meditación que sube At. Esp. y Def. Esp." },
    "Descanso": { type: "Psíquico", category: "Estado", power: null, accuracy: 100, desc: "Duerme 2 turnos pero cura todos los PS." },
    "Hipnosis": { type: "Psíquico", category: "Estado", power: null, accuracy: 60, desc: "Ondas hipnóticas que duermen al objetivo." },
    "Paranormal": { type: "Psíquico", category: "Especial", power: 80, accuracy: 100, desc: "Ataque con poderes psíquicos extraños." },
    "Rayo Confuso": { type: "Fantasma", category: "Estado", power: null, accuracy: 100, desc: "Luz siniestra que confunde al objetivo." },
    "Agilidad": { type: "Psíquico", category: "Estado", power: null, accuracy: 100, desc: "Relaja el cuerpo para subir mucho la Velocidad." },
    "Amnesia": { type: "Psíquico", category: "Estado", power: null, accuracy: 100, desc: "Vacía la mente para subir mucho Def. Esp." },

    // Roca
    "Lanza Rocas": { type: "Roca", category: "Físico", power: 50, accuracy: 90, desc: "Lanza rocas pequeñas al objetivo." },
    "Tumba Rocas": { type: "Roca", category: "Físico", power: 50, accuracy: 80, desc: "Lanza rocas que bajan la Velocidad rival." },
    "Poder Pasado": { type: "Roca", category: "Especial", power: 60, accuracy: 100, desc: "Poder ancestral. Puede subir todas las stats." },
    "Avalancha": { type: "Roca", category: "Físico", power: 75, accuracy: 90, desc: "Lanza rocas. Más daño si el usuario fue dañado." },
    "Desenrollar": { type: "Roca", category: "Físico", power: 30, accuracy: 100, desc: "Rueda que incrementa poder cada turno." },

    // Fantasma
    "Bola Sombra": { type: "Fantasma", category: "Especial", power: 80, accuracy: 100, desc: "Lanza bola de sombras. Puede bajar Def. Esp." },
    "Puño Sombra": { type: "Fantasma", category: "Físico", power: 60, accuracy: 100, desc: "Puñetazo de sombras. Golpea primero." },
    "Maldición": { type: "Fantasma", category: "Estado", power: null, accuracy: 100, desc: "Fantasma: maldice a costa de PS. Otro: sube stats." },
    "Tinieblas": { type: "Fantasma", category: "Especial", power: null, accuracy: 100, desc: "Más daño cuanto más PS tenga el usuario." },

    // Dragón
    "Dragoaliento": { type: "Dragón", category: "Especial", power: 60, accuracy: 100, desc: "Aliento dragón. Puede paralizar." },
    "Garra Dragón": { type: "Dragón", category: "Físico", power: 80, accuracy: 100, desc: "Zarpazo con garras afiladas de dragón." },
    "Danza Dragón": { type: "Dragón", category: "Estado", power: null, accuracy: 100, desc: "Danza mística que sube Ataque y Velocidad." },

    // Siniestro
    "Mordisco": { type: "Siniestro", category: "Físico", power: 60, accuracy: 100, desc: "Muerde con colmillos. Puede hacer retroceder." },
    "Triturar": { type: "Siniestro", category: "Físico", power: 80, accuracy: 100, desc: "Tritura con mandíbulas. Puede bajar Defensa." },
    "Acuchillar": { type: "Siniestro", category: "Físico", power: 70, accuracy: 100, desc: "Corte siniestro. Alta prob. de crítico." },
    "Mofa": { type: "Siniestro", category: "Estado", power: null, accuracy: 100, desc: "Provoca al rival. Solo puede usar ataques." },

    // Acero
    "Ala de Acero": { type: "Acero", category: "Físico", power: 70, accuracy: 100, desc: "Golpea con alas de acero. Puede subir Defensa." }
};

// Helper function to get move type
export function getMoveType(moveName) {
    return moveData[moveName]?.type || "Normal";
}

// Helper function to get category icon
export function getCategoryIcon(category) {
    switch (category) {
        case "Físico": return "💥";
        case "Especial": return "✨";
        case "Estado": return "🔄";
        default: return "❓";
    }
}
