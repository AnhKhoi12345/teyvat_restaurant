import './menu.scss';
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
import { Link } from 'react-router-dom';
import SignUpForm from '../Home/components/SignUpForm';
function Menu() {
  // // const navigate = useNavigate();
  // const [globalFilterValue, setGlobalFilterValue] = useState('');
  // const [food, setFood] = useState(null);
  // useEffect(() => {
  //   foodApi.getAll().then((data) => setFood(data));
  // }, []);
  // // eslint-disable-line react-hooks/exhaustive-deps
  // const [filters, setFilters] = useState({
  //   global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  //   id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  //   name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  //   // title: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  // });
  // const onGlobalFilterChange = (e) => {
  //   const value = e.target.value;
  //   let _filters = { ...filters };

  //   _filters['global'].value = value;

  //   setFilters(_filters);
  //   setGlobalFilterValue(value);
  // };
  // const nameBody = (rowData) => {
  //   return (
  //     <div className="team-datatable-name">
  //       <Avatar
  //         image={`http://localhost:3001/uploads/${rowData?.image}`}
  //         size="large"
  //         shape="circle"
  //         className="team-datatable-name-img"
  //         label="Profile Avatar"
  //       />
  //       <div className="team-datatable-name-text">
  //         <p>
  //           <b>{rowData?.name}</b>
  //         </p>
  //         <p className="team-datatable-name-email">{rowData?.email}</p>
  //       </div>
  //     </div>
  //   );
  // };

  // const actionBody = (rowData) => {
  //   return (
  //     <div className="team-datatable-action">
  //       <Button
  //         type="button"
  //         label="Edit"
  //         raised
  //         // onClick={() => onClickEdit(rowData)}
  //       ></Button>
  //       <Button label="Delete" severity="danger" raised />
  //     </div>
  //   );
  // };
  // const onClickAdd = () => {
  //   console.log(food);
  // };
  // const header = (
  //   <div className="flex flex-wrap align-items-center justify-content-between gap-2">
  //     <span className="text-xl text-900 font-bold">Team Datatable</span>
  //     <div className=" flex flex-wrap align-items-center justify-content-between gap-5">
  //       <Button label="Add" onClick={() => onClickAdd()} />

  //       <span className="p-input-icon-left">
  //         <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
  //       </span>
  //     </div>
  //   </div>
  // );

  // return (
  //   <div>
  //     <DataTable
  //       header={header}
  //       dataKey="_id"
  //       filters={filters}
  //       removableSort
  //       value={food}
  //       paginator
  //       rows={5}
  //       rowsPerPageOptions={[5, 10, 20]}
  //       globalFilterFields={['_id', 'name']}
  //       emptyMessage="No members found."
  //       selectionMode="single"
  //       className="team-datatable"
  //       // onRowSelect={onRowSelect}
  //     >
  //       <Column
  //         field="_id"
  //         header="ID"
  //         // filter
  //         sortable
  //         className="id"
  //       />
  //       <Column field="name" body={nameBody} header="Name" sortable sortField="name" className="name" />
  //       <Column field="action" header="Action" className="action" body={(data) => actionBody(data)} />
  //     </DataTable>
  //     {/* <div className="card">
  //       <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
  //         <Column field="name" header="Name"></Column>
  //         <Column field="description" header="Description"></Column>
  //         <Column field="price" header="Price"></Column>
  //       </DataTable>
  //     </div> */}
  //   </div>
  // );
  const [mondstadtFood, setMondstadtFood] = useState(null);
  const [liyueFood, setLiyueFood] = useState(null);
  const [inazumaFood, setInazumaFood] = useState(null);
  const [sumeruFood, setSumeruFood] = useState(null);
  const [fontaineFood, setFontaineFood] = useState(null);
  const [sideFood, setSideFood] = useState(null);
  const [latest, setLatest] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    foodApi.getAll().then((data) =>
      //setFood(data)
      {
        const mondstadt = data.filter((data) => data.nation === 'Mondstadt' && data.category === 'Main');
        setMondstadtFood(mondstadt);
        const liyue = data.filter((data) => data.nation === 'Liyue' && data.category === 'Main');
        setLiyueFood(liyue);
        const inazuma = data.filter((data) => data.nation === 'Inazuma' && data.category === 'Main');
        setInazumaFood(inazuma);
        const sumeru = data.filter((data) => data.nation === 'Sumeru' && data.category === 'Main');
        setSumeruFood(sumeru);
        const fontaine = data.filter((data) => data.nation === 'Fontaine' && data.category === 'Main');
        setFontaineFood(fontaine);
        const side = data.filter((data) => data.category === 'Side');
        setSideFood(side);
        const latest = data.slice(data.length - 1, data.length);
        setLatest(latest);
      }
    );
  }, []);
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <PropHeader img="url(https://i.imgur.com/vUOwjbV.png)  top no-repeat" title="TEYVAT MENU" />
      {latest &&
        latest.map((item) => {
          return (
            <section className="latest-food">
              <div className="latest-text">
                <p>Our latest addition to the menu</p>
                <h1>{item.name}</h1>
                <Link to={`/menu/${item._id}`}>
                  <Button className="latest-button" label="More Detail"></Button>
                </Link>
              </div>
              <div className="latest-image-container">
                <img
                  className="latest-image"
                  src={`http://localhost:3001/uploads/${item.image}`}
                  alt=""
                  style={{ cursor: 'pointer' }}
                  // onClick={() => {
                  // }}
                />
              </div>
            </section>
          );
        })}
      <section className="mondstadt-food">
        <div className="parallax">
          <div className="parallax-overlay">
            <h2 className="parallax-title">MONDSTADT</h2>
          </div>
        </div>
        <div className="mondstadt-grid">
          {mondstadtFood &&
            mondstadtFood.map((item, index) => {
              let imgEl = (
                <>
                  <div className="item-image-container">
                    <Link to={`/menu/${item._id}`}>
                      <img
                        src={`http://localhost:3001/uploads/${item.image}`}
                        alt=""
                        style={{ cursor: 'pointer' }}
                        // onClick={() => {
                        // }}
                      />
                    </Link>
                  </div>
                  <Link className="item-name" to={`/menu/${item._id}`}>
                    <h3>{item.name}</h3>
                  </Link>
                  <p className="item-des">{item.description}</p>
                  <p className="item-price">${item.price}</p>
                </>
              );
              return (
                <div className="mondstadt-item" key={index}>
                  {imgEl}
                </div>
              );
            })}
        </div>
      </section>
      <section className="liyue-food">
        <div className="parallax">
          <div className="parallax-overlay">
            <h2 className="parallax-title">LIYUE</h2>
          </div>
        </div>
        <div className="liyue-grid">
          {liyueFood &&
            liyueFood.map((item, index) => {
              let imgEl = (
                <>
                  <div className="item-image-container">
                    <Link to={`/menu/${item._id}`}>
                      <img
                        src={`http://localhost:3001/uploads/${item.image}`}
                        alt=""
                        style={{ cursor: 'pointer' }}
                        // onClick={() => {
                        // }}
                      />
                    </Link>
                  </div>
                  <Link className="item-name" to={`/menu/${item._id}`}>
                    <h3>{item.name}</h3>
                  </Link>
                  <p className="item-des">{item.description}</p>
                  <p className="item-price">${item.price}</p>
                </>
              );
              return (
                <div className="liyue-item" key={index}>
                  {imgEl}
                </div>
              );
            })}
        </div>
      </section>
      <section className="inazuma-food">
        <div className="parallax">
          <div className="parallax-overlay">
            <h2 className="parallax-title">INAZUMA</h2>
          </div>
        </div>
        <div className="inazuma-grid">
          {inazumaFood &&
            inazumaFood.map((item, index) => {
              let imgEl = (
                <>
                  <div className="item-image-container">
                    <Link to={`/menu/${item._id}`}>
                      <img
                        src={`http://localhost:3001/uploads/${item.image}`}
                        alt=""
                        style={{ cursor: 'pointer' }}
                        // onClick={() => {
                        // }}
                      />
                    </Link>
                  </div>
                  <Link className="item-name" to={`/menu/${item._id}`}>
                    <h3>{item.name}</h3>
                  </Link>
                  <p className="item-des">{item.description}</p>
                  <p className="item-price">${item.price}</p>
                </>
              );
              return (
                <div className="inazuma-item" key={index}>
                  {imgEl}
                </div>
              );
            })}
        </div>
      </section>
      <section className="sumeru-food">
        <div className="parallax">
          <div className="parallax-overlay">
            <h2 className="parallax-title">SUMERU</h2>
          </div>
        </div>
        <div className="sumeru-grid">
          {sumeruFood &&
            sumeruFood.map((item, index) => {
              let imgEl = (
                <>
                  <div className="item-image-container">
                    <Link to={`/menu/${item._id}`}>
                      <img
                        src={`http://localhost:3001/uploads/${item.image}`}
                        alt=""
                        style={{ cursor: 'pointer' }}
                        // onClick={() => {
                        // }}
                      />
                    </Link>
                  </div>
                  <Link className="item-name" to={`/menu/${item._id}`}>
                    <h3>{item.name}</h3>
                  </Link>
                  <p className="item-des">{item.description}</p>
                  <p className="item-price">${item.price}</p>
                </>
              );
              return (
                <div className="sumeru-item" key={index}>
                  {imgEl}
                </div>
              );
            })}
        </div>
      </section>
      <section className="fontaine-food">
        <div className="parallax">
          <div className="parallax-overlay">
            <h2 className="parallax-title">FONTAINE</h2>
          </div>
        </div>
        <div className="fontaine-grid">
          {fontaineFood &&
            fontaineFood.map((item, index) => {
              let imgEl = (
                <>
                  <div className="item-image-container">
                    <Link to={`/menu/${item._id}`}>
                      <img
                        src={`http://localhost:3001/uploads/${item.image}`}
                        alt=""
                        style={{ cursor: 'pointer' }}
                        // onClick={() => {
                        // }}
                      />
                    </Link>
                  </div>
                  <Link className="item-name" to={`/menu/${item._id}`}>
                    <h3>{item.name}</h3>
                  </Link>
                  <p className="item-des">{item.description}</p>
                  <p className="item-price">${item.price}</p>
                </>
              );
              return (
                <div className="fontaine-item" key={index}>
                  {imgEl}
                </div>
              );
            })}
        </div>
      </section>
      <section className="side-food">
        <div className="parallax">
          <div className="parallax-overlay">
            <h2 className="parallax-title">DRINKS & DESSERTS</h2>
          </div>
        </div>
        <div className="side-grid">
          {sideFood &&
            sideFood.map((item, index) => {
              let imgEl = (
                <>
                  <div className="item-image-container">
                    <Link to={`/menu/${item._id}`}>
                      <img
                        src={`http://localhost:3001/uploads/${item.image}`}
                        alt=""
                        style={{ cursor: 'pointer' }}
                        // onClick={() => {
                        // }}
                      />
                    </Link>
                  </div>
                  <Link className="item-name" to={`/menu/${item._id}`}>
                    <h3>{item.name}</h3>
                  </Link>
                  <p className="item-des">{item.description}</p>
                  <p className="item-price">${item.price}</p>
                </>
              );
              return (
                <div className="side-item" key={index}>
                  {imgEl}
                </div>
              );
            })}
        </div>
      </section>
      <section className="delivery-parallax">
        <div className="parallax-overlay">
          <h2 className="delivery-name">Komaniya Express Delivery</h2>
          <p className="delivery-p">
            Based on the famous delivery company from Inazuma, Genshin Impact. Komaniya Express will deliver food to
            your front door in no time!
          </p>
          <Link to="/menu/delivery">
            <Button className="delivery-btn" label="ORDER NOW" rounded />
          </Link>
        </div>
      </section>
      <section className="sign-up-container">
        <h3 className="sign-up-title">Want to contact us?</h3>
        <SignUpForm className="sign-up-form" onSubmit={handleFormSubmit}></SignUpForm>
      </section>
    </>
  );
}

export default Menu;
