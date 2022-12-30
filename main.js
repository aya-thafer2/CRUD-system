//get inputs values

//global variables-usually we put them here at the top
var courseName = document.getElementById('courseName');//doesn't work without document.
var courseCategory = document.getElementById('courseCategory');
var coursePrice = document.getElementById('coursePrice');
var courseDescription = document.getElementById('courseDescription');
var courseCapacity = document.getElementById('courseCapacity');
var data = document.getElementById('data');
var addBtn = document.getElementById('addBtn');
var deleteAllBtn = document.getElementById('deleteAllBtn');
var search = document.getElementById('search');
var courses =[];

//create course
addBtn.onclick=function(event){
    event.preventDefault();//prevent form from refreshing 
    var course = {
        courseName: courseName.value,
        courseCategory: courseCategory.value,
        coursePrice: coursePrice.value,
        courseDescription: courseDescription.value,
        courseCapacity: courseCapacity.value
    }
    clearInputs();
    courses.push(course);
    displayData();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Course added successfully',
        showConfirmButton: false,
        timer: 1500
      })
}

//clear inputs after clicking Add course btn

function clearInputs(){
    courseName.value='';
    courseCategory.value='';
    coursePrice.value='';
    courseDescription.value='';
    courseCapacity.value='';
}

//Read => Display Data in table
function displayData(){
    var result='';
    for(var i=0;i<courses.length;i++){
        result+=`        
        <tr>
            <td>${i+1}</td>
            <td>${courses[i].courseName}</td>
            <td>${courses[i].courseCategory}</td>
            <td>${courses[i].coursePrice}</td>
            <td>${courses[i].courseDescription}</td>
            <td>${courses[i].courseCapacity}</td>
            <td><button class="btn btn-danger" onClick="deleteCourse(${i})">Delete</button></td>
            <td><button class="btn btn-info">Update</button></td>
        </tr>        
        `
    }
    data.innerHTML = result;
}


//delete course
function deleteCourse(index){ 
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        courses.splice(index,1);
        displayData();
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Course has been deleted.',
            'success'
          )
        }
      })
}

//delete all

deleteAllBtn.onclick=function(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        courses = [];
        data.innerHTML = '';
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'All data has been deleted.',
            'success'
          )
        }
      })
}



//search

/*
onkeyup
onkeypress
onkeydown
*/

search.onkeyup=function(){
    var result='';
    for(var i=0;i<courses.length;i++){
        if(courses[i].courseName.toLowerCase().includes(search.value.toLowerCase())){
            result+=`        
            <tr>
                <td>${i+1}</td>
                <td>${courses[i].courseName}</td>
                <td>${courses[i].courseCategory}</td>
                <td>${courses[i].coursePrice}</td>
                <td>${courses[i].courseDescription}</td>
                <td>${courses[i].courseCapacity}</td>
                <td><button class="btn btn-danger" onClick="deleteCourse(${i})">Delete</button></td>
                <td><button class="btn btn-info">Update</button></td>
            </tr>        
            `
        }
    }
    data.innerHTML = result;
}

