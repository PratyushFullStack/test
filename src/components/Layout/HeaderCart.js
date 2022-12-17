import React, {useContext} from "react";
import { Button } from "react-bootstrap";
import Context from "../../store/Context"
const HeaderCart = (props) => {
  
  const cartCtx = useContext(Context);
  const itemCount = cartCtx.items.reduce((initial)=>{
    return initial+1
  },0);

  return (
    <div className="d-flex my-1">
      <Button onClick={()=>{props.setShowCart(true)}} variant="outline-info" size="md">
        Cart
      </Button>
      <sup
        style={{
          width: "1.5rem",
          height: "1.2rem",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "0.4rem",
          margin: "0.3rem",
          textAlign: "center",
          backgroundColor: "#aedafe",
          borderRadius: "8px",
        }}
      >
       {itemCount}
      </sup>
    </div>
  );
};

export default HeaderCart;
