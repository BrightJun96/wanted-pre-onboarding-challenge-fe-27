// 폼 추상화
import React from "react";
import {AbstractOption} from "../../type/option.ts";
import CustomButton from "../button/customButton.tsx";
import CustomInput from "../input/customInput.tsx";
import CustomRadio from "../radio/customRadio.tsx";

// 공통 폼
function AbstractForm({children,className,onSubmit}:{
    children: React.ReactNode,
    className?: string;
    onSubmit:() => void
}) {

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmit()

    }
    return (
        <form
            className={className}
        onSubmit={handleSubmit}
        >
            {children}
        </form>
    );
}

export default AbstractForm;


// 필드 타입
export interface FieldType{
    type: "text" | "radio";
    label: string;
    value: string;
    options?:AbstractOption[];
    onChange: (value: string) => void;

}

// 필드
function Fields({fields}:{fields: FieldType[]}) {
    return (
   <>
       {fields.map((field, index) => {
           switch (field.type) {
               case "text":
                   return (
                       <CustomInput
                           key={index}
                           label={field.label}
                           value={field.value}
                           onChange={field.onChange}
                           inputType="text"
                       />
                   );
               case "radio":
                   if (field.options) {
                       return (
                           <CustomRadio
                               key={index}
                               label={field.label}
                               value={field.value}
                               options={field.options}
                               onChange={field.onChange}
                           />
                       );
                   }
                   console.warn(`라디오 필드에 옵션이 필요합니다.`);
                   return null;
               default:
                   console.warn(`존재하지 않는 필드 타입입니다.".`);
                   return null;
           }
       })}
   </>
    );
}

export interface AbstractButtonType{
    type:"button" | "submit" | "reset"
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}

// 버튼
function Buttons({buttons}:{buttons:AbstractButtonType[]}){
    return (
        <>
            {buttons.map((button,index) => (
                <CustomButton
                    key={index}
                    label={button.label}
                    type={button.type}
                    onClick={button.type !== "submit" ? button.onClick : undefined}
                    disabled={button.disabled}
                />
            ))
            }
        </>
    );

}


AbstractForm.Fields=Fields;
AbstractForm.Buttons=Buttons;
