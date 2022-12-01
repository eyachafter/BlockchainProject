import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'
const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName: 'Eya',
        userName: 'something',
        avatar: 'https://www.shutterstock.com/fr/image-vector/man-icon-vector-1040084344',
        text:'Hello',
        isProfileImageNft: false,
        timestamp: 'date'
    },
    {
        displayName: 'Eya',
        userName: 'something',
        avatar: 'https://www.shutterstock.com/fr/image-vector/man-icon-vector-1040084344',
        text:'Hello',
        isProfileImageNft: false,
        timestamp: 'date'
    },
    {
        displayName: 'Eya',
        userName: 'something',
        avatar: 'https://www.shutterstock.com/fr/image-vector/man-icon-vector-1040084344',
        text:'Hello',
        isProfileImageNft: false,
        timestamp: 'date'
    },
    {
        displayName: 'Eya',
        userName: 'something',
        avatar: 'https://www.shutterstock.com/fr/image-vector/man-icon-vector-1040084344',
        text:'Hello',
        isProfileImageNft: false,
        timestamp: 'date'
    },
    {
        displayName: 'Eya',
        userName: '@0x856C...34fhd856',
        avatar: 'https://www.shutterstock.com/fr/image-vector/man-icon-vector-1040084344',
        text:'Hello',
        isProfileImageNft: false,
        timestamp: 'date'
    },
]
function Feed() {
    return (
        <div className={`${style.wrapper}`}>
        <div className={style.header}>
          <div className={style.headerTitle}>Home</div>
          <BsStars />
        </div>
        <TweetBox />
        {tweets.map((tweet, index) => (
            <Post 
                key={index}
                displayName={tweet.displayName}
                userName={`${tweet.userName.slice(0, 4)}...${tweet.userName
                -4
            }`}
                text={tweet.tweet}
                avatar={tweet.avatar}
                isProfileImageNft={tweet.isProfileImageNft}
                timestamp={tweet.timestamp} />
        ))}
        </div>
    )
}
export default Feed