import React from 'react';

import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      notes: [],
      isButtonDisabled: true
    }
  }

  saveNote = () => {
    this.setState(prevState => ({
      notes: [...prevState.notes, prevState.note]
    })
    );
  }

  setDraftNote = (note) => {
    this.setState({ note });
  }

  render() {
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
                  onChange={(event) => this.setDraftNote(event.target.value)}
                  value={this.state.note}></textarea>
                <button
                  type="button"
                  class="btn btn-lg btn-block app-button"
                  disabled={!this.state.note}
                  onClick={() => {
                    this.saveNote();
                    this.setDraftNote("");
                  }
                  }
                >
                  Save
              </button>
              </div>
            </form>
          </div>
          <div className="col-xs-12 col-md-8">
            {this.state.note &&
              <>
                <h3>Draft note:</h3>
                <div className="draft-note">
                  {this.state.note}
                </div>
              </>
            }

            {this.state.notes.length > 0 &&
              <>
                <h3>Saved notes:</h3>
                {this.state.notes.map(n => <div className="col-xs-3 note-item">{n}</div>)}
              </>
            }

          </div>
        </div>
      </div>
    )
  }

}

export default Home;