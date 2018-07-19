import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
// import Form from "../../components/Form";
import CreatePost from "./CreatePost";

class Home extends Component {
  state = {
    blogs: [
      {
        _id: 1,
        title: "This is a test",
        body: "Or is it????"
      },
      {
        _id: 2,
        title: "This is a test",
        body: "Or is it????"
      }
    ]
  };

  refreshBlogs() {
    console.log("this should go!");
    API.getArticle().then(res => {
      console.log(res.data);
      this.setState({ blogs: res.data });
    });
  }

  componentDidMount() {
    this.refreshBlogs();
  }

  checkPage() {
    const homeLocation = "/";
    const location = this.props.location.pathname;

    if (location !== homeLocation) {
      console.log(`This is your Route location: ${location}`);
    } else {
      console.log("this is the home route");
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({ [name]: value });
  };

  messagePost = event => {
    event.preventDefault();
    const { title, body } = this.state;
    console.log({ title, body });
    API.postArticle({ title, body })
      .then(res => {
        console.log(res);
        this.setState({ title: "", body: "" });
      })
      .catch(err => console.log(err));
  };

  render() {
    const loggedIn = this.props.auth.isAuthenticated();
    // const canWrite = this.props.auth.userHasScopes(["write:blog","roles: admin"]);

    return (
      <div className="container">
        {/* <div> Check console to show current location of page</div>
      
        {!loggedIn ? (
          <button onClick={this.props.auth.login}>Log In</button>
        ) : (
          <button onClick={this.props.auth.logout}>Log Off</button>
        )} */}

        {/* <Link to="/">
          <button>Home&nbsp; </button>
        </Link>

        {loggedIn && canWrite ? (
          <Link to="/createpost">
            <button>Create a Post&nbsp; </button>
          </Link>
        ) : (
          ""
        )}
        {loggedIn ? <Link to="/profile">Profile&nbsp;</Link> : ""}  */}

        <h1> Updates / Trending Now </h1>

        <div>
          {/* Map each of our posts */
          this.state.blogs.map(post => (
            <div key={post._id}>
              <h1>{post.title}</h1>
              <h3>Created at: {post.createdAt}</h3>
              <p>{post.body}</p>
            </div>
          ))}

          <CreatePost/>
          {/* <Form/> */}
        </div>
      </div>
    );
  }
}

export default Home;
