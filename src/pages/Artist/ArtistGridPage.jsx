import React, { useState } from 'react';
import Input from '../../components/Input';
import Artist1 from '../../assets/artist-1.png';
import Artist2 from '../../assets/artist-2.png';
import Artist3 from '../../assets/artist-3.png';
import { TiTick } from 'react-icons/ti';
import {useNavigate } from 'react-router-dom'

const ArtistGridPage = () => {
  const nav = useNavigate()
  const artists = [
    { id: 1, name: 'Artist name', imgSrc: Artist1 },
    { id: 2, name: 'Artist name', imgSrc: Artist2 },
    { id: 3, name: 'Artist name', imgSrc: Artist3 },
    { id: 4, name: 'Artist name', imgSrc: Artist1 },
    { id: 5, name: 'Artist name', imgSrc: Artist2 },
    { id: 6, name: 'Artist name', imgSrc: Artist3 },
  ];

  const [selectedArtists, setSelectedArtists] = useState([]);

  const toggleSelectArtist = (id) => {
    setSelectedArtists((prevSelected) =>prevSelected.includes(id)? prevSelected.filter((artistId) => artistId !== id): [...prevSelected, id]
    );
  };

  return (
    <div className="flex justify-center items-center w-screen min-h-screen flex-col bg-[#121212]">
      <h1 className="font-bold text-white text-2xl">Pick Your Favourite Artist</h1>
      <Input type={'text'} name={'artist'} className="bg-[#2626267A] w-[18rem] h-[2.3rem] rounded-md px-3 text-white mt-5 border-none outline-none" placeholder={'Search Artist'}/>
      <div className="grid grid-cols-3 gap-4 mt-[2rem]">
        {artists.map((artist) => (
          <div key={artist.id} className="relative cursor-pointer w-[100px] h-[150px] overflow-hidden rounded-md" onClick={() => toggleSelectArtist(artist.id)}
          >
            <img src={artist.imgSrc} alt={artist.name} className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
            {selectedArtists.includes(artist.id) && (
              <div className="absolute inset-0 bg-orange-500 bg-opacity-80 flex justify-center items-center">
                <TiTick className="w-10 h-10 text-white" />
              </div>
            )}
            <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
              {artist.name}
            </div>
          </div>
        ))}
      </div>

      {/* Blur Background Button */}
      <button onClick={()=>nav("/dashboard/home")} className=" w-[18rem] mt-4 h-[3rem] flex justify-center items-center  rounded-full bg-white text-black font-semibold">{`${selectedArtists.length}/${artists.length}`}</button>
    </div>
  );
};

export default ArtistGridPage;
