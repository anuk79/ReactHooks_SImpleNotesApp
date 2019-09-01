import React, { useState, useEffect } from 'react';

import './home.css';

const Home = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [isButtonDisabled, setButtonDisable] = useState(true);

  useEffect(() => {
    setButtonDisable(!note);
  }, [note]);

  return (
    <div className="app-body">
      <div className="row">
        <div className="col-xs-12 col-md-4 add-notes">
          <h3>Add notes:</h3>
          <form>
            <div class="form-group">
              <textarea
                class="form-control"
                rows="9"
                id="notes"
                onChange={(event) => setNote(event.target.value)}
                value={note}></textarea>
              <button
                type="button"
                class="btn btn-lg btn-block app-button"
                disabled={isButtonDisabled}
                onClick={() => {
                  const draftNote = [...notes, note];
                  setNotes(draftNote);
                  setNote("");
                }
                }
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="col-xs-12 col-md-8">
          {note &&
            <>
              <h3>Draft note:</h3>
              <div className="draft-note">
                {note}
              </div>
            </>
          }

          {notes.length > 0 &&
            <>
              <h3>Saved notes:</h3>
              {notes.map(n => <div className="col-xs-3 note-item">{n}</div>)}
            </>
          }

        </div>
      </div>
    </div>
  )
};

export default Home;