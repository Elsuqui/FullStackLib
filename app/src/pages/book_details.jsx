import { BookCover } from "../components/book_cover";

export const BookDetailsPage = () => {
    return (
        <>
        <div className="my-4">
            <div className="flex justify-start">
                <div className="mx-6 w-fit text-4xl mt-4"><span>Nombre del libro</span></div>
            </div>
            <div className="flex justify-start">
                <div className="flex flex-col w-1/3 my-4">
                    <BookCover 
                        cover="https://images.cdn3.buscalibre.com/fit-in/180x180/7a/72/7a72d3f38f52c4fefca2bc32fc8a73a1.jpg"
                        size="md"
                        />
                    <div className="mx-6 my-4 p-2 text-sm">
                        <table className="w-full">
                            <tr>
                                <td>ISBN</td>
                                <td>9788408279990</td>
                            </tr>
                            <tr>
                                <td>Autor</td>
                                <td>AUTOR 1</td>
                            </tr>
                            <tr>
                                <td>Año</td>
                                <td>2012</td>
                            </tr>
                            <tr>
                                <td>N# Páginas</td>
                                <td>200</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div className="w-2/3">
                    <div className="w-fit text-4xl mt-4"><span>Autor 1 (Autor)</span></div>
                    <div className="mt-2"><span>Calificación</span></div>
                    <div className="text-2xl mt-8 font-bold"><span>US$ 40,00</span></div>
                    <button className="bg-orange-950 px-8 py-2 text-white rounded-md text-xl mt-2">Comprar</button>
                    <div className="mt-2"><span>Agregar a lista de deseos</span></div>

                    <div className="my-8">
                        <div className="text-3xl"><span>Descripción</span></div>
                        <div>
                            <p className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet nisi massa. Pellentesque lacus nisi, congue eget vulputate nec, gravida et magna. Fusce id libero vel urna fermentum efficitur vitae id lacus. Nullam maximus, nisi nec condimentum tristique, mi nibh maximus metus, sit amet suscipit massa nisl eget orci. Nam eu justo egestas, commodo massa eu, gravida dolor. Aenean vel nisi pulvinar quam finibus dignissim ac vel mauris. Nunc vel quam id lacus iaculis tincidunt at vel lectus. Suspendisse gravida fermentum iaculis. Nulla volutpat odio eu ullamcorper finibus.
                            Vestibulum scelerisque, nisl et tincidunt porttitor, ipsum nibh ullamcorper mi, at suscipit nisi enim maximus orci. Ut fermentum urna et nunc ornare, at pharetra est dictum. Nulla vestibulum ligula nunc, vel auctor leo feugiat at. Maecenas eu posuere tortor. Maecenas cursus dui ante, vel eleifend orci imperdiet in. Cras viverra condimentum arcu at dignissim. Praesent id neque eu tortor porta blandit. Morbi in orci viverra, finibus mi et, molestie nunc. Quisque volutpat dictum metus vel mollis. Praesent eget ante blandit, pretium orci ac, sagittis est. Phasellus iaculis, purus eu auctor porta, erat mauris ultricies orci, sit amet aliquet lectus ipsum et purus. In in facilisis augue.
                            Maecenas elementum efficitur neque, id tincidunt tortor pretium bibendum. Ut ullamcorper laoreet enim sodales scelerisque. Praesent quis tristique mi. Etiam blandit volutpat condimentum. Vestibulum eleifend urna vitae enim commodo, quis luctus sapien ornare. Nam fringilla sapien ac nulla gravida tincidunt. Nunc malesuada diam turpis.
                            Aliquam eleifend nunc quis luctus semper. Aenean tincidunt dolor est, vel auctor ex convallis in. Cras posuere vitae neque at gravida. Donec porttitor sem nec euismod vestibulum. Vivamus pretium consequat viverra. Nulla et vulputate augue. In purus nulla, euismod quis mattis tempus, malesuada eu ligula. Vestibulum aliquet mollis elit in malesuada. Sed non dapibus nisl. In a pharetra turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                            In eget volutpat libero, efficitur condimentum quam. Mauris id venenatis diam. Mauris at ante bibendum, convallis sapien non, ultricies magna. Phasellus a massa in mauris tempus tincidunt eu sit amet enim. Etiam semper justo nec bibendum luctus. Nam rhoncus, felis vitae fringilla pretium, urna nisl venenatis ligula, in malesuada orci leo eu sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            Curabitur aliquam ligula in maximus tempus. In varius ipsum sit amet urna faucibus volutpat. Vestibulum aliquam lacus iaculis mauris placerat rhoncus. Vivamus ut pulvinar ipsum. Mauris ultricies massa a massa iaculis porttitor. Maecenas efficitur dui vitae dui ornare, sed accumsan quam dictum. In laoreet mi dolor, sit amet vulputate diam auctor quis. Aenean eget tellus at urna auctor efficitur et fringilla risus. Aliquam erat volutpat. Nulla cursus eu nisi non scelerisque. In volutpat, leo vitae tempor interdum, est leo accumsan neque, eu viverra massa dolor non justo.
                            Duis aliquet magna a elit scelerisque dictum. Sed sed pharetra justo, in bibendum nisl. Cras aliquam suscipit rutrum. Nam urna nulla, porttitor sit amet neque vel, porttitor eleifend dolor. Nunc fermentum erat sit amet fermentum gravida.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};