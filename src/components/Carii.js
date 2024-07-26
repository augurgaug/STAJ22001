import React from 'react';
import '../css/cari.css'

const Carii = () => {
  return (
    
    <div className='upasspage'>
    <div className='upass'>
      <h2>Cari</h2>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Ad</th>
      
      <th scope="col">Soyad</th>
      <th scope="col">Borç miktarı ($)</th>
      <th scope="col">Alacak Miktarı ($)</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Hasan</td>
      <td>Gülsevinç</td>
      <td>0</td>
      <td>800</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      
      <td>Ahmet</td>
      <td>Gülsevinç</td>
      <td>500</td>
      <td>0</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      
      <td>Muhammet</td>
      <td>Gülsevinç</td>
      <td>3000</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

    </div>
    </div>
  );
};

export default Carii;
