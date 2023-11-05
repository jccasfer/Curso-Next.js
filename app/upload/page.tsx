'use client';
import React, { useState } from 'react'
import { CldUploadWidget, CldImage} from 'next-cloudinary'              //componentes para cargar y ver imagenes cloudinary
import { Result } from 'postcss';

interface CloudinaryResult {                                            //para poder acceder a public_id (en console.log se ven todas las props, pero aquí no se las sabe)
    public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState ('');

  return (
    <>
        {publicId &&        //si tenemos ya valor, pintar la imagen
            <CldImage src={publicId} width={180} height={270} alt="imagen" />}
        <CldUploadWidget 
            uploadPreset='cursonextjs'                                  //preset de imagenes que he definido en cloudinary, my cloud name en .env
            onUpload={(result, widget) => {
                //console.log(result);
                if (result.event !== 'success') return;
                const info = result.info as CloudinaryResult;           //para poder acceder a public_id (en console.log se ven todas las props, pero aquí no se las sabe)
                    setPublicId(info.public_id);
            }}
            options={{                                                  //personalizar componente. Ver en https://demo.cloudinary.com/uw/
                sources: ['local','url','camera'],
                multiple: false,
                maxFiles: 5
            }}
        >                                                         
            {                                                           //Child content del componente, se requiere una funcion, recibe varios params, entre ellos open
                ({open})=> 
                    <button className='btn btn-primary'
                    onClick={() => open()}>Upload</button>
            }
        </CldUploadWidget>
    </>
  )
}

export default UploadPage