import React, { Component } from "react";
import "./Gallery.css";


class Gallery extends Component {
  state = {
    gallery: [
      {
        _id: 1,
        img: "https://www.dw.com/image/43505336_303.jpg "
      },
      {
        _id: 2,
        img:
          "https://nacla.org/sites/default/files/styles/650px_wide/public/Protestas_en_Managua%2C_Nicaragua_de_2018_%281%29.jpg?itok=mSOstxPm "
      },
      {
        _id: 3,
        img:
          "https://www.miamiherald.com/latest-news/l1n9fk/picture212504559/alternates/FREE_768/Nicaragua%20Protests(2)%20(4).JPG "
      },
      {
        _id: 4,
        img: "https://images.wsj.net/im-18249?width=620&aspect_ratio=1.5 "
      },
      {
        _id: 5,
        img:
          "https://static01.nyt.com/images/2018/04/27/world/27nicaragua-1/27nicaragua-1-videoSmall.jpg"
      },
      {
        _id: 6,
        img: "https://www.dw.com/image/43505336_303.jpg "
      },
      {
        _id: 7,
        img:
          "https://nacla.org/sites/default/files/styles/650px_wide/public/Protestas_en_Managua%2C_Nicaragua_de_2018_%281%29.jpg?itok=mSOstxPm "
      },
      {
        _id: 8,
        img:
          "https://www.miamiherald.com/latest-news/l1n9fk/picture212504559/alternates/FREE_768/Nicaragua%20Protests(2)%20(4).JPG "
      },
      {
        _id: 9,
        img: "https://images.wsj.net/im-18249?width=620&aspect_ratio=1.5 "
      },
      {
        _id: 10,
        img:
          "https://static01.nyt.com/images/2018/04/27/world/27nicaragua-1/27nicaragua-1-videoSmall.jpg"
      }
    ]
  };




  render() {
    return (
      <div className="container-fluid gallery-container">
    
       {  this.state.gallery.map(galleryimage => (
        <div key={galleryimage._id} className="collection">
          <div className="card col-sm-6 col-lg-2 col-md-3  col-12">
            <div className="img-container">
              <img className="image" src={galleryimage.img} alt={galleryimage._id}/>
            </div>
          </div>
        </div>
       ) )}
      
   </div>
    )
    }
}

export default Gallery;

