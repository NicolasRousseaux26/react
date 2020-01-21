import React from 'react';

class Form extends React.Component {
  constructor (props) {
    super(props);
    this.state = {name: '', firstname: '', skill: ''};
  }
  handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    //On met à jour le state avec ce que vient de taper l'utilisateur
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    alert('Name: ' + this.state.name);
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Nom</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" />
        <label>Prenom</label>
        <textarea name="firstname" value={this.state.firstname} onChange={this.handleChange} className="form-control"></textarea>
        <label>Competences</label>
        <select name="skill" value={this.state.skill} onChange={this.handleChange} className="form-control">
          <option value="">--------</option>
          <option value="Integrateur">Integrateur</option>
          <option value="Devloppeur">Devloppeur</option>
        </select>
        <button className="btn btn-primary">Envoyer</button>
        {this.state.name.length > 0 && <h2>Bonjour, {this.state.firstname} {this.state.name}</h2>}
      </form>
    );
  }
}

export default Form;