import { composeMozaic, log, searchImages, sendToServer } from './cbAPI';
import {
allGetDataResolved,
  composeMozaicP,
  getDataP,
  searchImagesP,
  sendToServerP,
} from './promessesAPI';

function exo2(description: string) {
  searchImagesP(description).then((urls) => {
    allGetDataResolved(urls).then((images) =>
      composeMozaicP(images).then((image) =>
        sendToServerP(image).then((response) => log(response))
      )
    );
  });
}

const bt2 = document.querySelector('#bt2') as HTMLElement;
bt2.onclick = () => exo2('chats');
