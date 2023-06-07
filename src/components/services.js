import React, { Component } from 'react'
import { FaHandsWash, FaLock, FaLocationArrow, FaMoneyBillWave } from 'react-icons/fa'
import Title from './title'
export default class services extends Component {
    state = {
        services: [
            {
                icon: <FaHandsWash />,
                title: "Propreté",
                info: "Nos chambres sont minutieusement nettoyées afin de vous offrir un environnement sain pour vos études."
            },
            {
                icon: <FaLock />,
                title: "Sécurité",
                info: "Notre objectif principal est d'assurer votre sécurité et votre tranquillité pour favoriser votre réussite."
            },
            {
                icon: <FaLocationArrow />,
                title: "Proximité",
                info: "Nos chambres en location offrent l'avantage d'être idéalement situées à proximité des commerces, des transports et de toutes les commodités dont vous pourriez avoir besoin."
            },
            {
                icon: <FaMoneyBillWave />,
                title: "Prix",
                info: "Nos prix de chambre, compétitifs et préservés de l'inflation, comprennent également les frais d'internet, d'eau et d'électricité, offrant ainsi une offre concurrentielle, stable et tout inclus."
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title="Nos Services" />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
