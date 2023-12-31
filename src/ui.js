export class UI {
  constructor() {
    this.employeesList = document.getElementById("employees");
    this.updatebutton = document.getElementById("update");
    this.nameInput = document.getElementById("name");
    this.departmentInput = document.getElementById("department");
    this.salaryInput = document.getElementById("salary");
  }

  addAllEmptoUI(employees) {
    let result = "";
    employees.forEach((employee) => {
      result += ` 
    <tr>                                      
      <td>${employee.name}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>
      <td>${employee.id}</td>
      <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
      <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>
    `;

      this.employeesList.innerHTML = result;
    });
  }

  clearInput() {
    this.nameInput.value = "";
    this.departmentInput.value = "";
    this.salaryInput.value = "";
  }

  addemployees(employee) {
    this.employeesList.innerHTML += `,
    <tr>                                      
      <td>${employee.name}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>
      <td>${employee.id}</td>
      <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
      <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>

    `;
  }
  deleteUI(employee) {
    employee.remove();
  }
  UpdatetoggleButton(target) {
    if (this.updatebutton.style.display === "none") {
      this.updatebutton.style.display = "block";
      this.addEmployeeİnfoToInputs(target);
    } else {
      this.updatebutton.style.display = "none";
      this.clearInput();
    }
  }
  addEmployeeİnfoToInputs(target) {
    const children = target.children;
    this.nameInput.value = children[0].textContent;
    this.departmentInput.value = children[1].textContent;
    this.salaryInput.value = children[2].textContent;
  }
  updateEmpOnUI(employee, parent) {
    parent.innerHTML = `
    <tr>
      <td>${employee.name}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>
      <td>${employee.id}</td>
      <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
      <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>
    
    
    `;
    this.clearInput();
  }
  
}
