import React from 'react';
import '../css/userlist.css'
const UserList = () => {
  return (
   <div className='ulistpage'>
   <div className='userlist'>
      <h2>Kullanıcı Listesi</h2>
     

      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">User Name</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Uğur</td>
      <td>Gülsevinç</td>
      <td>aug</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Ahmet</td>
      <td>Uğur</td>
      <td>aug2</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Uğur</td>
      <td>Aug</td>
      {/* <td colspan="2">ugur</td> */}
      <td>aug3</td>
    </tr>
  </tbody>
</table>

    </div>

    </div>
  );


};

export default UserList;
