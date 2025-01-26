'use client';
import {Carousel} from 'react-responsive-carousel';
import './styles.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Link from 'next/link';

// import { ClientOnly } from "./client"

// export function generateStaticParams() {
//     return [{slug:['']}]
// }

// export default function Page() {
//     // return <div>Hello~</div>
//     return <ClientOnly/>
// }

// import { Metadata } from "next";

export const Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className="home" style={{width: '100%'}}>
      {
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          // thumbWidth={100}
          width="100%"
          centerMode={true}
          centerSlidePercentage={100}
          showStatus={false}
          dynamicHeight={true}
        >
          <div>
            <img src="/images/carousel-wilson.jpg" alt="" />
          </div>
          <div>
            <img src="/images/carousel-babolat.jpg" alt="" />
          </div>
          <div>
            <img src="/images/carousel-head.jpg" alt="" />
          </div>
        </Carousel>
      }
      {/* {!isMobile ? (
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          // thumbWidth={100}
          width="100%"
          centerMode={true}
          centerSlidePercentage={100}
          showStatus={false}
          dynamicHeight={true}
        >
          <div>
            <img src="/carousel-wilson.jpg" alt="" />
          </div>
          <div>
            <img src="/carousel-babolat.jpg" alt="" />
          </div>
          <div>
            <img src="/carousel-head.jpg" alt="" />
          </div>
        </Carousel>
      ) : (
        <div className="home-img-container">
          <div>
            <img src="/carousel-wilson.jpg" alt="" />
          </div>
          <div>
            <img src="/carousel-babolat.jpg" alt="" />
          </div>
          <div>
            <img src="/carousel-head.jpg" alt="" />
          </div>
        </div>
      )} */}
      {/* <DisplayItem items={products} /> */}
      <ul className="brand-list">
        <div className="brand-list-row">
          <Link href="products/by-brand/babolat">
            <img src="/images/라켓브랜드-바볼랏.png" alt="바볼랏" />
          </Link>
          <Link href="products/by-brand/wilson">
            <img src="/images/라켓브랜드-윌슨.png" alt="윌슨" />
          </Link>
        </div>

        <div className="brand-list-row">
          <Link href="products/by-brand/head">
            <img src="/images/라켓브랜드-헤드.png" alt="헤드" />
          </Link>
          <Link href="products/by-brand/yonex">
            <img src="/images/라켓브랜드-요넥스.png" alt="요넥스" />
          </Link>
        </div>
        <div className="brand-list-row">
          <Link href="products/by-brand/dunlop">
            <img src="/images/라켓브랜드-던롭.png" alt="던롭" />
          </Link>
          <Link href="products/by-brand/tecnifibre">
            <img src="/images/라켓브랜드-테크니파이버.png" alt="테크니파이버" />
          </Link>
        </div>
      </ul>
    </main>
  );
}
