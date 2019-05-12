'use strict';
import mobileNav from './mobileNav';
import switchContent from './switchContent';
mobileNav();

const btn1 = {
  id: 'content-btn-1',
  title: 'Who we are',
  content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  consectetur magnam exercitationem est laudantium reprehenderit
  nesciunt molestias delectus assumenda laborum accusantium veritatis,
  odit nisi, iusto, perferendis facere dicta. Quibusdam,
  sapiente?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Eaque, quisquam perferendis nulla dolorem totam quae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  consectetur magnam exercitationem est laudantium reprehenderit
  nesciunt molestias delectus assumenda laborum accusantium veritatis,
  odit nisi, iusto, perferendis facere dicta.`
};
const btn2 = {
  id: 'content-btn-2',
  title: 'What we do',
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
    consectetur magnam exercitationem est laudantium reprehenderit
    nesciunt molestias delectus assumenda laborum accusantium veritatis,
    odit nisi, iusto, perferendis facere dicta.Ratione
    consectetur magnam exercitationem est laudantium reprehenderit
    nesciunt molestias delectus assumenda laborum accusantium veritatis,
    odit nisi, iusto, perferendis facere dicta.`
};
const btn3 = {
  id: 'content-btn-3',
  title: 'Our customers',
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
  consectetur magnam exercitationem est laudantium reprehenderit
  nesciunt molestias delectus assumenda laborum accusantium veritatis,
  odit nisi, iusto, perferendis facere dicta.Ratione
  consectetur magnam exercitationem est laudantium reprehenderit
  nesciunt molestias delectus assumenda laborum accusantium veritatis,
  odit nisi, iusto, perferendis facere dicta.`
};
const switchData = {
  title: 'about-title',
  content: 'about-content',
  btns: [btn1, btn2, btn3]
};
switchContent(switchData, 'fade');
