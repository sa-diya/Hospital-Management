// fill in javascript code here


document.querySelector("form").addEventListener("submit",hospitalMangament);
let hospArr = JSON.parse(localStorage.getItem("hospital")) || [];

function hospitalMangament(e){
    e.preventDefault();
    let doctorName = document.querySelector("#name").value;
    let doctorId= document.querySelector("#docID").value;
    let doctorDept= document.querySelector("#dept").value;
    let doctorExperience = document.querySelector("#exp").value;
    let doctorEmail= document.querySelector("#email").value;
    let doctorMobile= document.querySelector("#mbl").value;

    let docObj= {doctorName,doctorId,doctorDept,doctorExperience,doctorEmail,doctorMobile};
    console.log(docObj)

    displayTable(docObj);
    hospArr.push(docObj);
    localStorage.setItem("hospital", JSON.stringify(hospArr));
    displayTable(hospArr);
  
}

function displayTable(hosArr){
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    hospArr.forEach((el, i) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = el.doctorName;
    let td2 = document.createElement("td");
    td2.innerText = el.doctorId;
    let td3 = document.createElement("td");
    td3.innerText = el.doctorDept;
    let td4 = document.createElement("td");
    td4.innerText = el.doctorExperience;
    let td5 = document.createElement("td");
    td5.innerText = el.doctorEmail;
    let td6 = document.createElement("td");
    td6.innerText = el.doctorMobile;
    let td7 = document.createElement("td");
    td7.innerText = "Doctor";
    let td8 = document.createElement("button");
    td8.innerText = "delete";
    td8.style.cursor = "pointer";
    td8.addEventListener("click", function () {
      hospArr.splice(i, 1);
      localStorage.setItem("hospital", JSON.stringify(hospArr));
      displayTable(hospArr);
    });
    row.append(td1, td2, td3, td4, td5, td6, td7, td8);
    tbody.append(row);
  });
}
