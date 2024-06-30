import {obtenerMensajeCuandoMePlanto, dameCarta, sumarPuntuacion} from "./motor";
import { partida } from "./modelo";

describe("obtenerMensajeCuandoMePlanto", () => {
    it("debería retornar 'Has sido muy conservador.' cuando la puntuación es <= 4.5", () => {
        // Arrange
        partida.puntuacion = 4.5 ;

        // Act
        const resultado = obtenerMensajeCuandoMePlanto();

        // Assert
        expect(resultado).toBe("Has sido muy conservador.");
    });

    it("debería retornar 'Te ha entrado el canguelo eh?' cuando la puntuación es === 5", () => {
        // Arrange
        partida.puntuacion = 5 ;

        // Act
        const resultado = obtenerMensajeCuandoMePlanto();

        // Assert
        expect(resultado).toBe("Te ha entrado el canguelo eh?");
    });

    it("debería retornar 'Casi casi...' cuando la puntuación es <= 6.5", () => {
        // Arrange
        partida.puntuacion = 6.5;

        // Act
        const resultado = obtenerMensajeCuandoMePlanto();

        // Assert
        expect(resultado).toBe("Casi casi...");
    });

    it("debería retornar 'Casi casi...' cuando la puntuación === 7", () => {
        // Arrange
        partida.puntuacion = 7;

        // Act
        const resultado = obtenerMensajeCuandoMePlanto();

        // Assert
        expect(resultado).toBe("Casi casi...");
    });

    it("debería retornar '¡ Lo has clavado! ¡Enhorabuena!' cuando la puntuación es === 7.5", () => {
        // Arrange
        partida.puntuacion = 7.5 ;

        // Act
        const resultado = obtenerMensajeCuandoMePlanto();

        // Assert
        expect(resultado).toBe("¡ Lo has clavado! ¡Enhorabuena!");
    });
});

describe ("dameCarta", () => { 
    it("debería sumar 2 si el número aleatorio es mayor que 7", () => {
        // Arrange
        const numeroAleatorio = 8;

        // Act
        const resultado = dameCarta(numeroAleatorio);

        // Assert
        expect(resultado).toBe(10);
    });

    it("no debería sumar nada si el número aleatorio es 7 ", () => {
        // Arrange
        const numeroAleatorio = 7;

        // Act
        const resultado = dameCarta(numeroAleatorio);

        // Assert
        expect(resultado).toBe(7);
    });

    it("no debería sumar nada si el número aleatorio es menor que 7", () => {
        // Arrange
        const numeroAleatorio = 5;

        // Act
        const resultado = dameCarta(numeroAleatorio);

        // Assert
        expect(resultado).toBe(5);
    });
});

describe ("sumarPuntuacion", () => {
    it("deberia devolver el valor de la carta si es igual que 7", () => {
        // Arrange
        partida.carta = 7;

        // Act
        const resultado = sumarPuntuacion();

        // Assert
        expect(resultado).toBe(7);
    });
    
    it("deberia devolver el valor de la carta si es menor que 7", () => {
        // Arrange
        partida.carta = 5;

        // Act
        const resultado = sumarPuntuacion();

        // Assert
        expect(resultado).toBe(5);
    });

    it("deberia devolver 0,5 si el valor de la carta es mayor que 7 (10, 11 o 12)", () => {
        // Arrange
        partida.carta = 10;

        // Act
        const resultado = sumarPuntuacion();

        // Assert
        expect(resultado).toBe(0.5);
    });
});
    