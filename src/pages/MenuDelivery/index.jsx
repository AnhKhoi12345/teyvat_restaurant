import './menuDelivery.scss';
import { useEffect, useRef, useState } from 'react';
import foodApi from '../../api/foodApi';
import PropHeader from '../../component/PropHeader';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

function MenuDelivery() {
  const [food, setFood] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [filteredFood, setFilteredFood] = useState([]);
  useEffect(() => {
    foodApi.getAll().then((data) => {
      setFood(data);
      setFilteredFood(data);
    });

    window.scrollTo(0, 0);
  }, []);
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredItems = food.filter((staff) => staff.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredFood(filteredItems);
  };
  const addToOrder = (data) => {
    let ranId = Math.floor(Math.random() * 10000000);
    let order = { id: ranId, name: data.name, price: data.price };
    // if (orderList.length > 0) {
    //   if (orderList.some((e) => e.id === order.id)) {
    //     let copyOrderList = [...orderList]
    //     // let item = copyOrderList.filter(obj => {
    //     //   return obj.id === 6
    //     // })
    //     let i = copyOrderList.findIndex(e => e.id === order.id);
    //     let editItem = copyOrderList[i];
    //     editItem.name = editItem.name + "x"
    //     // console.log(item);
    //   }
    // }
    setOrderList([...orderList, order]);
  };
  const deleteFromOrder = (id) => {
    setOrderList((orderList) => orderList.filter((item) => item.id !== id));
  };
  // const [visible, setVisible] = useState(false);
  const getOrder = () => {
    var totalCost = 0;
    for (let i = 0; i < orderList.length; i++) {
      totalCost += orderList[i].price;
    }
    let submitOrder = {
      name: 'Khoi',
      phone: '0124567899',
      order: orderList.name,
      type: 'delivery',
      total: totalCost,
      code: 'GENSHINIMPACTSUPAGIFT',
    };
    console.log(submitOrder);
  };
  return (
    <>
      <PropHeader img="url(https://i.imgur.com/gYoXWFK.jpeg)  top no-repeat" title="MENU >> DELIVERY" />
      <div className="delivery-page-container">
        <div className="delivery-container">
          <div className="delivery-box">
            <h1>YOUR ORDER</h1>
            <ul className="delivery-list">
              {orderList &&
                orderList.map((data) => {
                  return (
                    <li className="order-item" key={data.id} onClick={() => deleteFromOrder(data.id)}>
                      <p>
                        {data.name}.............${data.price}
                      </p>
                    </li>
                  );
                })}
            </ul>
            <Button label="Confirm" onClick={getOrder} />
          </div>
        </div>
        <div className="food-container">
          <input
            className="search-input"
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Type to search"
          />
          {/* <Dialog
            visible={visible}
            modal
            onHide={() => setVisible(false)}
            content={({ hide }) => (
              <div
                className="flex flex-column px-8 py-5 gap-4"
                style={{
                  borderRadius: '12px',
                  backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))',
                }}
              >
                <form></form>
                <div className="inline-flex flex-column gap-2">
                  <label htmlFor="Number" className="text-primary-50 font-semibold">
                    Number
                  </label>
                  <InputText
                    id="Number"
                    label="Number"
                    keyfilter="int"
                    className="bg-white-alpha-20 border-none p-3 text-primary-50"
                  ></InputText>
                </div>
                <div className="flex align-items-center gap-2">
                  <Button
                  type='submit'
                    label="Confirm"
                    onClick={(e) => hide(e)}
                    text
                    className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
                  ></Button>
                  <Button
                    label="Cancel"
                    onClick={(e) => hide(e)}
                    text
                    className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
                  ></Button>
                </div>
              </div>
            )}
          ></Dialog> */}
          {filteredFood.length === 0 ? (
            <p>No users found</p>
          ) : (
            <ul className="food-grid">
              {filteredFood &&
                filteredFood.map((data) => {
                  return (
                    <li className="food-item" key={data._id}>
                      <div
                        className="food-image-container"
                        onClick={() => {
                          addToOrder(data);
                        }}
                      >
                        <img className="food-image" src={`http://localhost:3001/uploads/${data.image}`} alt=""></img>
                      </div>
                      <h1 className="food-name" onClick={() => addToOrder(data)}>
                        {data.name}
                      </h1>
                      <p className="food-info">
                        {data.nation}, {data.category}
                      </p>
                      <p className="food-price">${data.price}</p>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default MenuDelivery;
