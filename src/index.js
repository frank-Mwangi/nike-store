import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const Sneaker1 = {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-rWtqPn.png',
    name: "Nike Air Force 1 '07",
    price: 'R 2 099.95',
};
const Sneaker2 = {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7683c588-e0f5-46b9-9382-ef6ec80db821/jordan-stadium-90-shoes-qT0NdR.png',
    name: 'Jordan Stadium 90',
    price: 'R 2 599.95',
};
const Sneaker3 = {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/889ef520-349a-49da-80d4-8d75f9651feb/blazer-mid-77-vintage-shoes-CBDjT0.png',
    name: "Nike Blazer Mid '77 Vintage",
    price: 'R 1 999.95',
};
const Sneaker4 = {
    img: 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/00d01773-cb73-402a-ab09-337f5e5fef18/cortez-white-and-black-dm4044-100-release-date.jpg',
    name: 'Cortez White and Black',
    price: 'R 1 899.95',
};
const Sneaker5 = {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/700d7b05-10f4-4f8c-b380-fa6bb9f78829/react-infinity-run-flyknit-3-road-running-shoes-sqDvTF.png',
    name: 'Nike React Infinity Run Flyknit 3',
    price: 'R 3 299.95',
};
const Sneaker6 = {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7f6bc6f-d64a-4426-b474-f8e9b23fd86e/jordan-series-es-shoes-kSNd8k.png',
    name: 'Jordan Series ES',
    price: 'R 1 699.95',
};
const Sneaker7 = {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4095d910-696e-4ea5-a2d6-7130daa8d383/court-vintage-shoe-PgwXmd.png',
    name: 'Nike Court Vintage Premium',
    price: 'R 1 399.95',
};
const Sneaker8 = {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7e06a1f5-2f26-4426-b0f2-a22b89e5b50d/jordan-series-mid-shoes-MV9QRP.png',
    name: 'Jordan Series Mid',
    price: 'R 1 899.95',
};
const Sneaker9 = {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8b63eac1-c941-4259-b811-3327920d6178/blazer-mid-77-shoes-nqhZFt.png',
    name: "Nike Blazer Mid '77",
    price: 'R 2 099.95',
};
const Sneaker10 = {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3ceec1a9-ffd0-49de-bc6e-507b08f66545/air-max-terrascape-90-shoes-Qv9Ps3.png',
    name: 'Nike Air Max Terrascape 90',
    price: 'R 2 999.95',
};
const Sneaker11 = {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6c38b956-2f8b-40f4-b914-bd915f380dbc/jordan-delta-3-low-shoes-k3jpxK.png',
    name: 'Jordan Delta 3 Low',
    price: 'R 2 099.99',
};
const Sneaker12 = {
    img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/89638988-c97b-4e50-896e-8bf9f9f77cf2/air-max-1-86-og-g-golf-shoes-XbMHm5.png',
    name: "Nike Air Max 1 '86 OG",
    price: 'R 3 499.95',
};

const Sneaker = (props) => {
    return (
        <article className='sneaker'>
            <img src={props.img} alt={props.name} />
            <h2>{props.name}</h2>
            <h4>{props.price}</h4>
        </article>
    )
}

const SneakerList = () => {
    return (
         <section className='sneakerlist'>
           <Sneaker img={Sneaker1.img} name={Sneaker1.name} price={Sneaker1.price}/>          
           <Sneaker img={Sneaker2.img} name={Sneaker2.name} price={Sneaker2.price}/>
           <Sneaker img={Sneaker3.img} name={Sneaker3.name} price={Sneaker3.price}/>
           <Sneaker img={Sneaker4.img} name={Sneaker4.name} price={Sneaker4.price}/>
           <Sneaker img={Sneaker5.img} name={Sneaker5.name} price={Sneaker5.price}/>
           <Sneaker img={Sneaker6.img} name={Sneaker6.name} price={Sneaker6.price}/>
           <Sneaker img={Sneaker7.img} name={Sneaker7.name} price={Sneaker7.price}/>
           <Sneaker img={Sneaker8.img} name={Sneaker8.name} price={Sneaker8.price}/>
           <Sneaker img={Sneaker9.img} name={Sneaker9.name} price={Sneaker9.price}/>
           <Sneaker img={Sneaker10.img} name={Sneaker10.name} price={Sneaker10.price}/>
           <Sneaker img={Sneaker11.img} name={Sneaker11.name} price={Sneaker11.price}/>
           <Sneaker img={Sneaker12.img} name={Sneaker12.name} price={Sneaker12.price}/>
         </section>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SneakerList/>);
