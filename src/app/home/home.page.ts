import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cliente } from 'src/model/cliente';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  
  listaCliente : Cliente[] = []; // Variável para armazenar os clientes (Array)

  constructor(private db: AngularFirestore, // Módulo de banco de dados
    private router : Router) {
      
    
    
  }

  ngOnInit() {
     
    // Solicita os dados da coleção clientes no Firebase
    this.db.collection('clientes').snapshotChanges().subscribe(response=>{ 

      this.listaCliente = []; // limpando a lista

      // response retona um objeto do firebase, precisamos converter em
      // um objeto cliente

      // forEach equivalente ao for, percorre todos os elementos do firebase
      // cada um se chama doc, ou seja, converter um doc em cliente.
      response.forEach(doc=>{ 
      
        let c = new Cliente(); // Cria um novo objeto cliente
        c.setCliente(doc.payload.doc.data(),doc.payload.doc.id); // coloca os dados do doc em clientes

        this.listaCliente.push(c); // adiciona este cliente a lista

      },err=>{ // Em caso de erro, executa esssa linha
        console.log(err);
      })

    });
  }


  goPage(idValue : string){
    // Redirecionando para ClienteDetalhes
    // enviando o id do cliente (idValue)
    this.router.navigate(['cliente-detalhes',{id : idValue}]);
  } 

}
