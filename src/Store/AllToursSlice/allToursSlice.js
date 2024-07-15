import { createSlice } from "@reduxjs/toolkit";
import image1 from '../../Images/switzerland.jpg'
import image2 from '../../Images/norway.jpg'
import image3 from '../../Images/china.jpg'
import image4 from '../../Images/machu pichu.jpg'
import Peru from "../../Icons/FlagsIcons/Peru";
import Switzerland from './../../Icons/FlagsIcons/Switzerland';
import Norway from './../../Icons/FlagsIcons/Norway';
import France from './../../Icons/FlagsIcons/France';
import China from './../../Icons/FlagsIcons/China';
import Australia from './../../Icons/FlagsIcons/Australia';
import Italy from './../../Icons/FlagsIcons/Italy';
import USA from './../../Icons/FlagsIcons/USA';
import Austria from "../../Icons/FlagsIcons/Austria";
import Canada from "../../Icons/FlagsIcons/Canada";
import Japan from "../../Icons/FlagsIcons/Japan";
import Germany from "../../Icons/FlagsIcons/Germany";
import NewZeland from "../../Icons/FlagsIcons/NewZeland";

const allToursSlice = createSlice({
    name:"allTours",
    initialState: {tours: [
        {
          id: 1,
          title: "Machu Picchu",
          subtitle: "Peru",
          description: 'Rediscovered a century ago, the "Lost City of the Incas" has not lost its ability to astonish, thanks to its phenomenal position atop a mountain peak, with panoramic Andean views. Whether you complete the four-day, high altitude hike or hop on the luxury train, Machu Picchu holidays will literally be a high point of your South American adventure. Our top tip? Book well in advance if planning to trek.',
          image: "https://images.pexels.com/photos/2539417/pexels-photo-2539417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          flag: <Peru/>,
          price: 299,
          days: [5,7,10]
        },
        {
          id: 2,
          title: "Oeschinen Lake",
          subtitle: "Switzerland",
          description: 'Lake Oeschinen, which lies above Kandersteg, is a pristine mountain lake, fed by the glacial brooks of the three-thousand-meter peaks of Blüemlisalp, Oeschinenhorn, Fründenhorn and Doldenhorn. People who love to swim, nature lovers and hikers can really enjoy themselves here.',
          image: "https://images.pexels.com/photos/19593261/pexels-photo-19593261/free-photo-of-view-of-the-oeschinen-lake-in-mountains-in-switzerland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 399,
          flag: <Switzerland/>,
          days: [5,7]
        },
        {
          id: 3,
          title: "Pulpit Rock",
          subtitle: "Norway",
          description: 'Pulpit Rock or Prekestolen is a tourist attraction in the municipality of Strand in Rogaland county, Norway. Preikestolen is a steep cliff which rises 604 metres above Lysefjorden. Atop the cliff, there is an almost flat top of approximately 25 by 25 metres.',
          image: "https://images.pexels.com/photos/18307731/pexels-photo-18307731/free-photo-of-landscape-with-river-and-mountains-on-hike-in-norway-on-fjord.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 349,
          flag: <Norway/>,
          days: [5, 10]
        },
        {
          id: 4,
          title: "Huangshan",
          subtitle: "China",
          description: 'Huangshan, literally meaning the Yellow Mountain, is a mountain range in southern Anhui province in eastern China. Huangshan is the must-visit attraction. Besides Mt. Huangshan, travelers can explore the Huizhou culture in the nearby ancient villages, like Xidi and Hongcun Ancient Villages.',
          image: "https://images.pexels.com/photos/6294826/pexels-photo-6294826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 249,
          flag: <China/>,
          days: [5,7,10]
        },
        {
          id: 5,
          title: "Chamonix",
          subtitle: "France",
          description: "Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing. Year-round, cable cars take visitors up to several nearby peaks with panoramic views, including Aiguille du Midi above town",
          image:
            "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
          price: 449,
          flag: <France/>,
          days: [10]
        },
        {
          id: 6,
          title: "Mimosa Rocks",
          subtitle: "Australia",
          description: "Mimosa Rocks National Park offers up show-stopping headland views, beaches and pure lagoons. It’s a great place to escape to for the day, and if you’d like to stay for longer, there are a range of campgrounds to choose from, including sites with motorhome and camper trailer access.",
          image:
            "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
          price: 199,
          flag: <Australia/>,
          days: [5,7,10]
          },
        {
          id: 7,
          title: "Nuvolau Averau",
          subtitle: "Italy",
          description: 'At Rifugio Nuvolau everything is mountain: from the rough rock on which it stands to the history it preserves. In this place you will experience the tradition of the old alpine huts of the Dolomites: places that take you back to the origins, to the first explorers of these areas, women and men who, with deep love and care, discovered and preserved the mountain and its wonders.',
          image:
            "https://travelingwolf.com/assets/images/via-ferrata-nuvolau-averau-dolomites.jpg",
          price: 349,
          flag: <Italy/>,
          days: [5,7]
        },
        {
          id: 8,
          title: "Mount Meharry",
          subtitle: "Australia",
          description: "Mount Meharry is the highest mountain in Western Australia. It is located in the Hamersley Range within the southeastern part of Karijini National Park in the Pilbara region, approximately 86 kilometres south-southeast of Wittenoom, and 87 kilometres east-southeast of Tom Price.",
          image:
            "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
          price: 399,
          flag: <Australia/>,
          days: [7]
        },
        {
          id: 9,
          title: "Zermatt",
          subtitle: "Switzerland",
          description: "Zermatt, at the foot of the Matterhorn, is a mountain resort renowned for skiing, climbing and hiking. Its main street, Bahnhofstrasse, is lined with boutique shops, hotels and restaurants, and also has a lively après-ski scene.",
          image: "https://images.pexels.com/photos/267104/pexels-photo-267104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 599,
          flag: <Switzerland/>,
          days: [7]
        },
        {
          id: 10,
          title: "Aspen",
          subtitle: "USA",
          description: "Aspen, in Colorado’s Rocky Mountains, is a ski resort town and year-round destination for outdoor recreation. It's known for its high-end restaurants and boutiques, as well as landmarks like the Wheeler Opera House.",
          image: "https://images.pexels.com/photos/7119649/pexels-photo-7119649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 799,
          flag: <USA/>,
          days: [7, 14]
        },
        {
          id: 11,
          title: "Banff",
          subtitle: "Canada",
          description: "Banff is a resort town in the province of Alberta, located within Banff National Park. Known for its mountainous surroundings and hot springs, Banff is a popular destination for outdoor sports and features many hiking, biking, and skiing spots.",
          image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 649,
          flag: <Canada/>,
          days: [7, 10]
        },
        {
          id: 12,
          title: "St. Moritz",
          subtitle: "Switzerland",
          description: "St. Moritz is a luxury alpine resort town in Switzerland’s Engadin valley. It has hosted the Winter Olympics twice and is known for its world-class skiing, luxury shopping, and glamorous social scene.",
          image: "https://images.pexels.com/photos/13228330/pexels-photo-13228330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 899,
          flag: <Switzerland/>,
          days: [5, 10]
        },
        {
          id: 13,
          title: "Whistler",
          subtitle: "Canada",
          description: "Whistler is a Canadian resort town in the southern Pacific Ranges of the Coast Mountains in British Columbia. It is home to Whistler Blackcomb, one of the largest ski resorts in North America.",
          image: "https://images.pexels.com/photos/1592461/pexels-photo-1592461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 749,
          flag: <Canada/>,
          days: [7, 14]
        },
        {
          id: 14,
          title: "Cortina d'Ampezzo",
          subtitle: "Italy",
          description: "Cortina d'Ampezzo, commonly referred to as Cortina, is a town and comune in the heart of the southern (Dolomitic) Alps in the Veneto region of Northern Italy. Known for its winter sports, scenery, shops, and après-ski scene.",
          image: "https://images.pexels.com/photos/16889206/pexels-photo-16889206/free-photo-of-tofana-mountains-in-the-dolomites.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 499,
          flag: <Italy/>,
          days: [7, 10]
        },
        {
          id: 15,
          title: "Val d'Isère",
          subtitle: "France",
          description: "Val d'Isère is a commune of the Tarentaise Valley, located in the Savoie department in the Auvergne-Rhône-Alpes region in southeastern France. It is a popular ski resort, close to the Vanoise National Park and the Italian border.",
          image: "https://images.pexels.com/photos/3996363/pexels-photo-3996363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 649,
          flag: <France/>,
          days: [7, 14]
        },
        {
          id: 16,
          title: "Queenstown",
          subtitle: "New Zealand",
          description: "Queenstown, New Zealand, sits on the shores of the South Island’s Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it's also a base for exploring the region’s vineyards and historic mining towns.",
          image: "https://images.pexels.com/photos/724949/pexels-photo-724949.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 999,
          flag: <NewZeland/>,
          days: [7, 14]
        },
        {
          id: 17,
          title: "Lech",
          subtitle: "Austria",
          description: "Lech am Arlberg is a mountain village and an exclusive ski resort in the Bludenz district in the Austrian state of Vorarlberg. It is known for its luxurious amenities and stunning Alpine scenery.",
          image: "https://images.pexels.com/photos/753312/pexels-photo-753312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 699,
          flag: <Austria/>,
          days: [7, 10]
        },
        {
          id: 18,
          title: "Grindelwald",
          subtitle: "Switzerland",
          description: "Grindelwald is a village and popular tourist destination in the Bernese Alps, located in the canton of Bern, Switzerland. It is famous for its stunning mountain views and outdoor activities such as skiing and hiking.",
          image: "https://images.pexels.com/photos/5648834/pexels-photo-5648834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 599,
          flag: <Switzerland/>,
          days: [7, 14]
        },
        {
          id: 19,
          title: "Garmisch-Partenkirchen",
          subtitle: "Germany",
          description: "Garmisch-Partenkirchen is a mountain resort town in Bavaria, southern Germany. Formed from the merger of two towns, it’s known for skiing and ice skating in the winter and hiking in the summer.",
          image: "https://images.pexels.com/photos/12568079/pexels-photo-12568079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 499,
          flag: <Germany/>,
          days: [7, 10]
        },
        {
          id: 20,
          title: "Niseko",
          subtitle: "Japan",
          description: "Niseko is a town on Japan’s northern Hokkaido Island. It’s famous for its powder snow and is a major hub for skiing and other winter sports. The area includes resorts such as Grand Hirafu, Niseko Village, and Annupuri.",
          image: "https://images.pexels.com/photos/6863992/pexels-photo-6863992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 849,
          flag: <Japan/>,
          days: [7, 14]
        },
        {
          id: 21,
          title: "Courchevel",
          subtitle: "France",
          description: "Courchevel is a French Alps ski resort. It's part of Les Trois Vallées, the largest linked ski areas in the world. Courchevel consists of four satellite villages at different altitudes.",
          image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS3D6RpAnzOIju7--T4j4gd5nayQ3docSjBREIwpn0mYU8PDNvJRjYdIb_YKkekn8gElFvVT537Fe4HrsRr0MRmhwrOnPz9rXcLFH1OFQ",
          price: 749,
          flag: <France/>,
          days: [7, 10]
        },
        {
          id: 22,
          title: "Jackson Hole",
          subtitle: "USA",
          description: "Jackson Hole is a valley between the Gros Ventre and Teton mountain ranges in Wyoming, near the border with Idaho. Known for its ski resorts, the area also offers hiking, mountain biking, and wildlife viewing opportunities.",
          image: "https://media.architecturaldigest.com/photos/584988030f1fdbff1cc00349/4:3/w_3736,h_2802,c_limit/jackson-hole-01.jpg",
          price: 699,
          flag: <USA/>,
          days: [7, 14]
        },
        {
          id: 23,
          title: "Verbier",
          subtitle: "Switzerland",
          description: "Verbier is a resort town in Switzerland’s Valais Canton. It’s known for its ski slopes, including those of the sprawling 4 Vallées ski area. In summer, hiking and mountain biking trails cross the surrounding Alps.",
          image: "https://www.melbtravel.com/wp-content/uploads/2024/01/What-you-need-to-know-about-skiing-in-Verbier-Switzerland.jpeg",
          price: 799,
          flag: <Switzerland/>,
          days: [7, 10]
        },
        {
          id: 24,
          title: "St. Anton",
          subtitle: "Austria",
          description: "St. Anton am Arlberg, commonly referred to as St. Anton, is a village and ski resort in the Austrian state of Tyrol. It is considered one of the top ski resorts in the Alps, with a lively après-ski scene.",
          image: "https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 749,
          flag: <Austria/>,
          days: [7, 14]
        },
        {
          id: 25,
          title: "Kjerag",
          subtitle: "Norway",
          description: "Kjerag or Kiragg is a mountain in the Sandnes municipality in Rogaland county, Norway. The 1,110-metre (3,640 ft) tall mountain sits on the southern shore of Lysefjorden, just southwest of the village of Lysebotn. Kjerag is a popular hiking destination.",
          image: "https://res.cloudinary.com/simpleview/image/upload/v1537532266/clients/norway/276513cc_b43d_4c6d_9750_0f5c8c98686c_96ea5fd0-1de7-4ed5-9a83-d355bb575592.jpg",
          price: 649,
          flag: <Norway/>,
          days: [7, 14]
        },
      ], slideTours: [
        {
          id: 1,
          title: "Machu Picchu",
          subtitle: "Peru",
          description: 'Rediscovered a century ago, the "Lost City of the Incas" has not lost its ability to astonish, thanks to its phenomenal position atop a mountain peak, with panoramic Andean views. Whether you complete the four-day, high altitude hike or hop on the luxury train, Machu Picchu holidays will literally be a high point of your South American adventure. Our top tip? Book well in advance if planning to trek.',
          image: image4,
          flag: <Peru/>,
          price: 299,
          days: [5,7,10]
        },
        {
          id: 2,
          title: "Oeschinen Lake",
          subtitle: "Switzerland",
          description: 'Lake Oeschinen, which lies above Kandersteg, is a pristine mountain lake, fed by the glacial brooks of the three-thousand-meter peaks of Blüemlisalp, Oeschinenhorn, Fründenhorn and Doldenhorn. People who love to swim, nature lovers and hikers can really enjoy themselves here.',
          image: image1,
          price: 399,
          flag: <Switzerland/>,
          days: [5,7]
        },
        {
          id: 3,
          title: "Pulpit Rock",
          subtitle: "Norway",
          description: 'Pulpit Rock or Prekestolen is a tourist attraction in the municipality of Strand in Rogaland county, Norway. Preikestolen is a steep cliff which rises 604 metres above Lysefjorden. Atop the cliff, there is an almost flat top of approximately 25 by 25 metres.',
          image: image2,
          price: 349,
          flag: <Norway/>,
          days: [5, 10]
        },
        {
          id: 4,
          title: "Huangshan",
          subtitle: "China",
          description: 'Huangshan, literally meaning the Yellow Mountain, is a mountain range in southern Anhui province in eastern China. Huangshan is the must-visit attraction. Besides Mt. Huangshan, travelers can explore the Huizhou culture in the nearby ancient villages, like Xidi and Hongcun Ancient Villages.',
          image: image3,
          price: 249,
          flag: <China/>,
          days: [5,7,10]
        },
        {
          id: 5,
          title: "Chamonix",
          subtitle: "France",
          description: "Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing. Year-round, cable cars take visitors up to several nearby peaks with panoramic views, including Aiguille du Midi above town",
          image:
            "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
          price: 449,
          flag: <France/>,
          days: [10]
        },
        {
          id: 6,
          title: "Mimosa Rocks",
          subtitle: "Australia",
          description: "Mimosa Rocks National Park offers up show-stopping headland views, beaches and pure lagoons. It’s a great place to escape to for the day, and if you’d like to stay for longer, there are a range of campgrounds to choose from, including sites with motorhome and camper trailer access.",
          image:
            "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
          price: 199,
          flag: <Australia/>,
          days: [5,7,10]
          },
        {
          id: 7,
          title: "Nuvolau Averau",
          subtitle: "Italy",
          description: 'At Rifugio Nuvolau everything is mountain: from the rough rock on which it stands to the history it preserves. In this place you will experience the tradition of the old alpine huts of the Dolomites: places that take you back to the origins, to the first explorers of these areas, women and men who, with deep love and care, discovered and preserved the mountain and its wonders.',
          image:
            "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
          price: 349,
          flag: <Italy/>,
          days: [5,7]
        },
        {
          id: 8,
          title: "Mount Meharry",
          subtitle: "Australia",
          description: "Mount Meharry is the highest mountain in Western Australia. It is located in the Hamersley Range within the southeastern part of Karijini National Park in the Pilbara region, approximately 86 kilometres south-southeast of Wittenoom, and 87 kilometres east-southeast of Tom Price.",
          image:
            "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
          price: 399,
          flag: <Australia/>,
          days: [7]
        },
      ], notSortedTours: [
        {
          id: 1,
          title: "Machu Picchu",
          subtitle: "Peru",
          description: 'Rediscovered a century ago, the "Lost City of the Incas" has not lost its ability to astonish, thanks to its phenomenal position atop a mountain peak, with panoramic Andean views. Whether you complete the four-day, high altitude hike or hop on the luxury train, Machu Picchu holidays will literally be a high point of your South American adventure. Our top tip? Book well in advance if planning to trek.',
          image: "https://images.pexels.com/photos/2539417/pexels-photo-2539417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          flag: <Peru/>,
          price: 299,
          days: [5,7,10]
        },
        {
          id: 2,
          title: "Oeschinen Lake",
          subtitle: "Switzerland",
          description: 'Lake Oeschinen, which lies above Kandersteg, is a pristine mountain lake, fed by the glacial brooks of the three-thousand-meter peaks of Blüemlisalp, Oeschinenhorn, Fründenhorn and Doldenhorn. People who love to swim, nature lovers and hikers can really enjoy themselves here.',
          image: "https://images.pexels.com/photos/19593261/pexels-photo-19593261/free-photo-of-view-of-the-oeschinen-lake-in-mountains-in-switzerland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 399,
          flag: <Switzerland/>,
          days: [5,7]
        },
        {
          id: 3,
          title: "Pulpit Rock",
          subtitle: "Norway",
          description: 'Pulpit Rock or Prekestolen is a tourist attraction in the municipality of Strand in Rogaland county, Norway. Preikestolen is a steep cliff which rises 604 metres above Lysefjorden. Atop the cliff, there is an almost flat top of approximately 25 by 25 metres.',
          image: "https://images.pexels.com/photos/18307731/pexels-photo-18307731/free-photo-of-landscape-with-river-and-mountains-on-hike-in-norway-on-fjord.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 349,
          flag: <Norway/>,
          days: [5, 10]
        },
        {
          id: 4,
          title: "Huangshan",
          subtitle: "China",
          description: 'Huangshan, literally meaning the Yellow Mountain, is a mountain range in southern Anhui province in eastern China. Huangshan is the must-visit attraction. Besides Mt. Huangshan, travelers can explore the Huizhou culture in the nearby ancient villages, like Xidi and Hongcun Ancient Villages.',
          image: "https://images.pexels.com/photos/6294826/pexels-photo-6294826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 249,
          flag: <China/>,
          days: [5,7,10]
        },
        {
          id: 5,
          title: "Chamonix",
          subtitle: "France",
          description: "Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing. Year-round, cable cars take visitors up to several nearby peaks with panoramic views, including Aiguille du Midi above town",
          image:
            "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
          price: 449,
          flag: <France/>,
          days: [10]
        },
        {
          id: 6,
          title: "Mimosa Rocks",
          subtitle: "Australia",
          description: "Mimosa Rocks National Park offers up show-stopping headland views, beaches and pure lagoons. It’s a great place to escape to for the day, and if you’d like to stay for longer, there are a range of campgrounds to choose from, including sites with motorhome and camper trailer access.",
          image:
            "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
          price: 199,
          flag: <Australia/>,
          days: [5,7,10]
          },
        {
          id: 7,
          title: "Nuvolau Averau",
          subtitle: "Italy",
          description: 'At Rifugio Nuvolau everything is mountain: from the rough rock on which it stands to the history it preserves. In this place you will experience the tradition of the old alpine huts of the Dolomites: places that take you back to the origins, to the first explorers of these areas, women and men who, with deep love and care, discovered and preserved the mountain and its wonders.',
          image:
            "https://travelingwolf.com/assets/images/via-ferrata-nuvolau-averau-dolomites.jpg",
          price: 349,
          flag: <Italy/>,
          days: [5,7]
        },
        {
          id: 8,
          title: "Mount Meharry",
          subtitle: "Australia",
          description: "Mount Meharry is the highest mountain in Western Australia. It is located in the Hamersley Range within the southeastern part of Karijini National Park in the Pilbara region, approximately 86 kilometres south-southeast of Wittenoom, and 87 kilometres east-southeast of Tom Price.",
          image:
            "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
          price: 399,
          flag: <Australia/>,
          days: [7]
        },
        {
          id: 9,
          title: "Zermatt",
          subtitle: "Switzerland",
          description: "Zermatt, at the foot of the Matterhorn, is a mountain resort renowned for skiing, climbing and hiking. Its main street, Bahnhofstrasse, is lined with boutique shops, hotels and restaurants, and also has a lively après-ski scene.",
          image: "https://images.pexels.com/photos/267104/pexels-photo-267104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 599,
          flag: <Switzerland/>,
          days: [7]
        },
        {
          id: 10,
          title: "Aspen",
          subtitle: "USA",
          description: "Aspen, in Colorado’s Rocky Mountains, is a ski resort town and year-round destination for outdoor recreation. It's known for its high-end restaurants and boutiques, as well as landmarks like the Wheeler Opera House.",
          image: "https://images.pexels.com/photos/7119649/pexels-photo-7119649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          price: 799,
          flag: <USA/>,
          days: [7, 14]
        }
      ],slideIndex: 7, sortedTours: [], footerRendering: false, navbarRendering: false, isSeeMoreButtonActive: true, isInSite: false},
    reducers: {
        slidesToLeft(state) {
            state.slideIndex = (state.slideIndex + 1) % state.slideTours.length;
        },
        slidesToRight(state) {
            state.slideIndex = state.slideIndex === 0 ? state.slideTours.length - 1 : state.slideIndex - 1;
        },
        toursFiltering(state, {payload}) {
          if(payload !== 'all') {
            const newArray = state.tours.filter((el) => el.subtitle === payload)
            state.sortedTours = [...newArray]
            state.isSeeMoreButtonActive = false
          } else {
            state.sortedTours = [];
          }
        },
        footerRendering(state, {payload}){
          state.footerRendering = payload;
        },
        navbarRendering(state, {payload}){
          state.navbarRendering = payload;
        },
        seeMoreButtonWork(state, {payload}){
          if(payload === 0) {
            const newArray = state.tours.filter((el) => el.id > 0 && el.id < 11) 
            state.notSortedTours = [...newArray]
            state.isSeeMoreButtonActive = true;
          } else {
            const newArray = state.tours.filter((el) => el.id > (payload)*10 && el.id < (payload+1)*10 + 1) 
            state.notSortedTours = [...state.notSortedTours, ...newArray]
            const newArr = state.tours.filter((el) => el.id > (payload+1)*10 && el.id < (payload+2)*10 + 1)
            if(newArr.length === 0) {state.isSeeMoreButtonActive = false}
          }
        },
        isInSiteChanging(state){
          state.isInSite = true;
        }
    }
})

export const allToursReducer = allToursSlice.reducer;
export const selectAllTours = state => state.allTours;
export const {slidesToLeft, slidesToRight, toursFiltering, footerRendering, seeMoreButtonWork, isInSiteChanging, navbarRendering} = allToursSlice.actions;