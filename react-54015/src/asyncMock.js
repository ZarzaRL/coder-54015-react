const MOCK_DATA =
[
    {
      "id": 1,
      "nombre": "Almendras",
      "tipo": "Frutos_secos",
      "beneficios": ["Ricas en vitamina E", "Fuente de grasas saludables", "Buenas para la salud del corazón"],
      "precio_por_kg": 11,
      "cantidad_en_stock_kg": 50
    },
    {
      "id": 2,
      "nombre": "Nueces",
      "tipo": "Frutos_secos",
      "beneficios": ["Altas en ácidos grasos omega-3", "Ayudan a reducir el colesterol", "Buenas para el cerebro"],
      "precio_por_kg": 12,
      "cantidad_en_stock_kg": 30
    },
    {
      "id": 3,
      "nombre": "Cacahuetes",
      "tipo": "Frutos_secos",
      "beneficios": ["Fuente de proteínas vegetales", "Ricos en antioxidantes", "Promueven la salud del corazón"],
      "precio_por_kg": 9,
      "cantidad_en_stock_kg": 60
    },
    {
      "id": 4,
      "nombre": "Lentejas",
      "tipo": "Legumbres",
      "beneficios": ["Alto contenido de proteínas", "Ricas en hierro", "Bajas en grasas"],
      "precio_por_kg": 5,
      "cantidad_en_stock_kg": 80
    },
    {
      "id": 5,
      "nombre": "Garbanzos",
      "tipo": "Legumbres",
      "beneficios": ["Buena fuente de fibra", "Ayudan a controlar el azúcar en sangre", "Promueven la salud digestiva"],
      "precio_por_kg": 5,
      "cantidad_en_stock_kg": 70
    },
    {
      "id": 6,
      "nombre": "Frijoles",
      "tipo": "Legumbres",
      "beneficios": ["Alto contenido de antioxidantes", "Ricos en fibra soluble", "Ayudan a mantener estables los niveles de azúcar en sangre"],
      "precio_por_kg": 7,
      "cantidad_en_stock_kg": 45
    },
    {
      "id": 7,
      "nombre": "Azúcar",
      "tipo": "Endulzantes",
      "beneficios": ["Fuente de energía rápida", "Se utiliza en la repostería", "Mejora el sabor de ciertos platos"],
      "precio_por_kg": 3,
      "cantidad_en_stock_kg": 100
    },
    {
      "id": 8,
      "nombre": "Miel",
      "tipo": "Endulzantes",
      "beneficios": ["Propiedades antioxidantes", "Contiene vitaminas y minerales", "Mejora la salud de la piel"],
      "precio_por_kg": 8,
      "cantidad_en_stock_kg": 40
    },
    {
      "id": 9,
      "nombre": "Edulcorante",
      "tipo": "Endulzantes",
      "beneficios": ["Fuente de manganeso y zinc", "Menor índice glucémico que el azúcar blanco", "Sabor característico"],
      "precio_por_kg": 9,
      "cantidad_en_stock_kg": 55
    },
  ]


export function pedirDatos (tipoId)  {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(tipoId === undefined) {
      resolve(MOCK_DATA);
    }else{
      const productosFiltrados = MOCK_DATA.filter((item) => {
        return item.tipo === tipoId
      })
      resolve(productosFiltrados)
    }
  }, 2000);
  
});
}

export function pedirDetalles(objetoId)  {
  console.log(objetoId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(objetoId === undefined) {
      resolve(MOCK_DATA);
    }else{
      const productosDetallados = MOCK_DATA.find((itemD) => {
        return itemD.id == objetoId
      })
      console.log(productosDetallados);      
      resolve(productosDetallados)
    }
  }, 2000);
  
});
}