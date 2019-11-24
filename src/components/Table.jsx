import React from "react";
import { Table } from "react-bootstrap";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
      posts: props.posts,
      albums: props.albums,
      photos: props.photos
    };
  }


  getRide = (user) => {
    if(user.ride){
      return user.ride
    }else{
      const rand = Math.round(Math.random() * (30 - 1) + 1) % 3;
      return rand === 0? "Always":
      rand === 1? "Sometimes": "Never"
    }
  }

  getDays = (user) => {
    let days = '';
    if(user.days || user.days === []){
      if(user.days.includes(1) &&
      user.days.includes(2) &&
      user.days.includes(3) &&
      user.days.includes(4) &&
      user.days.includes(5) &&
      user.days.includes(6) &&
      user.days.includes(7))
        return "Every day";
      else if(user.days.includes(1) &&
      !user.days.includes(2) &&
      !user.days.includes(3) &&
      !user.days.includes(4) &&
      !user.days.includes(5) &&
      !user.days.includes(6) &&
      user.days.includes(7))
        return "Weekends";
      else if(!user.days.includes(1) &&
        user.days.includes(2) &&
        user.days.includes(3) &&
        user.days.includes(4) &&
        user.days.includes(5) &&
        user.days.includes(6) &&
        !user.days.includes(7))
          return "Week days";
      else{
        days += user.days.includes(1) ? 'Sun, ':'';
        days += user.days.includes(2) ? 'Mon, ':'';
        days += user.days.includes(3) ? 'Tue, ':'';
        days += user.days.includes(4) ? 'Wed, ':'';
        days += user.days.includes(5) ? 'Thu, ':'';
        days += user.days.includes(6) ? 'Fri, ':'';
        days += user.days.includes(7) ? 'Sat, ':'';
        return days.replace(/, $/,'');;
      }
    }else{
      const rand = Math.round(Math.random() * (60 - 1) + 1) % 6;
      return rand === 0? "Every day":
      rand === 1? "Week days":
      rand === 2? "Mon, Wed, Fri":
      rand === 3? "Mon, Tue, Wed":
      rand === 4? "Weekends": "Fri, Sun";
    }
  }

  getNumPosts = (userId) => {
    const arrayPosts = this.state.posts.filter(e => {
      return e.userId = userId;
    })
    return arrayPosts.length;
  }

  getNumAlbums = (userId) => {
    const arrayAlbums = this.state.albums.filter(e => {
      return e.userId = userId;
    })
    return arrayAlbums.length;
  }

  getNumPhotos = (userId) => {
    const arrayPhotos = this.state.photos.filter(e => {
      return e.userId = userId;
    })
    return arrayPhotos.length;
  }

  render() {
    return (
      <section className="table-section">
        <Table id="table" striped borderless hover >
          <thead>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>City</th>
              <th>Ride in group</th>
              <th>Day of the week</th>
              <th>Posts</th>
              <th>Albums</th>
              <th>Photos</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td className="green-text">{user.email}</td>
                  <td className="green-text">{user.address.city}</td>
                  <td>{this.getRide(user)}</td>
                  <td>{this.getDays(user)}</td>
                  <td className="green-text">{this.getNumPosts(user.id)}</td>
                  <td className="green-text">{this.getNumAlbums(user.id)}</td>
                  <td>{this.getNumPhotos(user.id)}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </section>
    );
  }
}
