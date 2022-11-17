import React from 'react';
import CategoriesCard from './CategoriesCard';
import Heading from './styles/Heading';
import headsetImg from '../images/cate.headset.png';
import mouseImg from '../images/cate.mouse.png';
import tecladoImg from '../images/cate.teclado.png';
import gabineteImg from '../images/cate.gabinete.png';

function Categories() {
  return (
    <div className="w-11/12 m-auto">
      <Heading asChild><h3>Categorias</h3></Heading>
      <div className="flex row-auto gap-16">
        <CategoriesCard url={ headsetImg } name="headsets" />
        <CategoriesCard url={ mouseImg } name="mouses" />
        <CategoriesCard url={ tecladoImg } name="teclados" />
        <CategoriesCard url={ gabineteImg } name="gabinetes" />
      </div>
    </div>
  );
}

export default Categories;
