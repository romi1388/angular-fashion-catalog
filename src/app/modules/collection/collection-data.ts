import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {Collection} from "../shared/models/collection.model";

export class CollectionData  implements InMemoryDbService{
  createDb(): {collection: Collection[] } {
    const collection: Collection[] = [
      {
        id: 1,
        itemType: 'dress',
        name: 'pink salvar',
        itemSku:'DR14321',
        price: 55,
        image: 'assets/pinkSalvar.png',
        itemInfo: 'long dress comes with pajama and odhani',
      },
      {
        id: 2,
        itemType: 'jewelery',
        name: 'choker',
        itemSku:'CH14323',
        price: 95,
        image: 'assets/choker.png',
        itemInfo: 'choker comes with complementry ear rings',
      },
      {
        id: 3,
        itemType: 'sari',
        name: 'bandhani',
        itemSku:'BN14323',
        price: 65.49,
        image: 'assets/bandhani.png',
        itemInfo: 'bandhani comes with petticoat and blouse',
      },
      {
        id: 4,
        itemType: 'dress',
        name: 'anarkali',
        itemSku:'BC14324',
        price: 76.99,
        image: 'assets/anarkali.png',
        itemInfo: 'chudidar comes with pajama and odhani',
      },
      {
        id: 5,
        itemType: 'jewelary',
        name: 'peacock',
        itemSku:'PC14325',
        price: 85.99,
        image: 'assets/peacock.png',
        itemInfo: 'peacock neckless comes with complementry ear ringsi',
      },
      {
        id: 6,
        itemType: 'shoes',
        name: 'wedding sandle',
        itemSku:'BS14326',
        price: 49.99,
        image: 'assets/sandle.png',
        itemInfo: 'sandle comes by it self, no complementary items',
      },

    ];
    return {collection};
  }

}
