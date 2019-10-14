import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.page.html',
  styleUrls: ['./logoff.page.scss'],
})
export class LogoffPage implements OnInit {

  constructor(public afAuth: AngularFireAuth, 
    private router : Router,
    private storageServ : StorageService) { }

  ngOnInit() {
    this.afAuth.auth.signOut().then(()=>{
      this.storageServ.clearLocalUser();
      this.router.navigate(['/login']);
    }).catch(()=>{
      this.router.navigate(['/home']);
    })
  }

}
