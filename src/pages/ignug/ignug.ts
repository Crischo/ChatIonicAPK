import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrerasProvider } from '../../providers/carreras/carreras'
import { MateriasProvider } from '../../providers/materias/materias'
import { ClaseCarreras } from '../../clases/Clase-Carreras';
import { ClaseMaterias } from '../../clases/Clase-Materias';
import * as firebase from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild} from '@angular/core';

/**
 * Generated class for the IgnugPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-ignug',
  templateUrl: 'ignug.html',
})
export class IgnugPage {
  @ViewChild('fileInput') fileInput;
// variables archivo

title = 'app';
nombre: string;
archivo: string;
foto: string;
form: FormGroup;
tipo: string;



mensaje: string = "";
fotoNombre: any;
fotoType: any = "nada";
fotoFile: any[];
srcFoto: string = '';




  //variables
userName: string = "Cristian";
message: string = "";
messages = []; 
carreras: ClaseCarreras[];
materias: ClaseMaterias[];
carreraSeleccionada: ClaseCarreras;
materiaSeleccionada: ClaseMaterias;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public carreraService: CarrerasProvider,
      public materiaService: MateriasProvider
      ) {
    this.getMessages();
   
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IgnugPage');
    this.carreraService.getData().subscribe(data => {
      this.carreras = data;
      console.log("las carreras son " , this.carreras)
    });
    console.log('ionViewDidLoad IgnugPage');
    this.materiaService.getData().subscribe(data2 => {
      this.materias = data2;
      console.log("las materias son " , this.materias)
    });
  }
  /*
    cargarMaterias() {
    console.log('ionViewDidLoad IgnugPage');
    this.carreraService.getData().subscribe(data => {
      this.carreras = data;
      console.log("las carreras son " , this.carreras)
    });
  }
  */


//codigo archivo

CodificarArchivo(event) {
  
  var reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
          this.fotoNombre = file.name;
          this.fotoType = file.type;
//- split para imagen


//  split = cadena.substring(inicio, fin);

// console.log(subCadena); // la consola devolverá: texto



          this.fotoFile = reader.result.split(',')[1];
          this.srcFoto = 'data:' + this.fotoType + ';base64,' + this.fotoFile;
          console.log(this.srcFoto)
      };
  }
}

onFileChange(event) {
let reader = new FileReader();
if(event.target.files && event.target.files.length > 0) {
  let file = event.target.files[0];
  reader.readAsDataURL(file);
  reader.onload = () => {
    this.form.get('avatar').setValue({
      filename: file.name,
      filetype: file.type,
      value: reader.result.split(',')[1]
    })
  };
  
}
}

processWebImage(event) {
let reader = new FileReader();
reader.onload = (readerEvent) => {

  let imageData = (readerEvent.target as any).result;
 
};

var imagen =  reader.readAsDataURL(event.target.files[0]);
console.log(imagen)
}

//obtener
getMessages(){
  var messagesRef = firebase.database().ref().child("mensajes");
  messagesRef.on("value", (snap) => {
    var data = snap.val();
    this.messages = [];
    for(var key in data){
      this.messages.push(data[key]);
    }
  });    
}
// Ubiar la opcion seleccionada
selectCarrera(carrera: ClaseCarreras): void {
  console.log("entro ")
  this.carreraSeleccionada = carrera;
  console.log("carrera elegida "+this.carreraSeleccionada)
}
selectMateria(materia: ClaseMaterias): void {
  console.log("entro2 ")
  this.materiaSeleccionada = materia;
  console.log("materia elegida "+this.materiaSeleccionada)
}
//enviar
sendMessage(){
var messageRef = firebase.database().ref().child("mensajes");

messageRef.push({
  nombre: this.userName,
  mensaje: this.message,
  fecha: Date.now(),
  carrera: "Carrera Quemada",
  materia: "Materia Quemada",
  foto:this.srcFoto,
  tipo: this.fotoType.split('/')[0] });

  this.srcFoto = null;
  this.message = null;
  this.fileInput.nativeElement.value = null;


}
limpiar(){
  this.fileInput.nativeElement.value = null;
}
}
