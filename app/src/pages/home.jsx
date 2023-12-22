import { SaleBook } from "../components/sale_book";

export const HomePage = () => {
    return (
        <>
            <div className="mt-4">
                <span className="text-3xl font-extrabold">Novedades</span>
            </div>
            <hr className="border-1 border-black" />
            <div className="flex flex-wrap flex-row gap-x-8 gap-y-12 text-center mt-4">
                <SaleBook 
                    cover="https://images.cdn3.buscalibre.com/fit-in/180x180/7a/72/7a72d3f38f52c4fefca2bc32fc8a73a1.jpg"
                    name="Nombre 1"
                    author="Autor 1"
                    description="Description 1"
                    price="$ 2.00"
                    />
                <SaleBook 
                    cover="https://images.cdn3.buscalibre.com/fit-in/180x180/d4/50/d4507dcd6ef6da54393be9cd25bb9119.jpg"
                    name="Nombre 1"
                    author="Autor 1"
                    description="Description 1"
                    price="$ 2.00"
                    />
                <SaleBook 
                    cover="https://images.cdn3.buscalibre.com/fit-in/180x180/49/8e/498e746910eb1599b168ca4e10f376f0.jpg"
                    name="Nombre 1"
                    author="Autor 1"
                    description="Description 1"
                    price="$ 2.00"
                    />
                <SaleBook 
                    cover="https://images.cdn2.buscalibre.com/fit-in/180x180/bb/f9/bbf92d9eadfad10040ad22ce195b418f.jpg"
                    name="Nombre 1"
                    author="Autor 1"
                    description="Description 1"
                    price="$ 2.00"
                    />
                <SaleBook 
                    cover="https://images.cdn1.buscalibre.com/fit-in/180x180/c9/03/c90335a90376e2cf17e3c5e6689b022e.jpg"
                    name="Nombre 1"
                    author="Autor 1"
                    description="Description 1"
                    price="$ 2.00"
                    />
                <SaleBook 
                    cover="https://images.cdn2.buscalibre.com/fit-in/180x180/e9/bc/e9bc8caef5dd1210ea98573b1f66baad.jpg"
                    name="Nombre 1"
                    author="Autor 1"
                    description="Description 1"
                    price="$ 2.00"
                    />
                <SaleBook 
                    cover="https://images.cdn2.buscalibre.com/fit-in/180x180/e9/bc/e9bc8caef5dd1210ea98573b1f66baad.jpg"
                    name="Nombre 1"
                    author="Autor 1"
                    description="Description 1"
                    price="$ 2.00"
                    />
                <SaleBook 
                    cover="https://images.cdn2.buscalibre.com/fit-in/180x180/e9/bc/e9bc8caef5dd1210ea98573b1f66baad.jpg"
                    name="Nombre 1"
                    author="Autor 1"
                    description="Description 1"
                    price="$ 2.00"
                    />
                <SaleBook 
                    cover="https://images.cdn2.buscalibre.com/fit-in/180x180/e9/bc/e9bc8caef5dd1210ea98573b1f66baad.jpg"
                    name="Nombre 1"
                    author="Autor 1"
                    description="Description 1"
                    price="$ 2.00"
                    />
                <SaleBook 
                    cover="https://images.cdn2.buscalibre.com/fit-in/180x180/e9/bc/e9bc8caef5dd1210ea98573b1f66baad.jpg"
                    name="Nombre 1"
                    author="Autor 1"
                    description="Description 1"
                    price="$ 2.00"
                    />
            </div>
        </>
    );
};