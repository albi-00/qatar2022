const {Schema, model} = require('mongoose');

const PaqueteSchema = Schema({

    seguro:{
        name:{
            type: String,
            require:true
        },
        asistencia:{
            type: String,
            require:true
        },
        hoteleria:{
            type: ["si","no"],
            require:true
        },
        reinegro:{
            type: Number,
            require:true
        }
    },
    partido:{
        name:{
            type: String,
            require:true
        },
        estadio:{
            type: String,
            require:true
        },
        fecha_partido:{
            type: Date,
            require:true
        },
        fase:{
            type: String,
            require:true
        },
        sector:{
            type: String,   //platea, tribuna, tribuna_superior, tribuna_inferior, tribuna_superior_inferior
            require:true
        },
    },
    hotel:{
        name:{
            type: String,
            require:true
        },
        tipo_estadia:{
            type: String,
            require:true
        },
        estrellas:{
            type: Number,
            require:true
        },
        puntuacion:{
            type: Number,
            require:true
        },
    },
    transporte:{
        tipo:{
            type: String,
            require:true
        },
        fecha_salida:{
            type: Date,
            require:true
        },
        fecha_llegada:{
            type: Date,
            require:true
        },
        duracion:{
            type: Number,
            require:true
        }
    },
    precio:{
        type: Number,
        require:true
    }
})
  
  module.exports = model('Paquete', PaqueteSchema)