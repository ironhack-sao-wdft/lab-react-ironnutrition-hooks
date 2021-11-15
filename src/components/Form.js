import { useState } from 'react';

function Form(props) {
  const [formData, setFormData] = useState({
    name: '',
    calories: 0,
    image: '',
  });

  function handleChange(event) {
    let value = event.target.value;

    if (event.target.name === 'calories') {
      value = event.target.valueAsNumber;
    }
    setFormData({ ...formData, [event.target.name]: value });
  }

  function handleSubmit(event) {
    // Impede o comportamento padrão do navegador de enviar os dados do formulário via URL e recarregar a página
    event.preventDefault();

    // setFoods é a função que atualiza o state do componente App. Estamos adicionando um novo objeto nesse state (o formData), através dessa função atualizamos o state de cima, através de um componente abaixo
    props.setFoods([...props.foods, formData]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Food Name</label>
        <div className="control">
          {/* Input controlado: o state é atualizado usando o evento 'change' e o value do input é forçado a ser igual ao state */}
          <input
            className="input"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Food Calories</label>
        <div className="control">
          <input
            type="number"
            className="input"
            name="calories"
            onChange={handleChange}
            value={formData.calories}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Food Image</label>
        <div className="control">
          <input
            className="input"
            name="image"
            onChange={handleChange}
            value={formData.image}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          {/* O clique no botão com type="submit" que está dentro de um <form> faz com que o <form> dispare um evento do tipo Submit contendo todas as informações do formulário */}
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
