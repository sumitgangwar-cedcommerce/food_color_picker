import logo from './logo.svg';
import './App.css';
import { Drawer, Link } from '@mui/material';
import { useEffect, useState } from 'react';

// https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png','veg'

const data = [
  ['Plain Dosa' , 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png','veg',20.00,'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x375.jpg'],
  ['Poori' ,'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png','veg',30, 'https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/poori-puri-recipe.jpg' ],
  ['Masala Dosa' ,'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png','veg',30,'https://www.palatesdesire.com/wp-content/uploads/2019/09/Mysore_Masala_Dosa@Palates_Desire-e1593275925544-scaled.jpg'],
  ['Manglore Bajji','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png','veg',30,'https://upload.wikimedia.org/wikipedia/commons/8/84/Bajji_with_coconut_chutney.jpg'],
  ['Andhra Veg Meals','https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png','veg',300,'https://images.indulgexpress.com/uploads/user/imagelibrary/2019/6/19/original/The_Andhra_Thali_meal.JPG'],
  ['Andhra Non Veg Meals','https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png','Non-veg',350,'http://www.dineout.co.in/blog/wp-content/uploads/2017/10/Rayalaseema-Ruchulu-700x420.jpg'],
  ['Andhra Egg Meals','https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png','Non-veg',150,'https://assets.bonappetit.com/photos/58236b8fd0a29b9752401d10/master/pass/egg-dosa-pondicheri.jpg']
]

function App() {

const [cart , setCart] = useState([])
const [total , setTotal] = useState(0)
const [drawer , setDrawer] = useState(false)
  
const add_cart = (e) => {
  if(cart.indexOf(data[e.target.value])===-1){
    setCart([...cart , data[e.target.value]])
    setTotal(total+data[e.target.value][3])
  }
}

useEffect(()=>{
  let t=0
  cart.map(item =>t+=item[3])
  setTotal(t)
})

  return (
    <div className="App">
      <div id='navbar'>
        <Link to='/'>Break Your Fast</Link>
        <Link to='/'>Time for Lunch</Link>
        <Link to='/'>Can I Have Snaks</Link>
        <Link to='/'>Dinner</Link>
        <Link to='/'>Burgers and Beverages</Link>
        <Link to='/'>More...</Link>
      </div>

      <div id='products'>
       {
         data.map((item , index)=>
                    <div className="card" key={index}>
                      <div className="content">
                        <h3>{item[0]}</h3>
                        <p>
                          <img style={{height: '3vw'}} src={item[1]} alt='' /> {item[2]}
                        </p>
                        <p>₹{item[3]}.00</p>
                        <p><button value={index} onClick={add_cart}>Add to cart</button></p>
                      </div>
                      <div>
                        <img className="img" src={item[4]} alt='' />
                      </div>
                    </div>
                  )
       }
      </div>
      <div id='footer'>
        <p><button onClick={()=>setDrawer(true)}><i className="fa-solid fa-angles-up"></i></button></p>
        <p>Your Orders({cart.length})</p>
        <p>Subtotal ₹{total}</p>
        <p><button onClick={()=>setDrawer(true)}>Continue</button></p>
      </div>
      <Drawer anchor='bottom' open={drawer} onClose={()=>setDrawer(false)}>
        <h1><i onClick={()=>setDrawer(false)} class="fa-solid fa-xmark xxl"></i></h1>
        <table id='draw'><tbody>
        {
          cart.map((item, index)=>
                    <tr key={index}>
                      <td><img src={item[4]} alt='' /></td>
                      <td>{item[0]}</td>
                      <td>₹{item[3]}</td>
                      <td style={{color:'red'}} onClick={()=>{let temp = [...cart];temp.splice(index, 1);setCart(temp);}}><i className="fa-solid fa-trash-can"></i></td>
                    </tr>
                  )

        }
        <tr>
          <td colSpan={4} style={{textAlign:'center',color:'green'}}>Total amount = ₹{total}</td>
        </tr>
        </tbody>
        </table>
      </Drawer>
    </div>
  );
}

export default App;
