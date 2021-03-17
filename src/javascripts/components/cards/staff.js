const showStaff = (array) => {
  document.querySelector('#title-container').innerHTML = '<h1>Staff</h1>';
  document.querySelector('#add-button').innerHTML = '<button type="button" id="add-staff-btn" class="btn btn-danger my-2">Add a Staff Member</button>';
  document.querySelector('#card-container').innerHTML = '';

  array.forEach((staff) => {
    document.querySelector('#card-container').innerHTML += `<div class="card" style="width: 18rem; height: 33em">
    <img class="card-img-top" style="height: 13em" src="${staff.image}" alt="Image of ${staff.name}">
    <div class="card-body d-flex flex-column">
      <h4 class="card-title">${staff.name}</h4>
      <h5>${staff.position}</h5>
      <p class="card-text">${staff.description}</p>
      <div class="mt-auto">
        <a href="#" id="staff-update-btn--${staff.firebaseKey}" class="btn btn-primary mx-2">Update</a>
      </div>
    </div>
  </div>`;
  });
};

const emptyStaff = () => {
  document.querySelector('#card-container').innerHTML = '<h1>No More Staff</h1>';
};

export { emptyStaff, showStaff };
