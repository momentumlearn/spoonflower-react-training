class NotesController < ApplicationController
  def index
    notes = Note.all
    render json: {notes: notes}
  end

  def create
    note = Note.new(note_params)
    if note.save
      render status: :created, json: {note: note}
    else
      render status: :bad_request, json: {errors: note.errors}
    end
  end

  def update
    note = Note.find(params[:id])
    if note.update(note_params)
      render json: {note: note}
    else
      render status: :bad_request, json: {errors: note.errors}
    end
  end

  def destroy
    note = Note.find(params[:id])
    note.destroy
    render json: {deleted: true}
  end

  private

  def note_params
    params.require(:note).permit(:title, :text)
  end
end
