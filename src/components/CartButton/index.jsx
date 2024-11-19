import Cart from '../../assets/cart.svg';
import {ContainerBuntto} from './styles';



export function CartButton( {...props}) {
    return (
        <ContainerBuntto {...props}>
            <img src ={Cart} alt="Cart" />
        </ContainerBuntto>


    );
}