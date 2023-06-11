// import React, { useEffect, useState } from 'react';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [filter, setFilter] = useState('all');

//   useEffect(() => {
//     // Fetch user data from API
//     fetch('https://randomuser.me/api/?results=5000')
//       .then(response => response.json())
//       .then(data => setUsers(data.results))
//       .catch(error => console.log(error));
//   }, []);

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//   };

//   const filteredUsers = filter === 'all' ? users : users.filter(user => user.gender === filter);

//   const placeholderImage = 'https://example.com/placeholder-image.jpg'; // Replace with your placeholder image URL

//   return (
//     <div>
//       <h1>User List</h1>
//       <label>
//         Filter by Gender:
//         <select value={filter} onChange={handleFilterChange}>
//           <option value="all">All</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </label>
//       <table>
//         <thead>
//           <tr>
//             <th>Photo</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Gender</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers && filteredUsers.map(user => (
//             <tr key={user.login.uuid}>
//               <td>
//                 <img src={placeholderImage} alt="User" />
//               </td>
//               <td>{user.name.first} {user.name.last}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>{user.gender}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserList;

// import React, { useEffect, useState } from 'react';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [filter, setFilter] = useState('all');

//   useEffect(() => {
//     // Fetch user data from API
//     fetch('https://randomuser.me/api/?results=5000')
//       .then(response => response.json())
//       .then(data => setUsers(data.results))
//       .catch(error => console.log(error));
//   }, []);

//   const handleFilterChange = event => {
//     setFilter(event.target.value);
//   };

//   const filteredUsers = filter === 'all' ? users : users.filter(user => user.gender === filter);

//   return (
//     <div>
//       <h1>User List</h1>
//       <label>
//         Filter by Gender:
//         <select value={filter} onChange={handleFilterChange}>
//           <option value="all">All</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </label>
//       <table>
//         <thead>
//           <tr>
//             <th>Photo</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Gender</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.map(user => (
//             <tr key={user.login.uuid}>
//               <td>
//                 <img src={user.picture.large} alt="User" />
//               </td>
//               <td>{`${user.name.first} ${user.name.last}`}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>{user.gender}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserList;
import React, { useEffect, useState } from 'react';
import './RadioButton.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Fetch user data from API
    fetch('https://randomuser.me/api/?results=5000')
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(error => console.log(error));
  }, []);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredUsers = filter === 'all' ? users : users.filter(user => user.gender === filter);

  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci a sapien imperdiet maximus. Suspendisse vel ex eget mauris efficitur finibus eu a enim. Aenean tellus neque, consectetur sit amet lacus a, hendrerit ornare urna. Fusce venenatis lorem vitae augue suscipit, eu tempor massa vulputate. Praesent iaculis velit libero, vel faucibus sem pulvinar vel. Curabitur viverra nisl dui, a venenatis felis pellentesque id. Donec non lacus diam.</p>
      <div>
        <label>
          <input
            type="radio"
            value="all"
            checked={filter === 'all'}
            onChange={handleFilterChange}
          />
          <span className="bullet-button">All</span>
        </label>
        <label>
          <input
            type="radio"
            value="male"
            checked={filter === 'male'}
            onChange={handleFilterChange}
          />
          <span className="bullet-button">Male</span>
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={filter === 'female'}
            onChange={handleFilterChange}
          />
          <span className="bullet-button">Female</span>
        </label>
      </div>
      <table>
      <table>
  <thead>
    <tr>
      <th>Photo</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Gender</th>
    </tr>
  </thead>
  <tbody>
    {filteredUsers.map(user => (
      <tr key={user.login.uuid}>
        <td>
          <img src={user.picture.large} alt="User" />
        </td>
        <td>{`${user.name.first} ${user.name.last}`}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.gender}</td>
      </tr>
    ))}
  </tbody>
</table>

      </table>
    </div>
  );
};

export default UserList;
