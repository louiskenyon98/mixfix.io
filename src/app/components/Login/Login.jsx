import React from 'react';
import {Fab, withStyles} from '@material-ui/core'
import img from '../../../images/spotify-icon.png'

const styles = {
  root: {
    background: '#1DB954'
  },
  image: {
    width: '25px',
    marginRight: '5px'
  }
};

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Fab
          href="/login"
          variant="extended"
          size="medium"
          className={this.props.classes.root}
        >
          <img src={img} className={this.props.classes.image} alt={'Spotify Logo'}/>
          Login with Spotify
        </Fab>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Login)