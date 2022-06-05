import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>¡Gracias por su orden!</h2>
        <p className="email-msg">Revise su bandeja de entrada de correo electrónico para el recibo.</p>
        <p className="description">
          Si tiene alguna pregunta, envíe un correo electrónico
          <a href="https://wa.me/51942907705?text=Me%20interesa%20la%20promoción" data-toggle="tooltip" data-placement="bottom" title="telefono celular"><i> <i class="fa fa-whatsapp"></i></i><span>+51 942907705</span></a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Seguir comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success