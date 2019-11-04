import React from "react"
import LanguageContext from "./../contexts/LanguageContext"
import ColorContext from "./../contexts/ColorContext"
class Button extends React.Component{
	renderSubmitText = (language) => {
		return language === 'english' ? 'English Submit' : 'Dutch Submit'
	}
	renderButton = (color) => {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{(LanguageContext) => this.renderSubmitText(LanguageContext.language)}
				</LanguageContext.Consumer>
			</button>
		);
	}
	// static contextType = LanguageContext
	render(){
		// const text = this.context.language === 'english' ? 'English Submit' : 'Dutch Submit'
		return (
			<ColorContext.Consumer>
				{(ColorContext) => this.renderButton(ColorContext.color)}
			</ColorContext.Consumer>
		)
	}
}
export default Button