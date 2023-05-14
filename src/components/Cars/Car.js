import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store";

const Car = ({ id, name, carClass, image, seats, luggage, description }) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.totalQuatity);
  const cartItem = useSelector((state) =>
    state.items.find((item) => item.id === id)
  );

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        carClass,
        name,
        image,
      })
    );
  };

  const removeItemFromCart = () => {
    if (totalQuantity <= 0) {
      return;
    }
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div
      id={id}
      className="flex flex-col h-[600px] mb-5 shadow-lg mr-5 bg-white"
    >
      <img src={image} alt={name} className="w-[311px] m-auto" />
      <div className="p-3 md:p-6">
        <article className="mb-8 text-center">
          <h3 className="text-2xl text-[--primary-color] uppercase font-bold ">
            {carClass}
          </h3>
          <p className="text-[16px]">{name}</p>
        </article>
        <p className="mb-8">{description}</p>
        <div className="flex justify-between itmes-center">
          <div>
            <div>
              <p className="text-[18px] text-[--primary-color]">
                <i className="fa-solid fa-user-group text-[--secondary-color] mr-4"></i>
                {seats} Seats
              </p>
            </div>
            <div>
              <p className="text-[18px] text-[--primary-color]">
                <i className="fa-solid fa-suitcase text-[--secondary-color] mr-4"></i>
                {luggage} Luggage
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="px-2 py-1 text-white text-center bg-[--primary-color] rounded-l-md"
              onClick={removeItemFromCart}
            >
              <i className="fa-solid fa-minus text-[12px]"></i>
            </button>
            <span>{cartItem ? cartItem.quantity : 0}</span>
            <button
              className="px-2 py-1 text-white text-center bg-[--primary-color] rounded-r-md"
              onClick={addToCartHandler}
            >
              <i className="fa-solid fa-plus text-[12px]"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
