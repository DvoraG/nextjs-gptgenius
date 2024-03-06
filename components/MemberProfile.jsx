import styles from '@/styles/memberprofile.module.css';
import { UserButton, auth, currentUser } from '@clerk/nextjs';

const MemberProfile = async () => {
  const user = await currentUser();
  // const {userId} = auth();
  // console.log(user);

  return (
    <div className={styles.profile}>
      <UserButton afterSignOutUrl='/' />
      <p className={styles.email}>{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}

export default MemberProfile;