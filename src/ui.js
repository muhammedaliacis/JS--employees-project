export default class UI{
    constructor(){
        this.employeesList =  document.getElementById("employees");
        this.updatebutton = document.getElementById("update");
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");
        this.form = document.getElementById("employee-form");

    }

    getEmploye(name, department, salary, id){
        this.employeesList.innerHTML +=  `
         <tr>                                 
        <td>${name}</td>
        <td>${department}</td>
        <td>${salary}</td>
        <td class="id">${id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>
`
    }
    addEmploye(name, department, salary, id){
        this.employeesList.innerHTML +=  `
         <tr>                                 
        <td>${name}</td>
        <td>${department}</td>
        <td>${salary}</td>
        <td class="id">${id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>
`
    }


    showInfos(type, message){
        const show = document.getElementsByClassName("card-body")[0];
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        show.appendChild(alert); 

        setTimeout(function(){
            alert.remove();
        },1500);
    }
}