import {Component} from 'react'
class AutoComplete extends Component{
    constructor(props){
        super()
        this.state = {
            fullListOfCountries:props.listOfCountries,
            countryToSearch:"",
            countriesToShow:[],
            
        }
    }
    handlerChange = (event) =>{
        
        this.setState({countryToSearch:event.target.value})
        setTimeout(()=> this.filterCountries() ,1) 

    }

    filterCountries = () =>{
        const {countryToSearch,fullListOfCountries} = this.state
        const filteredCountries = fullListOfCountries.filter((country)=> country.toLowerCase().includes(countryToSearch));
        this.setState({countriesToShow:filteredCountries})

    }

    handlerClick = (country) =>{
        this.setState({countryToSearch:country})
        this.setState({countriesToShow:[]})
    }
    render(){

        const {countryToSearch,countriesToShow} = this.state; 
  
        return (
        <>
        <input
            type="text"
            name="countryToSearch"
            value={countryToSearch}
            onChange={(event)=>this.handlerChange(event)}
         />
         <ul>
            {
              countriesToShow.map((country)=>{
                return(<li onClick={()=> this.handlerClick(country)}>{country}</li>)
              })
            }
         </ul>
        </>
        )
    }
}

export default AutoComplete;