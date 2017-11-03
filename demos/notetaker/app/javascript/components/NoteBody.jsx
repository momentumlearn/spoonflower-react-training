import React from "react"

class NoteBody extends React.Component {
    handleTitleChange(event) {
        this.props.onUpdate('title', event.target.value)
    }

    handleTextChange(event) {
        this.props.onUpdate('text', event.target.value)
    }

    render() {
        return (
            <div className="NoteBody">
                <input type="text" className="NoteBody-title" 
                    ref={this.props.titleRef}
                    value={this.props.note.title || ""} 
                    onChange={this.handleTitleChange.bind(this)} />
                <textarea
                    className="NoteBody-text"
                    value={this.props.note.text || ""}
                    onChange={this.handleTextChange.bind(this)}/>
                <button
                    style={{position: "absolute", top: "3rem", right: "1rem"}}
                    onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default NoteBody