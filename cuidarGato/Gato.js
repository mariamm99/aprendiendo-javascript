{
  const PESO_MAXIMO = 15;
  const PESO_MINIMO = 0;

  function Gato(nombre, fechaNac, raza, peso) {
    this.nombre = nombre;
    this.fechaNac = fechaNac;
    this.raza = raza;
    setPeso();
  

  }

  // SI ESTA MUERTO NO CAMBIAR PESO
  Gato.prototype.come = function () {

    //CLAUSULA GUARDA PARA QUE NO LLEGUE AL CÓDIGO
  if (this.estado=="muerto") return;
  
    this.peso = parseInt(this.peso) + 1;

    //DUPLICACION DE CODIGO HACER SET
    if (this.peso > PESO_MAXIMO) {
      this.estado = "muerto";
    } else {
      this.estado = "come";
    }
    // return this.peso;
  }

  Gato.prototype.setPeso =function(){
    if (this.peso <= PESO_MINIMO || this.peso > PESO_MAXIMO) {
      this.estado = "muerto";
    } else {
      this.estado = "espera";
    }
  }

  Gato.prototype.duerme = function () {
    if (this.estado=="muerto") return;

    this.estado = "duerme";
  }

  Gato.prototype.juega = function () {
    if (this.estado=="muerto") return;

    this.peso = parseInt(this.peso) - 1;

    if (this.peso <= PESO_MINIMO) {
      this.estado = "muerto";
    } else {
      this.estado = "juega";
    }

    // return this.peso;
  }


  Gato.prototype.espera = function () {
    if (this.estado=="muerto") return;
    this.estado = "espera";
  }


  Gato.prototype.estado = function () {
    return this.estado;
  }

  Gato.prototype.nombre = function () {
    return this.nombre;
  }

  Gato.prototype.peso = function () {
    return this.peso;
  }

  Gato.prototype.imagen = function () {
    return `<img src="img/${this.estado}.jpg" width="200px" heigth="200px">`;
  }

  Gato.prototype.edad = function () {

    let hoy = new Date();
    let cumpleanos = new Date(this.fechaNac);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    // edad= parseFloat( new Date() -  new Date(this.fechaNac))/ 86400000;

    let mes = hoy.getMonth() - cumpleanos.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }

    return edad;
  }



}