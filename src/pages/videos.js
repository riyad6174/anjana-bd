import YouTubeEmbed from '@/components/YoutubeVideoCard';
import React from 'react';

function Page() {
  const videoID = [
    { id: 1, videoID: '3F6mq20QOcE?si=VyNKEokgLKV9M3g8' },
    { id: 2, videoID: '3F6mq20QOcE?si=VyNKEokgLKV9M3g8' },
    { id: 3, videoID: '3F6mq20QOcE?si=VyNKEokgLKV9M3g8' },
    { id: 4, videoID: '3F6mq20QOcE?si=VyNKEokgLKV9M3g8' },
    { id: 5, videoID: '3F6mq20QOcE?si=VyNKEokgLKV9M3g8' },
    { id: 6, videoID: '3F6mq20QOcE?si=VyNKEokgLKV9M3g8' },
  ];
  return (
    <div>
      <div className='py-2 md:py-10 text-center uppercase text-green-600 text-xl '>
        Videos
      </div>
      <div class='flex flex-wrap justify-center mt-10'>
        {videoID?.map((v) => {
          return (
            <div key={v.id} class='p-4 max-w-sm'>
              <YouTubeEmbed width='400' height='200' videoId={v?.videoID} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
