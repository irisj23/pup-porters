import React, {useState} from 'react';
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import UpdatePayment from './updatePayment.jsx';

const useStyles = makeStyles({
  hamburger: {
    alignSelf: 'flex-start',
    marginTop: '5%'
  },
  userProfile: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  sectionTitle: {
    marginTop: '7%',
    fontSize: 90
  },
  profileSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    margin: '2%',
    fontSize: 50
  },
  updateButton: {
    marginTop: '20%',
    fontSize: 30,
    height: 100,
    width: 400,
    borderRadius: 50
  }
})

function UserProfile (props) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [cardInfo, setCardInfo] = useState('');
  const [update, setUpdate] = useState(false);
  const styles = useStyles();

  const close = () => {
    setUpdate(false);
  }

   const updatePayment = (newPayment) => {
     setUpdate(false);
    const option = {
      'method': 'post',
      'data': newPayment
    }
  //  fetch('http://127.0.0.1:3000', option)
  //     .then(() => {
  //       console.log('sent')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  }

  return (
    <div className={styles.userProfile}>
      <div className={styles.hamburger}>Hamburger</div>
      <Typography variant='h4' className={styles.sectionTitle}>Personal</Typography>
      <p className={styles.profileSection}>
        <Typography variant='subitle1'>{userName}User Name</Typography>
        <Typography variant='subitle1'>{userEmail}Email</Typography>
      </p>
      <p className={styles.profileSection}>
        <Typography variant='subitle1'>Dog Size</Typography>
        <Typography variant='subitle1'>Medium</Typography>
      </p>
      <Typography variant='h4' className={styles.sectionTitle}>Billing</Typography>
      <p className={styles.profileSection}>
        <Typography variant='subitle1'>Card</Typography>
        <Typography variant='subitle1'>{cardInfo}xxxx-xxxx-xxxx-1234</Typography>
      </p>
      <Fab variant='extended' color='primary' aria-label='update payment' onClick={() => setUpdate(true)} className={styles.updateButton}>
        Update Payment
      </Fab>
      <Modal
          open={update}
        >
          <UpdatePayment close={close} update={updatePayment} userID={props.userID}/>
        </Modal>
    </div>
  )
}

export default UserProfile;