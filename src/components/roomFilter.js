
import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/title';
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;
    let types = getUnique(rooms, 'type')
    types = ['all', ...types]
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return <section className='filter-container'>
        <Title title="Chercher une chambre" />
        <form className='filter-form'>
            <div className='form-group'>
                <label htmlFor='type'>Type de chambre:</label>
                <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                    {types}
                </select>
            </div>
            {/* <div className='form-group'>
                <label htmlFor='capacity'>Guest</label>
                <select name='capacity' id='capacity' value={type} className='form-control' onChange={handleChange}>
                    {people}
                </select>
            </div> */}
            <div className='form-group'>
                <label htmlFor='price'>Prix: €{price}</label>
                <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor='size'>Dimension en M2:</label>
                <div className='size-input'>
                    <div className='size-label'>min</div>
                    <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input' />
                    <div className='size-label'>max</div>
                    <input type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input' />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor='option'>Options:</label>
                <div className='single-extra' id='option'>
                    <input type="checkbox" name="toilette" id='toilette' checked={breakfast} onChange={handleChange} />
                    <label htmlFor='toilette'>Toilette personnel</label>
                </div>
                {/* <div className='single-extra'>
                    <input type="checkbox" name="pets" id='pets' checked={pets} onChange={handleChange} />
                    <label htmlFor='pets'>pets</label>
                </div> */}
            </div>

        </form>
    </section>
}