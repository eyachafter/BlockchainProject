
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
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
const ProfileTweets = () => {
    return (
    <div className={style.wrapper}>
        {tweets?.map((tweet,index) => (
            <Post
                key={index}
                displayName="Eya Chafter"
                userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(-4)}`}
            
            />
        ))}
    </div>
    )
}

export default ProfileTweets