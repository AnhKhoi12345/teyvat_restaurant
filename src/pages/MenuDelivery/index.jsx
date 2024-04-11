import './menuDelivery.scss';
import { useEffect, useState } from 'react';
import foodApi from '../../api/foodApi';
import PropHeader from '../../component/PropHeader';
function MenuDelivery() {
  const [food, setFood] = useState([]);
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

  return (
    <>
      <PropHeader img="url(https://i.imgur.com/gYoXWFK.jpeg)  top no-repeat" title="MENU >> DELIVERY" />
      <div className="delivery-page-container">
        <div className="delivery-container"></div>
        <div className="food-container">
          <input type="text" value={searchItem} onChange={handleInputChange} placeholder="Type to search" />
          {filteredFood.length === 0 ? (
            <p>No users found</p>
          ) : (
            <ul className="food-grid">
              {filteredFood &&
                filteredFood.map((data) => {
                  return (
                    <li className="food-item" key={data._id}>
                      <div className="food-image-container">
                        <img className="food-image" src={`http://localhost:3001/uploads/${data.image}`} alt=""></img>
                      </div>
                      {data.name}
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
