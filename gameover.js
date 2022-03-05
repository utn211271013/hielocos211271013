class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    preload() {
        this.load.setBaseURL('https://www.antonio.com.mx');
        this.load.image('muerto', 'imagenes/fondo_pinguino_muerto.jpg'); // 540x960
    }
    create() {
        console.log('GAME OVER');
        this.fondo = this.add.image(ANCHO / 2, ALTO / 2, 'muerto');
        this.fondo.displayWidth = this.sys.canvas.width;
        this.textoPuntaje = this.add.text((ANCHO / 2) - 50, 10, ('Puntos\n' + puntos), { fontFamily: 'Arial', fontSize: '24px', fill: '#FFFFFF', align: 'center' });
        this.textoOtraVez = this.add.text((ANCHO / 2) - 100, (ALTO - 100), 'Clic/Tap \nPara jugar otra vez', { fontFamily: 'Arial', fontSize: '24px', fill: '#FFFFFF', align: 'center' });
        this.input.on('pointerdown', function(pointer) {
            juego.escene.remove('GameOver');
            location.reload();
        });
    }
    update(tiempo, delta) {
        //nada
    }
}