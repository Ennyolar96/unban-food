import Product from "../Product/Product";

let  products = Product();

let item1 = products.props.children.props.children[13].props.children.props;
let item2 = products.props.children.props.children[22].props.children.props;
let item3 = products.props.children.props.children[20].props.children.props;

const items = [
    {id:1, name: item1.name, desc: "A must taste Nigerian classic.", image: item1.images},
    {id:2, name: item2.name, desc: "The Legendary peppry Nigerian Jollof.", image: item2.images},
    {id:3, name: item3.name, desc: "The generally loved Egusi.", image: item3.images}
];

export default items;