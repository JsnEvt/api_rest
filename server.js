// para 'escutar' em alguma porta
import app from './app';

const port = 3001;
// criando uma funcao para detectar a audicao na porta
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}/`);
});
