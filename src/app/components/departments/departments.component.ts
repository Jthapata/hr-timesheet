import { Component } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent {
  departments!: Department[];

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router
  ) {}

  ngOnInit(): void{
    this.departments = this.departmentsService.departments;
  }

  goToDepartments(departmentId: string): void{
    this.router.navigate(['./timesheet', {id: departmentId}])
  }
}
