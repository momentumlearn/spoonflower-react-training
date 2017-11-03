import React from 'react'
import request from 'superagent'
import update from 'immutability-helper'
import debounce from 'lodash/debounce'

import NoteList from './NoteList'
import NoteBody from './NoteBody'

class Notetaker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            notes: [],
            currentIdx: 0
        }
        this.saveNote = debounce(this.saveNote.bind(this), 300)
    }

    componentWillMount() {
        this.getNotes()
    }

    getNotes() {
        request
            .get('/notes')
            .end((err, res) => {
                this.setState({
                    loaded: true,
                    notes: res.body.notes
                })
            })
    }

    currentNote() {
        return this.state.notes[this.state.currentIdx] || {};
    }

    changeNote(index) {
        this.setState({
            currentIdx: index
        })
    }

    createNote() {
        request
            .post('/notes')
            .send({note: {title: "New note", text: ""}})
            .end((err, res) => {
                if (!err) {
                    this.setState({
                        currentIdx: this.state.notes.length,
                        notes: this.state.notes.concat([res.body.note])
                    }, () => {
                        this.titleInput.focus();
                    })
                }
            })
    }

    updateNote(field, value) {
        this.setState({
            notes: update(this.state.notes, {
                [this.state.currentIdx]: {
                    [field]: {$set: value}
                }
            })
        }, () => this.saveNote(this.currentNote()))
    }

    saveNote(note) {
        request
            .put(`/notes/${note.id}`)
            .send({note: {title: note.title, text: note.text}})
            .end((err, res) => {
                if (!err) {
                    // thumbs up
                }
            })
    }

    deleteNote() {
        let note = this.currentNote();
        request
            .delete(`/notes/${note.id}`)
            .end((err, res) => {
                if (!err) {
                    this.setState({
                        notes: this.state.notes.filter(aNote => aNote.id != note.id),
                        currentIdx: this.state.currentIdx - 1
                    })
                }
            })
    }

    render() {
        const notes = this.state.notes;
        const note = this.currentNote();
        return (
            <div className="Notetaker">
                <div className="note-wrapper">
                    <div className="note-list">
                        <NoteList notes={notes}
                            currentIdx={this.state.currentIdx}
                            onCreate={this.createNote.bind(this)} 
                            onSelect={this.changeNote.bind(this)} />
                    </div>
                    <div className="note-body">
                        <NoteBody note={note}
                            onUpdate={this.updateNote.bind(this)}
                            onDelete={this.deleteNote.bind(this)}
                            titleRef={input => this.titleInput = input} />}
                    </div>
                </div>
            </div>
        );
    }
}

export default Notetaker