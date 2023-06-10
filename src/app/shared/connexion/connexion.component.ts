import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../model/user';
import { find } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { GlobalVariables } from '../global-variable';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
    isPasswordVisible=false;
    form! : FormGroup;

    public user: IUser | undefined = <IUser>{};

    public userData: IUser | undefined;

    public errMsg!: String;

    //Fonction pour la visibilite du mot de passe
    togglePasswordVisibility(){
        this.isPasswordVisible=!this.isPasswordVisible;
    }

    //On verifie que chaque champ soit remplir
    constructor(private fb : FormBuilder, private userService: UsersService, private param: GlobalVariables, private route: Router){
        this.form= this.fb.group({
        mail:['', Validators.required],
        password:['', Validators.required]
        });
    }

    //Les getters
    get usermail(){
        return this.form.get('mail');
    }

    get password(){
        return this.form.get('password');
    }

    //soumission du formulaire
    submit(){

        this.userService.getAll().subscribe({
            next: users => {
                this.user = users.find(u => u.mail == this.form.value.mail );
                this.userData = this.user;
                console.log("User Data 0", this.userData);

                if (this.userData != null) {
                    console.log("found");
                    if (this.userData.password == this.form.value.password) {
                        this.param.currentUserData = this.userData;
                        console.log("Connexion reussite");
                        alert("Connexion reussite");
                        this.param.isConnected = true;
                        this.route.navigate(['profil']);
                    } else {
                        console.log("Password not matches");
                        alert("Password not matches");
                    }
                } else {
                    console.log("User not found");
                    alert("User not found");
                    this.route.navigate(['/connexion']);
                }
            },
            error: err => this.errMsg = err
        });
        console.log(this.param.currentUserData);

    }
}
