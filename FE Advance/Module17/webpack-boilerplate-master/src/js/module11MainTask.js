export default (function () {

  const getUserByIdInput = document.querySelector('.getUserByIdInput');
  const getUserByIdButton = document.querySelector('.getUserByIdButton');

  const addUserInput = document.querySelector('.addUserInput');
  const addUserButton = document.querySelector('.addUserButton');

  const removeUserInput = document.querySelector('.removeUserInput');
  const removeUserButton = document.querySelector('.removeUserButton');

  const updateUserInput = document.querySelector('.updateUserInput');
  const updateUserButton = document.querySelector('.updateUserButton');

  const getAllUsersButton = document.querySelector('.getAllUsersButton');

  const result = document.querySelector('.result');


  getAllUsersButton.addEventListener('click', getAllUsers);
  getUserByIdButton.addEventListener('click', getUserById);
  addUserButton.addEventListener('click', addUser);
  removeUserButton.addEventListener('click', removeUser);
  updateUserButton.addEventListener('click', updateUser);


  function getAllUsers() {
    result.innerText = '';
    fetch('https://test-users-api.herokuapp.com/users/')
      .then(responce => {
        if (responce.ok) return responce.json();
        throw new Error('Error fetching data');
      })
      .then(data => {
        console.log(data);
        let allUsers = '';
        data.data.map(el => {
          allUsers += `
                       <ul class = "userCard">
                            <li>user name : ${el.name}</li>
                            <li>age : ${el.age}</li>
                            <li>id : ${el.id}</li>
                       </ul>
                       `
        });
        result.innerHTML = allUsers;
      })
      .catch(error => {
        result.innerHTML = `<h5>Server request : ${error}</h5>`;
      })
  }

  function getUserById() {
    result.innerText = '';
    let id = getUserByIdInput.value;
    if (id === '') {
      getUserByIdInput.style = "border: 3px solid red";
      result.innerText = '';
      alert('input id user!!!!');
    }
    else {
      getUserByIdInput.style = "border: none";
      getUserByIdInput.placeholder = 'input: id user';
      getUserByIdInput.value = '';

      fetch(`https://test-users-api.herokuapp.com/users/${id}`)
        .then(response => {
          if (response.ok) return response.json();
          throw new Error('Error fetching data');
        })
        .then(data => {
          if (data.status === 404) result.innerText = data.errors;
          console.log(data);
          data = data.data;
          result.innerHTML = `
                    <ul class = "userCard">
                            <li>user name : ${data.name}</li>
                            <li>age : ${data.age}</li>
                            <li>id : ${data.id}</li>
                       </ul>
                    `;
        })
        .catch(error => {
          result.innerHTML = `<h5>${error}</h5>`;
          console.log('Errorssssssss ', error);
        })
    }
  }

  function addUser() {
    result.innerText = '';
    let newUser = addUserInput.value.split(',');
    if (newUser.length === 2 && typeof newUser[0] === 'string' && typeof +newUser[1] === 'number') {
      const name = newUser[0];
      const age = newUser[1];
      console.log(name + " ||| " + age);

      addUserInput.value = '';
      addUserInput.style = "border: none";

      fetch(`https://test-users-api.herokuapp.com/users/`, {
        method: 'POST',
        body: JSON.stringify({name: name, age: age}),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
        .then(response => {
          if (response.ok) return response;
          throw new Error('Error fetching data');
        })
        .then(data => {
          result.innerHTML = `<h5>Server request : operation addUser - ${data.statusText}</h5>`;
        })
        .catch(error => {
          result.innerHTML = `<h5>${error}</h5>`;
        })

    }
    else {
      alert('input must have format: name, age');
      addUserInput.style = "border: 3px solid red";
    }

  }

  function removeUser() {
    result.innerText = '';
    const id = removeUserInput.value;
    if (id === '') {
      removeUserInput.style = 'border: 3px solid red';
      alert('you must input id on this field!!!');
    }
    else {
      removeUserInput.style = 'border: none';
      removeUserInput.value = '';
      result.innerText = '';

      fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'delete'
      })
        .then(response => {
          if (response.ok) return response;
          throw new Error('Error fetching data');
        })
        .then(data => {
          result.innerHTML = `<h5>Server request : operation removeUser - ${data.statusText}</h5>`;
          console.log(data);
        })
        .catch(error => {
          result.innerHTML = `<h5>${error}</h5>`;
        })

    }
  }

  function updateUser() {
    result.innerText = '';
    const updateUserArray = updateUserInput.value.split(',');
    if (updateUserArray.length === 3 && updateUserArray[0] !== '' && typeof updateUserArray[1] === 'string' &&
      updateUserArray[2] !== ' ' && updateUserArray[2] !== '' && Number.isInteger(+updateUserArray[2])) {
      updateUserInput.style = 'none';
      alert('da');
      const id = updateUserArray[0];
      const user = {
        name: updateUserArray[1],
        age: updateUserArray[2]
      };
      updateUserInput.value = '';
      result.innerText = '';

      fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
        .then(response => {
          if (response.ok) return response;
          throw new Error('Error fetching data');
        })
        .then(data => {
          result.innerHTML = `<h5>Server request : operation updateUser - ${data.statusText}</h5>`;
        })
        .catch(error => {
          result.innerHTML = `<h5>${error}</h5>`;
        })
    }
    else {
      updateUserInput.style = 'border: 3px solid red';
      alert('Input must be: id user, new name, new age');
    }
  }
})();
