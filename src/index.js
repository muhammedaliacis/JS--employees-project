//elementleri secme

const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeeList = document.getElementById("employees");
const update = document.getElementById("update");



import Request from "./request";
import UI from "./ui";

const request = new Request("http://localhost:3000/employees");
const ui = new UI();

addEventListener();

function addEventListener(){
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee)
    employeeList.addEventListener("click", deleteUpdateEmployees);



}

function addEmployee(e){
    if (nameInput.value && departmentInput.value && salaryInput.value){
        request.post({name: nameInput.value, department : departmentInput.value, salary: salaryInput.value})
        .then(function(employee){
            ui.addEmploye(employee.name, employee.department, employee.salary, employee.id)
             ui.showInfos("success", "Çalışan ekleme işlemi başarılı");
             clearInput();
            })
        .catch(err => console.log(err));
    }
    else {
        ui.showInfos("danger", "Lütfen boşlukları doldurunuz.");
    }

    e.preventDefault();

}


function getAllEmployees(){
    request.get().then(function(employee){
        console.log(employee);
        employee.forEach(function(emp){
            ui.getEmploye(emp.name, emp.department, emp.salary, emp.id);
        })
    })
    .catch(err => console.log(err));

}

function deleteUpdateEmployees(e){
    console.log(e.target);
    if (e.target.id === "delete-employee"){
        deleteEmployees(e.target);

    }
    else if (e.target.id === "update-employee"){
        updateEmployees(e.target.parentElement.parentElement);
    }

}

function deleteEmployees(targetEmployee){
    const tbodyy = targetEmployee.parentElement.previousElementSibling.previousElementSibling;
     request.delete(tbodyy.textContent).then(employees => ui.showInfos("success", "Silme işlemi başarılı."))
     .catch(err => console.log(err));
    targetEmployee.parentElement.parentElement.remove();

}

function updateEmployees(targetEmployee){
    if (update.style.display === "none"){
        update.style.display = "block";
        update.addEventListener("click", function(){
            targetEmployee.children[0].textContent = nameInput.value;
            targetEmployee.children[1].textContent = departmentInput.value;
            targetEmployee.children[2].textContent = salaryInput.value;
            const id = targetEmployee.children[3].textContent;
             request.put(id, {name: nameInput.value, department : departmentInput.value, salary: salaryInput.value}).then(employees => console.log(employees))
             .catch(err => console.log(err));
             clearInput();
        })
    }
    else{
        update.style.display = "none";
    }
}



function clearInput(){
    nameInput.value = "";
    departmentInput.value = "";
    salaryInput.value = "";

}






