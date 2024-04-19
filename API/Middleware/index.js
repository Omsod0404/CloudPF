module.exports = (req, res, next) =>{
    return res.status(200).json({code: 1, message:"Bienvenido al portal de Recursos Humanos de Taller Node S.A. de C.V."});
};