import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [texto, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    // para so permitir alteracoes com usuario que estao logados e com
    // confirmacao de que o id e o email sao identicos aos
    // que foram usados para a geracao do token. Caso os dados sejam alterados,
    // sera necessario a nova geracao da chave
    // para prosseguir como usuario valido.
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });
    if (!user) {
      return res.status(401).json({
        errors: ['Usuario invalido'],
      });
    }

    req.userId = id;
    res.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou invalido'],
    });
  }
};
