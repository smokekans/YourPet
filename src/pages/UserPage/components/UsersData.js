import{Component} from 'react';
class User extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        user: []
      };
    }
  
    componentDidMount() {
      fetch("https://yourpet-backend.onrender.com/api/users/current")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              user: result.user
            });
          },
          
        
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
        console.log(this.state)
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
  export default User