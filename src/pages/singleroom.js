import React, { useContext } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/hero';
import Banner from '../components/banner';
import { Link, useParams } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/styledHero';
import ImageViewer from '../components/imageviewer';

const Singleroom = () => {
  const { getRoom } = useContext(RoomContext);
  const { slug } = useParams();

  const room = getRoom(slug);
  if (!room) {
    return (
      <div className='error'>
        <h3>Désolé ! Aucune chambre trouvée.</h3>
        <Link to='/rooms' className='btn-primary'>
          Retourner vers nos chambres
        </Link>
      </div>
    );
  }

  const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
  const [mainImg, ...defaultImg] = images;
  return (
    <>
      <StyledHero img={mainImg || this.state.defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>
            Retourner vers nos chambres
          </Link>
        </Banner>
        {/* Rest of the component */}
      </StyledHero>
      <section className='single-room'>
        <ImageViewer defaultImg={defaultImg} name={name} />
        <div className='single-room-info'>
          <article className='desc'>
            <h3>Détails</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>Info</h3>
            <h6>Prix : €{price}</h6>
            <h6>Dimension : {size} M2</h6>
            <h6>
              Capacité maximale : {""}
              {capacity > 1 ? `${capacity} personnes` : `${capacity} personne`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className='room-extras'>
        <h6>Équipements</h6>
        <ul className='extras'>
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>
          })}
        </ul>
      </section>
    </>
  );
}

export default Singleroom;