import { log } from './cbAPI';
import {
  allGetDataResolved,
  composeMozaicP,
  searchImagesP,
  sendToServerP,
} from './promessesAPI';

async function exo3(descr: string) {
  const imagesUrl = await searchImagesP(descr);
  const images = await allGetDataResolved(imagesUrl);
  const image = await composeMozaicP(images);
  const response = await sendToServerP(image);
  log(response);
}

const bt3 = document.querySelector('#bt3') as HTMLElement;
bt3.onclick = () => exo3('chats');
