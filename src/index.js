import { Request } from "./request";
import { UI } from "./ui";

const form=document.getElementById("employee-form");
const nameInput=document.getElementById("name");
const departmentInput=document.getElementById("department");
const salaryInput=document.getElementById("salary");
const employeesList=document.getElementById("employees");
const updateEmployeeButton=document.getElementById("update");


const request=new Request("http://localhost:3000/employees");
const ui=new UI();
let updataestate=null;
// request.Get()
// .then(employees=>console.log(employees))
// .catch(err=>console.log(err));


// request.Post({name:"arif kemer",departmant:"Usta",Salary:"20000"})
// .then(employee=>console.log(employee))
// .catch(err=>console.log(err));

// request.Put(1,{name:"Apo",Department:"İnşaat Mühendisi",salary:"20000"})
// .then(employee=>console.log(employee))
// .catch(err=>console.log(err));


// request.Delete(1)
// .then(employee=>console.log(employee))
// .catch(err=>console.log(err));
eventlisteners();


function eventlisteners(){
    document.addEventListener("DOMContentLoaded",getAllEmp);
    form.addEventListener("submit",addemployee);
    employeesList.addEventListener("click",UpdateOrDelete);
    updateEmployeeButton.addEventListener("click",employebuttonclick);
}

function UpdateOrDelete(e){
    if(e.target.id==="delete-employee"){
        deleteemployee(e.target);

    }else if(e.target.id=="update-employee"){
        updateEmployee(e.target.parentElement.parentElement);
        
    }
}



function addemployee(e){
    
    const employename=nameInput.value.trim();
    const employedepartment=departmentInput.value.trim();
    const employesalary=salaryInput.value.trim();

    if(employename==="" || employedepartment==="" || employesalary===""){
        alert("lütfen bilgileri eksiksiz giriniz");
    }else{
        request.Post({name:employename,department:employedepartment,salary:Number(employesalary)})
        .then(employee=>{
            ui.addemployees(employee);
        })
        .catch(err=>console.log(err));
    }



    ui.clearInput();
    e.preventDefault();

}
function getAllEmp(){
    request.Get()
    .then(employees=>{
        ui.addAllEmptoUI(employees)
    })
    .catch(err=>console.log(err));
}

function deleteemployee(target){
    const id=target.parentElement.previousElementSibling.previousElementSibling.textContent;
    request.Delete(id)
    .then(message=>{
        ui.deleteUI(target.parentElement.parentElement);
    }).catch(err=>console.log(err));
}

function updateEmployee(target){
    ui.UpdatetoggleButton(target);
    if(updataestate===null){
        updataestate={
            updateid:target.children[3].textContent,
            updateparent:target
        }
    }else{
        updataestate=null;
    }

}

function employebuttonclick(){
    if(updataestate) {
        const data={name:nameInput.value.trim(),department:departmentInput.value.trim(),salary:salaryInput.value.trim()};
        request.Put(updataestate.updateid,data)
        .then(response=>{
            ui.updateEmpOnUI(response,updataestate.updateparent);
            
        })
        .catch(err=>console.log(err))
    }
}

