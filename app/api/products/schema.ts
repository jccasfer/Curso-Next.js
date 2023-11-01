/*
    Este fichero es para validar request con la libreria zod
    definimos como debe ser un objeto
*/

import { z } from 'zod';

const schema = z.object({
    name: z.string().min(3),
    price: z.number().nonnegative()   
})

export default schema;