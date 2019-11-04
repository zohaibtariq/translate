import React from "react"
import LanguageContext from "./../contexts/LanguageContext"
class Field extends React.Component{
	renderLabelText = (language) => {
		return language === 'english' ? 'English Label' : 'Dutch Label'
	}
	// static contextType = LanguageContext
	render(){
		// const text = this.context.language === 'english' ? 'English Label' : 'Dutch Label'
		return (
			<div className={`ui field`}>
				<label>
					<LanguageContext.Consumer>
						{(context) => this.renderLabelText(context.language)}
					</LanguageContext.Consumer>
				</label>
				<input/>
			</div>
		)
	}
}
export default Field