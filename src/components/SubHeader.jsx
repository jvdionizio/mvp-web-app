import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CategoriesBtn from './styles/CategoriesBtn';

function SubHeader() {
  const { pathname } = useLocation();
  const pathName = pathname.split('/')[1];
  const navigate = useNavigate();

  const [selected, setSelected] = useState({
    headsets: false,
    teclados: false,
    mouses: false,
    gabinetes: false,
    logitech: false,
    redDragon: false,
    corsair: false,
    hyperX: false,
    contact: false,
    downloads: false,
    refound: false,
  });

  const linksList = {
    products: [
      { headsets: 'headsets' },
      { teclados: 'teclados' },
      { mouses: 'mouses' },
      { gabinetes: 'gabinetes' },
    ],
    brands: [
      { logitech: 'logitech' },
      { redDragon: 'reddragon' },
      { corsair: 'corsair' },
      { hyperX: 'hyperX' },
    ],
    support: [
      { contact: 'contatar suporte' },
      { downloads: 'downloads' },
      { refound: 'reembolso/devolução' },
    ],
  };

  const checkPath = () => {
    if (pathName === 'products') {
      const category = pathname.split('/')[2];
      setSelected({ [category]: true });
    } else if (pathName === 'brands') {
      const brand = pathname.split('/')[2];
      setSelected({ [brand]: true });
    } else {
      const supportArea = pathname.split('/')[2];
      setSelected({ [supportArea]: true });
    }
  };

  useEffect(() => {
    checkPath();
  }, [pathname]);

  return (
    <div className="bg-purple-900">
      <div
        className="
          w-8/12
          ml-auto
          flex
        "
      >
        {
          linksList[pathName].map((obj) => {
            const key = Object.keys(obj)[0];
            console.log(obj[key]);
            return (
              <CategoriesBtn
                key={ key }
                selected={ selected[key] }
              >
                <button
                  type="button"
                  onClick={ () => {
                    navigate(`/${pathName}/${key}`);
                  } }
                >
                  {obj[key]}
                </button>
              </CategoriesBtn>
            );
          })
        }
      </div>
    </div>
  );
}

export default SubHeader;
