import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  palabra = 'AGUACATE';
  
  palabraOculta = '';

  intentos = 0;

  gana=false;
  pierde=false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  constructor(){
    
    this.palabraOculta = "_ ".repeat( this.palabra.length);

  }

  comprobar(letra:any){
    
    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(" ");
  
    for(let i=0;i<this.palabra.length;i++){
      if(this.palabra[i]=== letra){
        palabraOcultaArr[i] = letra;
      };
    };
    this.palabraOculta = palabraOcultaArr.join(" ")
    this.verificaGane();
  };

  existeLetra(letra:any){
    if(this.palabra.indexOf(letra)>=0){
      // console.log('Encontro la letra')
    }else{
      // console.log('Letra '+letra+' no existe.')
      this.intentos++
    };
  };

  verificaGane(){

    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluada = palabraArr.join('');

    if(palabraEvaluada === this.palabra){
      this.gana=true;
    }
    
    if (this.intentos>=9){
      this.pierde=true;
    };
  };
}
