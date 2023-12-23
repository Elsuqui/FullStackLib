import { InputText } from "../components/form/input_text";
import Datepicker from "tailwind-datepicker-react";
import { useState } from 'react';
import { BookCover } from "../components/book_cover";

const options = {
	title: "Demo Title",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	clearBtnText: "Clear",
	datepickerClassNames: "absolute top-auto",
	defaultDate: new Date("2022-01-01"),
	language: "es",
	disabledDates: [],
	weekDays: ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Dom"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
}

const libros = [
    {
        cover: "https://images.cdn3.buscalibre.com/fit-in/180x180/7a/72/7a72d3f38f52c4fefca2bc32fc8a73a1.jpg",
        title: "Nombre 1",
        author: "Author 1",
        price: "2.00",
        quantity: 1
    },
    {
        cover: "https://images.cdn3.buscalibre.com/fit-in/180x180/d4/50/d4507dcd6ef6da54393be9cd25bb9119.jpg",
        title: "Nombre 2",
        author: "Author 2",
        price: "2.00",
        quantity: 1
    },
    {
        cover: "https://images.cdn3.buscalibre.com/fit-in/180x180/49/8e/498e746910eb1599b168ca4e10f376f0.jpg",
        title: "Nombre 2",
        author: "Author 2",
        price: "2.00",
        quantity: 1
    }
];

export const HistoryPaymentPage = () => {
    const [show, setShow] = useState(false);
	const handleChange = (selectedDate) => {
		console.log(selectedDate)
	}
	const handleClose = (state) => {
		setShow(state)
	}
    return (
        <div className="mt-4">
            <div className="text-3xl mb-4"><span>Historial de pedidos</span></div>
            <div className="flex flex-col justify-start gap-x-8">
                <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
                <InputText name="query_filter" label="Search"/>
            </div>
            <div className="flex flex-col">
                {
                 (libros.map((element, key) => {
                   return (
                    <div className="flex my-4">
                    <BookCover
                        cover={ element.cover }
                        size="sm" />
                    <div className="mx-4 my-2 grow">
                        <div className="font-bold text-2xl"><span>{ element.title }</span></div>
                        <div className="text-xl"><span>{ element.author }</span></div>
                        <div className="text-xl font-bold mt-4"><span>{ element.price }</span></div>
                    </div>
                    </div>
                   ); 
                  })
                 )  
                }
            </div>
        </div>
    );
};