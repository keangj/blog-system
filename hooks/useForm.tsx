import { AxiosResponse } from "axios";
import { ReactChild, useCallback, useState } from "react";

type Field<T> = {
  label: string;
  type: 'text' | 'password' | 'textarea';
  key: keyof T;
}
type UseFormOptions<T> = {
  initFormData: T;
  fields: Field<T>[];
  submit: {
    request: (formData: T) => Promise<AxiosResponse<T>>,
    message: string
  }
  buttons: ReactChild
}

export function useForm<T> (useFormOptions: UseFormOptions<T>) {
  const { initFormData, fields, submit, buttons } = useFormOptions;
  const [formData, setFormData] = useState(initFormData);
  const [errors, setErrors] = useState(() => {
    const e: { [k in keyof T]?: string[] } = {};
    for (let key in initFormData) {
      if (initFormData.hasOwnProperty) {
        e[key] = [];
      }
    }
    return e;
  })
  const onChange = useCallback((key: keyof T, value) => {
    setFormData({...formData, [key]: value})
  }, [formData])
  const _onSubmit = useCallback((e) => {
    e.preventDefault();
    submit.request(formData).then(resource => {
      console.log(resource);
    }, error => {
      console.log(error.response);
      if (error.response) {
        const response: AxiosResponse = error.response;
        setErrors(response.data)
      }
    })
  }, [submit, formData])
  const form = (
    <form onSubmit={_onSubmit}>
      {fields.map((field, key) => 
        <div key={key}>
          <label>
            {field.label}
            {field.type === 'textarea' ?
              <textarea onChange={e => onChange(field.key, e.target.value)} value={formData[field.key].toString()}/> :
              <input type={field.type} value={formData[field.key].toString()} onChange={e => onChange(field.key, e.target.value)}/>
            }
          </label>
          {errors[field.key]?.length > 0 && <div>{errors[field.key].join()}</div>}  
        </div>
      )}
      
      <div>{buttons}</div>
    </form>
  )
  return { form };

}