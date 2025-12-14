import React, { useEffect } from 'react';
import { Formik, Form, Field,useFormikContext } from 'formik';
const Input = ({name,label,...props})=>{
    const {setFieldValue} = useFormikContext()
    return <Field name={name}>
        {
            ({field,meta})=>{
            return (
                <div>
                    {label && <label>{label}</label>}
                    <input 
                    {...field}
                    {...props}
                    onChange={(ev)=>setFieldValue(name,ev.target.value)}
                    />
                    {meta && meta.touched && meta.error && <div>{meta.error}</div>}
                </div>
            )}
        }
    </Field>
}
const getVal = {
    productName: "Suzuki Samurai",
    coverName: "Basic Cover"
}
const WrapperComp = ({children})=>{
    const {setFieldValue,values} = useFormikContext()
    useEffect(()=>{
        const recursive = (value,keyVal="",finalKey="")=>{
        if(typeof keyVal=="string"){
            console.log("Final Key",finalKey)
            if(finalKey){
                const fieldVal = getVal[finalKey]||""
                setFieldValue(keyVal,fieldVal)
            }
               
        }
        if(typeof value=="object"){
            const rootKeys = Object.keys(value)
            console.log("rootKeys")
            rootKeys.forEach(key=>{
                let finalKey = key
                console.log("key each",finalKey)
                key =  keyVal ? `${keyVal}.${key}` : key;
                recursive(value[finalKey],key,finalKey)
            })
        }
    }
    recursive(values)
    },[getVal])
    return <>{children}</>
}
const Product = ()=>{
    return (
        <div>
            <Input name="product.productName" label={"Product Name"}/>
        </div>
    ) 
}
const Cover = ()=>{
    return (
        <div>
            <Input name="cover.coverName" label={"Cover Name"}/>
        </div>
    ) 
}
const MyForm = () => {
    const initialVal  = {
        product:{
            productName: ""
        },
        cover:{
            coverName: ""
        }
    }
    const onSubmit = ()=>{

    }
  return (
    <Formik initialValues={initialVal} onSubmit={onSubmit}>
       <>
       <Form>
        <WrapperComp>
            <Product/>
        </WrapperComp>
            
        </Form>
        <Form>
                <Cover/>
        </Form>
        </>
            
       
        
    </Formik>
  );
};

export default MyForm;
