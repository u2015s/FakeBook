import React from 'react'

class Navbar extends React.Component{
    state = { term: ''};

    onInputChange(event){
        this.setState({term: event.target.value})

    }

    render(){
                return(
                    
                    <div>
                        <div className="ui menu">
                        <a className="item" href="#">Browse</a>
                        
                        <div className="right menu">
                        <div className="item">
                            <div className="ui transparent icon input">
    {/* should we use form tag and if form tag will be used then we will prevent it from refreshing the page(See video 7.10)*/}
                            <input 
                                type="text" 
                                placeholder="Search..."
                                value={this.state.term} 
                                onChange={this.onInputChange}
                                 />
                            <i className="search link icon" />
                            </div>
                        </div>
                        </div>
                        </div>
                        

                    </div>
                    )
            }
}

export default Navbar;