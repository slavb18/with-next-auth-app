const Photos = require('googlephotos');
import { getSession, useSession } from 'next-auth/client';

const Profile = ({photos}) => {
  const [session, loading] = useSession();

  if (loading) return <div>loading...</div>;
  if (!session) return <div>no session</div>;
  //console.log(session);
  return (
    <div>
      {session && (
        <>
          <img src={session.user.image} className="avatar" />
          <h1>{session.user.name}</h1>
        </>
      )}

      <style jsx>{`
        .avatar {
          width: 220px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};
export default Profile;

export async function getServerSideProps(context) {
    //console.log(context)
    const session = await getSession(context)
    console.log(session);
    
    // const photos = new Photos(session.accessToken);
    const photos = new Photos(process.env.TMP_ACCESS_TOKEN);

    // const response = await photos.albums.list(50);
    // console.log('response', response)

    return {
      props: {}, // will be passed to the page component as props
    }
  }
  