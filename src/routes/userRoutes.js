// importando apenas o router do express;
import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// nao deveriam existir ... foi so a titulo de aprendizado.
// router.get('/', userController.index); // lista todos usuarios
// router.get('/:id', userController.show); // lista usuario

router.post('/', loginRequired, userController.store); // pagina para criacao de usuario
router.put('/', loginRequired, userController.update); // pagina de atualizacao
router.delete('/', loginRequired, userController.delete); // pagina de delecao

export default router;

/*
index - lista todos os usuarios - GET
store/create - cria um usuario - POST
delete - apaga um usuario - DELETE
show - mostra um usuario - GET
update - atualiza um usuario. PATCH ou PUT
*/
