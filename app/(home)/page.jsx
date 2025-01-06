'use client'
import { Carousel } from "react-responsive-carousel";
import "./styles.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
    title: "Home"
  };

export default function Home() {

    return (
        <main className="home" style={{ width: "100%" }}>
      {(
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
      )  }
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
          <li onClick={() => handleBrandClick(1)}>
            <img src="/라켓브랜드-바볼랏.png" alt="바볼랏" />
          </li>
          <li onClick={() => handleBrandClick(2)}>
            <img src="/라켓브랜드-윌슨.png" alt="윌슨" />
          </li>
        </div>

        <div className="brand-list-row">
          <li onClick={() => handleBrandClick(3)}>
            <img src="/라켓브랜드-헤드.png" alt="헤드" />
          </li>
          <li onClick={() => handleBrandClick(4)}>
            <img src="/라켓브랜드-요넥스.png" alt="요넥스" />
          </li>
        </div>
        <div className="brand-list-row">
          <li onClick={() => handleBrandClick(5)}>
            <img src="/라켓브랜드-던롭.png" alt="던롭" />
          </li>
          <li onClick={() => handleBrandClick(6)}>
            <img src="/라켓브랜드-테크니파이버.png" alt="테크니파이버" />
          </li>
        </div>
      </ul>
    </main> 
    )
}
