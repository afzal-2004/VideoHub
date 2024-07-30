import { useState } from "react";
import { IoIosVideocam } from "react-icons/io";
export const Video = () => {
  const videosArr = [
    "https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882",
    "https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf",
    "https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174",
    "https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174",
    "https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78",
    "https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281",
    "https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614",
  ];
  const [link, setlink] = useState(videosArr[0]);
  return (
    <>
      <div className="border border-red-500  xl:h-[70vh] md:flex mt-[2vh]  mb-6 ">
        <div className=" w-full   ">
          {/* <div className=" text-[35px] font-bold">Tittle</div> */}

          <iframe
            className="  w-full  md:h-[90%] xl:h-full min-h-[300px]"
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className=" flex flex-col  items-center  xl:min-w-[30%] gap-3  p-4">
          {videosArr.map((src, i) => (
            <div
              key={i}
              onClick={() => setlink(videosArr[i])}
              className={`cursor-pointer text-[18px] font-bold flex gap-2 items-center ${
                videosArr[i] === link && "text-blue-400"
              }`}
            >
              <IoIosVideocam />
              <p>Video{i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
