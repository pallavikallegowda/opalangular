import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChildren } from '@angular/core';
import { FormControlName, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from 'src/app/shared/generic-validator'; 
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../article/user';
import { UserdetailsService } from '../../article/userdetails.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit, OnDestroy {
  pageTitle = 'User Details';  
  addingUser = false;  
  errorMessage: string;  
  userForm: FormGroup;  
  tranMode: string;  
  sub: Subscription;
  users: any = [];  
  user: User;  
  displayMessage: { [key: string]: string } = {};  
  private validationMessages: { [key: string]: { [key: string]: string } };  
  genericValidator: GenericValidator;  

  constructor(private fb: FormBuilder, private route: ActivatedRoute,   private router:Router, private userservice: UserdetailsService) { 
    this.validationMessages = {  
      firstname: {  
        required: 'User name is required.'
      },  
      phone: {  
        required: 'Phone Number is required.',  
      }  
    };  
    this.genericValidator = new GenericValidator(this.validationMessages);  
  }

  ngOnInit() {  
    this.userForm = this.fb.group({  
      firstname: ['', [Validators.required
      ]],  
      lastname:'',
      salutation:'',
      address: '',  
      emailid:'',
      phone: ['', [Validators.required]],  
    });  
    
    this.sub = this.route.paramMap.subscribe(  
      params => {  
        const id = params.get('id');  
        const phone = params.get('phone');  
        if (id == '0') {  
          const user: User = { id: "0", firstname: "", lastname:"",salutation: "", address: "", emailid: "", phone: ""};  
          this.displayUser(user);  
        }  
      }  
    ); 

  }
  ngOnDestroy(): void {  
    this.sub.unsubscribe();  
  }  

  displayUser(user: User): void {  
    if (this.userForm) {  
      this.userForm.reset();  
    }  
    this.user = user;  
    if (this.user.id == '0') {  
      this.pageTitle = 'Add User';  
    } else {  
      this.pageTitle = `Edit User: ${this.user.firstname}`;  
    }  
     this.userForm.patchValue({  
      firstname: this.user.firstname,  
      lastname: this.user.lastname,  
      salutation: this.user.salutation,  
      address: this.user.address,  
      emailid: this.user.emailid,  
      phone: this.user.phone  
    });  
  }  

  saveUser(): void {  
     if (this.userForm.valid) {  
       const p = { ...this.user, ...this.userForm.value };  
       this.userservice.createUser(p)  
          .subscribe(  
            () => this.onSaveComplete(),  
            (error: any) => this.errorMessage = <any>error  
            
          );  
    } else {  
      this.errorMessage = 'Please correct the validation errors.';  
    }  
  }  
  
  onSaveComplete(): void {  
    this.userForm.reset();  
    this.router.navigate(['/login']);  
  }  
}
