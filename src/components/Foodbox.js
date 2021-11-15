import { useState } from 'react';

function Foodbox(props) {
  const [quantity, setQuantity] = useState(0);

  function handleChange(event) {
    setQuantity(event.target.valueAsNumber);
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={props.image} alt={props.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{props.name}</strong> <br />
              <small>{props.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                min="0"
                onChange={handleChange}
                value={quantity}
              />
            </div>
            <div className="control">
              <button
                className="button is-info"
                onClick={() => {
                  if (quantity > 0) {
                    props.addTodaysFood({
                      quantity: quantity,
                      name: props.name,
                      calories: props.calories,
                    });
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Foodbox;
