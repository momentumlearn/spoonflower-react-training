import React from 'react'
import truncate from 'lodash/truncate'
import classnames from 'classnames'

class NoteList extends React.Component {
    renderNote(note, idx) {
        return (
            <div key={note.id} 
                className={
                    classnames({
                        "NoteList-note": true,
                        "NoteList-note-selected": (this.props.currentIdx == idx) 
                    })
                }
                data-idx={idx} 
                onClick={this.onSelect.bind(this)}>
                <div className="NoteList-title">{note.title}</div>
                <div className="NoteList-body">{truncate(note.text)}</div>
            </div>
        )
    }

    onSelect(event) {
        let target = event.currentTarget
        const idx = parseInt(target.getAttribute('data-idx'))
        this.props.onSelect(idx)
    }
    
    render() {
        return (
            <div className="NoteList">
                <button onClick={this.props.onCreate} style={{width: '100%'}}>Create new note</button>
                {this
                    .props
                    .notes
                    .map((note, idx) => this.renderNote(note, idx))}
            </div>
        )
    }
}

export default NoteList