import { Injectable } from '@angular/core';
import {Employee} from "../interfaces/employee";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private db: AngularFirestore
  ) { }

  saveEmployeeHours(employee: Employee): any {
    this.db.collection('employee-hours').add(employee);
  }
}
