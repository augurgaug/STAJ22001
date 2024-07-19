import React from 'react';
import '../css/stock.css'
const Stock = () => {
  return (
   <div className='ulistpage'>
   <div className='userlist'>
      <h2>Stoklar</h2>
     

      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Ürün Adı</th>
      <th scope="col">Ürün Kodu</th>
      <th scope="col">Stok Adedi</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Laptop</td>
      <td>L000</td>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Klavye</td>
      <td>K000</td>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Kulaklık</td>
      <td>KK00</td>
      <td>5</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mikrofon</td>
      <td>K000</td>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mouse</td>
      <td>M000</td>
      {/* <td colspan="2">ugur</td> */}
      <td>12</td>
    </tr>
  </tbody>
</table>

    </div>

    </div>
  );


};

export default Stock;
