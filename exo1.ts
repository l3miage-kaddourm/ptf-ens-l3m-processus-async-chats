import {
  searchImages,
  log,
  getData,
  composeMozaic,
  sendToServer,
} from './cbAPI';

/**
 * La fonction exo1 utilise l'API à base de callback pour :
 *   - demander les URL des images correspondant à description passée en paramètre
 *   - Obtenir les images à partir des URL
 *   - Générer une mosaïque à partir de ces images
 *   - Envoyer cette mosaïque au serveur
 *   - Afficher avec log le code renvoyé par le serveur
 *
 * Vérifiez dans les logs que tout se déroule comme prévu,
 * en particulier que vous composez bien la mosaïque après avoir reçu les images.
 */
function exo1(description: string): void {
  // à compléter
  searchImages(description, (res) => {
    const images = [];
    res.forEach((url) => {
      getData(url, (image) => {
        images.push(image);
      });
    });
    composeMozaic(images, (imageMozaic) => {
      sendToServer(imageMozaic, (res) => {
        log(res);
      });
    });
  });
}

const bt1 = document.querySelector('#bt1') as HTMLElement;
bt1.onclick = () => exo1('chats');
