import './menuItem.scss';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FilterMatchMode } from 'primereact/api';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import foodApi from '../../api/foodApi';
import PropHeader from '../../component/PropHeader';
function MenuItem() {
  const [food, setFood] = useState(null);
  useEffect(() => {
    let id = window.location.href.split('/').reverse()[0];
    foodApi.get(id).then((data) => setFood(data));
    // window.onbeforeunload = function () {
    //   window.scrollTo(0, 0);
    // };
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PropHeader img="url(https://i.imgur.com/vUOwjbV.png)  top no-repeat" title="MENU >> DETAILS" />
      <section className="food-info-container">
        <div className="food-image-container">
          <img
            className="food-image"
            src={`http://localhost:3001/uploads/${food?.image}`}
            alt=""
            style={{ cursor: 'pointer' }}
            // onClick={() => {
            // }}
          />
        </div>
        <div className="food-info">
          <h1>{food?.name}</h1>
          <div className="food-p">
            <p>
              Category:
              <br />
              <b> {food?.category}</b>
            </p>
            <p>
              Nation: <br />
              <b> {food?.nation}</b>
            </p>
            <p>
              Date: <br />
              <b>{food?.createdAt}</b>
            </p>
          </div>
          <p className="food-desc">{food?.description}</p>
          <p className="food-cost">${food?.price}</p>
        </div>
      </section>
    </>
  );
}

export default MenuItem;
