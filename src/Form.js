import { buttonGroup, data } from "./data";

function Form() {
  const { schema } = data.form;
  const {button}=buttonGroup.form
  // console.log(schema)

  return schema.map((input, index) => {
    return (
      <div key={index}>
        <h3>{input.title}</h3>
        <form action="">
          {input.feild.map((inputfeild ) => {
            return (
              <div key={inputfeild.id}>
                <label htmlFor="" key={index}>{inputfeild.name}</label>
                <input
                  type={inputfeild.data_type}
                  placeholder={inputfeild.placeholder}
                  required={inputfeild.required}
                />
              </div>
            );
          })}
          {button.map(btns=>{
            return(
                <button type={btns.type} key={btns.id}>{btns.name}</button>
            )
          })}
        </form>
      </div>
    );
  });
}
export default Form;
