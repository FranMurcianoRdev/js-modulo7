
interface Partida {
    carta: number;
    puntuacion: number;
    gameOver: boolean;
};

export const partida: Partida = {
        carta : 0,
        puntuacion : 0,
        gameOver : false,
}