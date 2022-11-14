import React from 'react';
import CategoriesCard from './CategoriesCard';
import Heading from './styles/Heading';
import headsetImg from '../images/cate.headset.png';
import mouseImg from '../images/cate.mouse.png';
import tecladoImg from '../images/cate.teclado.png';
import gabineteImg from '../images/cate.gabinete.png';

function Categories() {
  return (
    <div className='m-14'>
      <Heading asChild><h3>Categorias</h3></Heading>
      <div className='flex row-auto gap-x-16'>
        <CategoriesCard url={ headsetImg } name="headset" />
        <CategoriesCard url={ mouseImg } name="mouse" />
        <CategoriesCard url={ tecladoImg } name="teclado" />
        <CategoriesCard url={ gabineteImg } name="gabinete" />

      </div>
    </div>
  );
}

export default Categories;