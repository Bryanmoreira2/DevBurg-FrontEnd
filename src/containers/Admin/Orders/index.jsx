

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './ROW.JSX';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Filter, FilterOption } from './styles';
import { orderStatusOptions } from './orderStatus';



export function Orders() {

    const [orders, setOrders] = useState([]);
    const [filterOrders, setFilterOrders] = useState([]);
    const [activeStatus, setActiveStatus] = useState(0);
    const [ rows , setRows ] = useState([]);


    useEffect(() =>{

        async function loadOrders(){
            const {data} = await api.get('orders')

            setOrders(data)
            setFilterOrders(data)

            console.log (data)
        }
        loadOrders()
    } , []);

    function createData(order) {
      return {
        name: order.user.name ,
        orderId: order._id,
        date: order.createdAt,
        status: order.status,
        product: order.product,
      };
    }

    useEffect (() =>{
        const newRows = filterOrders.map((order) => createData (order))

        setRows (newRows)

    },[filterOrders])

    function handleSatatus (status){

      if(status.id ===0){
        setFilterOrders(orders);
      }else{
        const newOrders = orders.filter((order) => order.status === status.value)

        setFilterOrders(newOrders)
      }

      setActiveStatus(status.id)

    }

    useEffect(()=>{

      if(activeStatus===0){
        setFilterOrders(orders)
      } else{
        const statusIndex = orderStatusOptions.findIndex(
          (item)=> item.id=== activeStatus)

        const newFilterdOrders = orders.filter(
          (order)=> order.status === orderStatusOptions[statusIndex].value)

          setFilterOrders(newFilterdOrders)

      }

    },[orders])
    


  return (
    <> 
    <Filter>
      {orderStatusOptions.map((status)=> (
        <FilterOption 
        key={status.id}
        onClick={ ()=> handleSatatus(status)}
        $isActiveStatus={activeStatus === status.id}
        
        >{status.label}</FilterOption>
      ))}
      
    </Filter>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Pedido</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>Data do Pedidio </TableCell>
            <TableCell>Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row 
            key={row.orderId}
            row={row}
            orders={orders}
            setOrders={setOrders}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
