export const data = {
  form: {
    schema: [
      {
        title: "Form",
        Section_title: "title",
        feild: [
          {
            id:1,
            name: "name",
            label: "name",
            required: true,
            data_type: "text",
            placeholder: "Name",
          },
          {
            id:2,
            name: "Surname",
            label: "Surname",
            required: true,
            data_type: "text",
            placeholder: "Surname",
          },
          {
            id:3,
            name: "age",
            label: "age",
            required: true,
            data_type: "number",
            placeholder: "Age",
          },
          {
            id:4,
            name: "email",
            label: "email",
            required: true,
            data_type: "email",
            placeholder: "email",
          },
          {
            id:5,
            name: "date",
            label: "date",
            // 'required':true,
            data_type: "date",
            // 'placeholder':'email'
          },
        ],
      },
    ],
  },
};
export const buttonGroup = {
  form: {
    button: [
      {
        id:1,
        name: "clear",
        type: "button",
      },
      {
        id:2,
        name: "submit",
        type: "button",
      },
    ],
  },
};
