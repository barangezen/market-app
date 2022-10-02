import { Card, Grid } from "@mui/material";
import { IProduct } from "../../globals/enums/models";
import { Product } from "../Product/Product";
import styles from "./ProductContent.module.scss";

const products: IProduct[] = [
  {
    tags: ["Trees"],
    price: 10.99,
    name: "Handcrafted Trees Mug",
    description:
      "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
    slug: "Handcrafted-Trees-Mug",
    added: 1485723766805,
    manufacturer: "OHara-Group",
    itemType: "mug",
  },
  {
    tags: ["Beach", "Ocean", "Water"],
    price: 19.99,
    name: "Rustic Beach Mug",
    description:
      "totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus",
    slug: "Rustic-Beach-Mug",
    added: 1481573896833,
    manufacturer: "Sipes-Inc",
    itemType: "mug",
  },
  {
    tags: ["Animal", "Bear"],
    price: 17.99,
    name: "Handcrafted Bear Mug",
    description:
      "vitae mollitia et in accusantium est voluptas officiis est non",
    slug: "Handcrafted-Bear-Mug",
    added: 1485991071829,
    manufacturer: "Weissnat-Schowalter-and-Koelpin",
    itemType: "mug",
  },
  {
    tags: ["Road"],
    price: 15.99,
    name: "Refined Road Mug",
    description:
      "explicabo fugit magnam fugit dolorem itaque unde quidem est quia ut a veritatis sit facere possimus fugit ipsam",
    slug: "Refined-Road-Mug",
    added: 1482213983048,
    manufacturer: "Bernier-Hane",
    itemType: "mug",
  },
  {
    tags: ["Ocean", "Rocks"],
    price: 10.99,
    name: "Unbranded Ocean Mug",
    description:
      "facilis aut velit vitae sit dolorum illum nostrum pariatur dolorem vel atque quasi placeat qui",
    slug: "Unbranded-Ocean-Mug",
    added: 1483408192004,
    manufacturer: "Franecki---Gaylord",
    itemType: "mug",
  },
  {
    tags: ["Sunset", "Beach", "Ocean"],
    price: 9.99,
    name: "Rustic Ocean Mug",
    description:
      "libero reprehenderit blanditiis quidem laborum ullam quae fuga consequuntur minima praesentium consequatur qui excepturi nostrum tempora sunt deleniti",
    slug: "Rustic-Ocean-Mug",
    added: 1485511118573,
    manufacturer: "Bayer-and-Sons",
    itemType: "mug",
  },
  {
    tags: ["Rust", "Old", "Car"],
    price: 19.99,
    name: "Sleek Old Mug",
    description:
      "necessitatibus suscipit iure quia voluptates voluptas quidem ipsum laboriosam adipisci",
    slug: "Sleek-Old-Mug",
    added: 1485759837725,
    manufacturer: "Boyle-LLC",
    itemType: "mug",
  },
  {
    tags: ["Coffee"],
    price: 14.99,
    name: "Sleek Coffee Mug",
    description:
      "et adipisci explicabo consequatur rerum voluptas dolorem qui omnis vel",
    slug: "Sleek-Coffee-Mug",
    added: 1479259996312,
    manufacturer: "Franecki---Gaylord",
    itemType: "mug",
  },
  {
    tags: ["Trees", "Fog", "People"],
    price: 16.99,
    name: "Rustic Trees Mug",
    description:
      "ut architecto est similique sit nostrum sit sed ipsa itaque aliquam nesciunt reprehenderit et neque aut id nulla dolore sed sit facere eligendi",
    slug: "Rustic-Trees-Mug",
    added: 1480664800826,
    manufacturer: "Weissnat-Schowalter-and-Koelpin",
    itemType: "mug",
  },
  {
    tags: ["Sunset", "Ocean", "Dock"],
    price: 18.99,
    name: "Sleek Ocean Mug",
    description:
      "magnam maxime nostrum minima dolores repellat laborum pariatur et quia maiores quidem eos quod est voluptas voluptatem quia ipsum odit dolorem et blanditiis aut voluptates",
    slug: "Sleek-Ocean-Mug",
    added: 1485278625462,
    manufacturer: "Cruickshank-Bayer-and-Gerlach",
    itemType: "mug",
  },
  {
    tags: ["Person", "Hills", "Animals", "Sheep"],
    price: 16.99,
    name: "Ergonomic Person Mug",
    description:
      "sunt id omnis nihil consectetur et porro ut molestias ab et rem quia omnis voluptatem est libero reiciendis voluptatem dolores excepturi",
    slug: "Ergonomic-Person-Mug",
    added: 1485835498313,
    manufacturer: "Rice-Inc",
    itemType: "mug",
  },
  {
    tags: ["Fog", "Lake", "Water"],
    price: 9.99,
    name: "Gorgeous Water Mug",
    description:
      "perspiciatis in qui et nemo nisi ad quam consequatur et dignissimos",
    slug: "Gorgeous-Water-Mug",
    added: 1485880263998,
    manufacturer: "Boyle-LLC",
    itemType: "mug",
  },
  {
    tags: ["Person", "Fog"],
    price: 14.99,
    name: "Generic Fog Mug",
    description:
      "consectetur voluptas sint excepturi voluptas aut culpa qui excepturi dicta ut voluptas",
    slug: "Generic-Fog-Mug",
    added: 1484633915311,
    manufacturer: "McCullough---Lueilwitz",
    itemType: "mug",
  },
  {
    tags: ["Building", "Metal"],
    price: 11.99,
    name: "Gorgeous Building Mug",
    description:
      "quisquam maxime laudantium error totam unde commodi ullam qui quo sed aperiam",
    slug: "Gorgeous-Building-Mug",
    added: 1482336621275,
    manufacturer: "Sipes-Inc",
    itemType: "mug",
  },
  {
    tags: ["Sunset", "Person", "Woman", "Meadow"],
    price: 10.99,
    name: "Intelligent Sunset Mug",
    description:
      "qui ipsa hic voluptas et rem sed architecto reiciendis labore saepe fugit ab sed sed quos ut adipisci accusantium molestias",
    slug: "Intelligent-Sunset-Mug",
    added: 1484735389245,
    manufacturer: "Bernier-Hane",
    itemType: "mug",
  },
  {
    tags: ["Person", "Coffee"],
    price: 11.99,
    name: "Unbranded Coffee Mug",
    description:
      "soluta eligendi harum quis molestiae omnis excepturi deserunt sed dolorum dolorum ea non dolor",
    slug: "Unbranded-Coffee-Mug",
    added: 1484144067274,
    manufacturer: "Lowe-Wunsch-and-Stoltenberg",
    itemType: "mug",
  },
  {
    tags: ["Trees", "Road"],
    price: 9.99,
    name: "Rustic Road Mug",
    description:
      "est ad ipsa et ipsum amet nemo cupiditate placeat praesentium qui illum harum",
    slug: "Rustic-Road-Mug",
    added: 1480653821277,
    manufacturer: "Metz---Kautzer",
    itemType: "mug",
  },
  {
    tags: ["Windows", "Architecture", "Building"],
    price: 17.99,
    name: "Sleek Building Mug",
    description:
      "in cumque suscipit et perspiciatis minima ut et consequatur ab neque rerum hic dolore a aut dignissimos",
    slug: "Sleek-Building-Mug",
    added: 1478843419299,
    manufacturer: "Feil-Dooley-and-Reinger",
    itemType: "mug",
  },
  {
    tags: ["House", "Trees", "Fog", "Secluded"],
    price: 20.99,
    name: "Tasty Secluded Mug",
    description:
      "non et omnis accusantium ut non voluptatem sunt iusto cumque laudantium sunt laboriosam et sequi et totam voluptatem aut vero occaecati quia laudantium",
    slug: "Tasty-Secluded-Mug",
    added: 1482236584965,
    manufacturer: "Konopelski-Group",
    itemType: "mug",
  },
  {
    tags: ["Architecture", "Wall"],
    price: 14.99,
    name: "Ergonomic Architecture Mug",
    description:
      "rerum sit voluptatibus sint voluptatem saepe delectus et quasi perferendis laborum et enim dolores quaerat iusto eos odio nisi",
    slug: "Ergonomic-Architecture-Mug",
    added: 1484099772336,
    manufacturer: "Franecki---Gaylord",
    itemType: "mug",
  },
  {
    tags: ["Surf", "Ocean", "Waves"],
    price: 12.99,
    name: "Intelligent Waves Mug",
    description:
      "architecto amet doloremque sit ut repudiandae ducimus rerum enim aut veniam autem aut ut ea consectetur est excepturi explicabo aliquid",
    slug: "Intelligent-Waves-Mug",
    added: 1481166939534,
    manufacturer: "Metz---Kautzer",
    itemType: "mug",
  },
  {
    tags: ["Bike", "City", "People"],
    price: 17.99,
    name: "Intelligent City Mug",
    description:
      "sit animi repellendus voluptas vitae consequatur accusantium optio cupiditate et",
    slug: "Intelligent-City-Mug",
    added: 1478209012932,
    manufacturer: "Weissnat-Schowalter-and-Koelpin",
    itemType: "mug",
  },
  {
    tags: ["Sky", "Fog"],
    price: 18.99,
    name: "Refined Sky Mug",
    description:
      "non est voluptatem sint nulla dicta iste natus consequatur accusantium dolores dolore in et distinctio dolore similique",
    slug: "Refined-Sky-Mug",
    added: 1481150082814,
    manufacturer: "Konopelski-Group",
    itemType: "mug",
  },
  {
    tags: ["Rust", "Machine", "Car"],
    price: 12.99,
    name: "Incredible Car Mug",
    description:
      "rerum vero cupiditate et est similique soluta ex sit ex esse repellat necessitatibus voluptatum corrupti et nihil quod",
    slug: "Incredible-Car-Mug",
    added: 1484684041316,
    manufacturer: "Boyle-LLC",
    itemType: "mug",
  },
  {
    tags: ["Animal", "Fur", "Monkey"],
    price: 15.99,
    name: "Gorgeous Animal Mug",
    description:
      "rerum consectetur magni sed enim eveniet et dolorem laudantium ut aut qui voluptatem praesentium soluta iste aliquid dolorem quibusdam veniam voluptas quaerat excepturi",
    slug: "Gorgeous-Animal-Mug",
    added: 1481333026774,
    manufacturer: "Hodkiewicz-Inc",
    itemType: "mug",
  },
  {
    tags: ["Machine", "Ocean"],
    price: 13.99,
    name: "Ergonomic Machine Mug",
    description:
      "minus nihil ipsum explicabo pariatur adipisci harum quia ab et voluptate odio",
    slug: "Ergonomic-Machine-Mug",
    added: 1481307879405,
    manufacturer: "Nikolaus-Schinner",
    itemType: "mug",
  },
  {
    tags: ["Planes", "Sun", "Clouds"],
    price: 15.99,
    name: "Licensed Clouds Mug",
    description:
      "maiores esse culpa qui fuga dignissimos officia aliquid perferendis consequatur possimus accusantium",
    slug: "Licensed-Clouds-Mug",
    added: 1481505340969,
    manufacturer: "Boyle-LLC",
    itemType: "mug",
  },
  {
    tags: ["Snow"],
    price: 14.99,
    name: "Gorgeous Snow Shirt",
    description:
      "rerum numquam officia libero dignissimos et fugit nihil reprehenderit maxime nam nesciunt voluptatem vel eum dolorem",
    slug: "Gorgeous-Snow-Shirt",
    added: 1480733629841,
    manufacturer: "Bayer-and-Sons",
    itemType: "shirt",
  },
  {
    tags: ["Night", "Sand", "Desert"],
    price: 10.99,
    name: "Small Sand Shirt",
    description:
      "molestiae autem harum voluptas praesentium assumenda ut vel quibusdam earum nulla et fugiat nisi error dolorem pariatur tenetur magnam odio molestiae ratione",
    slug: "Small-Sand-Shirt",
    added: 1481151825857,
    manufacturer: "Hodkiewicz-Inc",
    itemType: "shirt",
  },
  {
    tags: ["City", "Buildings"],
    price: 17.99,
    name: "Rustic City Shirt",
    description:
      "eos et provident odit autem non dolores eum magni commodi quibusdam voluptate voluptas eos in repudiandae",
    slug: "Rustic-City-Shirt-2",
    added: 1484582845299,
    manufacturer: "Leannon-Fahey-and-Sawayn",
    itemType: "shirt",
  },
  {
    tags: ["Arial", "Bridge", "Forest"],
    price: 19.99,
    name: "Sleek Arial Shirt",
    description:
      "ipsum culpa fugiat nostrum sunt dignissimos fugiat consectetur assumenda qui",
    slug: "Sleek-Arial-Shirt",
    added: 1478457785663,
    manufacturer: "Leannon-Fahey-and-Sawayn",
    itemType: "shirt",
  },
  {
    tags: ["Shoes", "Person", "Feet", "Railroad"],
    price: 12.99,
    name: "Incredible Shoes Shirt",
    description:
      "velit corporis nesciunt harum qui eos quidem voluptatem expedita provident iusto non et et quae sed dolores modi reiciendis itaque saepe optio",
    slug: "Incredible-Shoes-Shirt",
    added: 1482837020499,
    manufacturer: "McCullough---Lueilwitz",
    itemType: "shirt",
  },
  {
    tags: ["Desert", "People"],
    price: 13.99,
    name: "Intelligent Desert Shirt",
    description:
      "ea nobis ea ducimus repudiandae totam ipsa possimus recusandae blanditiis unde ratione ipsum velit ab est qui tenetur",
    slug: "Intelligent-Desert-Shirt",
    added: 1481849845717,
    manufacturer: "Franecki---Gaylord",
    itemType: "shirt",
  },
  {
    tags: ["Night"],
    price: 18.99,
    name: "Gorgeous Night Shirt",
    description:
      "voluptas labore quia molestiae facilis ea consequatur ipsa sed unde voluptas dignissimos mollitia harum",
    slug: "Gorgeous-Night-Shirt",
    added: 1478189601851,
    manufacturer: "Nikolaus-Schinner",
    itemType: "shirt",
  },
  {
    tags: ["Nature", "Desert"],
    price: 9.99,
    name: "Ergonomic Desert Shirt",
    description:
      "est quia officia maxime velit aut inventore natus ut molestiae non doloribus sit doloribus modi repellendus",
    slug: "Ergonomic-Desert-Shirt-1",
    added: 1483902055920,
    manufacturer: "McCullough---Lueilwitz",
    itemType: "shirt",
  },
  {
    tags: ["Bridge", "San Francisco", "Fog", "Ocean", "Metal"],
    price: 9.99,
    name: "Handmade Metal Shirt",
    description:
      "quibusdam eos sapiente ipsam velit quia quaerat dolores placeat vero sunt placeat voluptas non ea a",
    slug: "Handmade-Metal-Shirt",
    added: 1480285343398,
    manufacturer: "Leannon-Fahey-and-Sawayn",
    itemType: "shirt",
  },
  {
    tags: ["Metal", "Building"],
    price: 15.99,
    name: "Rustic Building Shirt",
    description:
      "fuga mollitia accusantium eius et error quia velit illum quo quia a dolores odio aut consequatur quibusdam ipsa hic",
    slug: "Rustic-Building-Shirt-1",
    added: 1482400295011,
    manufacturer: "Boyle-LLC",
    itemType: "shirt",
  },
  {
    tags: ["Trees"],
    price: 9.99,
    name: "Ergonomic Trees Shirt",
    description:
      "incidunt est et eveniet nihil animi dolorem eum dolore excepturi sint inventore odit expedita dolor quia nobis laboriosam voluptatem minus recusandae repellat assumenda rerum ducimus",
    slug: "Ergonomic-Trees-Shirt",
    added: 1484358359416,
    manufacturer: "Feil-Dooley-and-Reinger",
    itemType: "shirt",
  },
  {
    tags: ["Person", "Smart phone", "Hands"],
    price: 20.99,
    name: "Refined Hands Shirt",
    description:
      "dolorem doloremque dolorem quia doloremque aliquam nesciunt optio qui eius incidunt voluptatem sed",
    slug: "Refined-Hands-Shirt",
    added: 1484154522464,
    manufacturer: "Franecki---Gaylord",
    itemType: "shirt",
  },
  {
    tags: ["Tree", "Nature", "Juniper"],
    price: 9.99,
    name: "Awesome Tree Shirt",
    description:
      "in vitae dolores quis qui nam quo sint quis suscipit ullam molestias",
    slug: "Awesome-Tree-Shirt",
    added: 1478742784182,
    manufacturer: "Franecki---Gaylord",
    itemType: "shirt",
  },
  {
    tags: ["Person", "Abstract"],
    price: 10.99,
    name: "Tasty Person Shirt",
    description:
      "eos asperiores fuga quia et aut doloribus suscipit qui ut provident dolores facere animi ut provident culpa",
    slug: "Tasty-Person-Shirt-1",
    added: 1486107475370,
    manufacturer: "OHara-Group",
    itemType: "shirt",
  },
  {
    tags: ["Beach", "Nature", "Water", "Rocks"],
    price: 12.99,
    name: "Awesome Rocks Shirt",
    description:
      "dolorum placeat molestiae fugit maiores corporis debitis eaque numquam praesentium aut velit ut voluptatem unde rerum",
    slug: "Awesome-Rocks-Shirt-1",
    added: 1485106707411,
    manufacturer: "Feil-Dooley-and-Reinger",
    itemType: "shirt",
  },
  {
    tags: ["Mountain", "Snow", "Lake"],
    price: 10.99,
    name: "Handcrafted Lake Shirt",
    description:
      "quia incidunt voluptatem esse consequatur architecto et aut laborum sunt laborum placeat et perspiciatis omnis ut maiores ut eveniet nesciunt laborum veniam sapiente eum",
    slug: "Handcrafted-Lake-Shirt",
    added: 1482833314974,
    manufacturer: "Franecki---Gaylord",
    itemType: "shirt",
  },
  {
    tags: ["Meal", "Food", "Table"],
    price: 14.99,
    name: "Handmade Food Shirt",
    description:
      "non totam et consequatur accusamus in et corrupti nobis reiciendis eum et voluptas itaque possimus praesentium dolor sit rerum consequuntur repellat",
    slug: "Handmade-Food-Shirt",
    added: 1486134274059,
    manufacturer: "Dickens-Franecki",
    itemType: "shirt",
  },
  {
    tags: ["Storm", "Clouds"],
    price: 13.99,
    name: "Sleek Clouds Shirt",
    description:
      "ad corrupti quia deserunt quasi temporibus dicta rem amet quaerat perspiciatis accusantium ea illo et voluptatem aut qui omnis id omnis",
    slug: "Sleek-Clouds-Shirt-1",
    added: 1480817064432,
    manufacturer: "OHara-Group",
    itemType: "shirt",
  },
  {
    tags: ["Trees", "Road"],
    price: 12.99,
    name: "Small Road Shirt",
    description:
      "officia eos doloremque qui accusamus ullam praesentium quis commodi ullam est et dolor officiis ut recusandae ducimus qui minima qui perferendis",
    slug: "Small-Road-Shirt",
    added: 1482924881417,
    manufacturer: "Cruickshank-Bayer-and-Gerlach",
    itemType: "shirt",
  },
  {
    tags: ["Dark", "Night", "Stars"],
    price: 15.99,
    name: "Small Night Shirt",
    description:
      "impedit voluptates qui minima totam autem vel natus est possimus non numquam deleniti qui ut saepe non id",
    slug: "Small-Night-Shirt-1",
    added: 1485389779946,
    manufacturer: "Sipes-Inc",
    itemType: "shirt",
  },
  {
    tags: ["Space", "NASA"],
    price: 17.99,
    name: "Ergonomic Space Shirt",
    description:
      "velit possimus maxime voluptatem beatae eos alias repellat veritatis aliquid quae est numquam quis eligendi qui perspiciatis consequatur quae at atque et eum impedit",
    slug: "Ergonomic-Space-Shirt",
    added: 1483618597143,
    manufacturer: "Boyle-LLC",
    itemType: "shirt",
  },
  {
    tags: ["Bus", "City", "Buildings", "People"],
    price: 9.99,
    name: "Rustic People Shirt",
    description:
      "incidunt consequuntur quod dolorum ut quibusdam sed perspiciatis aliquam numquam libero in qui non maxime nulla",
    slug: "Rustic-People-Shirt",
    added: 1480889410820,
    manufacturer: "Boyle-LLC",
    itemType: "shirt",
  },
  {
    tags: ["Animal", "Yak"],
    price: 19.99,
    name: "Intelligent Yak Shirt",
    description:
      "nemo est nam consequatur minus aliquam ut dolorum similique aut molestiae fugit earum laboriosam quia est vero quisquam est earum voluptate amet",
    slug: "Intelligent-Yak-Shirt",
    added: 1483431074699,
    manufacturer: "Leannon-Fahey-and-Sawayn",
    itemType: "shirt",
  },
  {
    tags: ["Path", "Trees", "Fog"],
    price: 14.99,
    name: "Handmade Fog Shirt",
    description:
      "qui velit ut omnis omnis est quas voluptatem commodi quia ducimus eos velit ut et ratione nulla minima harum illum quis",
    slug: "Handmade-Fog-Shirt-1",
    added: 1482818400686,
    manufacturer: "Heathcote-Kautzer-and-Turner",
    itemType: "shirt",
  },
  {
    tags: ["Boats", "Ocean", "Rocks"],
    price: 17.99,
    name: "Rustic Ocean Shirt",
    description:
      "soluta tenetur distinctio culpa quo molestiae et esse sed laborum quidem",
    slug: "Rustic-Ocean-Shirt-3",
    added: 1481556808669,
    manufacturer: "Lowe-Wunsch-and-Stoltenberg",
    itemType: "shirt",
  },
  {
    tags: ["Bench", "Leaves"],
    price: 20.99,
    name: "Practical Leaves Shirt",
    description:
      "maxime esse eius corporis in rerum dignissimos et totam voluptatem harum cumque et numquam similique mollitia voluptatum",
    slug: "Practical-Leaves-Shirt",
    added: 1484191617619,
    manufacturer: "Weissnat-Schowalter-and-Koelpin",
    itemType: "shirt",
  },
  {
    tags: ["Glass", "Architecture", "Building"],
    price: 19.99,
    name: "Ergonomic Architecture Shirt",
    description:
      "id aut aliquid provident enim reiciendis voluptatem omnis voluptas asperiores quis in",
    slug: "Ergonomic-Architecture-Shirt",
    added: 1480575479493,
    manufacturer: "Bernier-Hane",
    itemType: "shirt",
  },
  {
    tags: ["Fog", "Mountains"],
    price: 20.99,
    name: "Rustic Fog Shirt",
    description:
      "harum nemo quas earum quisquam animi ratione voluptatum temporibus omnis ratione sequi sed deleniti ut iure similique",
    slug: "Rustic-Fog-Shirt-1",
    added: 1484295622087,
    manufacturer: "Bernier-Hane",
    itemType: "shirt",
  },
  {
    tags: ["Snow", "Mountains"],
    price: 19.99,
    name: "Generic Mountains Shirt",
    description:
      "sed maxime quibusdam facere sunt pariatur assumenda ut accusamus quos tempore autem qui est",
    slug: "Generic-Mountains-Shirt-1",
    added: 1481190845139,
    manufacturer: "Konopelski-Inc",
    itemType: "shirt",
  },
  {
    tags: ["City", "Buildings"],
    price: 11.99,
    name: "Awesome City Shirt",
    description:
      "officia cumque ducimus ut quia asperiores voluptas earum cum assumenda ut qui blanditiis reiciendis vel nulla minima itaque consequuntur animi ratione animi aperiam",
    slug: "Awesome-City-Shirt-1",
    added: 1485724813314,
    manufacturer: "Rice-Inc",
    itemType: "shirt",
  },
  {
    tags: ["Person", "Farmer", "Farm"],
    price: 19.99,
    name: "Rustic Farm Shirt",
    description:
      "et corporis laudantium deserunt minima quo odit ut at vel et et id",
    slug: "Rustic-Farm-Shirt",
    added: 1482137214265,
    manufacturer: "Cruickshank-Bayer-and-Gerlach",
    itemType: "shirt",
  },
  {
    tags: ["Night", "Silhouette", "People"],
    price: 17.99,
    name: "Awesome Night Shirt",
    description:
      "accusantium quidem adipisci in cupiditate vel nihil ducimus enim molestiae voluptatibus maiores autem veritatis dolor nostrum sint",
    slug: "Awesome-Night-Shirt",
    added: 1484003502087,
    manufacturer: "Bernier-Hane",
    itemType: "shirt",
  },
  {
    tags: ["Fog"],
    price: 19.99,
    name: "Rustic Fog Shirt",
    description:
      "asperiores et labore sed veritatis autem aliquam totam ducimus quas aliquam commodi corrupti",
    slug: "Rustic-Fog-Shirt-2",
    added: 1482401394785,
    manufacturer: "Konopelski-Group",
    itemType: "shirt",
  },
  {
    tags: ["Desert"],
    price: 14.99,
    name: "Practical Desert Shirt",
    description:
      "aut qui harum laudantium minima laborum explicabo qui reiciendis quidem quasi aperiam in aliquid tempore omnis",
    slug: "Practical-Desert-Shirt",
    added: 1478018324658,
    manufacturer: "Boyle-LLC",
    itemType: "shirt",
  },
  {
    tags: ["Crater", "Space"],
    price: 9.99,
    name: "Handcrafted Space Shirt",
    description:
      "eveniet sed non est aut eum dicta consequatur velit consequatur eius magnam excepturi quia nostrum error nulla totam eaque ex rerum qui",
    slug: "Handcrafted-Space-Shirt",
    added: 1483393361958,
    manufacturer: "Hodkiewicz-Inc",
    itemType: "shirt",
  },
  {
    tags: ["Classic", "Car"],
    price: 17.99,
    name: "Handcrafted Car Shirt",
    description:
      "aut reiciendis veniam quia dolorem corporis iste praesentium id quia ut quod recusandae voluptatum sed",
    slug: "Handcrafted-Car-Shirt",
    added: 1478172219386,
    manufacturer: "Franecki---Gaylord",
    itemType: "shirt",
  },
  {
    tags: ["Fog", "Plants"],
    price: 17.99,
    name: "Fantastic Fog Shirt",
    description:
      "repellendus tempore error quia nostrum nisi ut quo voluptatibus iure deleniti ducimus ut mollitia animi",
    slug: "Fantastic-Fog-Shirt",
    added: 1482326344911,
    manufacturer: "Konopelski-Inc",
    itemType: "shirt",
  },
  {
    tags: ["Snow", "Mountains"],
    price: 12.99,
    name: "Intelligent Mountains Shirt",
    description:
      "odit sit earum est ex et quas optio quo ullam ducimus ipsum nihil aut repudiandae dolores iusto minus non occaecati",
    slug: "Intelligent-Mountains-Shirt",
    added: 1481469196641,
    manufacturer: "Hodkiewicz-Inc",
    itemType: "shirt",
  },
  {
    tags: ["Mountains"],
    price: 19.99,
    name: "Small Mountains Shirt",
    description:
      "unde quod vitae nisi quo deleniti omnis vel eaque ut a officia laborum qui modi mollitia ratione",
    slug: "Small-Mountains-Shirt",
    added: 1481728042662,
    manufacturer: "Konopelski-Inc",
    itemType: "shirt",
  },
  {
    tags: ["City", "Car"],
    price: 19.99,
    name: "Gorgeous Car Shirt",
    description:
      "quam debitis quis soluta eos voluptatem ab maxime optio ab porro recusandae laborum dignissimos explicabo perferendis iusto soluta autem earum sed eius soluta",
    slug: "Gorgeous-Car-Shirt",
    added: 1485094541021,
    manufacturer: "Heathcote-Kautzer-and-Turner",
    itemType: "shirt",
  },
  {
    tags: ["Beach", "Ocean"],
    price: 20.99,
    name: "Unbranded Beach Shirt",
    description:
      "mollitia quae sunt ea earum aut voluptatem voluptatum magnam excepturi magni asperiores quia beatae consequatur quo quibusdam iste sit dolores",
    slug: "Unbranded-Beach-Shirt-1",
    added: 1483953037505,
    manufacturer: "Hodkiewicz-Inc",
    itemType: "shirt",
  },
  {
    tags: ["Night", "Bike"],
    price: 10.99,
    name: "Small Night Shirt",
    description:
      "doloremque tempora deleniti adipisci et tenetur est sunt rerum exercitationem doloremque sit consequatur iure voluptas",
    slug: "Small-Night-Shirt-2",
    added: 1485749859634,
    manufacturer: "Lowe-Wunsch-and-Stoltenberg",
    itemType: "shirt",
  },
  {
    tags: ["Snow", "Mountains", "Ocean"],
    price: 11.99,
    name: "Small Mountains Shirt",
    description:
      "eos ipsum dolorum quis consequatur quia et rem consequuntur porro officia corrupti praesentium",
    slug: "Small-Mountains-Shirt-1",
    added: 1480450191463,
    manufacturer: "Bayer-and-Sons",
    itemType: "shirt",
  },
  {
    tags: ["Farm", "Animals", "Fog", "Machine"],
    price: 19.99,
    name: "Practical Animals Shirt",
    description:
      "et quia culpa enim magni sint velit at esse qui facere illo ratione culpa ipsam quod",
    slug: "Practical-Animals-Shirt",
    added: 1484424578460,
    manufacturer: "Leuschke-Smith-and-Conroy",
    itemType: "shirt",
  },
  {
    tags: ["Person", "Church"],
    price: 10.99,
    name: "Sleek Church Shirt",
    description:
      "atque perspiciatis nam ipsum aut quas nesciunt maiores tenetur assumenda qui dolor",
    slug: "Sleek-Church-Shirt",
    added: 1478658455117,
    manufacturer: "Hodkiewicz-Inc",
    itemType: "shirt",
  },
  {
    tags: ["Sunset", "Person", "Skate park"],
    price: 18.99,
    name: "Generic Skate Park Shirt",
    description:
      "accusantium dolorem alias ut vero distinctio ut magnam ipsum aut",
    slug: "Generic-Skate-Park-Shirt",
    added: 1481396657037,
    manufacturer: "Konopelski-Inc",
    itemType: "shirt",
  },
  {
    tags: ["Nature", "Mountains"],
    price: 18.99,
    name: "Intelligent Mountains Shirt",
    description:
      "enim ut laudantium qui deserunt vel modi ad qui alias aut cupiditate similique voluptatem est non odit omnis non dolorem et distinctio rerum",
    slug: "Intelligent-Mountains-Shirt-1",
    added: 1479962635783,
    manufacturer: "Weissnat-Schowalter-and-Koelpin",
    itemType: "shirt",
  },
  {
    tags: ["Sky", "Night", "Stars"],
    price: 14.99,
    name: "Tasty Night Shirt",
    description:
      "deserunt tenetur maxime vero quia quisquam fugiat voluptas enim ut ad consequatur a sunt ab eaque qui velit suscipit enim",
    slug: "Tasty-Night-Shirt",
    added: 1479654947188,
    manufacturer: "Nikolaus-Schinner",
    itemType: "shirt",
  },
];
export const ProductContent: React.FC = () => {
  return (
    <Card className={styles.container} sx={{ minWidth: "100%" }}>
      <Grid container spacing={0}>
        {products.map((product, index) => {
          return (
            <Grid key={index} item xs={12} sm={4} md={3}>
              <Product item={product} />
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};
