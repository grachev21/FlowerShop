import { useLocation, useNavigate } from "react-router-dom";

const OrderDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { order } = location.state || {};
  console.log(order);
  const openProduct = () => {
    navigate(`/productCard/${order.product.id}`);
  };
  return (
    <main>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Название</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Продукт</th>
              <td>
                <a onClick={openProduct} className="link link-success">
                  {order.product.name}
                </a>
              </td>
              <td>
                <img className="img-rounded h-7" src={order.product.photos[0].image} alt="" />
              </td>
              <td>Blue</td>
            </tr>

            <tr>
              <th>Страна</th>
              <td>{order.country}</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>

            <tr>
              <th>Город</th>
              <td>{order.city}</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>

            <tr>
              <th>Индекс</th>
              <td>{order.postal_code}</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>

            <tr>
              <th>Адрес</th>
              <td>{order.address}</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>

            <tr>
              <th>Создано</th>
              <td>{order.created}</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};
export default OrderDetail;
