const { Router } = require('express');
const {
    pegaTodasAsPessoas,
    pegaUmapessoa,
    criaPessoa,
    atualizaPessoa,
    apagaPessoa
} = require('../controllers/PessoaController');

const PessoaController = require('../controllers/PessoaController');

const router = Router()

router.get('/pessoas', pegaTodasAsPessoas);
router.get('/pessoas/:id', pegaUmapessoa);
router.post('/pessoas', criaPessoa);
router.put('/pessoas/:id', atualizaPessoa);
router.delete('/pessoas/:id', apagaPessoa);
module.exports = router;