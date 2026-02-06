let tableBody = document.getElementById("table-body");
let inpName = document.querySelector(".name");
let inpAge = document.querySelector(".age");
let inpBranch = document.querySelector(".branch");
let isEditing = false;
let currId = null;

// async function fetchData(){
//     const response = await axios.get("http://localhost:3000/students");
//     const data = await response.data;
//     return data;
// }
function fetchData(){
    return new Promise((res,rej)=>{
        axios.get("http://localhost:3000/students")
        .then((response)=>{
            console.log(response.data)
            res(response.data);
        })
        .catch((error)=>{
            console.log("Error fetching data: ", error);
            rej(error);
        })
        
    })
}

fetchData().then((data)=>{
    // console.log(data);
    if(data && Array.isArray(data)){
       console.log(Array.isArray(data)); 
    }
    data.forEach((item)=>{
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.branch}</td>
            <td><button class="btn btn-primary" onclick="editStud(${item.id})">Edit</button></td>
            <td><button class="btn btn-danger" onclick="dltStud(${item.id})">Delete</button></td>
        `
        tableBody.appendChild(row);
    })
});

function addStud(event){
    event.preventDefault();
    let data = {
        name: inpName.value,
        age: inpAge.value,
        branch: inpBranch.value,
    }
    if(isEditing === true){
        axios.put(`http://localhost:3000/students/${currId}`,data)
        .then(data=>{
            console.log(data);
            console.log("Updated Data: ",data.data);
            isEditing = false;
            currId = null;
            // location.reload();
        })
        .catch(error=>{
            console.log(error);
        })
        
    }else{
        axios.post("http://localhost:3000/students",data)
        .then(data=>{
            console.log(data);
            console.log("Added Data: ",data.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }
}

async function editStud(id) {
    const response = await axios.get(`http://localhost:3000/students/${id}`)
    console.log(response.data);
    inpName.value = response.data.name;
    inpAge.value = response.data.age;
    inpBranch.value = response.data.branch;
    isEditing = true;
    currId = id;
}

// function editStud(id){
//     console.log(id);
//     axios.get(`http://localhost:3000/students/${id}`)
//     .then(data=>{
//         inpName.value = data.data.name;
//         inpAge.value = data.data.age;
//         inpBranch.value = data.data.branch;
//         console.log(data.data);
//     })
//     .then(()=>{
//         axios.put(`http://localhost:3000/students/${id}`,{
//             name: inpName.value,
//             age: inpAge.value,
//             branch: inpBranch.value,
//         })
//     })
//     .catch(error=>{
//         console.log(error);
//     })
// }

function dltStud(id){
    axios.delete(`http://localhost:3000/students/${id}`)
    .then(data=>{
        console.log(data);
    })
    .catch(error=>{
        console.log(error);
    })
}