// ! slider foto con Vue.js

var app = new Vue({
    el: '#root',
    data: {
        immagini: [
            'img/img0.jpg',
            'img/img1.jpg',
            'img/img2.jpg',
            'img/img3.jpg'
        ],
        contatore: 0,
        sliderAuto: ''
    },
    created: function() {
        // this.sliderAuto = setInterval(this.prossimaFoto, 2000);
    },
    methods: {
        // * funzione per scorrere foto in avanti
        prossimaFoto() {
            ( this.contatore == this.immagini.length - 1 ) ? this.contatore = 0 : this.contatore++;
        },
        // * funzione per scorrere foto indietro
        fotoPrecedente() {
            ( this.contatore == 0 ) ? this.contatore = this.immagini.length - 1 : this.contatore--;

        },
        // * funzione cambio img cliccando sul pallino
        cambioImg(index) {
            this.contatore = index;
            clearInterval(this.sliderAuto);
        }
    }
});